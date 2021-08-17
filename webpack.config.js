const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

const clientConfig = {
  entry: "./src/client/Client.ts",
  target: "web",
  resolve: {
    extensions: [".ts"]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "MMM-RAIN-MAP.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src/client")],
        loader: "ts-loader"
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};

module.exports = [clientConfig];
