export const DOMAIN = 'rbui.tools';

export const WWW = 'www';
export const DEV = 'dev';
export const DEVELOP = 'develop';
export const STAGING = 'staging';
export const TEST = 'test';
export const TESTING = 'testing';
export const QA = 'qa';
export const UAT = 'uat';
export const PREPROD = 'preprod';

export default (subDomain = '') => {
  if (subDomain && ![
    WWW,
    DEV,
    DEVELOP,
    STAGING,
    TEST,
    TESTING,
    QA,
    UAT,
    PREPROD,
  ].includes(subDomain)) {
    throw new Error('Wrong sub domain!');
  }

  return subDomain ? `${subDomain}.${DOMAIN}` : DOMAIN;
};
