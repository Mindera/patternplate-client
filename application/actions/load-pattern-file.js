'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getError = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(response, payload) {
		var json, error;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return response.json();

					case 3:
						json = _context.sent;
						error = new Error(json.message);

						error.payload = payload;
						return _context.abrupt('return', (0, _lodash.merge)(error, json));

					case 9:
						_context.prev = 9;
						_context.t0 = _context['catch'](0);

						_context.t0.message = ['Request for ' + response.uri + ' failed with code ' + response.status + ': ' + response.statusText, _context.t0.message].join('\n');
						_context.t0.payload = payload;
						return _context.abrupt('return', _context.t0);

					case 14:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[0, 9]]);
	}));

	return function getError(_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();

var _lodash = require('lodash');

var _promiseThunkAction = require('./promise-thunk-action');

var _fetch = require('../utils/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _promiseThunkAction.createPromiseThunkAction)('LOAD_PATTERN_FILE', function () {
	var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(payload) {
		var id, base, uri, response, error, source;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						id = payload.id, base = payload.base;
						uri = base + 'api/file/' + id;
						_context2.next = 4;
						return (0, _fetch2.default)(uri);

					case 4:
						response = _context2.sent;

						if (!(response.status >= 400)) {
							_context2.next = 10;
							break;
						}

						_context2.next = 8;
						return getError(response, payload);

					case 8:
						error = _context2.sent;
						throw error;

					case 10:
						_context2.next = 12;
						return response.text();

					case 12:
						source = _context2.sent;
						return _context2.abrupt('return', {
							id: id,
							source: source
						});

					case 14:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function (_x3) {
		return _ref2.apply(this, arguments);
	};
}());
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2xvYWQtcGF0dGVybi1maWxlLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNlIiwicGF5bG9hZCIsImpzb24iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsInVyaSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJqb2luIiwiZ2V0RXJyb3IiLCJpZCIsImJhc2UiLCJ0ZXh0Iiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7dUVBSUEsaUJBQXdCQSxRQUF4QixFQUFrQ0MsT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRXFCRCxTQUFTRSxJQUFULEVBRnJCOztBQUFBO0FBRVFBLFVBRlI7QUFHUUMsV0FIUixHQUdnQixJQUFJQyxLQUFKLENBQVVGLEtBQUtHLE9BQWYsQ0FIaEI7O0FBSUVGLFlBQU1GLE9BQU4sR0FBZ0JBLE9BQWhCO0FBSkYsdUNBS1MsbUJBQU1FLEtBQU4sRUFBYUQsSUFBYixDQUxUOztBQUFBO0FBQUE7QUFBQTs7QUFPRSxrQkFBTUcsT0FBTixHQUFnQixrQkFDQUwsU0FBU00sR0FEVCwwQkFDaUNOLFNBQVNPLE1BRDFDLFVBQ3FEUCxTQUFTUSxVQUQ5RCxFQUVmLFlBQU1ILE9BRlMsRUFHZEksSUFIYyxDQUdULElBSFMsQ0FBaEI7QUFJQSxrQkFBTVIsT0FBTixHQUFnQkEsT0FBaEI7QUFYRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFOztpQkFBZVMsUTs7Ozs7QUFKZjs7QUFDQTs7QUFDQTs7Ozs7O2tCQWtCZSxrREFBeUIsbUJBQXpCO0FBQUEsd0VBQThDLGtCQUFNVCxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyRFUsUUFEcUQsR0FDekNWLE9BRHlDLENBQ3JEVSxFQURxRCxFQUNqREMsSUFEaUQsR0FDekNYLE9BRHlDLENBQ2pEVyxJQURpRDtBQUV0RE4sU0FGc0QsR0FFN0NNLElBRjZDLGlCQUU3QkQsRUFGNkI7QUFBQTtBQUFBLGFBR3JDLHFCQUFNTCxHQUFOLENBSHFDOztBQUFBO0FBR3RETixjQUhzRDs7QUFBQSxZQUt4REEsU0FBU08sTUFBVCxJQUFtQixHQUxxQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGFBTXZDRyxTQUFTVixRQUFULEVBQW1CQyxPQUFuQixDQU51Qzs7QUFBQTtBQU1yREUsV0FOcUQ7QUFBQSxZQU9yREEsS0FQcUQ7O0FBQUE7QUFBQTtBQUFBLGFBVXZDSCxTQUFTYSxJQUFULEVBVnVDOztBQUFBO0FBVXREQyxZQVZzRDtBQUFBLHdDQVlyRDtBQUNOSCxhQURNO0FBRU5HO0FBRk0sT0FacUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBOUM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSSIsImZpbGUiOiJsb2FkLXBhdHRlcm4tZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2NyZWF0ZVByb21pc2VUaHVua0FjdGlvbn0gZnJvbSAnLi9wcm9taXNlLXRodW5rLWFjdGlvbic7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRFcnJvcihyZXNwb25zZSwgcGF5bG9hZCkge1xuXHR0cnkge1xuXHRcdGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoanNvbi5tZXNzYWdlKTtcblx0XHRlcnJvci5wYXlsb2FkID0gcGF5bG9hZDtcblx0XHRyZXR1cm4gbWVyZ2UoZXJyb3IsIGpzb24pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yLm1lc3NhZ2UgPSBbXG5cdFx0XHRgUmVxdWVzdCBmb3IgJHtyZXNwb25zZS51cml9IGZhaWxlZCB3aXRoIGNvZGUgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCxcblx0XHRcdGVycm9yLm1lc3NhZ2Vcblx0XHRdLmpvaW4oJ1xcbicpO1xuXHRcdGVycm9yLnBheWxvYWQgPSBwYXlsb2FkO1xuXHRcdHJldHVybiBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9taXNlVGh1bmtBY3Rpb24oJ0xPQURfUEFUVEVSTl9GSUxFJywgYXN5bmMgcGF5bG9hZCA9PiB7XG5cdGNvbnN0IHtpZCwgYmFzZX0gPSBwYXlsb2FkO1xuXHRjb25zdCB1cmkgPSBgJHtiYXNlfWFwaS9maWxlLyR7aWR9YDtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmkpO1xuXG5cdGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBhd2FpdCBnZXRFcnJvcihyZXNwb25zZSwgcGF5bG9hZCk7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cblxuXHRjb25zdCBzb3VyY2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cblx0cmV0dXJuIHtcblx0XHRpZCxcblx0XHRzb3VyY2Vcblx0fTtcbn0pO1xuIl19