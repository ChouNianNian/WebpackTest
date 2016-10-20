var webpack = require('webpack');
var path=require('path')
module.exports = {
  entry: {
    index:[
      './public/javascript/entry.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}