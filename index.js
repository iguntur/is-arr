'use strict';

/**
 * Async
 *
 * @param  {Any}       value
 * @return {Functions} Promise [Boolean]
 */
module.exports = value => new Promise(resolve => {
	value = Array.isArray(value);
	resolve(value);
});

/**
 * Sync
 *
 * @param  {Any}     value
 * @return {Boolean}
 */
module.exports.sync = value => {
	return Array.isArray(value);
};
