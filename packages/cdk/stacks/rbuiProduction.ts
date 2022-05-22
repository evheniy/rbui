import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { getHostedZone } from '@rbui/cdk/services/route53/hostedZone';
import { getCertificate } from '@rbui/cdk/services/certificateManager';
import {
  getDomainBucket,
  getStorybookDomainBucket,
  getWwwDomainBucket,
} from '@rbui/cdk/services/s3/bucket';
import {
  getDomainCloudFront,
  getStorybookDomainCloudFront,
  getWwwDomainCloudFront,
} from '@rbui/cdk/services/cloudFront';
import {
  getDomainARecord,
  getDomainAaaaRecord,
  getStorybookDomainARecord,
  getStorybookDomainAaaaRecord,
  getWwwDomainARecord,
  getWwwDomainAaaaRecord,
} from '@rbui/cdk/services/route53/record';
import { deployDomainBucket, deployStorybookDomainBucket } from '@rbui/cdk/services/s3/deployment';

export class RBUIProductionCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const wwwDomainBucket = getWwwDomainBucket(this);
    const domainBucket = getDomainBucket(this);
    const storybookDomainBucket = getStorybookDomainBucket(this);

    const hostedZone = getHostedZone(this);

    const certificate = getCertificate(this, hostedZone);

    const wwwDomainCloudFront = getWwwDomainCloudFront(this, certificate, wwwDomainBucket);
    const domainCloudFront = getDomainCloudFront(this, certificate, domainBucket);
    const storybookDomainCloudFront = getStorybookDomainCloudFront(this, certificate, storybookDomainBucket);

    getWwwDomainARecord(this, hostedZone, wwwDomainCloudFront);
    getWwwDomainAaaaRecord(this, hostedZone, wwwDomainCloudFront);

    getDomainARecord(this, hostedZone, domainCloudFront);
    getDomainAaaaRecord(this, hostedZone, domainCloudFront);

    getStorybookDomainARecord(this, hostedZone, storybookDomainCloudFront);
    getStorybookDomainAaaaRecord(this, hostedZone, storybookDomainCloudFront);

    deployDomainBucket(this, domainBucket, domainCloudFront);
    deployStorybookDomainBucket(this, storybookDomainBucket, storybookDomainCloudFront);
  }
}
