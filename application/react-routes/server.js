'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (location, data) {
	var memoryHistory = (0, _reactRouter.createMemoryHistory)(location);
	var store = (0, _store2.default)(memoryHistory, data);
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

	return new _promise2.default(function (resolve, reject) {
		(0, _reactRouter.match)({
			history: history,
			routes: (0, _routes2.default)(store),
			location: location
		}, function (error, redirect, props) {
			if (error) {
				return reject(error);
			}
			var context = _react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(_reactRouter.RouterContext, props)
			);
			var result = (0, _server.renderToString)(context);
			resolve(result);
		});
	});
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWFjdC1yb3V0ZXMvc2VydmVyLmpzIl0sIm5hbWVzIjpbImxvY2F0aW9uIiwiZGF0YSIsIm1lbW9yeUhpc3RvcnkiLCJzdG9yZSIsImhpc3RvcnkiLCJyZXNvbHZlIiwicmVqZWN0Iiwicm91dGVzIiwiZXJyb3IiLCJyZWRpcmVjdCIsInByb3BzIiwiY29udGV4dCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFTZSxVQUFVQSxRQUFWLEVBQW9CQyxJQUFwQixFQUEwQjtBQUN4QyxLQUFNQyxnQkFBZ0Isc0NBQW9CRixRQUFwQixDQUF0QjtBQUNBLEtBQU1HLFFBQVEscUJBQWVELGFBQWYsRUFBOEJELElBQTlCLENBQWQ7QUFDQSxLQUFNRyxVQUFVLDRDQUFxQkYsYUFBckIsRUFBb0NDLEtBQXBDLENBQWhCOztBQUVBLFFBQU8sc0JBQVksVUFBQ0UsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLDBCQUFNO0FBQ0xGLG1CQURLO0FBRUxHLFdBQVEsc0JBQU9KLEtBQVAsQ0FGSDtBQUdMSDtBQUhLLEdBQU4sRUFJRyxVQUFDUSxLQUFELEVBQVFDLFFBQVIsRUFBa0JDLEtBQWxCLEVBQTRCO0FBQzlCLE9BQUlGLEtBQUosRUFBVztBQUNWLFdBQU9GLE9BQU9FLEtBQVAsQ0FBUDtBQUNBO0FBQ0QsT0FBTUcsVUFBVTtBQUFBO0FBQUEsTUFBVSxPQUFPUixLQUFqQjtBQUF3Qiw4REFBbUJPLEtBQW5CO0FBQXhCLElBQWhCO0FBQ0EsT0FBTUUsU0FBUyw0QkFBZUQsT0FBZixDQUFmO0FBQ0FOLFdBQVFPLE1BQVI7QUFDQSxHQVhEO0FBWUEsRUFiTSxDQUFQO0FBY0EsQzs7QUE1QkQ7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlclRvU3RyaW5nfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7Y3JlYXRlTWVtb3J5SGlzdG9yeSwgbWF0Y2gsIFJvdXRlckNvbnRleHR9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge3N5bmNIaXN0b3J5V2l0aFN0b3JlfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGxvY2F0aW9uLCBkYXRhKSB7XG5cdGNvbnN0IG1lbW9yeUhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KGxvY2F0aW9uKTtcblx0Y29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShtZW1vcnlIaXN0b3J5LCBkYXRhKTtcblx0Y29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKG1lbW9yeUhpc3RvcnksIHN0b3JlKTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdG1hdGNoKHtcblx0XHRcdGhpc3RvcnksXG5cdFx0XHRyb3V0ZXM6IHJvdXRlcyhzdG9yZSksXG5cdFx0XHRsb2NhdGlvblxuXHRcdH0sIChlcnJvciwgcmVkaXJlY3QsIHByb3BzKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb250ZXh0ID0gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+PFJvdXRlckNvbnRleHQgey4uLnByb3BzfS8+PC9Qcm92aWRlcj47XG5cdFx0XHRjb25zdCByZXN1bHQgPSByZW5kZXJUb1N0cmluZyhjb250ZXh0KTtcblx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHR9KTtcblx0fSk7XG59XG4iXX0=