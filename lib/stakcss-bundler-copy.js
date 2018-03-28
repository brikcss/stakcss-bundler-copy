/** ------------------------------------------------------------------------------------------------
 *  @filename  stakcss-copy.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  Stakcss bundler which copies files to config.content.
 ** --------------------------------------------------------------------------------------------- */

const fs = require('fs-extra');

module.exports = (config = {}) => {
	if (!config.content) {
		const copyPromises = [];
		config.source.forEach((filepath) => {
			copyPromises.push(fs.readFile(filepath, 'utf8'));
		});
		return Promise.all(copyPromises).then((results) => {
			config.content += results.join('\n');
			return config;
		});
	}
	return config;
};
