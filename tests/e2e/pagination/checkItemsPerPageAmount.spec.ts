import { test, expect } from '@playwright/test';
import HomePage from '../../support/pages/home.page';
import BannersPage from '../../support/pages/banners.page';
import { ItemsPerPage } from '../../types/enums';

test('Check page with min items per page amount', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  await homePage.openBasePage();
  await bannersPage.closeStartBanners();
  await homePage.selectItemsPerPage(ItemsPerPage.min);
  await homePage.getItemsName();

  await expect(await homePage.getPageItems()).toHaveCount(12);
});

test('Check page with middle items per page amount', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  await homePage.openBasePage();
  await bannersPage.closeStartBanners();
  await homePage.selectItemsPerPage(ItemsPerPage.middle);
  await homePage.getItemsName();

  await expect(await homePage.getPageItems()).toHaveCount(24);
});

test('Check page with max items per page amount', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  await homePage.openBasePage();
  await bannersPage.closeStartBanners();
  await homePage.selectItemsPerPage(ItemsPerPage.max);
  await homePage.getItemsName();

  await expect(await homePage.getItemsCount() > 24).toBe(true);
  await expect(await homePage.getItemsCount() < 36).toBe(true);
});
