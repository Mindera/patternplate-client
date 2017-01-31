'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdown = require('../../containers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PatternDocumentation(props) {
	var source = props.source || props.children;
	return _react2.default.createElement(
		'div',
		{ className: 'pattern-code' },
		_react2.default.createElement(
			'div',
			{ className: 'pattern-code__toolbar' },
			_react2.default.createElement(
				'div',
				{ className: 'pattern-code__name' },
				props.name
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'pattern-code__content' },
			_react2.default.createElement(_markdown2.default, { base: props.base, source: source })
		)
	);
}

PatternDocumentation.propTypes = {
	base: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	source: _react.PropTypes.string
};

exports.default = PatternDocumentation;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbIlBhdHRlcm5Eb2N1bWVudGF0aW9uIiwicHJvcHMiLCJzb3VyY2UiLCJjaGlsZHJlbiIsIm5hbWUiLCJiYXNlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7O0FBRUEsU0FBU0Esb0JBQVQsQ0FBOEJDLEtBQTlCLEVBQXFDO0FBQ3BDLEtBQU1DLFNBQVNELE1BQU1DLE1BQU4sSUFBZ0JELE1BQU1FLFFBQXJDO0FBQ0EsUUFDQztBQUFBO0FBQUEsSUFBSyxXQUFVLGNBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLHVCQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxvQkFBZjtBQUFxQ0YsVUFBTUc7QUFBM0M7QUFERCxHQUREO0FBSUM7QUFBQTtBQUFBLEtBQUssV0FBVSx1QkFBZjtBQUNDLHVEQUFVLE1BQU1ILE1BQU1JLElBQXRCLEVBQTRCLFFBQVFILE1BQXBDO0FBREQ7QUFKRCxFQUREO0FBVUE7O0FBRURGLHFCQUFxQk0sU0FBckIsR0FBaUM7QUFDaENELE9BQU0saUJBQUVFLE1BQUYsQ0FBU0MsVUFEaUI7QUFFaENMLFdBQVUsaUJBQUVJLE1BRm9CO0FBR2hDSCxPQUFNLGlCQUFFRyxNQUFGLENBQVNDLFVBSGlCO0FBSWhDTixTQUFRLGlCQUFFSztBQUpzQixDQUFqQzs7a0JBT2VQLG9CIiwiZmlsZSI6InBhdHRlcm4tZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi8uLi9jb250YWluZXJzL21hcmtkb3duJztcblxuZnVuY3Rpb24gUGF0dGVybkRvY3VtZW50YXRpb24ocHJvcHMpIHtcblx0Y29uc3Qgc291cmNlID0gcHJvcHMuc291cmNlIHx8IHByb3BzLmNoaWxkcmVuO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicGF0dGVybi1jb2RlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tY29kZV9fdG9vbGJhclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tY29kZV9fbmFtZVwiPntwcm9wcy5uYW1lfTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tY29kZV9fY29udGVudFwiPlxuXHRcdFx0XHQ8TWFya2Rvd24gYmFzZT17cHJvcHMuYmFzZX0gc291cmNlPXtzb3VyY2V9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5QYXR0ZXJuRG9jdW1lbnRhdGlvbi5wcm9wVHlwZXMgPSB7XG5cdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNoaWxkcmVuOiB0LnN0cmluZyxcblx0bmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0c291cmNlOiB0LnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGF0dGVybkRvY3VtZW50YXRpb247XG4iXX0=