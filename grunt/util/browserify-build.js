var browserify = require('browserify');
var babelify = require('babelify');
var getPath = require('../util/getPath');
var path = require('path');
var fs = require('fs-extra');
var grunt = require('grunt');

module.exports = function(callback) {
    'use strict';

    var distStream;
    var distPath;
    var compiler;

    fs.ensureFile(getPath('js', false, true) + 'main.js', function (err) {

        if (err) {
            console.error(err);
        }

        distPath = path.join(__dirname, '../../' + getPath('js', false, true) + 'main.js');

        distStream = fs.createWriteStream(distPath);

        distStream.addListener('finish', function() {
            callback();
        });

        compiler = browserify({
            entries: require.resolve('../../' + getPath('js', true) + 'main.js'),
            debug: !global.isProd
        });

        compiler.transform(babelify)
        .on('error', function (err) {
            console.error(err);

            grunt.task.run('notify:browserify');
        })
        .bundle()
        .pipe(distStream);
    });
};
