import { RemovalPolicy, Stack, aws_s3 as s3 } from 'aws-cdk-lib';

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
 * Get Bucket
 * @param {cdk.Stack} stack Stack
 * @param {string} name Name
 * @param {string} bucketName Bucket Name
 * @param {cdk.aws_s3.BucketProps} props Bucket Props
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getBucket = (
  stack: Stack,
  name: string,
  bucketName: string,
  props: s3.BucketProps = {},
) => (
  new s3.Bucket(stack, name, {
    bucketName,
    removalPolicy: RemovalPolicy.RETAIN,
    versioned: false,
    ...props,
  })
);

/**
 * WwwDomain Bucket (Redirect Bucket)
 * Bucket: www.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getWwwDomainBucket = (stack: Stack) => getBucket(
  stack,
  'WwwDomainBucket',
  wwwDomain,
  {
    websiteRedirect: {
      hostName: domain,
      protocol: s3.RedirectProtocol.HTTPS,
    },
  },
);

/**
 * Domain Bucket (Homepage)
 * Bucket: rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getDomainBucket = (stack: Stack) => getBucket(
  stack,
  'DomainBucket',
  domain,
);

/**
 * Storybook Domain Bucket (Storybook)
 * Bucket: sb.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getStorybookDomainBucket = (stack: Stack) => getBucket(
  stack,
  'StorybookDomainBucket',
  storybookDomain,
);

/**
 * Staging Domain Bucket (Staging Homepage)
 * Bucket: staging.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getStagingDomainBucket = (stack: Stack) => getBucket(
  stack,
  'StagingBucket',
  stagingDomain,
);

/**
 * Storybook Staging Domain Bucket (Staging Storybook)
 * Bucket: sb.staging.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getStorybookStagingDomainBucket = (stack: Stack) => getBucket(
  stack,
  'StorybookStagingBucket',
  storybookStagingDomain,
);

/**
 * Test Domain Bucket (Test Homepage)
 * Bucket: test.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getTestDomainBucket = (stack: Stack) => getBucket(
  stack,
  'TestBucket',
  testDomain,
);

/**
 * Storybook Test Domain Bucket (Test Storybook)
 * Bucket: sb.test.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getStorybookTestDomainBucket = (stack: Stack) => getBucket(
  stack,
  'StorybookTestBucket',
  storybookTestDomain,
);
