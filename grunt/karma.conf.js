var config = require('./config');

var jsApp = config.PATHS.JS;

var processFiles = {};

processFiles[jsApp + 'components/**/*.js'] = ['babel', 'browserify'];
processFiles[jsApp + 'main.js'] = ['babel', 'browserify'];

module.exports = function (config) {
    'use strict';

    config.set({
        basePath : '../src',
        frameworks: ['browserify', 'jasmine'],
        browsers: ['PhantomJS'],

        keepalive: true,
        autoWatch : true,
        singleRun : false,

        port: 9876,
        runnerPort: 9100,
        colors: true,
        captureTimeout: 5000,

        reporters: ['spec', 'coverage'],

        preprocessors: processFiles,

        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },

        browserify: {
            debug: true,
            transform: ['babelify', require('browserify-istanbul')({
                instrumenterConfig: {
                    embedSource: true
                }
            })]
        },

        coverageReporter: {
            type : 'lcov',
            dir : '../reports/coverage'
        },

        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: true
        },

        exclude: [],

        files: [
            // Libs.
            jsApp + 'vendor/jquery-2.2.1.js',
            jsApp + 'vendor/modernizr.min.js',

            // Components.
            jsApp + 'components/**/!(*test.js)*.js',

            // Main.
            jsApp + 'main.js',

            // Tests.
            jsApp + 'components/component1/tests/component1.test.js'
        ]
    });
};
