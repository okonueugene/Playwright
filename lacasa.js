const { chromium } = require("playwright");

(async () => {
  //function code
  const browser = await chromium.launch({ headless: false, slowMo: 350 });
  const page = await browser.newPage();
  await page.goto("https://www.apronus.com/music/lessons/unit01.htm");

  //    click on keynotes
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(9) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(13) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(9) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(9) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(9) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(5) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(13) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(13) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(15) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(18) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(18) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(18) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(15) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(18) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(15) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(13) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(13) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(6) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(9) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(18) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(9) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(18) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(17) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(3) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(2) > td:nth-child(12) > button")
    .click();
  await page
    .locator("#t1 > table > tr:nth-child(3) > td:nth-child(22) > button")
    .click();
})();

//

// E ho trovato l’invasor
//

// ( Music )
//
//

//
//

// https://www.apronus.com/music/lessons/unit01.htm
