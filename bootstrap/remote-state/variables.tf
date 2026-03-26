variable "aws_region" {
  description = "AWS region for the Terraform state bucket and lock table."
  type        = string
  default     = "ap-southeast-4"
}

variable "state_bucket_name" {
  description = "S3 bucket name used to store Terraform remote state."
  type        = string
  default     = "rayanhameed-terraform-state"
}

variable "lock_table_name" {
  description = "DynamoDB table name used for Terraform state locking."
  type        = string
  default     = "terraform-state-locks"
}
