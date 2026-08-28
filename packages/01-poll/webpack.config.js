const { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: {
    client: "./client/client.jsx",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8080,
    static: "public",
    hot: false,
    liveReload: true,
    proxy: [
      {
        context: ["/data", "/vote"],
        target: "http://localhost:7777",
      },
    ],
  },
};
