/* eslint-disable max-classes-per-file */
import { Construct } from 'constructs';
import { Template } from 'aws-cdk-lib/assertions';

import * as cdk from 'aws-cdk-lib';

import * as records from './record';

describe('@rbui/services/route53/record', () => {
  test('getARecord', () => {
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

        records.getARecord(this, 'TestRecord', zone, 'RecordName', cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

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

  test('getAaaaRecord', () => {
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

        records.getAaaaRecord(this, 'TestRecord', zone, 'RecordName', cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'RecordName.ZoneName.',
      Type: 'AAAA',
    });
  });

  test('getWwwDomainARecord', () => {
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

        records.getWwwDomainARecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'www.rbui.tools.ZoneName.',
      Type: 'A',
    });
  });

  test('getWwwDomainAaaaRecord', () => {
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

        records.getWwwDomainAaaaRecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'www.rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });

  test('getDomainARecord', () => {
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

        records.getDomainARecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'rbui.tools.ZoneName.',
      Type: 'A',
    });
  });

  test('getDomainAaaaRecord', () => {
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

        records.getDomainAaaaRecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });

  test('getStorybookDomainARecord', () => {
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

        records.getStorybookDomainARecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'sb.rbui.tools.ZoneName.',
      Type: 'A',
    });
  });

  test('getStorybookDomainAaaaRecord', () => {
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

        records.getStorybookDomainAaaaRecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'sb.rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });

  test('getStagingDomainARecord', () => {
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

        records.getStagingDomainARecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'staging.rbui.tools.ZoneName.',
      Type: 'A',
    });
  });

  test('getStagingDomainAaaaRecord', () => {
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

        records.getStagingDomainAaaaRecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'staging.rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });

  test('getStorybookStagingDomainARecord', () => {
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

        records.getStorybookStagingDomainARecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'sb.staging.rbui.tools.ZoneName.',
      Type: 'A',
    });
  });

  test('getStorybookStagingDomainAaaaRecord', () => {
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

        records.getStorybookStagingDomainAaaaRecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'sb.staging.rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });

  test('getTestDomainARecord', () => {
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

        records.getTestDomainARecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'test.rbui.tools.ZoneName.',
      Type: 'A',
    });
  });

  test('getTestDomainAaaaRecord', () => {
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

        records.getTestDomainAaaaRecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'test.rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });

  test('getStorybookTestDomainARecord', () => {
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

        records.getStorybookTestDomainARecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'sb.test.rbui.tools.ZoneName.',
      Type: 'A',
    });
  });

  test('getStorybookTestDomainAaaaRecord', () => {
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

        records.getStorybookTestDomainAaaaRecord(this, zone, cf);
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CloudFront::CloudFrontOriginAccessIdentity', 1);
    template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    template.resourceCountIs('AWS::Route53::HostedZone', 1);

    template.hasResourceProperties('AWS::Route53::RecordSet', {
      Name: 'sb.test.rbui.tools.ZoneName.',
      Type: 'AAAA',
    });
  });
});
