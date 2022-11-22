const {chromium} = require('playwright');

( async() => {
   //function code
   const browser = await chromium.launch({headless:false, slowMo:300});
   const page = await browser.newPage();
   await page.goto("https://www.apronus.com/music/lessons/unit01.htm");
   await page.locator('F').click();
   await page.locator('F').click();
   await page.locator('F').click();
   await page.locator('D').click();
   await page.locator('G').click();
   await page.locator('G').click();
   await page.locator('G').click();
   await page.locator('G#').click();
   await page.locator('G#').click();
   await page.locator('G#').click();
   await page.locator('G').click();
   await page.locator('D#').click();
   await page.locator('D#').click();
   await page.locator('D#').click();
   await page.locator('C').click();
   await page.locator('G').click();
   await page.locator('G').click();
   await page.locator('G').click();
   await page.locator('G#').click();
   await page.locator('G#').click();
   await page.locator('G#').click();
   await page.locator('G').click();
   await page.locator('F').click();
   await page.locator('F').click();
   await page.locator('F').click();
   await page.locator('D').click();
   await page.locator('G').click();
   await page.locator('G').click();
   await page.locator('F').click();
   await page.locator('D#').click();
   await page.locator('G').click();
   await page.locator('G').click();
   await page.locator('F').click();
   await page.locator('C').click();
   await page.locator('G').click();

})();
 

  



