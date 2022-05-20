import { getCdkRegion, getRegion as getEnvRegion } from '@rbui/core/env';

/**
 * US East (N. Virginia)
 */
export const US_EAST_1 = 'us-east-1';

/**
 * Get region
 * @returns {!string} Region
 */
export const getRegion = (): never | string => {
  const region = getEnvRegion() || getCdkRegion() || US_EAST_1;

  if (![US_EAST_1].includes(region)) {
    throw new Error('Wrong region!');
  }

  return region;
};
