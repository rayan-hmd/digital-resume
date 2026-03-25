output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.resume_cdn.domain_name
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.resume_cdn.id
}

output "bucket_name" {
  value = aws_s3_bucket.resume_site.id
}

output "certificate_arn" {
  value = var.acm_certificate_arn
}

output "visitor_counter_table_name" {
  value = aws_dynamodb_table.visitor_counter.name
}

output "visitor_counter_lambda_name" {
  value = aws_lambda_function.visitor_counter.function_name
}

output "visitor_counter_api_url" {
  value = "https://${aws_apigatewayv2_api.visitor_counter.id}.execute-api.${var.aws_region}.amazonaws.com/${aws_apigatewayv2_stage.visitor_counter.name}/incrementVisitorCount"
}
