import { getRegion } from '@rbui/cdk/env';

export const US_EAST = 'us-east-1'; // US East (N. Virginia)

export default () => {
  const region = getRegion() || US_EAST;

  if (![US_EAST].includes(region)) {
    throw new Error('Wrong region!');
  }

  return region;
};
