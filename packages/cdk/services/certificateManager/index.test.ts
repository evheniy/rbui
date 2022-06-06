import { Construct } from 'constructs';
import { Template } from 'aws-cdk-lib/assertions';

import * as cdk from 'aws-cdk-lib';

import { getCertificate } from '.';

describe('@rbui/services/certificateManager', () => {
  test('getCertificate', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        getCertificate(this, new cdk.aws_route53.HostedZone(this, 'HostedZone', { zoneName: 'ZoneName' }));
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::Route53::HostedZone', {
      Name: 'ZoneName.',
    });

    template.hasResourceProperties('AWS::CertificateManager::Certificate', {
      DomainName: 'rbui.tools',
      DomainValidationOptions: [
        {
          DomainName: 'rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
        {
          DomainName: '*.dev.rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
        {
          DomainName: '*.develop.rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
        {
          DomainName: '*.staging.rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
        {
          DomainName: '*.test.rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
        {
          DomainName: '*.testing.rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
        {
          DomainName: '*.qa.rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
        {
          DomainName: '*.uat.rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
        {
          DomainName: '*.preprod.rbui.tools',
          HostedZoneId: {
            Ref: 'HostedZoneDB99F866',
          },
        },
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
  });
});
