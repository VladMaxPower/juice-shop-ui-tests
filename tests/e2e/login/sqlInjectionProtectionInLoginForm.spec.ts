import { test, expect } from '@playwright/test';
import LoginPage from '../../support/pages/login.page';
import BannersPage from '../../support/pages/banners.page';
import { UserData } from '../../types/interfaces';

test('(security) Check SQL injection protection in the login form', async ({ page }) => {
  const loginPage:LoginPage = new LoginPage(page);
  const bannersPage:BannersPage = new BannersPage(page);

  const userData:UserData = {
    email: "' UNION SELECT 1, 2, 3,4,5,6,7,8,9,10,11,12,13 --",
    password: '1'
  };
  await loginPage.openBasePage();
  await bannersPage.clickCloseWelcomeBannerButton();
  await loginPage.loginToAccount(userData);

  await expect(await loginPage.getErrorMessage()).toBe('Invalid email or password.');
});
