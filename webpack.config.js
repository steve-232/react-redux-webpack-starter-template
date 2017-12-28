var webpack = require("webpack");
var path = require("path");
var extractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var env = process.env.NODE_ENV;
var plugins = [
  new extractTextPlugin({
   filename: 'main.css'
  }),
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify(env)
    }
  }),
]

if (env === 'prod') {
  plugins.push(
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    })
  )
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/assets"),
    filename: "main.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'webpack.config.js'),
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "stage-0", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: plugins
};
