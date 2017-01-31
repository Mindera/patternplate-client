#!/usr/bin/env node
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var application;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						application = void 0;
						_context.prev = 1;
						_context.next = 4;
						return (0, _2.default)(options);

					case 4:
						application = _context.sent;
						_context.next = 11;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](1);

						console.trace(_context.t0);
						throw new Error(_context.t0);

					case 11:
						_context.prev = 11;
						_context.next = 14;
						return application.start();

					case 14:
						_context.next = 20;
						break;

					case 16:
						_context.prev = 16;
						_context.t1 = _context['catch'](11);

						application.log.error(_context.t1);
						throw new Error(_context.t1);

					case 20:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[1, 7], [11, 16]]);
	}));

	return function main() {
		return _ref.apply(this, arguments);
	};
}();

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = (0, _minimist2.default)(process.argv.slice(1));

main(args).catch(function (err) {
	setTimeout(function () {
		throw err;
	});
});

// Catch unhandled rejections globally
process.on('unhandledRejection', function (reason, promise) {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9iaW5hcnkvcGF0dGVybnBsYXRlLWNsaWVudC5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiYXBwbGljYXRpb24iLCJjb25zb2xlIiwidHJhY2UiLCJFcnJvciIsInN0YXJ0IiwibG9nIiwiZXJyb3IiLCJtYWluIiwiYXJncyIsInByb2Nlc3MiLCJhcmd2Iiwic2xpY2UiLCJjYXRjaCIsInNldFRpbWVvdXQiLCJlcnIiLCJvbiIsInJlYXNvbiIsInByb21pc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3VFQU9BO0FBQUEsTUFBb0JBLE9BQXBCLHVFQUE4QixFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDS0MsaUJBREw7QUFBQTtBQUFBO0FBQUEsYUFJc0IsZ0JBQWNELE9BQWQsQ0FKdEI7O0FBQUE7QUFJRUMsaUJBSkY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFNRUMsY0FBUUMsS0FBUjtBQU5GLFlBT1EsSUFBSUMsS0FBSixhQVBSOztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBV1FILFlBQVlJLEtBQVosRUFYUjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWFFSixrQkFBWUssR0FBWixDQUFnQkMsS0FBaEI7QUFiRixZQWNRLElBQUlILEtBQUosYUFkUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFOztpQkFBZUksSTs7Ozs7QUFMZjs7QUFDQTs7OztBQUVBOzs7Ozs7QUFvQkEsSUFBTUMsT0FBTyx3QkFBU0MsUUFBUUMsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBQVQsQ0FBYjs7QUFFQUosS0FBS0MsSUFBTCxFQUNFSSxLQURGLENBQ1EsZUFBTztBQUNiQyxZQUFXLFlBQU07QUFDaEIsUUFBTUMsR0FBTjtBQUNBLEVBRkQ7QUFHQSxDQUxGOztBQU9BO0FBQ0FMLFFBQVFNLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxVQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBcUI7QUFDckRoQixTQUFRSSxHQUFSLENBQVksa0NBQVosRUFBZ0RZLE9BQWhELEVBQXlELFdBQXpELEVBQXNFRCxNQUF0RTtBQUNBLE9BQU1BLE1BQU47QUFDQSxDQUhEIiwiZmlsZSI6InBhdHRlcm5wbGF0ZS1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnO1xuXG5pbXBvcnQgcGF0dGVybkNsaWVudCBmcm9tICcuLi8nO1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKG9wdGlvbnMgPSB7fSkge1xuXHRsZXQgYXBwbGljYXRpb247XG5cblx0dHJ5IHtcblx0XHRhcHBsaWNhdGlvbiA9IGF3YWl0IHBhdHRlcm5DbGllbnQob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUudHJhY2UoZXJyKTtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgYXBwbGljYXRpb24uc3RhcnQoKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0YXBwbGljYXRpb24ubG9nLmVycm9yKGVycik7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGVycik7XG5cdH1cbn1cblxuY29uc3QgYXJncyA9IG1pbmltaXN0KHByb2Nlc3MuYXJndi5zbGljZSgxKSk7XG5cbm1haW4oYXJncylcblx0LmNhdGNoKGVyciA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdH0pO1xuXG4vLyBDYXRjaCB1bmhhbmRsZWQgcmVqZWN0aW9ucyBnbG9iYWxseVxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgKHJlYXNvbiwgcHJvbWlzZSkgPT4ge1xuXHRjb25zb2xlLmxvZygnVW5oYW5kbGVkIFJlamVjdGlvbiBhdDogUHJvbWlzZSAnLCBwcm9taXNlLCAnIHJlYXNvbjogJywgcmVhc29uKTtcblx0dGhyb3cgcmVhc29uO1xufSk7XG4iXX0=