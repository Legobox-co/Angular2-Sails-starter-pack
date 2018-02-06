var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
// var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': path.resolve(__dirname, '../../assets/app/polyfills.ts') ,
    'vendor': path.resolve(__dirname, '../../assets/app/vendor.ts'),
    'app':  path.resolve(__dirname, '../../assets/app/main.ts')
},

    resolve: {
      extensions: [
        '',
        '.js',
        '.ts',
        '.html'
      ]
    },
     module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'ts-loader' , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader:[ 'html-loader','raw-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ]
  },
};