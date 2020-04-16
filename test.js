import test from 'ava';
import numberIsFloat from '.';

test('main', t => {
	t.true(numberIsFloat(1.1));
	t.true(numberIsFloat(-1.1));
	t.true(numberIsFloat(Number.MAX_VALUE - 0.1));
	t.false(numberIsFloat(1));
	t.false(numberIsFloat(NaN));
	t.false(numberIsFloat(Infinity));
	t.false(numberIsFloat(-Infinity));
	t.false(numberIsFloat(null));
	t.false(numberIsFloat(undefined));
});
