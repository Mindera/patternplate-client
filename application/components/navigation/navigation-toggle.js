'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = NavigationToggle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavigationToggle(props) {
	var iconClassName = (0, _classnames2.default)({
		'icon--mirrored': props.expanded
	});

	return _react2.default.createElement(
		_reactRouter.Link,
		{
			to: {
				pathname: props.pathname,
				query: (0, _extends3.default)({}, props.query, { expanded: !props.expanded })
			},
			className: 'toggleMode',
			title: props.expanded ? 'Collapse navigation [ctrl+e]' : 'Expand navigation [ctrl+e]'
		},
		_react2.default.createElement(_icon2.default, { base: props.base, className: iconClassName, symbol: 'arrow-double-right' })
	);
}

NavigationToggle.propTypes = {
	base: _react.PropTypes.string.isRequired,
	expanded: _react.PropTypes.bool.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi10b2dnbGUuanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvblRvZ2dsZSIsInByb3BzIiwiaWNvbkNsYXNzTmFtZSIsImV4cGFuZGVkIiwicGF0aG5hbWUiLCJxdWVyeSIsImJhc2UiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFNd0JBLGdCOztBQU54Qjs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7OztBQUVlLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUMvQyxLQUFNQyxnQkFBZ0IsMEJBQUs7QUFDMUIsb0JBQWtCRCxNQUFNRTtBQURFLEVBQUwsQ0FBdEI7O0FBSUEsUUFDQztBQUFBO0FBQUE7QUFDQyxPQUFJO0FBQ0hDLGNBQVVILE1BQU1HLFFBRGI7QUFFSEMsc0NBQVdKLE1BQU1JLEtBQWpCLEVBQTJCLEVBQUNGLFVBQVUsQ0FBQ0YsTUFBTUUsUUFBbEIsRUFBM0I7QUFGRyxJQURMO0FBS0MsY0FBVSxZQUxYO0FBTUMsVUFBT0YsTUFBTUUsUUFBTixHQUFpQiw4QkFBakIsR0FBa0Q7QUFOMUQ7QUFRQyxrREFBTSxNQUFNRixNQUFNSyxJQUFsQixFQUF3QixXQUFXSixhQUFuQyxFQUFrRCxRQUFPLG9CQUF6RDtBQVJELEVBREQ7QUFZQTs7QUFFREYsaUJBQWlCTyxTQUFqQixHQUE2QjtBQUM1QkQsT0FBTSxpQkFBRUUsTUFBRixDQUFTQyxVQURhO0FBRTVCTixXQUFVLGlCQUFFTyxJQUFGLENBQU9ELFVBRlc7QUFHNUJMLFdBQVUsaUJBQUVJLE1BQUYsQ0FBU0MsVUFIUztBQUk1QkosUUFBTyxpQkFBRU0sTUFBRixDQUFTRjtBQUpZLENBQTdCIiwiZmlsZSI6Im5hdmlnYXRpb24tdG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBqb2luIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21tb24vaWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25Ub2dnbGUocHJvcHMpIHtcblx0Y29uc3QgaWNvbkNsYXNzTmFtZSA9IGpvaW4oe1xuXHRcdCdpY29uLS1taXJyb3JlZCc6IHByb3BzLmV4cGFuZGVkXG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PExpbmtcblx0XHRcdHRvPXt7XG5cdFx0XHRcdHBhdGhuYW1lOiBwcm9wcy5wYXRobmFtZSxcblx0XHRcdFx0cXVlcnk6IHsuLi5wcm9wcy5xdWVyeSwgLi4ue2V4cGFuZGVkOiAhcHJvcHMuZXhwYW5kZWR9fVxuXHRcdFx0fX1cblx0XHRcdGNsYXNzTmFtZT1cInRvZ2dsZU1vZGVcIlxuXHRcdFx0dGl0bGU9e3Byb3BzLmV4cGFuZGVkID8gJ0NvbGxhcHNlIG5hdmlnYXRpb24gW2N0cmwrZV0nIDogJ0V4cGFuZCBuYXZpZ2F0aW9uIFtjdHJsK2VdJ31cblx0XHRcdD5cblx0XHRcdDxJY29uIGJhc2U9e3Byb3BzLmJhc2V9IGNsYXNzTmFtZT17aWNvbkNsYXNzTmFtZX0gc3ltYm9sPVwiYXJyb3ctZG91YmxlLXJpZ2h0XCIvPlxuXHRcdDwvTGluaz5cblx0KTtcbn1cblxuTmF2aWdhdGlvblRvZ2dsZS5wcm9wVHlwZXMgPSB7XG5cdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGV4cGFuZGVkOiB0LmJvb2wuaXNSZXF1aXJlZCxcblx0cGF0aG5hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHF1ZXJ5OiB0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuIl19