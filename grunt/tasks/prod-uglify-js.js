module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('prod-uglify-js', [
        'uglify:app',
        'size_report:app'
    ]);
};
