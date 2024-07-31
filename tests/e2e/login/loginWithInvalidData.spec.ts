import { test, expect } from '@playwright/test';
import LoginPage from '../../support/pages/login.page';
import BannersPage from '../../support/pages/banners.page';
import { DataProviderHelper } from '../../support/helpers';
import { UserData } from '../../types/interfaces';

test('Login to account with invalid login name', async ({ page }) => {
  const loginPage:LoginPage = new LoginPage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  const adminUserData:UserData = DataProviderHelper.adminUserData();
  const userData:UserData = {
    email: DataProviderHelper.generateEmail(),
    password: adminUserData.password
  };
  await loginPage.openBasePage();
  await bannersPage.clickCloseWelcomeBannerButton();
  await loginPage.loginToAccount(userData);

  await expect(await loginPage.getErrorMessage()).toBe('Invalid email or password.');
});

test('Login to account with invalid password', async ({ page }) => {
  const loginPage:LoginPage = new LoginPage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  const adminUserData:UserData = DataProviderHelper.adminUserData();
  const userData:UserData = {
    email: adminUserData.email,
    password: DataProviderHelper.generateRandomString(5)
  };
  await loginPage.openBasePage();
  await bannersPage.clickCloseWelcomeBannerButton();
  await loginPage.loginToAccount(userData);

  await expect(await loginPage.getErrorMessage()).toBe('Invalid email or password.');
});
