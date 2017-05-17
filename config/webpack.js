var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var commonConfig = require('./webpack/webpack.common.js');
var path = require('path');


// compile js assets into a single bundle file 
module.exports.webpack={
    options:{
      devtool: 'eval',

    entry: {
      'polyfills': path.resolve(__dirname, '../assets/app/polyfills') ,
      'vendor': path.resolve(__dirname, '../assets/app/vendor'),
      'app':  path.resolve(__dirname, '../assets/app/main')  
    },

    output: {
      path: path.resolve(__dirname, '../.tmp/public'),
      publicPath: "/",
      filename: '[name].js',
      // chunkFilename: '[id].[hash].chunk.js'
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
        loaders:[ 'raw-loader']
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

  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],

},

    
 
  // docs: https://webpack.github.io/docs/node.js-api.html#compiler 
  watchOptions: {
    aggregateTimeout: 600
  } 
};

