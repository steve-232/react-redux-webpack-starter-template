var path = require("path");
var extractTextPlugin = require("extract-text-webpack-plugin");

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
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
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
  plugins: [
    new extractTextPlugin({
     filename: 'main.css'
    })
  ]
};
