var webpack = require('webpack')

module.exports = {
	entry: {
		bundle: './index.js',
		vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux']
	},

	output: {
		path: 'public',
		filename: '[name].js',
		publicPath: '/admin'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-1']
				}
			}
		]
	},

	postcss: [
		require('autoprefixer')
	],

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
	]
}