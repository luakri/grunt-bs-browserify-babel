module.exports = function(grunt) {
    'use strict';

    global.isProd = false;

    grunt.registerTask('dev', [
        'clean',
        'dev-js',
        'dev-css',
        'copy-assets',
        'asciify',
        'server'
    ]);

    grunt.task.run('notify_hooks');
};
