'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _unified = require('unified');

var _unified2 = _interopRequireDefault(_unified);

var _rehypeParse = require('rehype-parse');

var _rehypeParse2 = _interopRequireDefault(_rehypeParse);

var _unistUtilSelect = require('unist-util-select');

var _unistUtilSelect2 = _interopRequireDefault(_unistUtilSelect);

var _hastToHyperscript = require('hast-to-hyperscript');

var _hastToHyperscript2 = _interopRequireDefault(_hastToHyperscript);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Header;


function Header(props) {
	var to = { pathname: props.base, query: props.query };
	var enabledTo = {
		pathname: props.pathname,
		query: (0, _extends3.default)({}, props.query, {
			'menu-enabled': !props.menuEnabled
		})
	};

	return _react2.default.createElement(
		'header',
		{ className: 'main-header application__header' },
		_react2.default.createElement(
			_reactRouter.IndexLink,
			{
				to: to,
				title: 'Navigate to documentation [ctrl+d]',
				className: 'logo'
			},
			_react2.default.createElement(LiteralIcon, { icon: props.icon }),
			_react2.default.createElement(
				'span',
				{ className: 'main-header__title' },
				props.title
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'toolbar' },
			_react2.default.createElement(
				_reactRouter.Link,
				{
					className: 'menu',
					to: enabledTo
				},
				_react2.default.createElement(
					_icon2.default,
					{
						base: props.base,
						symbol: 'patternplate',
						fallback: false
					},
					props.menuEnabled ? 'Disable Menu' : 'Enable Menu'
				)
			)
		)
	);
}

Header.propTypes = {
	base: _react.PropTypes.string.isRequired,
	icon: _react.PropTypes.string.isRequired,
	menuEnabled: _react.PropTypes.bool.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	title: _react.PropTypes.string.isRequired,
	version: _react.PropTypes.string.isRequired
};

function LiteralIcon(props) {
	var isSVG = (0, _lodash.startsWith)(props.icon.trim(), '<svg');
	var parsed = isSVG ? toSVGElement(props.icon) : null;
	var dim = parsed ? { width: parsed.props.width + 'px', height: parsed.props.height + 'px' } : null;
	return parsed ? _react2.default.createElement(
		'div',
		{ className: 'icon' },
		_react2.default.createElement(
			'div',
			{ className: 'svg-icon', style: dim },
			parsed
		)
	) : _react2.default.createElement(_icon2.default, { symbol: props.icon, fallback: false });
}

LiteralIcon.propTypes = {
	icon: _react.PropTypes.string.isRequired
};

function toSVGElement(input) {
	var ast = (0, _unified2.default)().use(_rehypeParse2.default).parse(input);
	var svg = (0, _lodash.find)((0, _unistUtilSelect2.default)(ast, '*'), function (e) {
		return e.tagName === 'svg';
	});
	var el = (0, _hastToHyperscript2.default)(_react2.default.createElement, svg);
	var props = (0, _lodash.keys)(el.props).reduce(function (props, prop) {
		props[(0, _lodash.camelCase)(prop)] = el.props[prop];
		return props;
	}, {});
	return (0, _lodash.assign)({}, el, { props: props });
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInRvIiwicGF0aG5hbWUiLCJiYXNlIiwicXVlcnkiLCJlbmFibGVkVG8iLCJtZW51RW5hYmxlZCIsImljb24iLCJ0aXRsZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwib2JqZWN0IiwidmVyc2lvbiIsIkxpdGVyYWxJY29uIiwiaXNTVkciLCJ0cmltIiwicGFyc2VkIiwidG9TVkdFbGVtZW50IiwiZGltIiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsImFzdCIsInVzZSIsInBhcnNlIiwic3ZnIiwiZSIsInRhZ05hbWUiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJyZWR1Y2UiLCJwcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7a0JBRWVBLE07OztBQUVmLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3RCLEtBQU1DLEtBQUssRUFBQ0MsVUFBVUYsTUFBTUcsSUFBakIsRUFBdUJDLE9BQU9KLE1BQU1JLEtBQXBDLEVBQVg7QUFDQSxLQUFNQyxZQUFZO0FBQ2pCSCxZQUFVRixNQUFNRSxRQURDO0FBRWpCRSxvQ0FDSUosTUFBTUksS0FEVjtBQUVDLG1CQUFnQixDQUFDSixNQUFNTTtBQUZ4QjtBQUZpQixFQUFsQjs7QUFRQSxRQUNDO0FBQUE7QUFBQSxJQUFRLFdBQVUsaUNBQWxCO0FBQ0M7QUFBQTtBQUFBO0FBQ0MsUUFBSUwsRUFETDtBQUVDLFdBQU0sb0NBRlA7QUFHQyxlQUFVO0FBSFg7QUFLQyxpQ0FBQyxXQUFELElBQWEsTUFBTUQsTUFBTU8sSUFBekIsR0FMRDtBQU1DO0FBQUE7QUFBQSxNQUFNLFdBQVUsb0JBQWhCO0FBQ0VQLFVBQU1RO0FBRFI7QUFORCxHQUREO0FBV0M7QUFBQTtBQUFBLEtBQUssV0FBVSxTQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQ0MsZ0JBQVUsTUFEWDtBQUVDLFNBQUlIO0FBRkw7QUFJQztBQUFBO0FBQUE7QUFDQyxZQUFNTCxNQUFNRyxJQURiO0FBRUMsY0FBTyxjQUZSO0FBR0MsZ0JBQVU7QUFIWDtBQU1FSCxXQUFNTSxXQUFOLEdBQ0MsY0FERCxHQUVDO0FBUkg7QUFKRDtBQUREO0FBWEQsRUFERDtBQWdDQTs7QUFFRFAsT0FBT1UsU0FBUCxHQUFtQjtBQUNsQk4sT0FBTSxpQkFBRU8sTUFBRixDQUFTQyxVQURHO0FBRWxCSixPQUFNLGlCQUFFRyxNQUFGLENBQVNDLFVBRkc7QUFHbEJMLGNBQWEsaUJBQUVNLElBQUYsQ0FBT0QsVUFIRjtBQUlsQlQsV0FBVSxpQkFBRVEsTUFBRixDQUFTQyxVQUpEO0FBS2xCUCxRQUFPLGlCQUFFUyxNQUFGLENBQVNGLFVBTEU7QUFNbEJILFFBQU8saUJBQUVFLE1BQUYsQ0FBU0MsVUFORTtBQU9sQkcsVUFBUyxpQkFBRUosTUFBRixDQUFTQztBQVBBLENBQW5COztBQVVBLFNBQVNJLFdBQVQsQ0FBcUJmLEtBQXJCLEVBQTRCO0FBQzNCLEtBQU1nQixRQUFRLHdCQUFXaEIsTUFBTU8sSUFBTixDQUFXVSxJQUFYLEVBQVgsRUFBOEIsTUFBOUIsQ0FBZDtBQUNBLEtBQU1DLFNBQVNGLFFBQVFHLGFBQWFuQixNQUFNTyxJQUFuQixDQUFSLEdBQW1DLElBQWxEO0FBQ0EsS0FBTWEsTUFBTUYsU0FBUyxFQUFDRyxPQUFVSCxPQUFPbEIsS0FBUCxDQUFhcUIsS0FBdkIsT0FBRCxFQUFtQ0MsUUFBV0osT0FBT2xCLEtBQVAsQ0FBYXNCLE1BQXhCLE9BQW5DLEVBQVQsR0FBa0YsSUFBOUY7QUFDQSxRQUFPSixTQUNOO0FBQUE7QUFBQSxJQUFLLFdBQVUsTUFBZjtBQUFzQjtBQUFBO0FBQUEsS0FBSyxXQUFVLFVBQWYsRUFBMEIsT0FBT0UsR0FBakM7QUFBdUNGO0FBQXZDO0FBQXRCLEVBRE0sR0FFTixnREFBTSxRQUFRbEIsTUFBTU8sSUFBcEIsRUFBMEIsVUFBVSxLQUFwQyxHQUZEO0FBR0E7O0FBRURRLFlBQVlOLFNBQVosR0FBd0I7QUFDdkJGLE9BQU0saUJBQUVHLE1BQUYsQ0FBU0M7QUFEUSxDQUF4Qjs7QUFJQSxTQUFTUSxZQUFULENBQXNCSSxLQUF0QixFQUE2QjtBQUM1QixLQUFNQyxNQUFNLHlCQUNWQyxHQURVLHdCQUVWQyxLQUZVLENBRUpILEtBRkksQ0FBWjtBQUdBLEtBQU1JLE1BQU0sa0JBQUssK0JBQU9ILEdBQVAsRUFBWSxHQUFaLENBQUwsRUFBdUI7QUFBQSxTQUFLSSxFQUFFQyxPQUFGLEtBQWMsS0FBbkI7QUFBQSxFQUF2QixDQUFaO0FBQ0EsS0FBTUMsS0FBSyxpQ0FBSSxnQkFBTUMsYUFBVixFQUF5QkosR0FBekIsQ0FBWDtBQUNBLEtBQU0zQixRQUFRLGtCQUFLOEIsR0FBRzlCLEtBQVIsRUFBZWdDLE1BQWYsQ0FBc0IsVUFBQ2hDLEtBQUQsRUFBUWlDLElBQVIsRUFBaUI7QUFDcERqQyxRQUFNLHVCQUFVaUMsSUFBVixDQUFOLElBQXlCSCxHQUFHOUIsS0FBSCxDQUFTaUMsSUFBVCxDQUF6QjtBQUNBLFNBQU9qQyxLQUFQO0FBQ0EsRUFIYSxFQUdYLEVBSFcsQ0FBZDtBQUlBLFFBQU8sb0JBQU8sRUFBUCxFQUFXOEIsRUFBWCxFQUFlLEVBQUM5QixZQUFELEVBQWYsQ0FBUDtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluaywgSW5kZXhMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHthc3NpZ24sIGNhbWVsQ2FzZSwgZmluZCwga2V5cywgc3RhcnRzV2l0aH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1bmlmaWVkIGZyb20gJ3VuaWZpZWQnO1xuaW1wb3J0IHBhcnNlIGZyb20gJ3JlaHlwZS1wYXJzZSc7XG5pbXBvcnQgc2VsZWN0IGZyb20gJ3VuaXN0LXV0aWwtc2VsZWN0JztcbmltcG9ydCB0b2ggZnJvbSAnaGFzdC10by1oeXBlcnNjcmlwdCc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbW1vbi9pY29uJztcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcblx0Y29uc3QgdG8gPSB7cGF0aG5hbWU6IHByb3BzLmJhc2UsIHF1ZXJ5OiBwcm9wcy5xdWVyeX07XG5cdGNvbnN0IGVuYWJsZWRUbyA9IHtcblx0XHRwYXRobmFtZTogcHJvcHMucGF0aG5hbWUsXG5cdFx0cXVlcnk6IHtcblx0XHRcdC4uLnByb3BzLnF1ZXJ5LFxuXHRcdFx0J21lbnUtZW5hYmxlZCc6ICFwcm9wcy5tZW51RW5hYmxlZFxuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXIgYXBwbGljYXRpb25fX2hlYWRlclwiPlxuXHRcdFx0PEluZGV4TGlua1xuXHRcdFx0XHR0bz17dG99XG5cdFx0XHRcdHRpdGxlPVwiTmF2aWdhdGUgdG8gZG9jdW1lbnRhdGlvbiBbY3RybCtkXVwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cImxvZ29cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdDxMaXRlcmFsSWNvbiBpY29uPXtwcm9wcy5pY29ufS8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX190aXRsZVwiPlxuXHRcdFx0XHRcdHtwcm9wcy50aXRsZX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9JbmRleExpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXJcIj5cblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZW51XCJcblx0XHRcdFx0XHR0bz17ZW5hYmxlZFRvfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8SWNvblxuXHRcdFx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0XHRcdHN5bWJvbD1cInBhdHRlcm5wbGF0ZVwiXG5cdFx0XHRcdFx0XHRmYWxsYmFjaz17ZmFsc2V9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHByb3BzLm1lbnVFbmFibGVkID9cblx0XHRcdFx0XHRcdFx0XHQnRGlzYWJsZSBNZW51JyA6XG5cdFx0XHRcdFx0XHRcdFx0J0VuYWJsZSBNZW51J1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvSWNvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG5cdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGljb246IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdG1lbnVFbmFibGVkOiB0LmJvb2wuaXNSZXF1aXJlZCxcblx0cGF0aG5hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHF1ZXJ5OiB0Lm9iamVjdC5pc1JlcXVpcmVkLFxuXHR0aXRsZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0dmVyc2lvbjogdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZnVuY3Rpb24gTGl0ZXJhbEljb24ocHJvcHMpIHtcblx0Y29uc3QgaXNTVkcgPSBzdGFydHNXaXRoKHByb3BzLmljb24udHJpbSgpLCAnPHN2ZycpO1xuXHRjb25zdCBwYXJzZWQgPSBpc1NWRyA/IHRvU1ZHRWxlbWVudChwcm9wcy5pY29uKSA6IG51bGw7XG5cdGNvbnN0IGRpbSA9IHBhcnNlZCA/IHt3aWR0aDogYCR7cGFyc2VkLnByb3BzLndpZHRofXB4YCwgaGVpZ2h0OiBgJHtwYXJzZWQucHJvcHMuaGVpZ2h0fXB4YH0gOiBudWxsO1xuXHRyZXR1cm4gcGFyc2VkID9cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb25cIj48ZGl2IGNsYXNzTmFtZT1cInN2Zy1pY29uXCIgc3R5bGU9e2RpbX0+e3BhcnNlZH08L2Rpdj48L2Rpdj4gOlxuXHRcdDxJY29uIHN5bWJvbD17cHJvcHMuaWNvbn0gZmFsbGJhY2s9e2ZhbHNlfS8+O1xufVxuXG5MaXRlcmFsSWNvbi5wcm9wVHlwZXMgPSB7XG5cdGljb246IHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmZ1bmN0aW9uIHRvU1ZHRWxlbWVudChpbnB1dCkge1xuXHRjb25zdCBhc3QgPSB1bmlmaWVkKClcblx0XHQudXNlKHBhcnNlKVxuXHRcdC5wYXJzZShpbnB1dCk7XG5cdGNvbnN0IHN2ZyA9IGZpbmQoc2VsZWN0KGFzdCwgJyonKSwgZSA9PiBlLnRhZ05hbWUgPT09ICdzdmcnKTtcblx0Y29uc3QgZWwgPSB0b2goUmVhY3QuY3JlYXRlRWxlbWVudCwgc3ZnKTtcblx0Y29uc3QgcHJvcHMgPSBrZXlzKGVsLnByb3BzKS5yZWR1Y2UoKHByb3BzLCBwcm9wKSA9PiB7XG5cdFx0cHJvcHNbY2FtZWxDYXNlKHByb3ApXSA9IGVsLnByb3BzW3Byb3BdO1xuXHRcdHJldHVybiBwcm9wcztcblx0fSwge30pO1xuXHRyZXR1cm4gYXNzaWduKHt9LCBlbCwge3Byb3BzfSk7XG59XG4iXX0=