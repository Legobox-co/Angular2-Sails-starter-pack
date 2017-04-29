var webpack = require('webpack');
 
// compile js assets into a single bundle file 
module.exports.webpack = {
  options: {
    devtool: 'eval',
    entry: [
      './assets/js',
    ],
    output: {
      path: path.resolve(__dirname, '.tmp/public/js'),
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        // requires "npm install --save-dev babel-loader" 
        { test: /\.js$/, loaders: ['babel-loader?stage=0'] },
        { test: /\.css$/, loader: 'style!css' }
      ]
    }
  },
 
  // docs: https://webpack.github.io/docs/node.js-api.html#compiler 
  watchOptions: {
    aggregateTimeout: 300
  }
};