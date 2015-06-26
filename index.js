'use strict';
var numberIsFinite = require('is-finite');

module.exports = function (x) {
	return numberIsFinite(x) && x !== (x | 0);
};
