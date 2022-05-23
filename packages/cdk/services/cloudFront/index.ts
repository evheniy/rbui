import {
  Stack,
  aws_cloudfront as cf,
  aws_certificatemanager as cm,
  aws_cloudfront_origins as origins,
  aws_s3 as s3,
} from 'aws-cdk-lib';

import {
  domain,
  stagingDomain,
  storybookDomain,
  storybookStagingDomain,
  storybookTestDomain,
  testDomain,
  wwwDomain,
} from '@rbui/cdk/services/route53/domain';

/**
 * Get CloudFront
 * @param {cdk.Stack} stack Stack
 * @param {string} name Name
 * @param {string} domainName Domain Name
 * @param {cdk.aws_certificatemanager.Certificate} certificate Certificate
 * @param {cdk.aws_s3.Bucket} bucket Bucket
 * @returns {cdk.aws_cloudfront.Distribution} Distribution
 */
export const getCloudFront = (
  stack: Stack,
  name: string,
  domainName: string,
  certificate: cm.ICertificate,
  bucket: s3.Bucket,
) => new cf.Distribution(stack, name, {
  certificate,
  defaultBehavior: {
    origin: new origins.S3Origin(bucket),
    viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
  },
  domainNames: [domainName],
  defaultRootObject: 'index.html',
});

/**
 * Get WwwDomain CloudFront
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_certificatemanager.ICertificate} certificate Certificate
 * @param {cdk.aws_s3.Bucket} bucket Bucket
 * @returns {cdk.aws_cloudfront.Distribution} Distribution
 */
export const getWwwDomainCloudFront = (
  stack: Stack,
  certificate: cm.ICertificate,
  bucket: s3.Bucket,
) => getCloudFront(
  stack,
  'WwwCloudFront',
  wwwDomain,
  certificate,
  bucket,
);

/**
 * Get Domain CloudFront
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_certificatemanager.ICertificate} certificate Certificate
 * @param {cdk.aws_s3.Bucket} bucket Bucket
 * @returns {cdk.aws_cloudfront.Distribution} Distribution
 */
export const getDomainCloudFront = (
  stack: Stack,
  certificate: cm.ICertificate,
  bucket: s3.Bucket,
) => getCloudFront(
  stack,
  'DomainCloudFront',
  domain,
  certificate,
  bucket,
);

/**
 * Get StorybookDomain CloudFront
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_certificatemanager.ICertificate} certificate Certificate
 * @param {cdk.aws_s3.Bucket} bucket Bucket
 * @returns {cdk.aws_cloudfront.Distribution} Distribution
 */
export const getStorybookDomainCloudFront = (
  stack: Stack,
  certificate: cm.ICertificate,
  bucket: s3.Bucket,
) => getCloudFront(
  stack,
  'StorybookDomainCloudFront',
  storybookDomain,
  certificate,
  bucket,
);

/**
 * Get StagingDomain CloudFront
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_certificatemanager.ICertificate} certificate Certificate
 * @param {cdk.aws_s3.Bucket} bucket Bucket
 * @returns {cdk.aws_cloudfront.Distribution} Distribution
 */
export const getStagingDomainCloudFront = (
  stack: Stack,
  certificate: cm.ICertificate,
  bucket: s3.Bucket,
) => getCloudFront(
  stack,
  'StagingDomainCloudFront',
  stagingDomain,
  certificate,
  bucket,
);

/**
 * Get StorybookStagingDomain CloudFront
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_certificatemanager.ICertificate} certificate Certificate
 * @param {cdk.aws_s3.Bucket} bucket Bucket
 * @returns {cdk.aws_cloudfront.Distribution} Distribution
 */
export const getStorybookStagingDomainCloudFront = (
  stack: Stack,
  certificate: cm.ICertificate,
  bucket: s3.Bucket,
) => getCloudFront(
  stack,
  'StorybookStagingDomainCloudFront',
  storybookStagingDomain,
  certificate,
  bucket,
);

/**
 * Get TestDomain CloudFront
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_certificatemanager.ICertificate} certificate Certificate
 * @param {cdk.aws_s3.Bucket} bucket Bucket
 * @returns {cdk.aws_cloudfront.Distribution} Distribution
 */
export const getTestDomainCloudFront = (
  stack: Stack,
  certificate: cm.ICertificate,
  bucket: s3.Bucket,
) => getCloudFront(
  stack,
  'TestDomainCloudFront',
  testDomain,
  certificate,
  bucket,
);

/**
 * Get StorybookTestDomain CloudFront
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_certificatemanager.ICertificate} certificate Certificate
 * @param {cdk.aws_s3.Bucket} bucket Bucket
 * @returns {cdk.aws_cloudfront.Distribution} Distribution
 */
export const getStorybookTestDomainCloudFront = (
  stack: Stack,
  certificate: cm.ICertificate,
  bucket: s3.Bucket,
) => getCloudFront(
  stack,
  'StorybookTestDomainCloudFront',
  storybookTestDomain,
  certificate,
  bucket,
);
