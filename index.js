'use strict';

/**
 * Async - Check value if is array
 *
 * @param  {Any}       value
 * @return {Functions} Promise [Boolean]
 */
module.exports = value => new Promise(resolve => {
	value = Array.isArray(value);
	resolve(value);
});

/**
 * Sync - Check value if is array
 *
 * @param  {Any}     value
 * @return {Boolean}
 */
module.exports.sync = value => {
	return Array.isArray(value);
};
