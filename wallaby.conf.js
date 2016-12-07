var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
        'config/spec-bundle.js',
        'tests/**/*spec.js'
    ],

    module: {
        loaders: [
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /karma-require/, loader: 'null' },
            // { test: /\.ts$/, loader: 'ts-loader', exclude: /Scripts/ }
        ]
    }
});

module.exports = function () {

    return {
        files: [
            { pattern: 'config/spec-bundle.js', load: false },
            { pattern: 'config/karma-require.js', load: false },
            { pattern: 'js/vendor.bundle.js', load: false },
            { pattern: 'app/**/*.html', load: false },
            { pattern: 'app/**/*.ts', load: false }
        ],

        tests: [
            { pattern: 'tests/**/*.spec.ts', load: false }
        ],

        testFramework: 'jasmine',

        postprocessor: webpackPostprocessor,

        setup: function () {
            window.__moduleBundler.loadTests();
        },

        debug: true
    };
};