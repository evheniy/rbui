/**
 * Domain: rbui.tools
 */
export const DOMAIN = 'rbui.tools';

/**
 * Subdomain: www
 * Domain: www.rbui.tools
 */
export const WWW = 'www';

/**
 * Subdomain: sb
 * Domain: sb.rbui.tools
 */
export const SB = 'sb';

/**
 * Subdomain: dev
 * Domain: dev.rbui.tools
 */
export const DEV = 'dev';

/**
 * Subdomain: develop
 * Domain: develop.rbui.tools
 */
export const DEVELOP = 'develop';

/**
 * Subdomain: staging
 * Domain: staging.rbui.tools
 */
export const STAGING = 'staging';

/**
 * Subdomain: sb.staging
 * Domain: sb.staging.rbui.tools
 */
export const SB_STAGING = 'sb.staging';

/**
 * Subdomain: test
 * Domain: test.rbui.tools
 */
export const TEST = 'test';

/**
 * Subdomain: sb.test
 * Domain: sb.test.rbui.tools
 */
export const SB_TEST = 'sb.test';

/**
 * Subdomain: testing
 * Domain: testing.rbui.tools
 */
export const TESTING = 'testing';

/**
 * Subdomain: qa
 * Domain: qa.rbui.tools
 */
export const QA = 'qa';

/**
 * Subdomain: uat
 * Domain: uat.rbui.tools
 */
export const UAT = 'uat';

/**
 * Subdomain: preprod
 * Domain: preprod.rbui.tools
 */
export const PREPROD = 'preprod';

/**
 * Get domain with/without sub domain
 * @param {string} subDomain Sub domain
 * @returns {string} Domain
 */
export const getDomain = (subDomain = ''): never | string => {
  if (subDomain && ![
    WWW,
    SB,
    DEV,
    DEVELOP,
    STAGING,
    SB_STAGING,
    TEST,
    SB_TEST,
    TESTING,
    QA,
    UAT,
    PREPROD,
  ].includes(subDomain)) {
    throw new Error('Wrong sub domain!');
  }

  return subDomain ? `${subDomain}.${DOMAIN}` : DOMAIN;
};
