const puppeteer = require('puppeteer');

(async () => {
    console.log('launch navigator');
    //const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false});
    console.log('close navigator...!!');
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Web_scraping');

    var title1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });
    console.log(title1);
    setTimeout(() => {
        browser.close();
    },5000)
    
    console.log('Navigator Closed');
})();