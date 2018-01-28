module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
            'examples/es6-classes.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'examples/es6-classes.js': ['browserify'],
            'spec/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: ['babelify']
        },

        // define reporters, port, logLevel, browsers etc.
    });
};