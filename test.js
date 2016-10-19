/* eslint no-array-constructor: 0 */
import test from 'ava';
import fn from './';

test('async: all following calls return true', async t => {
	t.true(await fn([]));
	t.true(await fn(['']));
	t.true(await fn(new Array()));
	t.true(await fn(Array.prototype));
});

test('async: all following calls return false', async t => {
	t.false(await fn({}));
	t.false(await fn(''));
	t.false(await fn(function () {}));
	t.false(await fn(() => {}));
	t.false(await fn(true));
	t.false(await fn(false));
	t.false(await fn(null));
	t.false(await fn(undefined));
	t.false(await fn());
});

test('sync: all following calls return true', t => {
	t.true(fn.sync([]));
	t.true(fn.sync(['albums']));
	t.true(fn.sync(new Array()));
	t.true(fn.sync(Array.prototype));
});

test('sync: all following calls return false', t => {
	t.false(fn.sync({}));
	t.false(fn.sync(''));
	t.false(fn.sync(function () {}));
	t.false(fn.sync(() => {}));
	t.false(fn.sync(true));
	t.false(fn.sync(false));
	t.false(fn.sync(null));
	t.false(fn.sync(undefined));
	t.false(fn.sync());
});
