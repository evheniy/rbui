import { HTTPS, getUrl } from '@rbui/core/url';

export class Page {
  open(path = '', protocol = HTTPS, subDomain = '') {
    return browser.url(getUrl(path, protocol, subDomain));
  }
}
