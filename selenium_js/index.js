const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



(async function google() {

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        let value = 'Ashly'
        await driver.get('https://www.google.com');
        let search = await driver.findElement(By.name('q'))


        search.sendKeys(value, Key.ENTER);
        await driver.wait(until.titleIs(`${value} - Поиск в Google`),5000);

        let btn = await driver.findElement(By.className('MUFPAc')).findElement(By.css('a'));
        await driver.wait(until.titleIs(`${value} - Поиск в Google`),5000);
        btn.click();

        await driver.wait(until.titleIs(`${value} - Поиск в Google`),5000);
        let first_img = await driver.findElement(By.className('rg_i'));

        let src_img = await first_img.getAttribute('src');
        let img = src_img.split(',')

        console.log(typeof img[1])
        console.log('...>>><<<<...')
        let buff = new Buffer(img[1], 'base64');

        fs.writeFileSync('./img/first2.jpeg', buff);
    }
    finally{
        driver.quit();
    }
})();
