resource "aws_cloudfront_origin_access_control" "resume_oac" {
  name                              = "${var.bucket_name}.s3.${var.aws_region}.amazonaws.com"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "resume_cdn" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = local.site_aliases
  is_ipv6_enabled     = true
  price_class         = "PriceClass_All"
  web_acl_id          = var.cloudfront_web_acl_id

  origin {
    domain_name = aws_s3_bucket.resume_site.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.resume_site.bucket_regional_domain_name

    origin_access_control_id = aws_cloudfront_origin_access_control.resume_oac.id
  }

  default_cache_behavior {
    target_origin_id = aws_s3_bucket.resume_site.bucket_regional_domain_name

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Route unknown paths back to the SPA entry point so React Router can
  # render client-side routes such as /notes on refresh or direct visit.
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  tags = {
    Name = "resume"
  }
}
