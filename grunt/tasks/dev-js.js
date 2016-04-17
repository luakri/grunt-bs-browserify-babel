module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('dev-js', [
        'app-lint',
        'app-js-libs',
        'app-browserify',
        'size_report:app'
    ]);
};
