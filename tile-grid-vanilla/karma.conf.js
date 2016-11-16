// #docregion
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine-html-reporter'), // click "Debug" in browser to see it
            require('karma-htmlfile-reporter') // crashing w/ strange socket error
        ],

        files: [
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/systemjs/dist/system-polyfills.js',

            { pattern: 'systemjs.config.js', included: false, watched: false },
            { pattern: 'systemjs.config.extras.js', included: false, watched: false },

            { pattern: 'app/**/*.js', included: false, watched: true },

            // Paths for debugging with source maps in dev tools
            { pattern: 'app/**/*.ts', included: false, watched: false },
            { pattern: 'app/**/*.js.map', included: false, watched: false },

            { pattern: 'node_modules/createjs-easeljs/lib/easeljs-0.8.2.combined.js', included: true, watched: false }
        ],

        exclude: [],
        preprocessors: {},
        // disabled HtmlReporter; suddenly crashing w/ strange socket error
        reporters: ['progress', 'kjhtml'],//'html'],

        // HtmlReporter configuration
        htmlReporter: {
            // Open this file to see results in browser
            outputFile: '_test-output/tests.html',

            // Optional
            pageTitle: 'Unit Tests',
            subPageTitle: __dirname
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    })
}
