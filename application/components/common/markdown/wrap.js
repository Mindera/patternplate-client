'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = wrap;


function wrap(Component, options) {
	var h = _react2.default.createElement;
	return function (tagName, props, children) {
		return h(Component, (0, _lodash.merge)({}, options, props, { tagName: tagName }), children);
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi93cmFwLmpzIl0sIm5hbWVzIjpbIndyYXAiLCJDb21wb25lbnQiLCJvcHRpb25zIiwiaCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztrQkFFZUEsSTs7O0FBRWYsU0FBU0EsSUFBVCxDQUFjQyxTQUFkLEVBQXlCQyxPQUF6QixFQUFrQztBQUNqQyxLQUFNQyxJQUFJLGdCQUFNQyxhQUFoQjtBQUNBLFFBQU8sVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQWlCQyxRQUFqQixFQUE4QjtBQUNwQyxTQUFPSixFQUFFRixTQUFGLEVBQWEsbUJBQU0sRUFBTixFQUFVQyxPQUFWLEVBQW1CSSxLQUFuQixFQUEwQixFQUFDRCxnQkFBRCxFQUExQixDQUFiLEVBQW1ERSxRQUFuRCxDQUFQO0FBQ0EsRUFGRDtBQUdBIiwiZmlsZSI6IndyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHttZXJnZX0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgd3JhcDtcblxuZnVuY3Rpb24gd3JhcChDb21wb25lbnQsIG9wdGlvbnMpIHtcblx0Y29uc3QgaCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQ7XG5cdHJldHVybiAodGFnTmFtZSwgcHJvcHMsIGNoaWxkcmVuKSA9PiB7XG5cdFx0cmV0dXJuIGgoQ29tcG9uZW50LCBtZXJnZSh7fSwgb3B0aW9ucywgcHJvcHMsIHt0YWdOYW1lfSksIGNoaWxkcmVuKTtcblx0fTtcbn1cbiJdfQ==