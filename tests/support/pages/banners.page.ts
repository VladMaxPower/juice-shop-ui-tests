import { type Page } from '@playwright/test';
import { BannersPageElements } from '../pageElements';

export default class {
  readonly page: Page;
  constructor (page: Page) {
    this.page = page;
  }

  async clickCloseWelcomeBannerButton () {
    await this.page.click(BannersPageElements.closeWelcomeBannerButton());
  }

  async clickCloseCookieBannerButton () {
    await this.page.click(BannersPageElements.closeCookieBannerButton());
  }

  async closeStartBanners () {
    await this.clickCloseWelcomeBannerButton();
    await this.clickCloseCookieBannerButton();
  }
}
