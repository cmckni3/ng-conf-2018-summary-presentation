const TerserPlugin = require('terser-webpack-plugin');
/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BASE_HREF = '/';

if (process.env.BASE_HREF) {
  BASE_HREF = process.env.BASE_HREF;
}

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", "./index"],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      baseUrl: BASE_HREF
    })
  ],

  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",

            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",

            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",

            options: {
              limit: 10000,
              mimetype: "image/svg+xml"
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimize: true,

    minimizer: [new TerserPlugin()]
  }
};
