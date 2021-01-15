const { browser, by } = require("protractor");

describe('Login with Ghost Tap', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false)
        browser.ignoreSynchronization = true;
        browser.get("https://www.instagram.com/")
        browser.driver.sleep(2000)
    })

    it('should fill in the inputs', function () {
        const username = browser.driver.findElement(by.name('username'))
        const password = browser.driver.findElement(by.name('password'))
        const loginBtn = browser.driver.findElement(by.css('#loginForm > div > div:nth-child(3) > button'))
        
        //#loginForm > div > div:nth-child(3) > button
        function sendLoginKeys(usr, pass) {
            username.click()
            username.sendKeys(usr)
            password.click()
            password.sendKeys(pass)
            loginBtn.click()
        }

        sendLoginKeys('realjasonlima', 'password')
        expect(username.getAttribute('value')).toContain('realjasonlima')
        expect(password.getAttribute('value')).toContain('password')

        browser.driver.sleep(6000)
    })
})