var browserSync = require('browser-sync');

var config = require('../config');

module.exports = function(grunt) {
    'use strict';

    var browsersync;

    grunt.registerTask('browsersync', function() {
        var done = this.async();

        browsersync = browserSync.init({
            server: {
                baseDir: config.buildDir,
                middleware: require('../../deploy/config/express')()
            },
            port: config.browserPort,
            ui: {
                port: config.UIPort
            },
            ghostMode: {
                links: false
            }
        }, function () {
            done();
        });
    });

    grunt.registerTask('browsersync-reload', function() {
        browsersync.reload();
    });
};
