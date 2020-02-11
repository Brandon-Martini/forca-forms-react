var path = require("path");
module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
