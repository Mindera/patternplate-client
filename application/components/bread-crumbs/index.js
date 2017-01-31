'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = BreadCrumbs;


function BreadCrumbs(props) {
	var crumbs = props.crumbs;

	var className = (0, _classnames2.default)('breadcrumbs', props.className);

	return _react2.default.createElement(
		'ul',
		{ className: className },
		crumbs.map(function (crumb) {
			return _react2.default.createElement(BreadCrumb, {
				key: crumb.id,
				name: crumb.name,
				navigateable: crumb.navigateable,
				target: crumb.target
			});
		})
	);
}

function BreadCrumb(props) {
	var className = (0, _classnames2.default)('breadcrumb', {
		'breadcrumb--navigateable': props.navigateable
	});
	return _react2.default.createElement(
		'li',
		{ className: className },
		props.navigateable ? _react2.default.createElement(
			_reactRouter.Link,
			{ to: props.target },
			props.name
		) : _react2.default.createElement(
			'span',
			null,
			props.name
		)
	);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2JyZWFkLWNydW1icy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCcmVhZENydW1icyIsInByb3BzIiwiY3J1bWJzIiwiY2xhc3NOYW1lIiwibWFwIiwiY3J1bWIiLCJpZCIsIm5hbWUiLCJuYXZpZ2F0ZWFibGUiLCJ0YXJnZXQiLCJCcmVhZENydW1iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWVBLFc7OztBQUVmLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsS0FDcEJDLE1BRG9CLEdBQ1ZELEtBRFUsQ0FDcEJDLE1BRG9COztBQUUzQixLQUFNQyxZQUFZLDBCQUFLLGFBQUwsRUFBb0JGLE1BQU1FLFNBQTFCLENBQWxCOztBQUVBLFFBQ0M7QUFBQTtBQUFBLElBQUksV0FBV0EsU0FBZjtBQUVFRCxTQUFPRSxHQUFQLENBQVcsaUJBQVM7QUFDbkIsVUFDQyw4QkFBQyxVQUFEO0FBQ0MsU0FBS0MsTUFBTUMsRUFEWjtBQUVDLFVBQU1ELE1BQU1FLElBRmI7QUFHQyxrQkFBY0YsTUFBTUcsWUFIckI7QUFJQyxZQUFRSCxNQUFNSTtBQUpmLEtBREQ7QUFRQSxHQVREO0FBRkYsRUFERDtBQWdCQTs7QUFFRCxTQUFTQyxVQUFULENBQW9CVCxLQUFwQixFQUEyQjtBQUMxQixLQUFNRSxZQUFZLDBCQUFLLFlBQUwsRUFBbUI7QUFDcEMsOEJBQTRCRixNQUFNTztBQURFLEVBQW5CLENBQWxCO0FBR0EsUUFDQztBQUFBO0FBQUEsSUFBSSxXQUFXTCxTQUFmO0FBRUVGLFFBQU1PLFlBQU4sR0FDQztBQUFBO0FBQUEsS0FBTSxJQUFJUCxNQUFNUSxNQUFoQjtBQUNFUixTQUFNTTtBQURSLEdBREQsR0FJQztBQUFBO0FBQUE7QUFDRU4sU0FBTU07QUFEUjtBQU5ILEVBREQ7QUFhQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgam9pbiBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRDcnVtYnM7XG5cbmZ1bmN0aW9uIEJyZWFkQ3J1bWJzKHByb3BzKSB7XG5cdGNvbnN0IHtjcnVtYnN9ID0gcHJvcHM7XG5cdGNvbnN0IGNsYXNzTmFtZSA9IGpvaW4oJ2JyZWFkY3J1bWJzJywgcHJvcHMuY2xhc3NOYW1lKTtcblxuXHRyZXR1cm4gKFxuXHRcdDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHR7XG5cdFx0XHRcdGNydW1icy5tYXAoY3J1bWIgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8QnJlYWRDcnVtYlxuXHRcdFx0XHRcdFx0XHRrZXk9e2NydW1iLmlkfVxuXHRcdFx0XHRcdFx0XHRuYW1lPXtjcnVtYi5uYW1lfVxuXHRcdFx0XHRcdFx0XHRuYXZpZ2F0ZWFibGU9e2NydW1iLm5hdmlnYXRlYWJsZX1cblx0XHRcdFx0XHRcdFx0dGFyZ2V0PXtjcnVtYi50YXJnZXR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L3VsPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBCcmVhZENydW1iKHByb3BzKSB7XG5cdGNvbnN0IGNsYXNzTmFtZSA9IGpvaW4oJ2JyZWFkY3J1bWInLCB7XG5cdFx0J2JyZWFkY3J1bWItLW5hdmlnYXRlYWJsZSc6IHByb3BzLm5hdmlnYXRlYWJsZVxuXHR9KTtcblx0cmV0dXJuIChcblx0XHQ8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0e1xuXHRcdFx0XHRwcm9wcy5uYXZpZ2F0ZWFibGUgP1xuXHRcdFx0XHRcdDxMaW5rIHRvPXtwcm9wcy50YXJnZXR9PlxuXHRcdFx0XHRcdFx0e3Byb3BzLm5hbWV9XG5cdFx0XHRcdFx0PC9MaW5rPiA6XG5cdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHR7cHJvcHMubmFtZX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHR9XG5cdFx0PC9saT5cblx0KTtcbn1cbiJdfQ==