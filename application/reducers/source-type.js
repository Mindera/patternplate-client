'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = 'source';

function handler(state, _ref) {
	var payload = _ref.payload;

	if (!payload.query.source) {
		return state;
	}

	var parsed = _urlQuery2.default.parse(payload.query.source || '');
	return parsed.query.type || defaultValue;
}

exports.default = (0, _reduxActions.handleAction)('@@router/LOCATION_CHANGE', handler, defaultValue);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9zb3VyY2UtdHlwZS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0VmFsdWUiLCJoYW5kbGVyIiwic3RhdGUiLCJwYXlsb2FkIiwicXVlcnkiLCJzb3VyY2UiLCJwYXJzZWQiLCJwYXJzZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFFBQXJCOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLFFBQW1DO0FBQUEsS0FBVkMsT0FBVSxRQUFWQSxPQUFVOztBQUNsQyxLQUFJLENBQUNBLFFBQVFDLEtBQVIsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDMUIsU0FBT0gsS0FBUDtBQUNBOztBQUVELEtBQU1JLFNBQVMsbUJBQVNDLEtBQVQsQ0FBZUosUUFBUUMsS0FBUixDQUFjQyxNQUFkLElBQXdCLEVBQXZDLENBQWY7QUFDQSxRQUFPQyxPQUFPRixLQUFQLENBQWFJLElBQWIsSUFBcUJSLFlBQTVCO0FBQ0E7O2tCQUVjLGdDQUFhLDBCQUFiLEVBQXlDQyxPQUF6QyxFQUFrREQsWUFBbEQsQyIsImZpbGUiOiJzb3VyY2UtdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCB1cmxRdWVyeSBmcm9tICcuLi91dGlscy91cmwtcXVlcnknO1xuXG5jb25zdCBkZWZhdWx0VmFsdWUgPSAnc291cmNlJztcblxuZnVuY3Rpb24gaGFuZGxlcihzdGF0ZSwge3BheWxvYWR9KSB7XG5cdGlmICghcGF5bG9hZC5xdWVyeS5zb3VyY2UpIHtcblx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cblxuXHRjb25zdCBwYXJzZWQgPSB1cmxRdWVyeS5wYXJzZShwYXlsb2FkLnF1ZXJ5LnNvdXJjZSB8fCAnJyk7XG5cdHJldHVybiBwYXJzZWQucXVlcnkudHlwZSB8fCBkZWZhdWx0VmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbignQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJywgaGFuZGxlciwgZGVmYXVsdFZhbHVlKTtcbiJdfQ==