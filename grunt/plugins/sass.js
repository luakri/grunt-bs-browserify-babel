var config = require('../config');

var getPath = require('../util/getPath');

var setOptions = function(isProd) {
    'use strict';

    var SASS_FILE_MAP = {};

    SASS_FILE_MAP[getPath('css', false, true) + 'main.css'] = getPath('sass', true) + 'main.scss';

    return {
        options: (isProd) ? config.sass.prod : config.sass.dev,
        files: SASS_FILE_MAP
    };
};

module.exports = {

    app_dev: setOptions(false),

    app_prod: setOptions(true)
};
