const { test, expect } = require("@playwright/test");

test.describe("TC-003", () => {
  test.beforeEach(
    "Go to the test site https://www.redmine.org",
    async ({ page }) => {
      // go to the test site
      const testSiteUrl = "https://www.redmine.org";
      await page.goto(testSiteUrl);
    }
  );

  test("Checking the sign up possibility with the invalid data", async ({
    page,
  }) => {
    //go to the "Registration" page
    const registrationButtonSelector = 'a[class="register"]';
    await page.Selector(registrationButtonSelector).click();

    // Fill test data to the registration fields
    //  --invalid data for the test
    const userData = "!222";
    const passwordData = "тест123";
    const nameData = "!»№";
    const lastnameData = "Kiric22";
    const emailData = "test@test@com";
    const ircNickData = "testu!!!";

    // --user registration inputs fields selectors
    const userInputFieldSelector = '[id="user_login"]';
    const passwordInputFieldSelector = '[id="user_password"]';
    const passwordConfirmInputFieldSelector =
      '[id="user_password_confirmation"]';
    const nameInputFieldSelector = '[id="user_firstname"]';
    const lastnameInputFieldSelector = '[id="user_lastname"]';
    const emailInputFieldSelector = '[id="user_mail"]';
    const languageDropMenuFieldSelector = '[id="user_language"]';
    const ircNickInputFieldSelector = '[id="user_custom_field_values_3"]';
    const inputSubmitButton = 'input[name="commit"]';

    await page.Selector(userInputFieldSelector).fill(userData);
    await page.Selector(passwordInputFieldSelector).fill(passwordData);
    await page.Selector(passwordConfirmInputFieldSelector).fill(passwordData);
    await page.Selector(nameInputFieldSelector).fill(nameData);
    await page.Selector(lastnameInputFieldSelector).fill(lastnameData);
    await page.Selector(emailInputFieldSelector).fill(emailData);
    await page.selectOption(languageDropMenuFieldSelector, "en");
    await page.Selector(ircNickInputFieldSelector).fill(ircNickData);
    await page.Selector(inputSubmitButton).click();
    await page.waitForTimeout(2000);
  });
});
