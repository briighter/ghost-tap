const { element } = require("protractor");

describe('Like Photo(s)', function () {
    // Assets
    var username = element(by.name('username'));
    var password = element(by.name('password'));

    username.sendKeys("realjasonlima", "password")



});