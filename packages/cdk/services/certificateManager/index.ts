import {
  Fn,
  Stack,
  aws_certificatemanager as certificateManager,
  aws_route53 as route53,
} from 'aws-cdk-lib';

import {
  DEV,
  DEVELOP,
  PREPROD,
  QA,
  STAGING,
  TEST,
  TESTING,
  UAT,
  getDomain,
} from '@rbui/core/domains';

import { domain } from '@rbui/cdk/services/route53/domain';

/**
 * SSL/TLS certificate
 * @param {cdk.Stack} stack Stack
 * @param {cdk.aws_route53.IHostedZone} hostedZone Hosted zone
 * @returns {cdk.aws_certificatemanager.Certificate} Certificate
 */
export const getCertificate = (stack: Stack, hostedZone: route53.IHostedZone) => (
  new certificateManager.Certificate(stack, 'Certificate', {
    domainName: domain,
    subjectAlternativeNames: [
      `*.${domain}`,
      `*.${getDomain(DEV)}`,
      `*.${getDomain(DEVELOP)}`,
      `*.${getDomain(STAGING)}`,
      `*.${getDomain(TEST)}`,
      `*.${getDomain(TESTING)}`,
      `*.${getDomain(QA)}`,
      `*.${getDomain(UAT)}`,
      `*.${getDomain(PREPROD)}`,
    ],
    validation: certificateManager.CertificateValidation.fromDns(hostedZone),
  })
);
