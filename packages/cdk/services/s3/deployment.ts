import {
  Stack,
  aws_cloudfront as cf,
  aws_s3_deployment as deployment,
  aws_s3 as s3,
} from 'aws-cdk-lib';

import { getFullPath } from '@rbui/core/path';

/**
 * Deploy Bucket
 * @param {cdk.Stack} stack Stack
 * @param {string} name Name
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @param {string} path Source Path
 * @param {cdk.aws_cloudfront.IDistribution} distribution CloudFront Distribution
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployBucket = (
  stack: Stack,
  name: string,
  destinationBucket: s3.Bucket,
  path: string,
  distribution: cf.IDistribution,
) => (
  new deployment.BucketDeployment(stack, name, {
    sources: [deployment.Source.asset(getFullPath(path))],
    destinationBucket,
    prune: false,
    distribution,
    distributionPaths: ['/*.html'],
  })
);

/**
 * Deploy Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @param {cdk.aws_cloudfront.IDistribution} distribution CloudFront Distribution
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployDomainBucket = (
  stack: Stack,
  destinationBucket: s3.Bucket,
  distribution: cf.IDistribution,
) => deployBucket(
  stack,
  'DeployDomainBucket',
  destinationBucket,
  'build',
  distribution,
);

/**
 * Deploy Storybook Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @param {cdk.aws_cloudfront.IDistribution} distribution CloudFront Distribution
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployStorybookDomainBucket = (
  stack: Stack,
  destinationBucket: s3.Bucket,
  distribution: cf.IDistribution,
) => deployBucket(
  stack,
  'DeployStorybookDomainBucket',
  destinationBucket,
  'storybook',
  distribution,
);

/**
 * Deploy Staging Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @param {cdk.aws_cloudfront.IDistribution} distribution CloudFront Distribution
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployStagingDomainBucket = (
  stack: Stack,
  destinationBucket: s3.Bucket,
  distribution: cf.IDistribution,
) => deployBucket(
  stack,
  'DeployStagingDomainBucket',
  destinationBucket,
  'build',
  distribution,
);

/**
 * Deploy Storybook Staging Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @param {cdk.aws_cloudfront.IDistribution} distribution CloudFront Distribution
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployStorybookStagingDomainBucket = (
  stack: Stack,
  destinationBucket: s3.Bucket,
  distribution: cf.IDistribution,
) => deployBucket(
  stack,
  'DeployStorybookStagingDomainBucket',
  destinationBucket,
  'storybook',
  distribution,
);

/**
 * Deploy Test Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @param {cdk.aws_cloudfront.IDistribution} distribution CloudFront Distribution
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployTestDomainBucket = (
  stack: Stack,
  destinationBucket: s3.Bucket,
  distribution: cf.IDistribution,
) => deployBucket(
  stack,
  'DeployTestDomainBucket',
  destinationBucket,
  'build',
  distribution,
);

/**
 * Deploy Storybook Test Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @param {cdk.aws_cloudfront.IDistribution} distribution CloudFront Distribution
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployStorybookTestDomainBucket = (
  stack: Stack,
  destinationBucket: s3.Bucket,
  distribution: cf.IDistribution,
) => deployBucket(
  stack,
  'DeployStorybookTestDomainBucket',
  destinationBucket,
  'storybook',
  distribution,
);
