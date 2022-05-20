import {
  Stack,
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
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployBucket = (
  stack: Stack,
  name: string,
  destinationBucket: s3.Bucket,
  path: string,
) => (
  new deployment.BucketDeployment(stack, name, {
    sources: [deployment.Source.asset(getFullPath(path))],
    destinationBucket,
  })
);

/**
 * Deploy Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployDomainBucket = (stack: Stack, destinationBucket: s3.Bucket) => deployBucket(
  stack,
  'DeployDomainBucket',
  destinationBucket,
  'build',
);

/**
 * Deploy Storybook Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployStorybookDomainBucket = (stack: Stack, destinationBucket: s3.Bucket) => deployBucket(
  stack,
  'DeployStorybookDomainBucket',
  destinationBucket,
  'storybook',
);

/**
 * Deploy Staging Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployStagingDomainBucket = (stack: Stack, destinationBucket: s3.Bucket) => deployBucket(
  stack,
  'DeployStagingDomainBucket',
  destinationBucket,
  'build',
);

/**
 * Deploy Storybook Staging Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployStorybookStagingDomainBucket = (stack: Stack, destinationBucket: s3.Bucket) => deployBucket(
  stack,
  'DeployStorybookStagingDomainBucket',
  destinationBucket,
  'storybook',
);

/**
 * Deploy Test Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployTestDomainBucket = (stack: Stack, destinationBucket: s3.Bucket) => deployBucket(
  stack,
  'DeployTestDomainBucket',
  destinationBucket,
  'build',
);

/**
 * Deploy Storybook Test Domain Bucket
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_s3.Bucket} destinationBucket Destination Bucket
 * @returns {cdk.aws_deployment.BucketDeployment} Bucket Deployment
 */
export const deployStorybookTestDomainBucket = (stack: Stack, destinationBucket: s3.Bucket) => deployBucket(
  stack,
  'DeployStorybookTestDomainBucket',
  destinationBucket,
  'storybook',
);
