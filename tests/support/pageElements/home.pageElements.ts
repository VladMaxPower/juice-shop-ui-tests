export default class {
  itemName = ():string => '.item-name';
  itemsPerPageDropDown = ():string => '.mat-select';
  itemsPerPageDropDownOptions = (option):string => `//span[@class='mat-option-text'][contains(text(),${option})]`;
  nextPageButton = ():string => '.mat-paginator-navigation-next';
  previousPageButton = ():string => '.mat-paginator-navigation-previous';
  headerText = ():string => '.heading';
  searchButton = ():string => '#searchQuery';
  searchField = ():string => '#mat-input-0';
  noSearchResultsMessage = ():string => '.noResultText';
}
