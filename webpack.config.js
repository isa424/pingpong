const {resolve} = require("path");

module.exports = {
	entry: resolve("./source/index.js"),
	output: {
		filename: "bundle.js",
		path: resolve("./public/")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			}
		]
	},
	mode: "development",
	externals: {
		p5: "p5"
	}
};
