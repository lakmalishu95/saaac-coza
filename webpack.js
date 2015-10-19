var webpack = require('webpack');

//var path = require('path');
//var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        //app: path.resolve(__dirname, 'app/main.js'),
        app: './src/client.js',

        // Since react is installed as a node module, node_modules/react,
        // we can point to it directly, just like require('react');
        vendors: ['react', 'react-router']
    },
    output: {
        // path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.json$/, exclude: /\/node_modules\//, loader: 'json-loader' },
            { test: /\.js$/, exclude: /\/node_modules\//, loader: 'babel-loader' },
            { test: /\.jsx$/, exclude: /\/node_modules\//, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')//,
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //})
    ]
};

module.exports = config;