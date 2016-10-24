'use strict';

var Promise = require('pinkie-promise');

var toString = Object.prototype.toString;

/**
 * Array.isArray polyfyll
 *     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill
 *
 * @param  {Object} obj
 * @return {Boolean}
 */
function arrayIsArray(obj) {
	return toString.call(obj) === '[object Array]';
}

/**
 * Async
 *
 * @param  {Any}       value
 * @return {Functions} Promise [Boolean]
 */
module.exports = function (value) {
	return new Promise(function (resolve) {
		resolve(arrayIsArray(value));
	});
};

/**
 * Sync
 *
 * @param  {Any}     value
 * @return {Boolean}
 */
module.exports.sync = function (value) {
	return arrayIsArray(value);
};
