import { test, expect } from '@playwright/test';
import HomePage from '../../support/pages/home.page';
import BannersPage from '../../support/pages/banners.page';

test('(security) Check xss protection in search field', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  const xssScript = '<iframe src="javascript:alert(`error`)">';
  page.on('dialog', async (dialog) => {}); // pw closes all browser modals without this code
  await homePage.openBasePage();
  await bannersPage.closeStartBanners();
  await homePage.searchByData(xssScript);

  await expect(await homePage.getNoSearchResultsMessage()).toBe('No results found');
});
