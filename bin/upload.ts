import { exec } from '@rbui/core/exec';
import { getFullPath } from '@rbui/core/path';
import { isProduction, isStaging, isTest } from '@rbui/core/stages';
import {
  SB,
  SB_STAGING,
  SB_TEST,
  STAGING,
  TEST,
  getDomain,
} from '@rbui/core/domains';

const upload = async (localPath: string, bucket: string) => {
  await exec(`aws s3 cp ${localPath} s3://${bucket} --recursive --exclude "*.html" --exclude "sitemap.xml" --exclude "robots.txt" --cache-control "max-age=31536000,public,immutable"`);
  await exec(`aws s3 cp ${localPath} s3://${bucket} --recursive --exclude "*" --include "*.html" --cache-control "max-age=0,no-cache,no-store,must-revalidate"`);
  await exec(`aws s3 cp ${localPath} s3://${bucket} --recursive --exclude "*" --include "sitemap.xml" --cache-control "max-age=0,no-cache,no-store,must-revalidate"`);
  await exec(`aws s3 cp ${localPath} s3://${bucket} --recursive --exclude "*" --include "robots.txt" --cache-control "max-age=0,no-cache,no-store,must-revalidate"`);
};

const uploadSite = async (bucket: string) => {
  console.log('Upload site...'); // eslint-disable-line
  await upload(getFullPath('build'), bucket);
};

const uploadStorybook = async (bucket: string) => {
  console.log('Upload storybook...'); // eslint-disable-line
  await upload(getFullPath('storybook'), bucket);
};

const getBucket = (): string | never => {
  if (isProduction()) {
    return getDomain();
  }

  if (isStaging()) {
    return getDomain(STAGING);
  }

  if (isTest()) {
    return getDomain(TEST);
  }

  throw new Error('Wrong stage!');
};

const getStorybookBucket = (): string | never => {
  if (isProduction()) {
    return getDomain(SB);
  }

  if (isStaging()) {
    return getDomain(SB_STAGING);
  }

  if (isTest()) {
    return getDomain(SB_TEST);
  }

  throw new Error('Wrong stage!');
};

(async () => {
  try {
    await uploadSite(getBucket());
    await uploadStorybook(getStorybookBucket());
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
})();
