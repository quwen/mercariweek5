const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "[name].js",
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "./src"),
        use: [
          {
            loader: "svelte-loader",
          },
        ],
      },
    ],
  },
};
