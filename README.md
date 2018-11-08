# Stakcss Copy Bundler

[![Greenkeeper badge](https://badges.greenkeeper.io/brikcss/stakcss-bundler-copy.svg)](https://greenkeeper.io/)

> Bundler for [Stakcss](https://github.com/brikcss/stakcss) that simply copies assets from `config.source` to `config.content`.

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/stakcss-bundler-copy">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/stakcss-bundler-copy.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/stakcss-bundler-copy">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/stakcss-bundler-copy.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/stakcss-bundler-copy/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/stakcss-bundler-copy">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/ddc103aeef214a15801eb824f12c97bb/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<a href='https://coveralls.io/github/brikcss/stakcss-bundler-copy?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/stakcss-bundler-copy/master.svg?style=flat-square' alt='Coverage Status' />
	</a>
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

## Environment support

This is a bundler plugin for [Stakcss](https://github.com/brikcss/stakcss). See [Stakcss](https://github.com/brikcss/stakcss) for full details.

## Install

```sh
npm install @brikcss/stakcss @brikcss/stakcss-bundler-copy --save-dev
```

## Usage

See [Stakcss](https://github.com/brikcss/stakcss) for usage details. This bundler has no configuration, simply add it to Stakcss' bundlers:

- Node:
	```js
	stak({
		bundlers: ['@brikcss/stakcss-bundler-copy']
	});
	```
- CLI:
	```sh
	stak ... --bundlers=@brikcss/stakcss-bundler-copy
	```
