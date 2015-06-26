'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn(1.1));
	t.assert(fn(-1.1));
	t.assert(fn(Number.MAX_VALUE - 0.1));
	t.assert(!fn(1));
	t.assert(!fn(NaN));
	t.assert(!fn(Infinity));
	t.assert(!fn(-Infinity));
	t.assert(!fn(null));
	t.assert(!fn(undefined));
	t.end();
});
