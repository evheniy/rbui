import { Construct } from 'constructs';
import { Template } from 'aws-cdk-lib/assertions';

import * as cdk from 'aws-cdk-lib';

import { getRecordTarget } from './target';

describe('@rbui/services/route53/target', () => {
  test('getRecordTarget', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const s3 = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: 'test-bucket-name',
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const cf = new cdk.aws_cloudfront.Distribution(this, 'TestCloudFront', {
          domainNames: ['test.test'],
          defaultBehavior: {
            origin: new cdk.aws_cloudfront_origins.S3Origin(s3),
          },
        });

        const zone = new cdk.aws_route53.HostedZone(this, 'HostedZone', { zoneName: 'ZoneName' });

        new cdk.aws_route53.ARecord(this, 'TestRecord', { zone, recordName: 'RecordName', target: getRecordTarget(cf) });
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'RecordName.ZoneName.',
      Type: 'A',
    });
  });
});
