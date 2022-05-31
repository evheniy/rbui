import { HTTP, HTTPS, getUrl } from '@rbui/core/url';
import { STAGING, TEST } from '@rbui/core/domains';
import * as stages from '@rbui/core/stages';

export class Page {
  open(path = '') {
    const stage = {
      [stages.DEV]: `${HTTP}://localhost:8000/${path}`,
      [stages.STAGING]: getUrl(path, HTTPS, STAGING),
      [stages.TEST]: getUrl(path, HTTPS, TEST),
      [stages.PRODUCTION]: getUrl(path, HTTPS),
    };

    return browser.url(stage[stages.getStage()]);
  }
}
