import { homePage } from '@rbui/wdio/pages/home';

describe('Home page test', () => {
  it('should open home page', async () => {
    await homePage.open();
  });
});
