const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    chunkFilename: "[name].[hash:8].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: "react app",
      template: "public/index.html",
      inject: "body"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          test: /node_modules/,
          name: "vendor",
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100
        },
        common: {
          chunks: "all",
          test: /[\\/]src[\\/]js[\\/]/,
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 60
        },
        // styles: {
        //   name: "styles" + timestamp,
        //   test: /\.(sa|sc|c)ss$/,
        //   chunks: "all",
        //   enforce: true
        // },
        runtimeChunk: {
          name: "manifest"
        }
      }
    }
  }
};
