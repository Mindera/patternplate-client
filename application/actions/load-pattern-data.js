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

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _promiseThunkAction.createPromiseThunkAction)('LOAD_PATTERN_DATA', function () {
	var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(payload) {
		var id, query, base, uri, response;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						id = payload.id, query = payload.query, base = payload.options.base;
						uri = _urlQuery2.default.format({
							pathname: base + 'api/pattern/' + id + '.json', query: query
						});
						_context2.next = 4;
						return (0, _fetch2.default)(uri);

					case 4:
						response = _context2.sent;

						if (!(response.status >= 400)) {
							_context2.next = 9;
							break;
						}

						_context2.next = 8;
						return getError(response, payload);

					case 8:
						throw _context2.sent;

					case 9:
						return _context2.abrupt('return', response.json());

					case 10:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2xvYWQtcGF0dGVybi1kYXRhLmpzIl0sIm5hbWVzIjpbInJlc3BvbnNlIiwicGF5bG9hZCIsImpzb24iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsInVyaSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJqb2luIiwiZ2V0RXJyb3IiLCJpZCIsInF1ZXJ5IiwiYmFzZSIsIm9wdGlvbnMiLCJmb3JtYXQiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3VFQUtBLGlCQUF3QkEsUUFBeEIsRUFBa0NDLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVxQkQsU0FBU0UsSUFBVCxFQUZyQjs7QUFBQTtBQUVRQSxVQUZSO0FBR1FDLFdBSFIsR0FHZ0IsSUFBSUMsS0FBSixDQUFVRixLQUFLRyxPQUFmLENBSGhCOztBQUlFRixZQUFNRixPQUFOLEdBQWdCQSxPQUFoQjtBQUpGLHVDQUtTLG1CQUFNRSxLQUFOLEVBQWFELElBQWIsQ0FMVDs7QUFBQTtBQUFBO0FBQUE7O0FBT0Usa0JBQU1HLE9BQU4sR0FBZ0Isa0JBQ0FMLFNBQVNNLEdBRFQsMEJBQ2lDTixTQUFTTyxNQUQxQyxVQUNxRFAsU0FBU1EsVUFEOUQsRUFFZixZQUFNSCxPQUZTLEVBR2RJLElBSGMsQ0FHVCxJQUhTLENBQWhCO0FBSUEsa0JBQU1SLE9BQU4sR0FBZ0JBLE9BQWhCO0FBWEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRTs7aUJBQWVTLFE7Ozs7O0FBTGY7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQWtCZSxrREFBeUIsbUJBQXpCO0FBQUEsd0VBQThDLGtCQUFNVCxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyRFUsUUFEcUQsR0FDdkJWLE9BRHVCLENBQ3JEVSxFQURxRCxFQUNqREMsS0FEaUQsR0FDdkJYLE9BRHVCLENBQ2pEVyxLQURpRCxFQUNoQ0MsSUFEZ0MsR0FDdkJaLE9BRHVCLENBQzFDYSxPQUQwQyxDQUNoQ0QsSUFEZ0M7QUFFdERQLFNBRnNELEdBRWhELG1CQUFTUyxNQUFULENBQWdCO0FBQzNCQyxpQkFBYUgsSUFBYixvQkFBZ0NGLEVBQWhDLFVBRDJCLEVBQ2dCQztBQURoQixPQUFoQixDQUZnRDtBQUFBO0FBQUEsYUFNckMscUJBQU1OLEdBQU4sQ0FOcUM7O0FBQUE7QUFNdEROLGNBTnNEOztBQUFBLFlBUXhEQSxTQUFTTyxNQUFULElBQW1CLEdBUnFDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsYUFTL0NHLFNBQVNWLFFBQVQsRUFBbUJDLE9BQW5CLENBVCtDOztBQUFBO0FBQUE7O0FBQUE7QUFBQSx3Q0FZckRELFNBQVNFLElBQVQsRUFacUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBOUM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSSIsImZpbGUiOiJsb2FkLXBhdHRlcm4tZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2NyZWF0ZVByb21pc2VUaHVua0FjdGlvbn0gZnJvbSAnLi9wcm9taXNlLXRodW5rLWFjdGlvbic7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4uL3V0aWxzL3VybC1xdWVyeSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVycm9yKHJlc3BvbnNlLCBwYXlsb2FkKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihqc29uLm1lc3NhZ2UpO1xuXHRcdGVycm9yLnBheWxvYWQgPSBwYXlsb2FkO1xuXHRcdHJldHVybiBtZXJnZShlcnJvciwganNvbik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3IubWVzc2FnZSA9IFtcblx0XHRcdGBSZXF1ZXN0IGZvciAke3Jlc3BvbnNlLnVyaX0gZmFpbGVkIHdpdGggY29kZSAke3Jlc3BvbnNlLnN0YXR1c306ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gLFxuXHRcdFx0ZXJyb3IubWVzc2FnZVxuXHRcdF0uam9pbignXFxuJyk7XG5cdFx0ZXJyb3IucGF5bG9hZCA9IHBheWxvYWQ7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb21pc2VUaHVua0FjdGlvbignTE9BRF9QQVRURVJOX0RBVEEnLCBhc3luYyBwYXlsb2FkID0+IHtcblx0Y29uc3Qge2lkLCBxdWVyeSwgb3B0aW9uczoge2Jhc2V9fSA9IHBheWxvYWQ7XG5cdGNvbnN0IHVyaSA9IHVybFF1ZXJ5LmZvcm1hdCh7XG5cdFx0cGF0aG5hbWU6IGAke2Jhc2V9YXBpL3BhdHRlcm4vJHtpZH0uanNvbmAsIHF1ZXJ5XG5cdH0pO1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpKTtcblxuXHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuXHRcdHRocm93IGF3YWl0IGdldEVycm9yKHJlc3BvbnNlLCBwYXlsb2FkKTtcblx0fVxuXG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XG59KTtcbiJdfQ==