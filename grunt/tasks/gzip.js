var zlib = require('zlib');
var findFilesInDir = require('../util/findFilesInDir');

module.exports = function(grunt) {
    'use strict';

    var matchFiles = [];

    grunt.registerTask('gzip', function() {
        var done = this.async();

        matchFiles = [];

        var files = findFilesInDir('./dist', /\.(html|js|css)$/).slice();

        function process() {
            if (files.length <= 0) {
                done();
                return;
            }

            var file = files.pop();

            grunt.log.writeln('Compressing ' + file + '...');
            var content = grunt.file.read(file, { encoding: null });

            zlib.gzip(content, function(err, compressed) {
                grunt.file.write(file + '.gz', compressed);
                grunt.log.ok('Compressed file written to ' + file + '.gz');
                process();
            });
        }

        process();
    });
};
