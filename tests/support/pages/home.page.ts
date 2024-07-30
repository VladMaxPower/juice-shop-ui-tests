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
}
