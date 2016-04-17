module.exports = {

    browserPort: 8070,
    UIPort: 8071,

    sourceDir: './src/',
    buildDir: './dist/',

    LOCALES: ['en', 'fr'],

    PATHS: {
        SRC: 'src/',
        DEST: 'dist/',
        ASSETS: 'assets/',
        CSS: 'app/',
        IMG: 'assets/images/',
        FONTS: 'assets/fonts/',
        JS: 'app/',
        SASS: 'app/',
        GRUNT: 'grunt/',
        DEPLOY: 'deploy/'
    },

    gzip: {
        src: [
            'dist/html/en/index.html',
            'dist/assets/css/styles.css',
            'dist/assets/js/libs.js',
            'dist/assets/js/app.js'
        ],
        dest: 'dist',
        options: {}
    },

    concat: {
        libsSrc: [
            'src/app/vendor/jquery-2.2.1.js',
            'src/app/vendor/createjs/createjs-2015.11.26.min.js'
        ],
        libsDest: 'dist/app/libs.js'
    },

    sass: {
        dev: {
            errLogToConsole: true,
            outputStyle: 'expanded',
            sourceMap: true,
            sourceMapContents: true
        },
        prod: {
            errLogToConsole: true,
            outputStyle: 'compressed'
        }
    }
};
