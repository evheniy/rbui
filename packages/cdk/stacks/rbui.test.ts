import { Construct } from 'constructs';
import { Template } from 'aws-cdk-lib/assertions';

import * as cdk from 'aws-cdk-lib';

import { RBUICdkStack } from './rbui';

describe('@rbui/stacks/rbui', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('RBUICdkStack', () => {
    const app = new cdk.App();

    jest.spyOn(cdk.aws_route53.HostedZone, 'fromLookup').mockImplementation(
      (stack: Construct) => new cdk.aws_route53.HostedZone(stack, 'HostedZone', { zoneName: 'ZoneName' }),
    );

    const template = Template.fromStack(new RBUICdkStack(app, 'RBUICdkStack'));

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'www.rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
      WebsiteConfiguration: {
        RedirectAllRequestsTo: {
          HostName: 'rbui.tools',
          Protocol: 'https',
        },
      },
    });

    template.hasResourceProperties('AWS::Route53::HostedZone', {
      Name: 'ZoneName.',
    });

    template.hasResourceProperties('AWS::CertificateManager::Certificate', {
      DomainName: 'rbui.tools',
      DomainValidationOptions: [
        { DomainName: 'rbui.tools' },
        { DomainName: '*.dev.rbui.tools' },
        { DomainName: '*.develop.rbui.tools' },
        { DomainName: '*.staging.rbui.tools' },
        { DomainName: '*.test.rbui.tools' },
        { DomainName: '*.testing.rbui.tools' },
        { DomainName: '*.qa.rbui.tools' },
        { DomainName: '*.uat.rbui.tools' },
        { DomainName: '*.preprod.rbui.tools' },
      ],
      SubjectAlternativeNames: [
        '*.rbui.tools',
        '*.dev.rbui.tools',
        '*.develop.rbui.tools',
        '*.staging.rbui.tools',
        '*.test.rbui.tools',
        '*.testing.rbui.tools',
        '*.qa.rbui.tools',
        '*.uat.rbui.tools',
        '*.preprod.rbui.tools',
      ],
      ValidationMethod: 'DNS',
    });

    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: ['www.rbui.tools'],
        DefaultCacheBehavior: {
          AllowedMethods: ['GET', 'HEAD', 'OPTIONS'],
          Compress: true,
          ViewerProtocolPolicy: 'redirect-to-https',
        },
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        Origins: [
          {
            CustomOriginConfig: {
              OriginProtocolPolicy: 'http-only',
              OriginSSLProtocols: [
                'TLSv1.2',
              ],
            },
          },
        ],
        ViewerCertificate: {
          MinimumProtocolVersion: 'TLSv1.2_2021',
          SslSupportMethod: 'sni-only',
        },
      },
    });

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'www.rbui.tools.ZoneName.',
      Type: 'A',
    });

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'www.rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });
});
