const webpack = require('webpack');
const path = require('path');
const banner = `// ==UserScript==
// @name         Mp6's Cookie Addons
// @source       https://github.com/Mp6/clickeraddons
// @version      0.20
// @description  Minor addons for cookie clicker
// @author       Mp6
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
// @run-at       document-idle
// ==/UserScript==
`;

module.exports = {
	entry: './userscript.js',
	mode: 'development',
	optimization: {
        minimize: false
    },
	//mode: 'production',
	output: {
		filename: 'bundle.min.js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new webpack.BannerPlugin(banner),
	],
}