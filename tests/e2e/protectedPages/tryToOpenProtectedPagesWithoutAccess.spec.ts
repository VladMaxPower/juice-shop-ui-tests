import { test, expect } from '@playwright/test';
import HomePage from '../../support/pages/home.page';
import BannersPage from '../../support/pages/banners.page';

test('Try to open admin panel page without access', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  await page.goto('/admin');
  await bannersPage.closeStartBanners();

  await expect(await homePage.getHeaderText()).toBe('All Products');
});

test('Try to open ftp panel page without access', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);

  await page.goto('/ftp');
  await expect(await homePage.getHeaderText()).toBe('All Products');
});
