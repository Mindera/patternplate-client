'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

exports.default = getField;


function getField(name) {
	return function (lines) {
		var lookup = name + ': ';
		var line = (0, _lodash.find)(lines, function (line) {
			return (0, _lodash.startsWith)(line, lookup);
		});
		return line.slice(lookup.length - 1);
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9mcmFtZS9nZXQtZmllbGQuanMiXSwibmFtZXMiOlsiZ2V0RmllbGQiLCJuYW1lIiwibG9va3VwIiwibGluZSIsImxpbmVzIiwic2xpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFDZUEsUTs7O0FBRWYsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdkIsUUFBTyxpQkFBUztBQUNmLE1BQU1DLFNBQVlELElBQVosT0FBTjtBQUNBLE1BQU1FLE9BQU8sa0JBQUtDLEtBQUwsRUFBWTtBQUFBLFVBQVEsd0JBQVdELElBQVgsRUFBaUJELE1BQWpCLENBQVI7QUFBQSxHQUFaLENBQWI7QUFDQSxTQUFPQyxLQUFLRSxLQUFMLENBQVdILE9BQU9JLE1BQVAsR0FBZ0IsQ0FBM0IsQ0FBUDtBQUNBLEVBSkQ7QUFLQSIsImZpbGUiOiJnZXQtZmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZpbmQsIHN0YXJ0c1dpdGh9IGZyb20gJ2xvZGFzaCc7XG5leHBvcnQgZGVmYXVsdCBnZXRGaWVsZDtcblxuZnVuY3Rpb24gZ2V0RmllbGQobmFtZSkge1xuXHRyZXR1cm4gbGluZXMgPT4ge1xuXHRcdGNvbnN0IGxvb2t1cCA9IGAke25hbWV9OiBgO1xuXHRcdGNvbnN0IGxpbmUgPSBmaW5kKGxpbmVzLCBsaW5lID0+IHN0YXJ0c1dpdGgobGluZSwgbG9va3VwKSk7XG5cdFx0cmV0dXJuIGxpbmUuc2xpY2UobG9va3VwLmxlbmd0aCAtIDEpO1xuXHR9O1xufVxuIl19