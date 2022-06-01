import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { getHostedZone } from '@rbui/cdk/services/route53/hostedZone';
import { getCertificate } from '@rbui/cdk/services/certificateManager';
import { getWwwDomainBucket } from '@rbui/cdk/services/s3';
import { getWwwDomainCloudFront } from '@rbui/cdk/services/cloudFront';
import { getWwwDomainARecord, getWwwDomainAaaaRecord } from '@rbui/cdk/services/route53/record';

export class RBUICdkStack extends cdk.Stack {
  public readonly certificate: cdk.aws_certificatemanager.Certificate;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const wwwDomainBucket = getWwwDomainBucket(this);

    const hostedZone = getHostedZone(this);

    this.certificate = getCertificate(this, hostedZone);

    const wwwDomainCloudFront = getWwwDomainCloudFront(this, this.certificate, wwwDomainBucket);

    getWwwDomainARecord(this, hostedZone, wwwDomainCloudFront);
    getWwwDomainAaaaRecord(this, hostedZone, wwwDomainCloudFront);
  }
}
