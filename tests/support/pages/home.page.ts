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

  async getItemsNames () {
    return this.page.$$(HomePageElements.itemName());
  }

  async getItemsNamesArray () {
    const items = await this.getItemsNames();
    const texts = [];
    for (const element of items) {
      const text = await element.textContent();
      texts.push(text.trim());
    }
    return texts;
  }

  arraysHaveNoDuplicates (firstArr, secondArr) {
    return !firstArr.some(element => secondArr.includes(element));
  }

  async getPageItems () {
    return this.page.locator(HomePageElements.itemName());
  }

  async getItemsCount () {
    return this.page.locator(HomePageElements.itemName()).count();
  }

  async getNoSearchResultsMessage () {
    return this.page.textContent(HomePageElements.noSearchResultsMessage());
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

  async clickSearchButton () {
    await this.page.click(HomePageElements.searchButton());
  }

  async enterDataToSearchField (data) {
    await this.page.fill(HomePageElements.searchField(), data);
  }

  async searchByData (data) {
    await this.clickSearchButton();
    await this.enterDataToSearchField(data);
    await this.page.keyboard.press('Enter');
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
    const responseBody = (await response.body()).toString();
    return JSON.parse(responseBody);
  }

  getRandomLanguage = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  excludeLanguageByKey = (arr, shortKey) => {
    return arr.filter(item => item.shortKey !== shortKey);
  };
}
