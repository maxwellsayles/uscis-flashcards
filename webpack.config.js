const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
});
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'bundle.js'
    },
    module: {
	rules: [
	    {
		test: /\.m?js$/,
		exclude: /(node_modules|bower_components)/,
		use: {
		    loader: 'babel-loader',
		    options: {
			presets: [
			    "@babel/preset-flow",
			    "@babel/preset-env",
			    "@babel/preset-react",
			],
			plugins: [
			    "@babel/plugin-proposal-class-properties",
			],
		    },
		},
	    },
	],
    },
    plugins: [HtmlWebpackPluginConfig, new HtmlInlineScriptPlugin()],
}
