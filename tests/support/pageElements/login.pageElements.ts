export default class {
  emailFiled = ():string => '#email';
  passwordField = ():string => '#password';
  logInButton = ():string => '#loginButton';
  errorMessage = ():string => '.error';
  firstSuccessfulLoginMessage = ():string => "//mat-card[contains(@class,'accent-notification')][1]/div[1]";
  secondSuccessfulLoginMessage = ():string => "//mat-card[contains(@class,'accent-notification')][2]/div[1]";
}
