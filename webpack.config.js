var webpack = require('webpack');
var path = require('path')
module.exports = {
    entry: {
        index: [
            './public/javascript/entry.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: './build/'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader?limit=8192&name=../../public/images/[name].[ext]' },
            { test: /\.js[x]?$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
    plugins: [
        //查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        // new webpack.optimize.DedupePlugin()
    ]
}
