import { test, expect } from '@playwright/test';
import LoginPage from '../../support/pages/login.page';
import BannersPage from '../../support/pages/banners.page';
import { DataProviderHelper } from '../../support/helpers';
import { UserData } from '../../types/interfaces';

test('Login to account with valid user data', async ({ page }) => {
  const loginPage:LoginPage = new LoginPage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  const firstSuccessfulMessage:string = 'You successfully solved a challenge: Password Strength ' +
        "(Log in with the administrator's user credentials without previously changing them or applying SQL Injection.)X";
  const secondSuccessfulMessage:string = "You successfully solved a challenge: Login Admin (Log in with the administrator's user account.)X";
  const adminUserData:UserData = DataProviderHelper.adminUserData();
  await loginPage.openBasePage();
  await bannersPage.clickCloseWelcomeBannerButton();
  await loginPage.loginToAccount(adminUserData);
  await loginPage.clickLoginButton();

  await expect(await loginPage.getFirstSuccessfulLoginMessage()).toBe(firstSuccessfulMessage);
  await expect(await loginPage.getSecondSuccessfulLoginMessage()).toBe(secondSuccessfulMessage);
});
