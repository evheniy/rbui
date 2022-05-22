import {
  SB,
  SB_STAGING,
  SB_TEST,
  STAGING,
  TEST,
  WWW,
  getDomain,
} from '@rbui/core/domains';

/**
 * Domain: rbui.tools
 */
export const domain = getDomain();

/**
 * Domain: www.rbui.tools
 */
export const wwwDomain = getDomain(WWW);

/**
 * Domain: sb.rbui.tools
 */
export const storybookDomain = getDomain(SB);

/**
 * Domain: staging.rbui.tools
 */
export const stagingDomain = getDomain(STAGING);

/**
 * Domain: sb.staging.rbui.tools
 */
export const storybookStagingDomain = getDomain(SB_STAGING);

/**
 * Domain: test.rbui.tools
 */
export const testDomain = getDomain(TEST);

/**
 * Domain: sb.test.rbui.tools
 */
export const storybookTestDomain = getDomain(SB_TEST);
