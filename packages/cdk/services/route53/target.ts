import {
  aws_cloudfront as cf,
  aws_route53 as route53,
  aws_route53_targets as targets,
} from 'aws-cdk-lib';

/**
 * Get RecordTarget
 * @param {cdk.aws_cloudfront.Distribution} cloudFront
 * @returns {cdk.aws_route53.RecordTarget} RecordTarget
 */
export const getRecordTarget = (cloudFront: cf.Distribution) => route53.RecordTarget.fromAlias(
  new targets.CloudFrontTarget(cloudFront),
);
