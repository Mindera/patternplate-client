'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = MarkdownHeadline;


function MarkdownHeadline(props) {
	var TagName = props.tagName,
	    p = (0, _objectWithoutProperties3.default)(props, ['tagName']);

	var children = Array.isArray(p.children) ? p.children.join('') : p.children;
	var id = children.split(' ').join('-').toLowerCase();

	return _react2.default.createElement(
		TagName,
		{ id: id },
		props.children
	);
}

MarkdownHeadline.propTypes = {
	children: _react.PropTypes.any.isRequired,
	tagName: _react.PropTypes.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1oZWFkbGluZS5qcyJdLCJuYW1lcyI6WyJNYXJrZG93bkhlYWRsaW5lIiwicHJvcHMiLCJUYWdOYW1lIiwidGFnTmFtZSIsInAiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJpZCIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJwcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZUEsZ0I7OztBQUVmLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBLEtBQ2hCQyxPQURnQixHQUNDRCxLQURELENBQ3pCRSxPQUR5QjtBQUFBLEtBQ0pDLENBREksMENBQ0NILEtBREQ7O0FBRWhDLEtBQU1JLFdBQVdDLE1BQU1DLE9BQU4sQ0FBY0gsRUFBRUMsUUFBaEIsSUFBNEJELEVBQUVDLFFBQUYsQ0FBV0csSUFBWCxDQUFnQixFQUFoQixDQUE1QixHQUFrREosRUFBRUMsUUFBckU7QUFDQSxLQUFNSSxLQUFLSixTQUFTSyxLQUFULENBQWUsR0FBZixFQUFvQkYsSUFBcEIsQ0FBeUIsR0FBekIsRUFBOEJHLFdBQTlCLEVBQVg7O0FBRUEsUUFDQztBQUFDLFNBQUQ7QUFBQSxJQUFTLElBQUlGLEVBQWI7QUFDRVIsUUFBTUk7QUFEUixFQUREO0FBS0E7O0FBRURMLGlCQUFpQlksU0FBakIsR0FBNkI7QUFDNUJQLFdBQVUsaUJBQUVRLEdBQUYsQ0FBTUMsVUFEWTtBQUU1QlgsVUFBUyxpQkFBRVksTUFBRixDQUFTRDtBQUZVLENBQTdCIiwiZmlsZSI6Im1hcmtkb3duLWhlYWRsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25IZWFkbGluZTtcblxuZnVuY3Rpb24gTWFya2Rvd25IZWFkbGluZShwcm9wcykge1xuXHRjb25zdCB7dGFnTmFtZTogVGFnTmFtZSwgLi4ucH0gPSBwcm9wcztcblx0Y29uc3QgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KHAuY2hpbGRyZW4pID8gcC5jaGlsZHJlbi5qb2luKCcnKSA6IHAuY2hpbGRyZW47XG5cdGNvbnN0IGlkID0gY2hpbGRyZW4uc3BsaXQoJyAnKS5qb2luKCctJykudG9Mb3dlckNhc2UoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxUYWdOYW1lIGlkPXtpZH0+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PC9UYWdOYW1lPlxuXHQpO1xufVxuXG5NYXJrZG93bkhlYWRsaW5lLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IHQuYW55LmlzUmVxdWlyZWQsXG5cdHRhZ05hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG4iXX0=