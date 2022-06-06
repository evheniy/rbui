/* eslint-disable max-classes-per-file */
import { Construct } from 'constructs';
import { Template } from 'aws-cdk-lib/assertions';

import * as cdk from 'aws-cdk-lib';

import {
  domain,
  stagingDomain,
  storybookDomain,
  storybookStagingDomain,
  storybookTestDomain,
  testDomain,
  wwwDomain,
} from '@rbui/cdk/services/route53/domain';

import * as cf from '.';

describe('@rbui/services/cloudFront/', () => {
  const DefaultCacheBehavior = {
    AllowedMethods: ['GET', 'HEAD', 'OPTIONS'],
    Compress: true,
    ViewerProtocolPolicy: 'redirect-to-https',
  };

  const ViewerCertificate = {
    MinimumProtocolVersion: 'TLSv1.2_2021',
    SslSupportMethod: 'sni-only',
  };

  test('getCloudFront', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: 'test-bucket-name',
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const certificate = new cdk.aws_certificatemanager.Certificate(
          this,
          'Certificate',
          { domainName: domain },
        );

        cf.getCloudFront(
          this,
          'TestCloudFront',
          domain,
          certificate,
          bucket,
        );
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CertificateManager::Certificate', 1);
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: [domain],
        DefaultCacheBehavior,
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate,
      },
    });
  });

  test('getWwwDomainCloudFront', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: wwwDomain,
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const certificate = new cdk.aws_certificatemanager.Certificate(
          this,
          'Certificate',
          { domainName: wwwDomain },
        );

        cf.getWwwDomainCloudFront(
          this,
          certificate,
          bucket,
        );
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CertificateManager::Certificate', 1);
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: [wwwDomain],
        DefaultCacheBehavior,
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate,
      },
    });
  });

  test('getDomainCloudFront', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: domain,
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const certificate = new cdk.aws_certificatemanager.Certificate(
          this,
          'Certificate',
          { domainName: domain },
        );

        cf.getDomainCloudFront(
          this,
          certificate,
          bucket,
        );
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CertificateManager::Certificate', 1);
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: [domain],
        DefaultCacheBehavior,
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate,
      },
    });
  });

  test('getStorybookDomainCloudFront', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: storybookDomain,
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const certificate = new cdk.aws_certificatemanager.Certificate(
          this,
          'Certificate',
          { domainName: storybookDomain },
        );

        cf.getStorybookDomainCloudFront(
          this,
          certificate,
          bucket,
        );
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CertificateManager::Certificate', 1);
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: [storybookDomain],
        DefaultCacheBehavior,
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate,
      },
    });
  });

  test('getStagingDomainCloudFront', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: stagingDomain,
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const certificate = new cdk.aws_certificatemanager.Certificate(
          this,
          'Certificate',
          { domainName: stagingDomain },
        );

        cf.getStagingDomainCloudFront(
          this,
          certificate,
          bucket,
        );
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CertificateManager::Certificate', 1);
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: [stagingDomain],
        DefaultCacheBehavior,
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate,
      },
    });
  });

  test('getStorybookStagingDomainCloudFront', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: storybookStagingDomain,
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const certificate = new cdk.aws_certificatemanager.Certificate(
          this,
          'Certificate',
          { domainName: storybookStagingDomain },
        );

        cf.getStorybookStagingDomainCloudFront(
          this,
          certificate,
          bucket,
        );
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CertificateManager::Certificate', 1);
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: [storybookStagingDomain],
        DefaultCacheBehavior,
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate,
      },
    });
  });

  test('getTestDomainCloudFront', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: testDomain,
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const certificate = new cdk.aws_certificatemanager.Certificate(
          this,
          'Certificate',
          { domainName: testDomain },
        );

        cf.getTestDomainCloudFront(
          this,
          certificate,
          bucket,
        );
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CertificateManager::Certificate', 1);
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: [testDomain],
        DefaultCacheBehavior,
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate,
      },
    });
  });

  test('getStorybookTestDomainCloudFront', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new cdk.aws_s3.Bucket(this, 'TestS3Bucket', {
          bucketName: storybookTestDomain,
          removalPolicy: cdk.RemovalPolicy.RETAIN,
          autoDeleteObjects: false,
          versioned: false,
          blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        });

        const certificate = new cdk.aws_certificatemanager.Certificate(
          this,
          'Certificate',
          { domainName: storybookTestDomain },
        );

        cf.getStorybookTestDomainCloudFront(
          this,
          certificate,
          bucket,
        );
      }
    }

    const template = Template.fromStack(new TestStack(app, 'TestStack'));

    template.resourceCountIs('AWS::S3::Bucket', 1);
    template.resourceCountIs('AWS::S3::BucketPolicy', 1);
    template.resourceCountIs('AWS::CertificateManager::Certificate', 1);
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: {
        Aliases: [storybookTestDomain],
        DefaultCacheBehavior,
        Enabled: true,
        HttpVersion: 'http2',
        IPV6Enabled: true,
        ViewerCertificate,
      },
    });
  });
});
