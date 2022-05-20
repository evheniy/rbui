import { HTTPS, getUrl } from '@rbui/core/url';

export default class Page {
  open(path = '', protocol = HTTPS, subDomain = '') {
    return browser.url(getUrl(path, protocol, subDomain));
  }
}
