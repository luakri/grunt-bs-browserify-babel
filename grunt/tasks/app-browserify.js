var build = require('../util/browserify-build');

module.exports = function(grunt) {
    'use strict';

    var done;

    grunt.registerTask('app-browserify', function() {
        done = this.async();

        build(function() {
            done();
        });
    });
};
