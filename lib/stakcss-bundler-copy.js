/** ------------------------------------------------------------------------------------------------
 *  @filename  stakcss-copy.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  Stakcss bundler which copies files to config.content.
 ** --------------------------------------------------------------------------------------------- */

const fs = require('fs-extra');

module.exports = (config = {}) => {
	if (!config.content) {
		if (config.source.length > 1) {
			throw new Error('`stakEachFile` must be true to use stakcss-bundler-copy.');
		}
		return fs.readFile(config.source[0]).then((content) => {
			config.content = content;
			return config;
		});
	}
	return config;
};
