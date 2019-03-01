const path = require('path')
// html
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// 合并webpack-config
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')
// const isDev = process.env.NODE_ENV === 'development'

let config

const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  hot: true
}

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, '../index.html')
  })
]

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  // import Vue from 'vue'
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPluins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
