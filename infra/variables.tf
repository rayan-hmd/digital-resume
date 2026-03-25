variable "aws_region" {
  description = "Primary AWS region for the application resources."
  type        = string
  default     = "ap-southeast-4"
}

variable "domain_name" {
  description = "Apex domain for the resume website."
  type        = string
}

variable "acm_certificate_arn" {
  description = "Existing ACM certificate ARN in us-east-1 for the CloudFront aliases."
  type        = string
}

variable "bucket_name" {
  description = "S3 bucket name for the static site."
  type        = string
}

variable "table_name" {
  description = "DynamoDB table name for the visitor counter."
  type        = string
  default     = "visitorCount"
}

variable "counter_item_id" {
  description = "Primary key value for the single visitor counter row."
  type        = string
  default     = "1"
}

variable "lambda_function_name" {
  description = "Lambda function name for the visitor counter API."
  type        = string
  default     = "incrementVisitorCount"
}

variable "lambda_role_name" {
  description = "Existing or desired IAM role name for the visitor counter Lambda."
  type        = string
  default     = "incrementVisitorCount-role-sjgaryaz"
}

variable "lambda_runtime" {
  description = "Lambda runtime."
  type        = string
  default     = "python3.13"
}

variable "lambda_memory_size" {
  description = "Lambda memory size in MB."
  type        = number
  default     = 128
}

variable "lambda_timeout" {
  description = "Lambda timeout in seconds."
  type        = number
  default     = 3
}

variable "lambda_log_retention_days" {
  description = "Retention for the Lambda CloudWatch log group."
  type        = number
  default     = 14
}

variable "api_stage_name" {
  description = "API Gateway stage name."
  type        = string
  default     = "default"
}

variable "api_name" {
  description = "API Gateway HTTP API name."
  type        = string
  default     = "incrementVisitorCount-API"
}

variable "api_description" {
  description = "HTTP API description."
  type        = string
  default     = "Created by AWS Lambda"
}

variable "api_stage_description" {
  description = "HTTP API stage description."
  type        = string
  default     = "Created by AWS Lambda"
}

variable "api_log_retention_days" {
  description = "Retention for the API Gateway CloudWatch log group."
  type        = number
  default     = 14
}

variable "lambda_permission_statement_id" {
  description = "Statement ID for the API Gateway Lambda invoke permission."
  type        = string
  default     = "lambda-381d182e-2624-44be-8a65-6d711751abf5"
}

variable "cloudfront_web_acl_id" {
  description = "Existing CloudFront WAF ACL ARN to keep attached."
  type        = string
  default     = "arn:aws:wafv2:us-east-1:273729717941:global/webacl/CreatedByCloudFront-30d5606e/cd1ddb20-efed-4042-8598-c8b5c5aee8da"
}
