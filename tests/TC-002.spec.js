const { test, expect } = require("@playwright/test");

test("Checking searchability on a test site", async ({ page }) => {
  // go to the test site
  const testSiteUrl = "https://www.redmine.org";
  await page.goto(testSiteUrl);

  //fill test data to the input field
  const searchInputSelector = 'input[class="small"]';
  const testSearchData = "test123";
  await page.locator(searchInputSelector).fill(testSearchData);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);
});
