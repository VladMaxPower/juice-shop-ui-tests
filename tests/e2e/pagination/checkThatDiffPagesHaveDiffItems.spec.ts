import { test, expect } from '@playwright/test';
import HomePage from '../../support/pages/home.page';
import BannersPage from '../../support/pages/banners.page';

test('Check that next pages have different items', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  await homePage.openBasePage();
  await bannersPage.closeStartBanners();
  const firstPageItems = await homePage.getItemsNamesArray();
  await homePage.clickNextPageButton();
  const secondPageItems = await homePage.getItemsNamesArray();

  await expect(homePage.arraysHaveNoDuplicates(firstPageItems, secondPageItems)).toBe(true);
});

test('Check that previous pages have different items', async ({ page }) => {
  const homePage:HomePage = new HomePage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  await homePage.openBasePage();
  await bannersPage.closeStartBanners();
  await homePage.clickNextPageButton();
  const secondPageItems = await homePage.getItemsNamesArray(); // collect items names from second page
  await homePage.clickPreviousPageButton();
  const firstPageItems = await homePage.getItemsNamesArray(); // collect items names from first page

  await expect(homePage.arraysHaveNoDuplicates(secondPageItems, firstPageItems)).toBe(true);
});
