terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 5.0"
        }
    }
    required_version = ">= 1.5.0"
}

provider "aws" {
    region = "ap-southeast-4"
}

resource "aws_s3_bucket" "website" {
    bucket = "rayanhameed.com"
    aws_s3_bucket_acl = "public-read"


    tags = {
        Name = "rayanhameed.com"
    }
}