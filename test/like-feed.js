const { browser, by } = require("protractor");

describe('Like Photos in feed', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false)
        browser.ignoreSynchronization = true;
        // browser.get("https://www.instagram.com/")
        browser.driver.sleep(2000)
        browser.refresh(2000)
    })

    it('should like pictures', function () {
        var numToLike = 3
        var likeBtnIndex = 2
        while (numToLike > 0) {
            var likeBtn = browser.driver.findElement(by.css('#react-root > section > main > section > div > div:nth-child('+ likeBtnIndex +') > div > article._8Rm4L.M9sTE.L_LMM.SgTZ1.Tgarh.ePUX4 > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button'))
            likeBtn.click()
            numToLike--
            likeBtnIndex++
            browser.driver.sleep(4000)
        }
        browser.driver.sleep(6000)
    })
})