const { test, expect } = require("@playwright/test");

test("Checking searchability on a test site", async ({ page }) => {
  const testSiteUrl = "https://www.redmine.org";
  const searchInputSelector = 'input[class="small"]';

  await page.goto(testSiteUrl);

  //fill test data to the input field
  const testSearchData = "test123";
  await page.locator(searchInputSelector).fill(testSearchData);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);
});
