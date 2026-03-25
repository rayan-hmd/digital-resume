data "archive_file" "visitor_counter_lambda" {
  type        = "zip"
  source_file = "${path.module}/../backend/lambda_function.py"
  output_path = "/tmp/visitor-counter-lambda.zip"
}

resource "aws_dynamodb_table" "visitor_counter" {
  name         = var.table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }
}

data "aws_iam_role" "visitor_counter_lambda" {
  name = var.lambda_role_name
}

resource "aws_cloudwatch_log_group" "visitor_counter_lambda" {
  name              = "/aws/lambda/${var.lambda_function_name}"
  retention_in_days = var.lambda_log_retention_days
}

resource "aws_cloudwatch_log_group" "visitor_counter_api" {
  name              = "/aws/apigateway/visitor-counter-api"
  retention_in_days = var.api_log_retention_days
}

resource "aws_lambda_function" "visitor_counter" {
  function_name = var.lambda_function_name
  role          = data.aws_iam_role.visitor_counter_lambda.arn
  handler       = "lambda_function.lambda_handler"
  runtime       = var.lambda_runtime
  filename      = data.archive_file.visitor_counter_lambda.output_path

  source_code_hash = data.archive_file.visitor_counter_lambda.output_base64sha256
  memory_size      = var.lambda_memory_size
  timeout          = var.lambda_timeout

  lifecycle {
    ignore_changes = [
      environment,
      filename,
      role,
      runtime,
      source_code_hash,
    ]
  }

  depends_on = [
    aws_cloudwatch_log_group.visitor_counter_lambda,
  ]
}
resource "aws_apigatewayv2_api" "visitor_counter" {
  name          = var.api_name
  protocol_type = "HTTP"
  description   = var.api_description

  cors_configuration {
    allow_methods = ["GET", "POST"]
    allow_origins = ["*"]
    max_age       = 0
  }
}

resource "aws_apigatewayv2_integration" "visitor_counter" {
  api_id                 = aws_apigatewayv2_api.visitor_counter.id
  integration_type       = "AWS_PROXY"
  integration_method     = "POST"
  integration_uri        = aws_lambda_function.visitor_counter.arn
  payload_format_version = "2.0"
  timeout_milliseconds   = 30000
}

resource "aws_apigatewayv2_route" "visitor_counter" {
  api_id    = aws_apigatewayv2_api.visitor_counter.id
  route_key = "ANY /incrementVisitorCount"
  target    = "integrations/${aws_apigatewayv2_integration.visitor_counter.id}"
}

resource "aws_apigatewayv2_stage" "visitor_counter" {
  api_id      = aws_apigatewayv2_api.visitor_counter.id
  name        = var.api_stage_name
  auto_deploy = true
  description = var.api_stage_description

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.visitor_counter_api.arn
    format = jsonencode({
      requestId      = "$context.requestId"
      ip             = "$context.identity.sourceIp"
      requestTime    = "$context.requestTime"
      httpMethod     = "$context.httpMethod"
      routeKey       = "$context.routeKey"
      status         = "$context.status"
      protocol       = "$context.protocol"
      responseLength = "$context.responseLength"
    })
  }

  default_route_settings {
    detailed_metrics_enabled = false
  }
}

resource "aws_lambda_permission" "allow_api_gateway_invoke" {
  statement_id  = var.lambda_permission_statement_id
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.visitor_counter.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.visitor_counter.execution_arn}/*/*/incrementVisitorCount"
}
