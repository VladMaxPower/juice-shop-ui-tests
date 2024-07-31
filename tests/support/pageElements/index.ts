import HomePageElementsClass from './home.pageElements';
import BannersPageElementClass from './banners.pageElements';
import ToolBarPageElementsClass from './toolBar.pageElements';
import LoginPageElementsClass from './login.pageElements';

const HomePageElements: HomePageElementsClass = new HomePageElementsClass();
const BannersPageElements: BannersPageElementClass = new BannersPageElementClass();
const ToolBarPageElements:ToolBarPageElementsClass = new ToolBarPageElementsClass();
const LoginPageElements:LoginPageElementsClass = new LoginPageElementsClass();

export {
  HomePageElements,
  BannersPageElements,
  ToolBarPageElements,
  LoginPageElements
};
