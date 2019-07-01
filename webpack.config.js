const path = require(`path`)

module.exports = {
	entry: {
		"main-bundle": `./src/main.js`,
	},
	output: {
		path: path.resolve(__dirname, `./src/public`),
		filename: `[name].js`,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: `babel-loader`,
					options: {
						presets: [`@babel/preset-env`],
						plugins: [
							[`@babel/transform-runtime`]
						],
					},
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [`eslint-loader`],
			},
			{
				test: /\.css$/,
				use: [
					`style-loader`,
					`css-loader`,
				],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: `file-loader`,
				options: {
					publicPath: `/src/`,
					name: `[name].[ext]?[hash]`,
				},
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: `url-loader`,
				options: {
					publicPath: `/src/`,
					name: `[name].[ext]?[hash]`,
					limit: 10000,
				},
			},
		],
	},	
	devServer: {
		hot : true,
		contentBase: path.join(__dirname, `src/public`),
		watchContentBase: true,
		historyApiFallback: true,
		compress: true,
		host: `0.0.0.0`,
		disableHostCheck: true,
		port: 9000,
	},
	devtool: `inline-source-map`,
}
