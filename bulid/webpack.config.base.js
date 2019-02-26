const path = require('path')
// html
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        // style-loader是将外部css文件注入html文件中，最后将html文件中的css 用css-loader进行解析
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
