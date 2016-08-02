var webpack = require('webpack');

module.exports = {
  entry: "./src/app.js",
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: "app.min.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
