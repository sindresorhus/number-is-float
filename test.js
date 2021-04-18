import test from 'ava';
import numberIsFloat from './index.js';

test('main', t => {
	t.true(numberIsFloat(1.1));
	t.true(numberIsFloat(-1.1));
	t.true(numberIsFloat(Number.MAX_VALUE - 0.1));
	t.false(numberIsFloat(1));
	t.false(numberIsFloat(Number.NaN));
	t.false(numberIsFloat(Number.POSITIVE_INFINITY));
	t.false(numberIsFloat(Number.NEGATIVE_INFINITY));
	t.false(numberIsFloat(null));
	t.false(numberIsFloat(undefined));
});
