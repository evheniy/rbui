import getDomain from '@rbui/cdk/domains';

export const HTTP = 'http';
export const HTTPS = 'https';

export default (protocol = HTTPS, subDomain = '') => `${protocol}://${getDomain(subDomain)}/`;
