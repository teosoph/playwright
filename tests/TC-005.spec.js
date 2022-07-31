import { userData } from "./TC-004.spec";
const { test, expect } = require("@playwright/test");

test("Checking the sign up possibility with the valid data", async ({
  page,
}) => {
  // go to the test site
  const testSiteUrl = "https://www.redmine.org";
  await page.goto(testSiteUrl);

  // go to the "Login" page
  const loginButtonLocator = 'a[href="/login"]';
  await page.locator(loginButtonLocator).click();

  // fill valid test data to the login fields from TC-004
  const usernameInputFieldLocator = 'input[id="username"]';
  const passwordInputFieldLocator = '[id="password"]';
  const stayInSystemCheckBoxLocator = '[id="autologin"]';
  const inputSubmitButton = 'input[name="login"]';

  await page.locator(usernameInputFieldLocator).fill(userData["name"]);
  await page.locator(passwordInputFieldLocator).fill(userData["password"]);
  await page.locator(stayInSystemCheckBoxLocator).click();
  await page.locator(inputSubmitButton).click();

  await page.waitForTimeout(4000);
  await page.screenshot({
    path: `screenshot.png`,
  });
});
