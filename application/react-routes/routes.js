'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (store) {
	var state = store.getState();
	return _react2.default.createElement(
		_reactRouter.Route,
		{ path: state.base, component: _application2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'pattern/*', component: _content2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '*', component: _notFound2.default })
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _application = require('../containers/application');

var _application2 = _interopRequireDefault(_application);

var _content = require('../containers/content');

var _content2 = _interopRequireDefault(_content);

var _notFound = require('../containers/not-found');

var _notFound2 = _interopRequireDefault(_notFound);

var _home = require('../containers/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWFjdC1yb3V0ZXMvcm91dGVzLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFRZSxVQUFVQSxLQUFWLEVBQWlCO0FBQy9CLEtBQU1DLFFBQVFELE1BQU1FLFFBQU4sRUFBZDtBQUNBLFFBQ0M7QUFBQTtBQUFBLElBQU8sTUFBTUQsTUFBTUUsSUFBbkIsRUFBeUIsZ0NBQXpCO0FBQ0MsMkRBQVkseUJBQVosR0FERDtBQUVDLHNEQUFPLE1BQUssV0FBWixFQUF3Qiw0QkFBeEIsR0FGRDtBQUdDLHNEQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFIRCxFQUREO0FBT0EsQzs7QUFqQkQ7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQSIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgSW5kZXhSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvYXBwbGljYXRpb24nO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29udGFpbmVycy9jb250ZW50JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb250YWluZXJzL25vdC1mb3VuZCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb250YWluZXJzL2hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RvcmUpIHtcblx0Y29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZSBwYXRoPXtzdGF0ZS5iYXNlfSBjb21wb25lbnQ9e0FwcGxpY2F0aW9ufT5cblx0XHRcdDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZX0vPlxuXHRcdFx0PFJvdXRlIHBhdGg9XCJwYXR0ZXJuLypcIiBjb21wb25lbnQ9e0NvbnRlbnR9Lz5cblx0XHRcdDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm90Rm91bmR9Lz5cblx0XHQ8L1JvdXRlPlxuXHQpO1xufVxuIl19