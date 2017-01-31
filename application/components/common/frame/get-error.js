'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getField = require('./get-field');

var _getField2 = _interopRequireDefault(_getField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = getError;


function getError(lines) {
	var pattern = (0, _getField2.default)('Pattern')(lines);
	var transform = (0, _getField2.default)('Transform')(lines);
	var file = (0, _getField2.default)('File')(lines);

	var error = new Error(lines.join('\n'));
	error.pattern = pattern;
	error.transform = transform;
	error.fileName = file;
	return error;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9mcmFtZS9nZXQtZXJyb3IuanMiXSwibmFtZXMiOlsiZ2V0RXJyb3IiLCJsaW5lcyIsInBhdHRlcm4iLCJ0cmFuc2Zvcm0iLCJmaWxlIiwiZXJyb3IiLCJFcnJvciIsImpvaW4iLCJmaWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFDZUEsUTs7O0FBRWYsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDeEIsS0FBTUMsVUFBVSx3QkFBUyxTQUFULEVBQW9CRCxLQUFwQixDQUFoQjtBQUNBLEtBQU1FLFlBQVksd0JBQVMsV0FBVCxFQUFzQkYsS0FBdEIsQ0FBbEI7QUFDQSxLQUFNRyxPQUFPLHdCQUFTLE1BQVQsRUFBaUJILEtBQWpCLENBQWI7O0FBRUEsS0FBTUksUUFBUSxJQUFJQyxLQUFKLENBQVVMLE1BQU1NLElBQU4sQ0FBVyxJQUFYLENBQVYsQ0FBZDtBQUNBRixPQUFNSCxPQUFOLEdBQWdCQSxPQUFoQjtBQUNBRyxPQUFNRixTQUFOLEdBQWtCQSxTQUFsQjtBQUNBRSxPQUFNRyxRQUFOLEdBQWlCSixJQUFqQjtBQUNBLFFBQU9DLEtBQVA7QUFDQSIsImZpbGUiOiJnZXQtZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RmllbGQgZnJvbSAnLi9nZXQtZmllbGQnO1xuZXhwb3J0IGRlZmF1bHQgZ2V0RXJyb3I7XG5cbmZ1bmN0aW9uIGdldEVycm9yKGxpbmVzKSB7XG5cdGNvbnN0IHBhdHRlcm4gPSBnZXRGaWVsZCgnUGF0dGVybicpKGxpbmVzKTtcblx0Y29uc3QgdHJhbnNmb3JtID0gZ2V0RmllbGQoJ1RyYW5zZm9ybScpKGxpbmVzKTtcblx0Y29uc3QgZmlsZSA9IGdldEZpZWxkKCdGaWxlJykobGluZXMpO1xuXG5cdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGxpbmVzLmpvaW4oJ1xcbicpKTtcblx0ZXJyb3IucGF0dGVybiA9IHBhdHRlcm47XG5cdGVycm9yLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblx0ZXJyb3IuZmlsZU5hbWUgPSBmaWxlO1xuXHRyZXR1cm4gZXJyb3I7XG59XG4iXX0=