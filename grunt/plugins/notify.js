var props = {
    sass: 'SASS',
    eslint: 'ESLINT',
    jscs: 'JSCS',
    browserify: 'Browserify',
    jshint: 'JSHINT',
    title: ' Error',
    message: 'An error occured while compiling '
};

module.exports = {

    sass: {
        options: {
            title: props.sass + props.title,
            message: props.message + props.sass
        }
    },

    eslint: {
        options: {
            title: props.eslint + props.title,
            message: props.message + props.eslint
        }
    },

    jscs: {
        options: {
            title: props.jscs + props.title,
            message: props.message + props.jscs
        }
    },

    browserify: {
        options: {
            title: props.browserify + props.title,
            message: props.message + props.browserify
        }
    },

    jshint: {
        options: {
            title: props.jshint + props.title,
            message: props.message + props.jshint
        }
    }
};
