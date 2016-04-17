module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('app-prod-css', [
        'sass:app_prod',
        'postcss:app_prod'
    ]);
};
