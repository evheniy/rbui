export default class Page {
  mainUrl = 'https://skazkajs.org/';

  currentUrl = this.mainUrl;

  open(path = '/'): Promise<string> {
    this.currentUrl = `${this.mainUrl}${path}`;

    return browser.url(this.currentUrl);
  }
}
