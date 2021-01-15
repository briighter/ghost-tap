const { element, browser, by } = require("protractor");

describe('Test Ghost Tap App', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false)
        browser.ignoreSynchronization = true;
        browser.get("https://www.instagram.com/")
        browser.driver.sleep(500);
    })

    it('should fill in the inputs', function () {
        const username = browser.driver.findElement(by.name('username'))
        username.click()
        username.sendKeys('realjasonlima')

        expect(username.getText()).toContain('realjasonlima')
        browser.driver.sleep(500)
    })
})