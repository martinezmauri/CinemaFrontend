const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./scripts/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
};
