'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.client = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _events = require('events');

var _components = require('../components');

var _components2 = _interopRequireDefault(_components);

var _content = require('../components/content');

var _content2 = _interopRequireDefault(_content);

var _home = require('../components/content/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRoutes() {
	var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

	return _react2.default.createElement(
		_reactRouter.Route,
		{ name: 'root', path: base, handler: _components2.default },
		_react2.default.createElement(_reactRouter.DefaultRoute, { handler: _home2.default }),
		_react2.default.createElement(_reactRouter.Route, { name: 'pattern', path: '/pattern/*', handler: _content2.default })
	);
}

function router() {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
	var data = arguments[1];

	return new _promise2.default(function (resolve) {
		var eventEmitter = new _events.EventEmitter();

		_reactRouter2.default.run(getRoutes(), path, function (Handler, state) {
			var appData = (0, _extends3.default)({}, data, state, { eventEmitter: eventEmitter, base: '/' });
			resolve(_server2.default.renderToString(_react2.default.createElement(Handler, appData)));
		});
	});
}

function client(data, el) {
	return new _promise2.default(function (resolve) {
		var eventEmitter = new _events.EventEmitter();
		var base = _url2.default.resolve(global.location.pathname, data.base);

		_reactRouter2.default.run(getRoutes(base), _reactRouter2.default.HistoryLocation, function (Handler, state) {
			var appData = (0, _extends3.default)({}, data, state, { eventEmitter: eventEmitter, base: base });
			resolve(_reactDom2.default.render(_react2.default.createElement(Handler, appData), el));
		});
	});
}

exports.default = router;
exports.client = client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWFjdC1yb3V0ZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImdldFJvdXRlcyIsImJhc2UiLCJyb3V0ZXIiLCJwYXRoIiwiZGF0YSIsImV2ZW50RW1pdHRlciIsInJ1biIsIkhhbmRsZXIiLCJzdGF0ZSIsImFwcERhdGEiLCJyZXNvbHZlIiwicmVuZGVyVG9TdHJpbmciLCJjbGllbnQiLCJlbCIsImdsb2JhbCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJIaXN0b3J5TG9jYXRpb24iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLFNBQVQsR0FBK0I7QUFBQSxLQUFaQyxJQUFZLHVFQUFMLEdBQUs7O0FBQzlCLFFBQ0M7QUFBQTtBQUFBLElBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU1BLElBQXpCLEVBQStCLDZCQUEvQjtBQUNDLDZEQUFjLHVCQUFkLEdBREQ7QUFFQyxzREFBTyxNQUFLLFNBQVosRUFBc0IsTUFBSyxZQUEzQixFQUF3QywwQkFBeEM7QUFGRCxFQUREO0FBTUE7O0FBRUQsU0FBU0MsTUFBVCxHQUFrQztBQUFBLEtBQWxCQyxJQUFrQix1RUFBWCxHQUFXO0FBQUEsS0FBTkMsSUFBTTs7QUFDakMsUUFBTyxzQkFBWSxtQkFBVztBQUM3QixNQUFNQyxlQUFlLDBCQUFyQjs7QUFFQSx3QkFBT0MsR0FBUCxDQUFXTixXQUFYLEVBQXdCRyxJQUF4QixFQUE4QixVQUFDSSxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDakQsT0FBTUMscUNBQWNMLElBQWQsRUFBdUJJLEtBQXZCLElBQThCSCwwQkFBOUIsRUFBNENKLE1BQU0sR0FBbEQsR0FBTjtBQUNBUyxXQUFRLGlCQUFlQyxjQUFmLENBQThCLDhCQUFDLE9BQUQsRUFBYUYsT0FBYixDQUE5QixDQUFSO0FBQ0EsR0FIRDtBQUlBLEVBUE0sQ0FBUDtBQVFBOztBQUVELFNBQVNHLE1BQVQsQ0FBZ0JSLElBQWhCLEVBQXNCUyxFQUF0QixFQUEwQjtBQUN6QixRQUFPLHNCQUFZLG1CQUFXO0FBQzdCLE1BQU1SLGVBQWUsMEJBQXJCO0FBQ0EsTUFBTUosT0FBTyxjQUFJUyxPQUFKLENBQVlJLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQTVCLEVBQXNDWixLQUFLSCxJQUEzQyxDQUFiOztBQUVBLHdCQUFPSyxHQUFQLENBQVdOLFVBQVVDLElBQVYsQ0FBWCxFQUE0QixzQkFBT2dCLGVBQW5DLEVBQW9ELFVBQUNWLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUN2RSxPQUFNQyxxQ0FBY0wsSUFBZCxFQUF1QkksS0FBdkIsSUFBOEJILDBCQUE5QixFQUE0Q0osVUFBNUMsR0FBTjtBQUNBUyxXQUFRLG1CQUFTUSxNQUFULENBQWdCLDhCQUFDLE9BQUQsRUFBYVQsT0FBYixDQUFoQixFQUF5Q0ksRUFBekMsQ0FBUjtBQUNBLEdBSEQ7QUFJQSxFQVJNLENBQVA7QUFTQTs7a0JBRWNYLE07UUFDR1UsTSxHQUFWQSxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgUm91dGVyLCB7RGVmYXVsdFJvdXRlLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdldmVudHMnO1xuXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZW50L2hvbWUnO1xuXG5mdW5jdGlvbiBnZXRSb3V0ZXMoYmFzZSA9ICcvJykge1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZSBuYW1lPVwicm9vdFwiIHBhdGg9e2Jhc2V9IGhhbmRsZXI9e0FwcGxpY2F0aW9ufT5cblx0XHRcdDxEZWZhdWx0Um91dGUgaGFuZGxlcj17SG9tZX0vPlxuXHRcdFx0PFJvdXRlIG5hbWU9XCJwYXR0ZXJuXCIgcGF0aD1cIi9wYXR0ZXJuLypcIiBoYW5kbGVyPXtDb250ZW50fS8+XG5cdFx0PC9Sb3V0ZT5cblx0KTtcbn1cblxuZnVuY3Rpb24gcm91dGVyKHBhdGggPSAnLycsIGRhdGEpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRcdFJvdXRlci5ydW4oZ2V0Um91dGVzKCksIHBhdGgsIChIYW5kbGVyLCBzdGF0ZSkgPT4ge1xuXHRcdFx0Y29uc3QgYXBwRGF0YSA9IHsuLi5kYXRhLCAuLi5zdGF0ZSwgZXZlbnRFbWl0dGVyLCBiYXNlOiAnLyd9O1xuXHRcdFx0cmVzb2x2ZShSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyg8SGFuZGxlciB7Li4uYXBwRGF0YX0vPikpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xpZW50KGRhdGEsIGVsKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRjb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdFx0Y29uc3QgYmFzZSA9IHVybC5yZXNvbHZlKGdsb2JhbC5sb2NhdGlvbi5wYXRobmFtZSwgZGF0YS5iYXNlKTtcblxuXHRcdFJvdXRlci5ydW4oZ2V0Um91dGVzKGJhc2UpLCBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uLCAoSGFuZGxlciwgc3RhdGUpID0+IHtcblx0XHRcdGNvbnN0IGFwcERhdGEgPSB7Li4uZGF0YSwgLi4uc3RhdGUsIGV2ZW50RW1pdHRlciwgYmFzZX07XG5cdFx0XHRyZXNvbHZlKFJlYWN0RE9NLnJlbmRlcig8SGFuZGxlciB7Li4uYXBwRGF0YX0vPiwgZWwpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbmV4cG9ydCB7Y2xpZW50IGFzIGNsaWVudH07XG4iXX0=