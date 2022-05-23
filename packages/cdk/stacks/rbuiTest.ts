import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { getHostedZone } from '@rbui/cdk/services/route53/hostedZone';
import { getStorybookTestDomainBucket, getTestDomainBucket } from '@rbui/cdk/services/s3/bucket';
import { getStorybookTestDomainCloudFront, getTestDomainCloudFront } from '@rbui/cdk/services/cloudFront';
import {
  getStorybookTestDomainARecord,
  getStorybookTestDomainAaaaRecord,
  getTestDomainARecord,
  getTestDomainAaaaRecord,
} from '@rbui/cdk/services/route53/record';
import { deployStorybookTestDomainBucket, deployTestDomainBucket } from '@rbui/cdk/services/s3/deployment';

export class RBUITestCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps & { certificate: cdk.aws_certificatemanager.Certificate }) {
    super(scope, id, props);

    const testDomainBucket = getTestDomainBucket(this);
    const storybookTestDomainBucket = getStorybookTestDomainBucket(this);

    const hostedZone = getHostedZone(this);

    const { certificate } = props;

    const testDomainCloudFront = getTestDomainCloudFront(this, certificate, testDomainBucket);
    const storybookTestDomainCloudFront = getStorybookTestDomainCloudFront(this, certificate, storybookTestDomainBucket);

    getTestDomainARecord(this, hostedZone, testDomainCloudFront);
    getTestDomainAaaaRecord(this, hostedZone, testDomainCloudFront);

    getStorybookTestDomainARecord(this, hostedZone, storybookTestDomainCloudFront);
    getStorybookTestDomainAaaaRecord(this, hostedZone, storybookTestDomainCloudFront);

    deployTestDomainBucket(this, testDomainBucket, testDomainCloudFront);
    deployStorybookTestDomainBucket(this, storybookTestDomainBucket, storybookTestDomainCloudFront);
  }
}
