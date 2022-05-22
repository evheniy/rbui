import {
  Stack,
  aws_cloudfront as cf,
  aws_route53 as route53,
} from 'aws-cdk-lib';

import { getRecordTarget } from '@rbui/cdk/services/route53/target';

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
 * Get A Record
 * @param {cdk.Stack} stack Stack
 * @param {string} name Name
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {string} recordName RecordName
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getARecord = (
  stack: Stack,
  name: string,
  zone: route53.IHostedZone,
  recordName: string,
  cloudFront: cf.Distribution,
) => new route53.ARecord(stack, name, { zone, recordName, target: getRecordTarget(cloudFront) });

/**
 * Get AAAA Record
 * @param {cdk.Stack} stack Stack
 * @param {string} name Name
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {string} recordName RecordName
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getAaaaRecord = (
  stack: Stack,
  name: string,
  zone: route53.IHostedZone,
  recordName: string,
  cloudFront: cf.Distribution,
) => new route53.AaaaRecord(stack, name, { zone, recordName, target: getRecordTarget(cloudFront) });

/**
 * Get wwwDomain A Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getWwwDomainARecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getARecord(
  stack,
  'WwwDomainARecord',
  zone,
  wwwDomain,
  cloudFront,
);

/**
 * Get WwwDomain AAAA Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getWwwDomainAaaaRecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getAaaaRecord(
  stack,
  'WwwDomainAaaaRecord',
  zone,
  wwwDomain,
  cloudFront,
);

/**
 * Get Domain A Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getDomainARecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getARecord(
  stack,
  'DomainARecord',
  zone,
  domain,
  cloudFront,
);

/**
 * Get Domain AAAA Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getDomainAaaaRecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getAaaaRecord(
  stack,
  'DomainAaaaRecord',
  zone,
  domain,
  cloudFront,
);

/**
 * Get StorybookDomain A Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getStorybookDomainARecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getARecord(
  stack,
  'StorybookDomainARecord',
  zone,
  storybookDomain,
  cloudFront,
);

/**
 * Get StorybookDomain AAAA Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getStorybookDomainAaaaRecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getAaaaRecord(
  stack,
  'StorybookDomainAaaaRecord',
  zone,
  storybookDomain,
  cloudFront,
);

/**
 * Get StagingDomain A Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getStagingDomainARecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getARecord(
  stack,
  'StagingDomainARecord',
  zone,
  stagingDomain,
  cloudFront,
);

/**
 * Get StagingDomain AAAA Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getStagingDomainAaaaRecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getAaaaRecord(
  stack,
  'StagingDomainAaaaRecord',
  zone,
  stagingDomain,
  cloudFront,
);

/**
 * Get StorybookStagingDomain A Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getStorybookStagingDomainARecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getARecord(
  stack,
  'StorybookStagingDomainARecord',
  zone,
  storybookStagingDomain,
  cloudFront,
);

/**
 * Get StorybookStagingDomain AAAA Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getStorybookStagingDomainAaaaRecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getAaaaRecord(
  stack,
  'StorybookStagingDomainAaaaRecord',
  zone,
  storybookStagingDomain,
  cloudFront,
);

/**
 * Get TestDomain A Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getTestDomainARecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getARecord(
  stack,
  'TestDomainARecord',
  zone,
  testDomain,
  cloudFront,
);

/**
 * Get TestDomain AAAA Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getTestDomainAaaaRecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getAaaaRecord(
  stack,
  'TestDomainAaaaRecord',
  zone,
  testDomain,
  cloudFront,
);

/**
 * Get StorybookTestDomain A Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getStorybookTestDomainARecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getARecord(
  stack,
  'StorybookTestDomainARecord',
  zone,
  storybookTestDomain,
  cloudFront,
);

/**
 * Get StorybookTestDomain AAAA Record
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} zone HostedZone
 * @param {cdk.aws_cloudfront.Distribution} cloudFront CloudFront Distribution
 * @returns {cdk.aws_route53.ARecord} ARecord
 */
export const getStorybookTestDomainAaaaRecord = (
  stack: Stack,
  zone: route53.IHostedZone,
  cloudFront: cf.Distribution,
) => getAaaaRecord(
  stack,
  'StorybookTestDomainAaaaRecord',
  zone,
  storybookTestDomain,
  cloudFront,
);
