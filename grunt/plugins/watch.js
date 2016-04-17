var getPath = require('../util/getPath');

module.exports = {

    options: {
        spawn: false
    },

    libs: {
        files: [getPath('js', 'common', true) + 'vendor/**/*.js'],
        tasks: ['concat:libs','browsersync-reload']
    },

    app_js: {
        files: [
            getPath('js', true) + '**/*.js',
            '!' + getPath('js', true) + 'vendor/**/*.js'
        ],
        tasks: [
            'newer:eslint:app',
            'newer:jscs:app',
            'modernizr',
            'app-browserify',
            'browsersync-reload'
        ]
    },

    app_sass: {
        files: [getPath('sass', true) + '**/*.scss'],
        tasks: ['dev-css', 'browsersync-reload']
    },

    app_images: {
        files: getPath('img', true),
        tasks: ['copy:app_images', 'browsersync-reload']
    },

    app_html: {
        files: [getPath('src') + '*.html'],
        tasks: ['copy:app_html', 'browsersync-reload']
    },

    grunt: {
        files: ['Gruntfile.js', getPath('grunt') + '**/*.js'],
        tasks: ['jshint:grunt']
    }
};
