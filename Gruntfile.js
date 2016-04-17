module.exports = function(grunt) {
    'use strict';

    var path = require('path');

    var timer = require('grunt-timer');

    timer.init(grunt);

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/plugins'),
        jitGrunt: {
            customTasksDir: 'grunt/tasks',
            staticMappings: {
                newer: 'grunt-newer',
                'notify_hooks': 'grunt-notify',
                'notify': 'grunt-notify',
                'size_report': 'grunt-size-report'
            }
        },
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });
};
