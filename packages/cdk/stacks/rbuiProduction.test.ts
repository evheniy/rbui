import { Construct } from 'constructs';
import { Template } from 'aws-cdk-lib/assertions';

import * as cdk from 'aws-cdk-lib';

import { RBUIProductionCdkStack } from './rbuiProduction';
import { RBUICdkStack } from './rbui';

describe('@rbui/stacks/rbuiProduction', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('RBUIProductionCdkStack', () => {
    const app = new cdk.App();

    jest.spyOn(cdk.aws_route53.HostedZone, 'fromLookup').mockImplementation(
      (stack: Construct) => new cdk.aws_route53.HostedZone(stack, 'HostedZone', { zoneName: 'ZoneName' }),
    );

    const baseStack = new RBUICdkStack(app, 'RBUICdkStack');

    const template = Template.fromStack(new RBUIProductionCdkStack(app, 'RBUIProductionCdkStack', { certificate: baseStack.certificate }));

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'sb.rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });

    template.resourceCountIs('AWS::S3::BucketPolicy', 2);

    template.hasResourceProperties('AWS::Route53::HostedZone', {
      Name: 'ZoneName.',
    });

    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: ['rbui.tools'],
        DefaultCacheBehavior: {
          AllowedMethods: ['GET', 'HEAD', 'OPTIONS'],
          Compress: true,
          ViewerProtocolPolicy: 'redirect-to-https',
        },
        DefaultRootObject: 'index.html',
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate: {
          MinimumProtocolVersion: 'TLSv1.2_2021',
          SslSupportMethod: 'sni-only',
        },
      },
    });

    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: ['sb.rbui.tools'],
        DefaultCacheBehavior: {
          AllowedMethods: ['GET', 'HEAD', 'OPTIONS'],
          Compress: true,
          ViewerProtocolPolicy: 'redirect-to-https',
        },
        DefaultRootObject: 'index.html',
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate: {
          MinimumProtocolVersion: 'TLSv1.2_2021',
          SslSupportMethod: 'sni-only',
        },
      },
    });

    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 2);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'rbui.tools.ZoneName.',
      Type: 'A',
    });

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'rbui.tools.ZoneName.',
      Type: 'AAAA',
    });

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'sb.rbui.tools.ZoneName.',
      Type: 'A',
    });

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'sb.rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });
});
