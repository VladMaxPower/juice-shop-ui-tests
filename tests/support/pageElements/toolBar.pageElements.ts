export default class {
  currentLanguage = ():string => '//button[@aria-label="Language selection menu"]/span/span';
  languageInDropDown = (language):string => `//div[contains(text(),'${language}')]/span`;
}
