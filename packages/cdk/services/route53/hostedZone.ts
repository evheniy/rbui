import { Stack, aws_route53 as route53 } from 'aws-cdk-lib';

import { domain as domainName } from '@rbui/cdk/services/route53/domain';

/**
 * Hosted zone
 * @param {cdk.Stack} stack Stack
 * @returns {cdk.aws_route53.IHostedZone} Hosted zone
 */
export const getHostedZone = (stack: Stack) => (
  route53.HostedZone.fromLookup(stack, 'HostedZone', { domainName })
);
