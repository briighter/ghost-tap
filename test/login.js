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
        browser.driver.sleep(2500)

        const saveLoginBtn = browser.driver.findElement(by.css('#react-root > section > main > div > div > div > div > button'))
        saveLoginBtn.click()
        browser.driver.sleep(2500)

        const turnOnNotiBtn = browser.driver.findElement(by.css('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm'))
        turnOnNotiBtn.click()
        browser.driver.sleep(2500)


        browser.driver.sleep(4000)
    })
})