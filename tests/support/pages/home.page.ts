import { type Page } from '@playwright/test';
import { HomePageElements } from '../pageElements';
import { ItemsPerPage } from '../../types/enums';

export default class {
  readonly page: Page;
  constructor (page: Page) {
    this.page = page;
  }

  async openBasePage () {
    await this.page.goto('');
  }

  async getItemsName () {
    return this.page.textContent(HomePageElements.itemName());
  }

  async getPageItems () {
    return this.page.locator(HomePageElements.itemName());
  }

  async getItemsCount () {
    return this.page.locator(HomePageElements.itemName()).count();
  }

  async selectItemsPerPage (data:ItemsPerPage) {
    await this.openItemsPerPageDropDown();
    await this.clickOptionInDropDownItemsPerPage(data);
  }

  async openItemsPerPageDropDown () {
    await this.page.click(HomePageElements.itemsPerPageDropDown());
  }

  async clickOptionInDropDownItemsPerPage (data: ItemsPerPage) {
    await this.page.click(HomePageElements.itemsPerPageDropDownOptions(data));
  }

  async clickNextPageButton () {
    await this.page.click(HomePageElements.nextPageButton());
  }

  async clickPreviousPageButton () {
    await this.page.click(HomePageElements.previousPageButton());
  }

  async getHeaderText () {
    return this.page.textContent(HomePageElements.headerText());
  }

  async getNewLanguage (currentLanguage) {
    const languageList = await this.getLanguageList();
    const clearLanguageList = this.excludeLanguageByKey(languageList, currentLanguage);
    return this.getRandomLanguage(clearLanguageList);
  }

  async getLanguageList () {
    const responsePromise = this.page.waitForResponse('**/rest/languages');
    await this.openBasePage();
    const response = await responsePromise;
    // @ts-ignore
    return JSON.parse(await response.body());
  }

  getRandomLanguage = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  excludeLanguageByKey = (arr, shortKey) => {
    return arr.filter(item => item.shortKey !== shortKey);
  };
}
