'use strict';

var Promise = require('pinkie-promise');

/**
 * Async
 *
 * @param  {Any}       value
 * @return {Functions} Promise [Boolean]
 */
module.exports = function (value) {
	return new Promise(function (resolve) {
		resolve(Array.isArray(value));
	});
};

/**
 * Sync
 *
 * @param  {Any}     value
 * @return {Boolean}
 */
module.exports.sync = function (value) {
	return Array.isArray(value);
};
