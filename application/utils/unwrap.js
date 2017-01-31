'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

function unwrap(fn, path) {
	return function (e) {
		return fn((0, _lodash.get)(e, path));
	};
}

exports.default = (0, _lodash.memoize)(unwrap);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy91bndyYXAuanMiXSwibmFtZXMiOlsidW53cmFwIiwiZm4iLCJwYXRoIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ3pCLFFBQU87QUFBQSxTQUFLRCxHQUFHLGlCQUFJRSxDQUFKLEVBQU9ELElBQVAsQ0FBSCxDQUFMO0FBQUEsRUFBUDtBQUNBOztrQkFFYyxxQkFBUUYsTUFBUixDIiwiZmlsZSI6InVud3JhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0LCBtZW1vaXplfSBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiB1bndyYXAoZm4sIHBhdGgpIHtcblx0cmV0dXJuIGUgPT4gZm4oZ2V0KGUsIHBhdGgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZSh1bndyYXApO1xuIl19