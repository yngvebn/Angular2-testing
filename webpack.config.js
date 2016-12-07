/**
 * @author: @AngularClass
 */

//const helpers = require('./helpers');
//const webpackMerge = require('webpack-merge'); // used to merge webpack configs
//const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const webpack = require('webpack');

module.exports = {
    entry: {
        game: './app/main.ts',
        vendor: ['@angular/core',
                '@angular/common',
                '@angular/compiler',
                '@angular/platform-browser',
                '@angular/platform-browser-dynamic',
                '@angular/http',
                '@angular/router',
                '@angular/forms',
                'reflect-metadata',
                'rxjs',
                'lodash',
                'moment']
    },
    output: {
        filename: '[name].js',
        path: require('path').resolve('./js/')
    },
    // Turn on sourcemaps
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    }, // Add minification
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    devServer: { inline: true },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /Scripts/ },
            { test: /\.html$/, loader: 'html' }
        ]
    }
}