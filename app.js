const puppeteer = require('puppeteer');
const takeScreenshot = async()=>{
    const browser = await puppeteer.launch({ args: [
            '--no-sandbox',
            '--headless',
            '--disable-gpu',
            '--window-size=1920x1080',
        ] });
    const page = await browser.newPage();
    const options = {
        path: 'images/website.png',
        fullPage: true,
        omitBackground: true
    }
    await page.goto('http://www.multidots.com/');
    await page.screenshot(options);
    await browser.close();
}

takeScreenshot();

import puppeteer from "puppeteer";
