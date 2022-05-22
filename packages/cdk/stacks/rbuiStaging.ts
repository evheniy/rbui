import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { getHostedZone } from '@rbui/cdk/services/route53/hostedZone';
import { getCertificate } from '@rbui/cdk/services/certificateManager';
import { getStagingDomainBucket, getStorybookStagingDomainBucket } from '@rbui/cdk/services/s3/bucket';
import { getStagingDomainCloudFront, getStorybookStagingDomainCloudFront } from '@rbui/cdk/services/cloudFront';
import {
  getStagingDomainARecord,
  getStagingDomainAaaaRecord,
  getStorybookStagingDomainARecord,
  getStorybookStagingDomainAaaaRecord,
} from '@rbui/cdk/services/route53/record';
import { deployStagingDomainBucket, deployStorybookStagingDomainBucket } from '@rbui/cdk/services/s3/deployment';

export class RBUIStagingCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const stagingDomainBucket = getStagingDomainBucket(this);
    const storybookStagingDomainBucket = getStorybookStagingDomainBucket(this);

    const hostedZone = getHostedZone(this);

    const certificate = getCertificate(this, hostedZone);

    const stagingDomainCloudFront = getStagingDomainCloudFront(this, certificate, stagingDomainBucket);
    const storybookStagingDomainCloudFront = getStorybookStagingDomainCloudFront(this, certificate, storybookStagingDomainBucket);

    getStagingDomainARecord(this, hostedZone, stagingDomainCloudFront);
    getStagingDomainAaaaRecord(this, hostedZone, stagingDomainCloudFront);

    getStorybookStagingDomainARecord(this, hostedZone, storybookStagingDomainCloudFront);
    getStorybookStagingDomainAaaaRecord(this, hostedZone, storybookStagingDomainCloudFront);

    deployStagingDomainBucket(this, stagingDomainBucket, stagingDomainCloudFront);
    deployStorybookStagingDomainBucket(this, storybookStagingDomainBucket, storybookStagingDomainCloudFront);
  }
}
