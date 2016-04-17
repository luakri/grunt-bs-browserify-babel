module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('prod-js', [
        'dev-js',
        'prod-uglify-js'
    ]);
};
