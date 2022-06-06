import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { getHostedZone } from '@rbui/cdk/services/route53/hostedZone';
import { getDomainBucket, getStorybookDomainBucket } from '@rbui/cdk/services/s3';
import { getDomainCloudFront, getStorybookDomainCloudFront } from '@rbui/cdk/services/cloudFront';
import {
  getDomainARecord,
  getDomainAaaaRecord,
  getStorybookDomainARecord,
  getStorybookDomainAaaaRecord,
} from '@rbui/cdk/services/route53/record';

export class RBUIProductionCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps & { certificate: cdk.aws_certificatemanager.Certificate }) {
    super(scope, id, props);

    const domainBucket = getDomainBucket(this);
    const storybookDomainBucket = getStorybookDomainBucket(this);

    const hostedZone = getHostedZone(this);

    const { certificate } = props;

    const domainCloudFront = getDomainCloudFront(this, certificate, domainBucket);
    const storybookDomainCloudFront = getStorybookDomainCloudFront(this, certificate, storybookDomainBucket);

    getDomainARecord(this, hostedZone, domainCloudFront);
    getDomainAaaaRecord(this, hostedZone, domainCloudFront);

    getStorybookDomainARecord(this, hostedZone, storybookDomainCloudFront);
    getStorybookDomainAaaaRecord(this, hostedZone, storybookDomainCloudFront);
  }
}
