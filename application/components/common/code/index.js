'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highlight = require('./highlight');

var _highlight2 = _interopRequireDefault(_highlight);

var _toElements = require('./to-elements');

var _toElements2 = _interopRequireDefault(_toElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Code;


function Code(props) {
	var className = (0, _classnames2.default)('code hljs', 'hljs-' + props.language);
	var source = highlightCode(props.language, props.children);

	return _react2.default.createElement(
		'code',
		{ className: className },
		source
	);
}

Code.propTypes = {
	language: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.string.isRequired
};

function highlightCode(language) {
	var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	if (!language) {
		return source;
	}
	if (!source) {
		return source;
	}
	var hast = (0, _highlight2.default)(language, source);
	return (0, _toElements2.default)(hast);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9jb2RlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvZGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImxhbmd1YWdlIiwic291cmNlIiwiaGlnaGxpZ2h0Q29kZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImhhc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7a0JBRWVBLEk7OztBQUVmLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNwQixLQUFNQyxZQUFZLDBCQUFLLFdBQUwsWUFBMEJELE1BQU1FLFFBQWhDLENBQWxCO0FBQ0EsS0FBTUMsU0FBU0MsY0FBY0osTUFBTUUsUUFBcEIsRUFBOEJGLE1BQU1LLFFBQXBDLENBQWY7O0FBRUEsUUFDQztBQUFBO0FBQUEsSUFBTSxXQUFXSixTQUFqQjtBQUNFRTtBQURGLEVBREQ7QUFLQTs7QUFFREosS0FBS08sU0FBTCxHQUFpQjtBQUNoQkosV0FBVSxpQkFBRUssTUFBRixDQUFTQyxVQURIO0FBRWhCSCxXQUFVLGlCQUFFRSxNQUFGLENBQVNDO0FBRkgsQ0FBakI7O0FBS0EsU0FBU0osYUFBVCxDQUF1QkYsUUFBdkIsRUFBOEM7QUFBQSxLQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQzdDLEtBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2QsU0FBT0MsTUFBUDtBQUNBO0FBQ0QsS0FBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWixTQUFPQSxNQUFQO0FBQ0E7QUFDRCxLQUFNTSxPQUFPLHlCQUFVUCxRQUFWLEVBQW9CQyxNQUFwQixDQUFiO0FBQ0EsUUFBTywwQkFBV00sSUFBWCxDQUFQO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgam9pbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBoaWdobGlnaHQgZnJvbSAnLi9oaWdobGlnaHQnO1xuaW1wb3J0IHRvRWxlbWVudHMgZnJvbSAnLi90by1lbGVtZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IENvZGU7XG5cbmZ1bmN0aW9uIENvZGUocHJvcHMpIHtcblx0Y29uc3QgY2xhc3NOYW1lID0gam9pbignY29kZSBobGpzJywgYGhsanMtJHtwcm9wcy5sYW5ndWFnZX1gKTtcblx0Y29uc3Qgc291cmNlID0gaGlnaGxpZ2h0Q29kZShwcm9wcy5sYW5ndWFnZSwgcHJvcHMuY2hpbGRyZW4pO1xuXG5cdHJldHVybiAoXG5cdFx0PGNvZGUgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0e3NvdXJjZX1cblx0XHQ8L2NvZGU+XG5cdCk7XG59XG5cbkNvZGUucHJvcFR5cGVzID0ge1xuXHRsYW5ndWFnZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y2hpbGRyZW46IHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodENvZGUobGFuZ3VhZ2UsIHNvdXJjZSA9ICcnKSB7XG5cdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRyZXR1cm4gc291cmNlO1xuXHR9XG5cdGlmICghc291cmNlKSB7XG5cdFx0cmV0dXJuIHNvdXJjZTtcblx0fVxuXHRjb25zdCBoYXN0ID0gaGlnaGxpZ2h0KGxhbmd1YWdlLCBzb3VyY2UpO1xuXHRyZXR1cm4gdG9FbGVtZW50cyhoYXN0KTtcbn1cbiJdfQ==