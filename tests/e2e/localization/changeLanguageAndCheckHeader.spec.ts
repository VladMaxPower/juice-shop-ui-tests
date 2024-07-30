import { test, expect } from '@playwright/test';
import HomePage from '../../support/pages/home.page';
import BannersPage from '../../support/pages/banners.page';
import ToolBarPage from '../../support/pages/toolBar.page';

test('Change language and check that the header is translated to a new language', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);
  const bannersPage:BannersPage = new BannersPage(page);
  const toolBar: ToolBarPage = new ToolBarPage(page);

  await homePage.openBasePage();
  await bannersPage.closeStartBanners();
  const startHeaderText:string = await homePage.getHeaderText();
  const currentLanguage:string = await toolBar.getCurrentLocalization();
  const newLanguage = await homePage.getNewLanguage(currentLanguage);
  await toolBar.chooseLanguage(newLanguage.lang);

  await expect(await toolBar.getCurrentLocalization()).toBe(newLanguage.shortKey);
  await expect(await homePage.getHeaderText() !== startHeaderText).toBe(true);
  await expect(await toolBar.getCurrentLocalization() !== currentLanguage).toBe(true);
});
