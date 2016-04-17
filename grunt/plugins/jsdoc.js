var getPath = require('../util/getPath');

module.exports = {

    app : {
        src: [
            getPath('src') + '**/*.js',
            '!' + getPath('src') + '**/**/vendor/**'
        ],
        options: {
            destination: 'reports/jsdocs'
        }
    }
};
