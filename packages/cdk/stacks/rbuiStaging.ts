import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { getHostedZone } from '@rbui/cdk/services/route53/hostedZone';
import { getStagingDomainBucket, getStorybookStagingDomainBucket } from '@rbui/cdk/services/s3';
import { getStagingDomainCloudFront, getStorybookStagingDomainCloudFront } from '@rbui/cdk/services/cloudFront';
import {
  getStagingDomainARecord,
  getStagingDomainAaaaRecord,
  getStorybookStagingDomainARecord,
  getStorybookStagingDomainAaaaRecord,
} from '@rbui/cdk/services/route53/record';

export class RBUIStagingCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps & { certificate: cdk.aws_certificatemanager.Certificate }) {
    super(scope, id, props);

    const stagingDomainBucket = getStagingDomainBucket(this);
    const storybookStagingDomainBucket = getStorybookStagingDomainBucket(this);

    const hostedZone = getHostedZone(this);

    const { certificate } = props;

    const stagingDomainCloudFront = getStagingDomainCloudFront(this, certificate, stagingDomainBucket);
    const storybookStagingDomainCloudFront = getStorybookStagingDomainCloudFront(this, certificate, storybookStagingDomainBucket);

    getStagingDomainARecord(this, hostedZone, stagingDomainCloudFront);
    getStagingDomainAaaaRecord(this, hostedZone, stagingDomainCloudFront);

    getStorybookStagingDomainARecord(this, hostedZone, storybookStagingDomainCloudFront);
    getStorybookStagingDomainAaaaRecord(this, hostedZone, storybookStagingDomainCloudFront);
  }
}
