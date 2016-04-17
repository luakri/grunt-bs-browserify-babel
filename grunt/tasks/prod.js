module.exports = function(grunt) {
    'use strict';

    global.isProd = true;

    grunt.registerTask('prod', [
        'clean',
        'prod-js',
        'prod-css',
        'copy-assets',
        'htmlmin',
        'gzip',
        'size_report'
    ]);
};
