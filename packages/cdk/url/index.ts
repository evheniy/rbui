import { getDomain } from '@rbui/cdk/domains';

/**
 * HTTP protocol
 */
export const HTTP = 'http';

/**
 * HTTPS protocol
 */
export const HTTPS = 'https';

/**
 * Get url
 * @param {?string} path Path
 * @param {?string} protocol Protocol
 * @param {?string} subDomain Sub domain
 * @returns {string} Url
 */
export const getUrl = (path = '/', protocol = HTTPS, subDomain = ''): never | string => {
  if (![HTTP, HTTPS].includes(protocol)) {
    throw new Error('Wrong protocol!');
  }

  return `${protocol}://${getDomain(subDomain)}${path}`;
};
