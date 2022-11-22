const {chromium} = require('playwright');

( async() => {
   //function code
   const browser = await chromium.launch({headless:false, slowMo:500});
   const page = await browser.newPage();
   await page.goto('https://optitech.co.ke');
   //fill form
   await page.getByPlaceholder("Email")
   .fill("eugene@opticom.co.ke");  
   await page.getByPlaceholder("Password")
    .fill("xmJaY2CW");
   await page.locator('button[type=submit]').click();
   await page.locator('//*[@id="clock-in"]').click();
   await browser.close();
})();