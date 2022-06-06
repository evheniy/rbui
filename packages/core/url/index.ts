/* eslint-disable @typescript-eslint/no-inferrable-types */
import { getDomain } from '@rbui/core/domains';

/**
 * HTTP protocol
 */
export const HTTP: string = 'http';

/**
 * HTTPS protocol
 */
export const HTTPS: string = 'https';

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
