import { RemovalPolicy, Stack, aws_s3 as s3 } from 'aws-cdk-lib';

import {
  domain,
  sbDomain,
  sbStagingDomain,
  sbTestDomain,
  stagingDomain,
  testDomain,
  wwwDomain,
} from '@rbui/cdk/route53';

/**
 * WWW Bucket (Redirect Bucket)
 * Bucket: www.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getWwwBucket = (stack: Stack) => (
  new s3.Bucket(stack, 'WwwBucket', {
    bucketName: wwwDomain,
    removalPolicy: RemovalPolicy.RETAIN,
    versioned: false,
    websiteRedirect: {
      hostName: domain,
      protocol: s3.RedirectProtocol.HTTPS,
    },
  })
);

/**
 * Domain Bucket (Homepage)
 * Bucket: rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getDomainBucket = (stack: Stack) => (
  new s3.Bucket(stack, 'DomainBucket', {
    bucketName: domain,
    removalPolicy: RemovalPolicy.RETAIN,
    versioned: true,
  })
);

/**
 * Storybook Domain Bucket (Storybook)
 * Bucket: sb.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getStorybookDomainBucket = (stack: Stack) => (
  new s3.Bucket(stack, 'StorybookDomainBucket', {
    bucketName: sbDomain,
    removalPolicy: RemovalPolicy.RETAIN,
    versioned: true,
  })
);

/**
 * Staging Bucket (Staging Homepage)
 * Bucket: staging.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getStagingBucket = (stack: Stack) => (
  new s3.Bucket(stack, 'StagingBucket', {
    bucketName: stagingDomain,
    removalPolicy: RemovalPolicy.RETAIN,
    versioned: true,
  })
);

/**
 * Storybook Staging Bucket (Staging Storybook)
 * Bucket: sb.staging.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getStorybookStagingBucket = (stack: Stack) => (
  new s3.Bucket(stack, 'StorybookStagingBucket', {
    bucketName: sbStagingDomain,
    removalPolicy: RemovalPolicy.RETAIN,
    versioned: true,
  })
);

/**
 * Test Bucket (Test Homepage)
 * Bucket: test.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getTestBucket = (stack: Stack) => (
  new s3.Bucket(stack, 'TestBucket', {
    bucketName: testDomain,
    removalPolicy: RemovalPolicy.RETAIN,
    versioned: true,
  })
);

/**
 * Storybook Test Bucket (Test Storybook)
 * Bucket: sb.test.rbui.tools
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_s3.Bucket} Bucket
 */
export const getStorybookTestBucket = (stack: Stack) => (
  new s3.Bucket(stack, 'StorybookTestBucket', {
    bucketName: sbTestDomain,
    removalPolicy: RemovalPolicy.RETAIN,
    versioned: true,
  })
);
