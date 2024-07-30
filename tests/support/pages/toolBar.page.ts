import { type Page } from '@playwright/test';
import { ToolBarPageElements } from '../pageElements';

export default class {
  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
  }

  async getCurrentLocalization () {
    const localization = await this.page.textContent(ToolBarPageElements.currentLanguage());
    return localization.trim();
  }

  async openLanguageDropDown () {
    await this.page.click(ToolBarPageElements.currentLanguage());
  }

  async clickLanguageInDropDown (language) {
    await this.page.click(ToolBarPageElements.languageInDropDown(language));
  }

  async chooseLanguage (language) {
    await this.openLanguageDropDown();
    await this.clickLanguageInDropDown(language);
  }
}
