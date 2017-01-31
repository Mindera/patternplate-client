'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (data, el) {
	var store = (0, _store2.default)(_reactRouter.browserHistory, data);
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	var router = _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: history },
			(0, _routes2.default)(store)
		)
	);

	return (0, _reactDom.render)(router, el);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWFjdC1yb3V0ZXMvY2xpZW50LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJlbCIsInN0b3JlIiwiaGlzdG9yeSIsInJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQVNlLFVBQVVBLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQ2xDLEtBQU1DLFFBQVEsa0RBQStCRixJQUEvQixDQUFkO0FBQ0EsS0FBTUcsVUFBVSx5RUFBcUNELEtBQXJDLENBQWhCO0FBQ0EsS0FBTUUsU0FDTDtBQUFBO0FBQUEsSUFBVSxPQUFPRixLQUFqQjtBQUNDO0FBQUE7QUFBQSxLQUFRLFNBQVNDLE9BQWpCO0FBQ0UseUJBQU9ELEtBQVA7QUFERjtBQURELEVBREQ7O0FBUUEsUUFBTyxzQkFBT0UsTUFBUCxFQUFlSCxFQUFmLENBQVA7QUFDQSxDOztBQXJCRDs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0EiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtSb3V0ZXIsIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtzeW5jSGlzdG9yeVdpdGhTdG9yZX0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcblxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhLCBlbCkge1xuXHRjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGJyb3dzZXJIaXN0b3J5LCBkYXRhKTtcblx0Y29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGJyb3dzZXJIaXN0b3J5LCBzdG9yZSk7XG5cdGNvbnN0IHJvdXRlciA9IChcblx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG5cdFx0XHRcdHtyb3V0ZXMoc3RvcmUpfVxuXHRcdFx0PC9Sb3V0ZXI+XG5cdFx0PC9Qcm92aWRlcj5cblx0KTtcblxuXHRyZXR1cm4gcmVuZGVyKHJvdXRlciwgZWwpO1xufVxuIl19