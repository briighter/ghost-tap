const { element, browser } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe('Like Photo(s)', function () {
    // Assets
    var username = element(by.css('#loginForm > div > div:nth-child(1) > div > label > input'))
    var password = element(by.css('#loginForm > div > div:nth-child(2) > div > label > input'))


    beforeEach(function () {
        browser.waitForAngularEnabled(false)
        browser.get('https://instagram.com')
        browser.wait(protractor.ProtractorExpectedConditions.presenceOf(username))
    })

    it('should go to instagram', function () {
        username.sendKeys("realjasonlima", "password")
        expect(browser.getTitle()).toEqual('Instagram')
    })
});