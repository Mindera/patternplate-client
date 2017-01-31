'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _code = require('../code');

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = MarkdownCode;


function MarkdownCode(props) {
	var language = parseLanguage(props.className);

	if (!language) {
		return _react2.default.createElement(
			'code',
			null,
			props.children
		);
	}

	var source = props.children.join('');
	return _react2.default.createElement(
		_code2.default,
		{ language: language },
		source
	);
}

MarkdownCode.propTypes = {
	children: _react.PropTypes.any.isRequired,
	className: _react.PropTypes.string
};

function parseLanguage() {
	var classNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var matches = classNames.split(' ').map(function (className) {
		return className.split('-');
	}).filter(function (entry) {
		return entry[0] === 'language';
	}).map(function (entry) {
		return entry[1];
	});
	return matches[0];
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1jb2RlLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duQ29kZSIsInByb3BzIiwibGFuZ3VhZ2UiLCJwYXJzZUxhbmd1YWdlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJzb3VyY2UiLCJqb2luIiwicHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImNsYXNzTmFtZXMiLCJtYXRjaGVzIiwic3BsaXQiLCJtYXAiLCJmaWx0ZXIiLCJlbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxZOzs7QUFFZixTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUM1QixLQUFNQyxXQUFXQyxjQUFjRixNQUFNRyxTQUFwQixDQUFqQjs7QUFFQSxLQUFJLENBQUNGLFFBQUwsRUFBZTtBQUNkLFNBQ0M7QUFBQTtBQUFBO0FBQ0VELFNBQU1JO0FBRFIsR0FERDtBQUtBOztBQUVELEtBQU1DLFNBQVNMLE1BQU1JLFFBQU4sQ0FBZUUsSUFBZixDQUFvQixFQUFwQixDQUFmO0FBQ0EsUUFDQztBQUFBO0FBQUEsSUFBTSxVQUFVTCxRQUFoQjtBQUNFSTtBQURGLEVBREQ7QUFLQTs7QUFFRE4sYUFBYVEsU0FBYixHQUF5QjtBQUN4QkgsV0FBVSxpQkFBRUksR0FBRixDQUFNQyxVQURRO0FBRXhCTixZQUFXLGlCQUFFTztBQUZXLENBQXpCOztBQUtBLFNBQVNSLGFBQVQsR0FBd0M7QUFBQSxLQUFqQlMsVUFBaUIsdUVBQUosRUFBSTs7QUFDdkMsS0FBTUMsVUFBVUQsV0FBV0UsS0FBWCxDQUFpQixHQUFqQixFQUNkQyxHQURjLENBQ1Y7QUFBQSxTQUFhWCxVQUFVVSxLQUFWLENBQWdCLEdBQWhCLENBQWI7QUFBQSxFQURVLEVBRWRFLE1BRmMsQ0FFUDtBQUFBLFNBQVNDLE1BQU0sQ0FBTixNQUFhLFVBQXRCO0FBQUEsRUFGTyxFQUdkRixHQUhjLENBR1Y7QUFBQSxTQUFTRSxNQUFNLENBQU4sQ0FBVDtBQUFBLEVBSFUsQ0FBaEI7QUFJQSxRQUFPSixRQUFRLENBQVIsQ0FBUDtBQUNBIiwiZmlsZSI6Im1hcmtkb3duLWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGUgZnJvbSAnLi4vY29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duQ29kZTtcblxuZnVuY3Rpb24gTWFya2Rvd25Db2RlKHByb3BzKSB7XG5cdGNvbnN0IGxhbmd1YWdlID0gcGFyc2VMYW5ndWFnZShwcm9wcy5jbGFzc05hbWUpO1xuXG5cdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvZGU+XG5cdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvY29kZT5cblx0XHQpO1xuXHR9XG5cblx0Y29uc3Qgc291cmNlID0gcHJvcHMuY2hpbGRyZW4uam9pbignJyk7XG5cdHJldHVybiAoXG5cdFx0PENvZGUgbGFuZ3VhZ2U9e2xhbmd1YWdlfT5cblx0XHRcdHtzb3VyY2V9XG5cdFx0PC9Db2RlPlxuXHQpO1xufVxuXG5NYXJrZG93bkNvZGUucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogdC5hbnkuaXNSZXF1aXJlZCxcblx0Y2xhc3NOYW1lOiB0LnN0cmluZ1xufTtcblxuZnVuY3Rpb24gcGFyc2VMYW5ndWFnZShjbGFzc05hbWVzID0gJycpIHtcblx0Y29uc3QgbWF0Y2hlcyA9IGNsYXNzTmFtZXMuc3BsaXQoJyAnKVxuXHRcdC5tYXAoY2xhc3NOYW1lID0+IGNsYXNzTmFtZS5zcGxpdCgnLScpKVxuXHRcdC5maWx0ZXIoZW50cnkgPT4gZW50cnlbMF0gPT09ICdsYW5ndWFnZScpXG5cdFx0Lm1hcChlbnRyeSA9PiBlbnRyeVsxXSk7XG5cdHJldHVybiBtYXRjaGVzWzBdO1xufVxuIl19