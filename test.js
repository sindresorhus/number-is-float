import test from 'ava';
import fn from './';

test(t => {
	t.true(fn(1.1));
	t.true(fn(-1.1));
	t.true(fn(Number.MAX_VALUE - 0.1));
	t.false(fn(1));
	t.false(fn(NaN));
	t.false(fn(Infinity));
	t.false(fn(-Infinity));
	t.false(fn(null));
	t.false(fn(undefined));
});
