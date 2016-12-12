/**
 * @author: @AngularClass
 */

//const helpers = require('./helpers');
//const webpackMerge = require('webpack-merge'); // used to merge webpack configs
//const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const webpack = require('webpack');
const path = require('path');
const assets = path.join(__dirname, "wwwroot", "assets");
const glob = require("glob");

const entries = {};
const files = glob.sync("./Features/*/*.ts");
files.forEach(file => {
    var pattern = "./Features/(.+?)/(.+?)\.ts$";
    var matches = file.match(pattern);
    var name = matches[2];
    var feat = matches[1];
    if(name === feat && name !== 'shared'){
        entries[feat] = file;
    }
});
entries.vendor= ['@angular/core',
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
                'moment',
                './features/polyfills',
                './features/shared/shared']
module.exports = {
    entry: entries,
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
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
      //  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"shared", /* filename= */"shared.bundle.js")
    ],
    devServer: { inline: true },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /Scripts/ },
            { test: /\.html$/, loader: 'html' }
        ]
    }
}