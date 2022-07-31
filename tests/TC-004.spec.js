const { test, expect } = require("@playwright/test");

test("Checking the sign up possibility with the valid data", async ({
  page,
}) => {
  // go to the test site
  const testSiteUrl = "https://www.redmine.org";
  await page.goto(testSiteUrl);

  //go to the "Registration" page
  const registrationButtonLocator = 'a[class="register"]';
  await page.locator(registrationButtonLocator).click();

  //fill test data to the registration fields

  //  invalid data for the test

  const userData = {
    user: "ttestus1234567",
    password: "test123",
    name: "Ingvar",
    lastname: "Kirichauskas",
    email: "test1234567@ua.com",
    language: "en",
    ircNick: "ttestus1234567",
  };

  // user registration inputs fields locators
  const userInputFieldLocator = '[id="user_login"]';
  const passwordInputFieldLocator = '[id="user_password"]';
  const passwordConfirmInputFieldLocator = '[id="user_password_confirmation"]';
  const nameInputFieldLocator = '[id="user_firstname"]';
  const lastnameInputFieldLocator = '[id="user_lastname"]';
  const emailInputFieldLocator = '[id="user_mail"]';
  const languageDropMenuFieldLocator = '[id="user_language"]';
  const ircNickInputFieldLocator = '[id="user_custom_field_values_3"]';
  const inputSubmitButton = 'input[name="commit"]';

  await page.locator(userInputFieldLocator).fill(userData["user"]);
  await page.locator(passwordInputFieldLocator).fill(userData["password"]);
  await page
    .locator(passwordConfirmInputFieldLocator)
    .fill(userData["password"]);
  await page.locator(nameInputFieldLocator).fill(userData["name"]);
  await page.locator(lastnameInputFieldLocator).fill(userData["lastname"]);
  await page.locator(emailInputFieldLocator).fill(userData["email"]);
  await page.selectOption(languageDropMenuFieldLocator, userData["language"]);
  await page.locator(ircNickInputFieldLocator).fill(userData["ircNick"]);
  await page.locator(inputSubmitButton).click();
  await page.waitForTimeout(4000);
  await page.screenshot({
    path: `screenshot.png`, // сохраняем скриншот
  });
  //   await expect(page.locator('[class="flash notice")]')).toBeVisible();
  //   await expect(page.locator('[class="flash notice")]')).toContainText(
  //     `Account was successfully created. An email containing the instructions to activate your account was sent to ${emailData}.`
  //   );
});

export default userData;
