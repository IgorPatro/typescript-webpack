const path = require("path")

module.exports = {
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: process.env.ENV ?? "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9000,
  },
}
