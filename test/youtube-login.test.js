var assert = require('assert');
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

describe('Youtube auth epic', function() {
    describe('Youtube login', function() {
        it('should allow to fill login and password and authorize', async function() {
            this.timeout(0)

            const browser = await puppeteer.launch({headless:true})

            const page = await browser.newPage()
            await page.goto('https://youtube.com')
            await page.click('#buttons ytd-button-renderer a')
            await page.waitForSelector('#identifierId')
            await page.type('#identifierId', 'diana.semenova@gmail.com')
            await page.click('#identifierNext')
            await page.waitForSelector('#password input', { visible: true })
            await page.type('#password input', 'zimaletto11')
            await page.click('#passwordNext')
            return Promise.resolve();
            //assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});