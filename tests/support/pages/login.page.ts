import { type Page } from '@playwright/test';
import { LoginPageElements } from '../pageElements';
import { UserData } from '../../types/interfaces';

export default class {
  readonly page: Page;
  constructor (page: Page) {
    this.page = page;
  }

  async openBasePage () {
    await this.page.goto('/#/login');
  }

  async enterEmail (data) {
    await this.page.fill(LoginPageElements.emailFiled(), data);
  }

  async enterPassword (data) {
    await this.page.fill(LoginPageElements.passwordField(), data);
  }

  async clickLoginButton () {
    await this.page.click(LoginPageElements.logInButton(), { timeout: 5000 });
  }

  getErrorMessage () {
    return this.page.textContent(LoginPageElements.errorMessage());
  }

  getFirstSuccessfulLoginMessage () {
    return this.page.textContent(LoginPageElements.firstSuccessfulLoginMessage());
  }

  getSecondSuccessfulLoginMessage () {
    return this.page.textContent(LoginPageElements.secondSuccessfulLoginMessage());
  }

  async loginToAccount (userData:UserData) {
    await this.enterEmail(userData.email);
    await this.enterPassword(userData.password);
    await this.clickLoginButton();
  }
}
