/* eslint-env mocha */
const assert = require('assert');
const rm = require('rimraf');
const fs = require('fs-extra');
const stak = require('@brikcss/stakcss');

describe('copy()', () => {
	afterEach(() => {
		rm.sync('.temp');
	});

	it('copies content to output path', () => {
		return stak({
			source: 'test/fixtures/**/*',
			output: '.temp/',
			bundlers: ['./lib/stakcss-bundler-copy.js']
		}).then(() => {
			assert.equal(
				fs.readFileSync('.temp/sample1.md', 'utf8'),
				fs.readFileSync('test/fixtures/sample1.md', 'utf8')
			);
			assert.equal(
				fs.readFileSync('.temp/sample2.md', 'utf8'),
				fs.readFileSync('test/fixtures/sample2.md', 'utf8')
			);
		});
	});

	it('returns `config` when content already exists', () => {
		return stak({
			content: '# Testing, testing...',
			output: '.temp/sample1.md',
			bundlers: ['./lib/stakcss-bundler-copy.js']
		}).then(() => {
			assert.equal(fs.readFileSync('.temp/sample1.md', 'utf8'), '# Testing, testing...');
		});
	});
});
