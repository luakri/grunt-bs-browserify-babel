var getPath = require('../util/getPath');

var setOptions = function(isLibs) {
    'use strict';

    var fileName = (isLibs) ? 'vendor/libs.js' : 'main.js';

    var propsFiles = {};

    propsFiles[getPath('js', false, true) + fileName] = getPath('js', false, true) + fileName;

    return {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            mangle: isLibs ? false: true,
            compress: {
                'drop_console': false
            }
        },
        files: propsFiles
    };
};

module.exports = {

    libs: setOptions(true),

    app: setOptions(false)
};
