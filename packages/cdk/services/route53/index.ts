import { Stack, aws_route53 as route53 } from 'aws-cdk-lib';

import {
  SB,
  SB_STAGING,
  SB_TEST,
  STAGING,
  TEST,
  WWW,
  getDomain,
} from '@rbui/core/domains';

/**
 * Domain: rbui.tools
 */
export const domain = getDomain();

/**
 * Domain: www.rbui.tools
 */
export const wwwDomain = getDomain(WWW);

/**
 * Domain: sb.rbui.tools
 */
export const sbDomain = getDomain(SB);

/**
 * Domain: staging.rbui.tools
 */
export const stagingDomain = getDomain(STAGING);

/**
 * Domain: sb.staging.rbui.tools
 */
export const sbStagingDomain = getDomain(SB_STAGING);

/**
 * Domain: test.rbui.tools
 */
export const testDomain = getDomain(TEST);

/**
 * Domain: sb.test.rbui.tools
 */
export const sbTestDomain = getDomain(SB_TEST);

/**
 * Hosted zone
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_route53.IHostedZone} Hosted zone
 */
export const getHostedZone = (stack: Stack) => (
  route53.HostedZone.fromLookup(stack, 'HostedZone', { domainName: domain })
);
