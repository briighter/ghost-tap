const { browser, by } = require("protractor");

describe('Like Photos in feed', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false)
        browser.ignoreSynchronization = true;
        // browser.get("https://www.instagram.com/")
        // browser.driver.sleep(2000)
        browser.refresh(2000)
    })

    it('should like pictures', function () {
        var numToLike = 2
        var likeBtnIndex = 1
        var likeBtn = browser.driver.findElement(by.css('#react-root > section > main > section > div > div:nth-child(2) > div > article:nth-child('+ likeBtnIndex +') > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button'))
        while (numToLike > 0) {
            likeBtn.click()
            numToLike--
            likeBtnIndex++
            likeBtn = browser.driver.findElement(by.css('#react-root > section > main > section > div > div:nth-child(2) > div > article:nth-child('+ likeBtnIndex +') > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button'))
            browser.driver.sleep(3000)
        }

        browser.driver.sleep(3000)
    })
})