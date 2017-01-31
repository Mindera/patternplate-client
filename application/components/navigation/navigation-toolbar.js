'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = NavigationToolbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _navigationToggle = require('./navigation-toggle');

var _navigationToggle2 = _interopRequireDefault(_navigationToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavigationToolbar(props) {
	// const {data} = props;
	var issue = {
		pathname: props.pathname,
		query: (0, _extends3.default)({}, props.query, {
			issue: true
		})
	};

	var cheatsheet = {
		pathname: props.pathname,
		query: (0, _extends3.default)({}, props.query, {
			lightbox: 'shortcuts'
		})
	};

	var targetTheme = props.theme === 'dark' ? 'light' : 'dark';
	var handleThemeChange = function handleThemeChange() {
		return props.onThemeChange(targetTheme);
	};

	var styles = {
		light: { display: targetTheme === 'light' ? 'block' : 'none' },
		dark: { display: targetTheme === 'dark' ? 'block' : 'none' }
	};

	return _react2.default.createElement(
		'div',
		{ className: 'navigation-toolbar' },
		_react2.default.createElement(
			'div',
			{ className: 'navigation-toolbar__container' },
			_react2.default.createElement(
				'ul',
				{ className: 'navigation-toolbar__links' },
				_react2.default.createElement(
					'li',
					{ className: 'navigation-toolbar__link' },
					_react2.default.createElement(
						_reactRouter.Link,
						{
							className: 'button',
							title: 'Report an issue [ctrl+i]',
							to: issue
						},
						_react2.default.createElement(_icon2.default, { symbol: 'issue' })
					)
				),
				_react2.default.createElement(
					'li',
					{ className: 'navigation-toolbar__link' },
					_react2.default.createElement(
						_reactRouter.Link,
						{
							className: 'button',
							title: 'Show keyboard shortcuts [ctrl+k]',
							to: cheatsheet
						},
						_react2.default.createElement(_icon2.default, { symbol: 'command' })
					)
				),
				_react2.default.createElement(
					'li',
					{ className: 'navigation-toolbar__link' },
					_react2.default.createElement(
						'button',
						{
							className: 'button',
							type: 'button',
							onClick: handleThemeChange,
							title: 'Switch to ' + targetTheme + ' theme [ctrl+t]'
						},
						_react2.default.createElement(
							_icon2.default,
							{
								base: props.base,
								symbol: 'light',
								style: styles.light
							},
							'Light'
						),
						_react2.default.createElement(
							_icon2.default,
							{
								base: props.base,
								symbol: 'dark',
								style: styles.dark
							},
							'Dark'
						)
					)
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'navigation-toolbar__action' },
			_react2.default.createElement(_navigationToggle2.default, {
				base: props.base,
				expanded: props.expanded,
				pathname: props.pathname,
				query: props.query
			})
		)
	);
}

NavigationToolbar.propTypes = {
	base: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.any,
	expanded: _react.PropTypes.bool.isRequired,
	onThemeChange: _react.PropTypes.func.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	theme: _react.PropTypes.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi10b29sYmFyLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25Ub29sYmFyIiwicHJvcHMiLCJpc3N1ZSIsInBhdGhuYW1lIiwicXVlcnkiLCJjaGVhdHNoZWV0IiwibGlnaHRib3giLCJ0YXJnZXRUaGVtZSIsInRoZW1lIiwiaGFuZGxlVGhlbWVDaGFuZ2UiLCJvblRoZW1lQ2hhbmdlIiwic3R5bGVzIiwibGlnaHQiLCJkaXNwbGF5IiwiZGFyayIsImJhc2UiLCJleHBhbmRlZCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJjaGlsZHJlbiIsImFueSIsImJvb2wiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQU13QkEsaUI7O0FBTnhCOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ2hEO0FBQ0EsS0FBTUMsUUFBUTtBQUNiQyxZQUFVRixNQUFNRSxRQURIO0FBRWJDLG9DQUNJSCxNQUFNRyxLQURWO0FBRUNGLFVBQU87QUFGUjtBQUZhLEVBQWQ7O0FBUUEsS0FBTUcsYUFBYTtBQUNsQkYsWUFBVUYsTUFBTUUsUUFERTtBQUVsQkMsb0NBQ0lILE1BQU1HLEtBRFY7QUFFQ0UsYUFBVTtBQUZYO0FBRmtCLEVBQW5COztBQVFBLEtBQU1DLGNBQWNOLE1BQU1PLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsT0FBekIsR0FBbUMsTUFBdkQ7QUFDQSxLQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQjtBQUFBLFNBQU1SLE1BQU1TLGFBQU4sQ0FBb0JILFdBQXBCLENBQU47QUFBQSxFQUExQjs7QUFFQSxLQUFNSSxTQUFTO0FBQ2RDLFNBQU8sRUFBQ0MsU0FBU04sZ0JBQWdCLE9BQWhCLEdBQTBCLE9BQTFCLEdBQW9DLE1BQTlDLEVBRE87QUFFZE8sUUFBTSxFQUFDRCxTQUFTTixnQkFBZ0IsTUFBaEIsR0FBeUIsT0FBekIsR0FBbUMsTUFBN0M7QUFGUSxFQUFmOztBQUtBLFFBQ0M7QUFBQTtBQUFBLElBQUssV0FBVSxvQkFBZjtBQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsK0JBQWY7QUFDQztBQUFBO0FBQUEsTUFBSSxXQUFVLDJCQUFkO0FBQ0M7QUFBQTtBQUFBLE9BQUksV0FBVSwwQkFBZDtBQUNDO0FBQUE7QUFBQTtBQUNDLGtCQUFVLFFBRFg7QUFFQyxjQUFNLDBCQUZQO0FBR0MsV0FBSUw7QUFITDtBQUtDLHNEQUFNLFFBQU8sT0FBYjtBQUxEO0FBREQsS0FERDtBQVVDO0FBQUE7QUFBQSxPQUFJLFdBQVUsMEJBQWQ7QUFDQztBQUFBO0FBQUE7QUFDQyxrQkFBVSxRQURYO0FBRUMsY0FBTSxrQ0FGUDtBQUdDLFdBQUlHO0FBSEw7QUFLQyxzREFBTSxRQUFPLFNBQWI7QUFMRDtBQURELEtBVkQ7QUFtQkM7QUFBQTtBQUFBLE9BQUksV0FBVSwwQkFBZDtBQUNDO0FBQUE7QUFBQTtBQUNDLGtCQUFVLFFBRFg7QUFFQyxhQUFLLFFBRk47QUFHQyxnQkFBU0ksaUJBSFY7QUFJQyw2QkFBb0JGLFdBQXBCO0FBSkQ7QUFNQztBQUFBO0FBQUE7QUFDQyxjQUFNTixNQUFNYyxJQURiO0FBRUMsZ0JBQU8sT0FGUjtBQUdDLGVBQU9KLE9BQU9DO0FBSGY7QUFBQTtBQUFBLE9BTkQ7QUFhQztBQUFBO0FBQUE7QUFDQyxjQUFNWCxNQUFNYyxJQURiO0FBRUMsZ0JBQU8sTUFGUjtBQUdDLGVBQU9KLE9BQU9HO0FBSGY7QUFBQTtBQUFBO0FBYkQ7QUFERDtBQW5CRDtBQURELEdBREQ7QUE4Q0M7QUFBQTtBQUFBLEtBQUssV0FBVSw0QkFBZjtBQUNDO0FBQ0MsVUFBTWIsTUFBTWMsSUFEYjtBQUVDLGNBQVVkLE1BQU1lLFFBRmpCO0FBR0MsY0FBVWYsTUFBTUUsUUFIakI7QUFJQyxXQUFPRixNQUFNRztBQUpkO0FBREQ7QUE5Q0QsRUFERDtBQXlEQTs7QUFFREosa0JBQWtCaUIsU0FBbEIsR0FBOEI7QUFDN0JGLE9BQU0saUJBQUVHLE1BQUYsQ0FBU0MsVUFEYztBQUU3QkMsV0FBVSxpQkFBRUMsR0FGaUI7QUFHN0JMLFdBQVUsaUJBQUVNLElBQUYsQ0FBT0gsVUFIWTtBQUk3QlQsZ0JBQWUsaUJBQUVhLElBQUYsQ0FBT0osVUFKTztBQUs3QmhCLFdBQVUsaUJBQUVlLE1BQUYsQ0FBU0MsVUFMVTtBQU03QmYsUUFBTyxpQkFBRW9CLE1BQUYsQ0FBU0wsVUFOYTtBQU83QlgsUUFBTyxpQkFBRVUsTUFBRixDQUFTQztBQVBhLENBQTlCIiwiZmlsZSI6Im5hdmlnYXRpb24tdG9vbGJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbW1vbi9pY29uJztcbmltcG9ydCBOYXZpZ2F0aW9uVG9nZ2xlIGZyb20gJy4vbmF2aWdhdGlvbi10b2dnbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uVG9vbGJhcihwcm9wcykge1xuXHQvLyBjb25zdCB7ZGF0YX0gPSBwcm9wcztcblx0Y29uc3QgaXNzdWUgPSB7XG5cdFx0cGF0aG5hbWU6IHByb3BzLnBhdGhuYW1lLFxuXHRcdHF1ZXJ5OiB7XG5cdFx0XHQuLi5wcm9wcy5xdWVyeSxcblx0XHRcdGlzc3VlOiB0cnVlXG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGNoZWF0c2hlZXQgPSB7XG5cdFx0cGF0aG5hbWU6IHByb3BzLnBhdGhuYW1lLFxuXHRcdHF1ZXJ5OiB7XG5cdFx0XHQuLi5wcm9wcy5xdWVyeSxcblx0XHRcdGxpZ2h0Ym94OiAnc2hvcnRjdXRzJ1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB0YXJnZXRUaGVtZSA9IHByb3BzLnRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnO1xuXHRjb25zdCBoYW5kbGVUaGVtZUNoYW5nZSA9ICgpID0+IHByb3BzLm9uVGhlbWVDaGFuZ2UodGFyZ2V0VGhlbWUpO1xuXG5cdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRsaWdodDoge2Rpc3BsYXk6IHRhcmdldFRoZW1lID09PSAnbGlnaHQnID8gJ2Jsb2NrJyA6ICdub25lJ30sXG5cdFx0ZGFyazoge2Rpc3BsYXk6IHRhcmdldFRoZW1lID09PSAnZGFyaycgPyAnYmxvY2snIDogJ25vbmUnfVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLXRvb2xiYXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi10b29sYmFyX19jb250YWluZXJcIj5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tdG9vbGJhcl9fbGlua3NcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi10b29sYmFyX19saW5rXCI+XG5cdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIlJlcG9ydCBhbiBpc3N1ZSBbY3RybCtpXVwiXG5cdFx0XHRcdFx0XHRcdHRvPXtpc3N1ZX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8SWNvbiBzeW1ib2w9XCJpc3N1ZVwiLz5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLXRvb2xiYXJfX2xpbmtcIj5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdHRpdGxlPVwiU2hvdyBrZXlib2FyZCBzaG9ydGN1dHMgW2N0cmwra11cIlxuXHRcdFx0XHRcdFx0XHR0bz17Y2hlYXRzaGVldH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8SWNvbiBzeW1ib2w9XCJjb21tYW5kXCIvPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tdG9vbGJhcl9fbGlua1wiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlVGhlbWVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdHRpdGxlPXtgU3dpdGNoIHRvICR7dGFyZ2V0VGhlbWV9IHRoZW1lIFtjdHJsK3RdYH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8SWNvblxuXHRcdFx0XHRcdFx0XHRcdGJhc2U9e3Byb3BzLmJhc2V9XG5cdFx0XHRcdFx0XHRcdFx0c3ltYm9sPVwibGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtzdHlsZXMubGlnaHR9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdExpZ2h0XG5cdFx0XHRcdFx0XHRcdDwvSWNvbj5cblx0XHRcdFx0XHRcdFx0PEljb25cblx0XHRcdFx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdFx0XHRcdHN5bWJvbD1cImRhcmtcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtzdHlsZXMuZGFya31cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0RGFya1xuXHRcdFx0XHRcdFx0XHQ8L0ljb24+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tdG9vbGJhcl9fYWN0aW9uXCI+XG5cdFx0XHRcdDxOYXZpZ2F0aW9uVG9nZ2xlXG5cdFx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0XHRleHBhbmRlZD17cHJvcHMuZXhwYW5kZWR9XG5cdFx0XHRcdFx0cGF0aG5hbWU9e3Byb3BzLnBhdGhuYW1lfVxuXHRcdFx0XHRcdHF1ZXJ5PXtwcm9wcy5xdWVyeX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbk5hdmlnYXRpb25Ub29sYmFyLnByb3BUeXBlcyA9IHtcblx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y2hpbGRyZW46IHQuYW55LFxuXHRleHBhbmRlZDogdC5ib29sLmlzUmVxdWlyZWQsXG5cdG9uVGhlbWVDaGFuZ2U6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRwYXRobmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0cXVlcnk6IHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cdHRoZW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuIl19