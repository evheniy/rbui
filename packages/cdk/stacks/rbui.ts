/* eslint-disable no-new */
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import getDomain, {
  WWW,
  DEV,
  DEVELOP,
  STAGING,
  TEST,
  TESTING,
  QA,
  UAT,
  PREPROD,
} from '@rbui/cdk/domains';

class RBUICdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Domains
    const domain = getDomain(); // rbui.tools
    const wwwDomain = getDomain(WWW); // www.rbui.tools
    const stagingDomain = getDomain(STAGING); // staging.rbui.tools
    const testDomain = getDomain(TEST); // test.rbui.tools

    // Hosted zone
    const hostedZone = cdk.aws_route53.HostedZone.fromLookup(this, 'HostedZone', { domainName: domain });

    // SSL/TLS certificate
    const certificate = new cdk.aws_certificatemanager.Certificate(this, 'Certificate', {
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
      validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(hostedZone),
    });

    // S3 buckets
    const wwwBucket = new cdk.aws_s3.Bucket(this, 'WwwBucket', {
      bucketName: wwwDomain,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: false,
      websiteRedirect: {
        hostName: domain,
        protocol: cdk.aws_s3.RedirectProtocol.HTTPS,
      },
    });

    const domainBucket = new cdk.aws_s3.Bucket(this, 'DomainBucket', {
      bucketName: domain,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: true,
    });

    const stagingBucket = new cdk.aws_s3.Bucket(this, 'StagingBucket', {
      bucketName: stagingDomain,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: true,
    });

    const testBucket = new cdk.aws_s3.Bucket(this, 'TestBucket', {
      bucketName: testDomain,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: true,
    });

    // Cloud front
    const wwwCloudFront = new cdk.aws_cloudfront.Distribution(this, 'WwwCloudFront', {
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.S3Origin(wwwBucket),
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      domainNames: [wwwDomain],
      certificate,
    });

    const domainCloudFront = new cdk.aws_cloudfront.Distribution(this, 'DomainCloudFront', {
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.S3Origin(domainBucket),
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      domainNames: [domain],
      certificate,
      defaultRootObject: 'index.html',
    });

    const stagingCloudFront = new cdk.aws_cloudfront.Distribution(this, 'StagingCloudFront', {
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.S3Origin(stagingBucket),
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      domainNames: [stagingDomain],
      certificate,
      defaultRootObject: 'index.html',
    });

    const testCloudFront = new cdk.aws_cloudfront.Distribution(this, 'TestCloudFront', {
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.S3Origin(testBucket),
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      domainNames: [testDomain],
      certificate,
      defaultRootObject: 'index.html',
    });

    // Route 53
    const wwwCloudFrontTarget = cdk.aws_route53.RecordTarget.fromAlias(
      new cdk.aws_route53_targets.CloudFrontTarget(wwwCloudFront),
    );

    const domainCloudFrontTarget = cdk.aws_route53.RecordTarget.fromAlias(
      new cdk.aws_route53_targets.CloudFrontTarget(domainCloudFront),
    );

    const stagingCloudFrontTarget = cdk.aws_route53.RecordTarget.fromAlias(
      new cdk.aws_route53_targets.CloudFrontTarget(stagingCloudFront),
    );

    const testCloudFrontTarget = cdk.aws_route53.RecordTarget.fromAlias(
      new cdk.aws_route53_targets.CloudFrontTarget(testCloudFront),
    );

    const wwwARecord = new cdk.aws_route53.ARecord(this, 'WwwARecord', {
      zone: hostedZone,
      target: wwwCloudFrontTarget,
      recordName: wwwDomain,
    });

    const wwwAaaaRecord = new cdk.aws_route53.AaaaRecord(this, 'WwwAaaaRecord', {
      zone: hostedZone,
      target: wwwCloudFrontTarget,
      recordName: wwwDomain,
    });

    const domainARecord = new cdk.aws_route53.ARecord(this, 'DomainARecord', {
      zone: hostedZone,
      target: domainCloudFrontTarget,
      recordName: domain,
    });

    const domainAaaaRecord = new cdk.aws_route53.AaaaRecord(this, 'DomainAaaaRecord', {
      zone: hostedZone,
      target: domainCloudFrontTarget,
      recordName: domain,
    });

    const stagingARecord = new cdk.aws_route53.ARecord(this, 'StagingARecord', {
      zone: hostedZone,
      target: stagingCloudFrontTarget,
      recordName: stagingDomain,
    });

    const stagingAaaaRecord = new cdk.aws_route53.AaaaRecord(this, 'StagingAaaaRecord', {
      zone: hostedZone,
      target: stagingCloudFrontTarget,
      recordName: stagingDomain,
    });

    const testARecord = new cdk.aws_route53.ARecord(this, 'TestARecord', {
      zone: hostedZone,
      target: testCloudFrontTarget,
      recordName: testDomain,
    });

    const testAaaaRecord = new cdk.aws_route53.AaaaRecord(this, 'TestAaaaRecord', {
      zone: hostedZone,
      target: testCloudFrontTarget,
      recordName: testDomain,
    });
  }
}

export default RBUICdkStack;
