'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = null;

function handler(_, _ref, _ref2) {
	var payload = _ref.payload;
	var environment = _ref2.environment;

	if (payload.query.source) {
		var parsed = _urlQuery2.default.parse(payload.query.source);
		return _urlQuery2.default.format((0, _extends3.default)({}, parsed, {
			query: (0, _extends3.default)({}, parsed.query, {
				environment: environment
			})
		}));
	}
	return defaultValue;
}

exports.default = (0, _handleDependentActions2.default)({
	'@@router/LOCATION_CHANGE': handler
}, {
	dependencies: ['environment']
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9zb3VyY2UtaWQuanMiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlIiwiaGFuZGxlciIsIl8iLCJwYXlsb2FkIiwiZW52aXJvbm1lbnQiLCJxdWVyeSIsInNvdXJjZSIsInBhcnNlZCIsInBhcnNlIiwiZm9ybWF0IiwiZGVwZW5kZW5jaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxJQUFyQjs7QUFFQSxTQUFTQyxPQUFULENBQWlCQyxDQUFqQixlQUE4QztBQUFBLEtBQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxLQUFkQyxXQUFjLFNBQWRBLFdBQWM7O0FBQzdDLEtBQUlELFFBQVFFLEtBQVIsQ0FBY0MsTUFBbEIsRUFBMEI7QUFDekIsTUFBTUMsU0FBUyxtQkFBU0MsS0FBVCxDQUFlTCxRQUFRRSxLQUFSLENBQWNDLE1BQTdCLENBQWY7QUFDQSxTQUFPLG1CQUFTRyxNQUFULDRCQUNIRixNQURHO0FBRU5GLHFDQUNJRSxPQUFPRixLQURYO0FBRUNEO0FBRkQ7QUFGTSxLQUFQO0FBT0E7QUFDRCxRQUFPSixZQUFQO0FBQ0E7O2tCQUVjLHNDQUF1QjtBQUNyQyw2QkFBNEJDO0FBRFMsQ0FBdkIsRUFFWjtBQUNGUyxlQUFjLENBQUMsYUFBRDtBQURaLENBRlksQyIsImZpbGUiOiJzb3VyY2UtaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGFuZGxlRGVwZW5kZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2hhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucyc7XG5pbXBvcnQgdXJsUXVlcnkgZnJvbSAnLi4vdXRpbHMvdXJsLXF1ZXJ5JztcblxuY29uc3QgZGVmYXVsdFZhbHVlID0gbnVsbDtcblxuZnVuY3Rpb24gaGFuZGxlcihfLCB7cGF5bG9hZH0sIHtlbnZpcm9ubWVudH0pIHtcblx0aWYgKHBheWxvYWQucXVlcnkuc291cmNlKSB7XG5cdFx0Y29uc3QgcGFyc2VkID0gdXJsUXVlcnkucGFyc2UocGF5bG9hZC5xdWVyeS5zb3VyY2UpO1xuXHRcdHJldHVybiB1cmxRdWVyeS5mb3JtYXQoe1xuXHRcdFx0Li4ucGFyc2VkLFxuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0Li4ucGFyc2VkLnF1ZXJ5LFxuXHRcdFx0XHRlbnZpcm9ubWVudFxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBkZWZhdWx0VmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZURlcGVuZGVudEFjdGlvbnMoe1xuXHQnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJzogaGFuZGxlclxufSwge1xuXHRkZXBlbmRlbmNpZXM6IFsnZW52aXJvbm1lbnQnXVxufSk7XG4iXX0=