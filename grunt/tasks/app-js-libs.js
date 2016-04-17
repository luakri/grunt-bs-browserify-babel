module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('app-js-libs', [
        'modernizr',
        'concat:libs',
        'uglify:libs',
        'size_report:libs'
    ]);
};
