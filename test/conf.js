exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login.js', 'like-feed.js'],
    capabilities: {
        browserName: 'chrome',
        sharedTestFiles: false
    },
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};