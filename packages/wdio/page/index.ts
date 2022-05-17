import { HTTPS, getUrl } from '@rbui/cdk/url';

export default class Page {
  open(path = '', protocol = HTTPS, subDomain = '') {
    return browser.url(getUrl(path, protocol, subDomain));
  }
}
