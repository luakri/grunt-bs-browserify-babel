module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('app-lint', [
        'eslint:app',
        'jscs:app'
    ]);
};
