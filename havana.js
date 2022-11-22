const { chromium } = require("playwright");
(async () => {
  //function code
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage();
  await page.goto("https://www.apronus.com/music/lessons/unit01.htm");

  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(11) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(8) > button")
    .click();
})();

// He got me feelin’ like
//
