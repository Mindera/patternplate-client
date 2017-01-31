'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = PatternToolCodeToogle;


function PatternToolCodeToogle(props) {
	var className = (0, _classnames2.default)('pattern-control pattern-tool pattern-tool-code-toggle', { active: props.active });

	var to = {
		pathname: props.location.pathname,
		query: (0, _extends3.default)({}, props.location.query, {
			'source-expanded': !props.active,
			'source': null
		})
	};

	return _react2.default.createElement(
		_reactRouter.Link,
		{
			to: to,
			className: className,
			title: props.title
		},
		_react2.default.createElement(_icon2.default, {
			base: props.base,
			symbol: 'code',
			description: 'Code'
		})
	);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi10b29sLWNvZGUtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbIlBhdHRlcm5Ub29sQ29kZVRvb2dsZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwidG8iLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicXVlcnkiLCJ0aXRsZSIsImJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZUEscUI7OztBQUVmLFNBQVNBLHFCQUFULENBQStCQyxLQUEvQixFQUFzQztBQUNyQyxLQUFNQyxZQUFZLDBCQUNqQix1REFEaUIsRUFFakIsRUFBQ0MsUUFBUUYsTUFBTUUsTUFBZixFQUZpQixDQUFsQjs7QUFLQSxLQUFNQyxLQUFLO0FBQ1ZDLFlBQVVKLE1BQU1LLFFBQU4sQ0FBZUQsUUFEZjtBQUVWRSxvQ0FDSU4sTUFBTUssUUFBTixDQUFlQyxLQURuQjtBQUVDLHNCQUFtQixDQUFDTixNQUFNRSxNQUYzQjtBQUdDLGFBQVU7QUFIWDtBQUZVLEVBQVg7O0FBU0EsUUFDQztBQUFBO0FBQUE7QUFDQyxPQUFJQyxFQURMO0FBRUMsY0FBV0YsU0FGWjtBQUdDLFVBQU9ELE1BQU1PO0FBSGQ7QUFLQztBQUNDLFNBQU1QLE1BQU1RLElBRGI7QUFFQyxXQUFPLE1BRlI7QUFHQyxnQkFBWTtBQUhiO0FBTEQsRUFERDtBQWFBIiwiZmlsZSI6InBhdHRlcm4tdG9vbC1jb2RlLXRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgam9pbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbW1vbi9pY29uJztcblxuZXhwb3J0IGRlZmF1bHQgUGF0dGVyblRvb2xDb2RlVG9vZ2xlO1xuXG5mdW5jdGlvbiBQYXR0ZXJuVG9vbENvZGVUb29nbGUocHJvcHMpIHtcblx0Y29uc3QgY2xhc3NOYW1lID0gam9pbihcblx0XHQncGF0dGVybi1jb250cm9sIHBhdHRlcm4tdG9vbCBwYXR0ZXJuLXRvb2wtY29kZS10b2dnbGUnLFxuXHRcdHthY3RpdmU6IHByb3BzLmFjdGl2ZX1cblx0KTtcblxuXHRjb25zdCB0byA9IHtcblx0XHRwYXRobmFtZTogcHJvcHMubG9jYXRpb24ucGF0aG5hbWUsXG5cdFx0cXVlcnk6IHtcblx0XHRcdC4uLnByb3BzLmxvY2F0aW9uLnF1ZXJ5LFxuXHRcdFx0J3NvdXJjZS1leHBhbmRlZCc6ICFwcm9wcy5hY3RpdmUsXG5cdFx0XHQnc291cmNlJzogbnVsbFxuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxMaW5rXG5cdFx0XHR0bz17dG99XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdHRpdGxlPXtwcm9wcy50aXRsZX1cblx0XHRcdD5cblx0XHRcdDxJY29uXG5cdFx0XHRcdGJhc2U9e3Byb3BzLmJhc2V9XG5cdFx0XHRcdHN5bWJvbD1cImNvZGVcIlxuXHRcdFx0XHRkZXNjcmlwdGlvbj1cIkNvZGVcIlxuXHRcdFx0XHQvPlxuXHRcdDwvTGluaz5cblx0KTtcbn1cbiJdfQ==