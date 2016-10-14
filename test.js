import test from 'ava';
import fn from './';

test('@async', async t => {
	t.true(await fn([]));
	t.true(await fn(['', {}]));
	t.false(await fn({}));
	t.false(await fn(''));
	t.false(await fn(function () {}));
	t.false(await fn(() => {}));
});

test('@sync', t => {
	t.true(fn.sync([]));
	t.true(fn.sync(['albums']));
	t.false(fn.sync({}));
	t.false(fn.sync(''));
	t.false(fn.sync(function () {}));
	t.false(fn.sync(() => {}));
});
