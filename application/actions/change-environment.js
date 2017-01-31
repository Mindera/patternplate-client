'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ = require('./');

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = changeEnvironment;
var type = exports.type = 'CHANGE_ENVIRONMENT';

function changeEnvironment(environment) {
	return function (dispatch, getState) {
		var location = getState().routing.locationBeforeTransitions;
		var parsed = _urlQuery2.default.parse(location.pathname);
		var pathname = _urlQuery2.default.format((0, _extends3.default)({}, parsed, {
			query: {
				environment: environment
			}
		}));

		dispatch((0, _.patchLocation)({ pathname: pathname }));
	};
}

changeEnvironment.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2NoYW5nZS1lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6WyJjaGFuZ2VFbnZpcm9ubWVudCIsInR5cGUiLCJlbnZpcm9ubWVudCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2NhdGlvbiIsInJvdXRpbmciLCJsb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIiwicGFyc2VkIiwicGFyc2UiLCJwYXRobmFtZSIsImZvcm1hdCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7a0JBRWVBLGlCO0FBQ1IsSUFBTUMsc0JBQU8sb0JBQWI7O0FBRVAsU0FBU0QsaUJBQVQsQ0FBMkJFLFdBQTNCLEVBQXdDO0FBQ3ZDLFFBQU8sVUFBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQzlCLE1BQU1DLFdBQVdELFdBQVdFLE9BQVgsQ0FBbUJDLHlCQUFwQztBQUNBLE1BQU1DLFNBQVMsbUJBQVNDLEtBQVQsQ0FBZUosU0FBU0ssUUFBeEIsQ0FBZjtBQUNBLE1BQU1BLFdBQVcsbUJBQVNDLE1BQVQsNEJBQ2JILE1BRGE7QUFFaEJJLFVBQU87QUFDTlY7QUFETTtBQUZTLEtBQWpCOztBQU9BQyxXQUFTLHFCQUFjLEVBQUNPLGtCQUFELEVBQWQsQ0FBVDtBQUNBLEVBWEQ7QUFZQTs7QUFFRFYsa0JBQWtCQyxJQUFsQixHQUF5QkEsSUFBekIiLCJmaWxlIjoiY2hhbmdlLWVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwYXRjaExvY2F0aW9ufSBmcm9tICcuLyc7XG5pbXBvcnQgdXJsUXVlcnkgZnJvbSAnLi4vdXRpbHMvdXJsLXF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlRW52aXJvbm1lbnQ7XG5leHBvcnQgY29uc3QgdHlwZSA9ICdDSEFOR0VfRU5WSVJPTk1FTlQnO1xuXG5mdW5jdGlvbiBjaGFuZ2VFbnZpcm9ubWVudChlbnZpcm9ubWVudCkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXHRcdGNvbnN0IGxvY2F0aW9uID0gZ2V0U3RhdGUoKS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnM7XG5cdFx0Y29uc3QgcGFyc2VkID0gdXJsUXVlcnkucGFyc2UobG9jYXRpb24ucGF0aG5hbWUpO1xuXHRcdGNvbnN0IHBhdGhuYW1lID0gdXJsUXVlcnkuZm9ybWF0KHtcblx0XHRcdC4uLnBhcnNlZCxcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdGVudmlyb25tZW50XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRkaXNwYXRjaChwYXRjaExvY2F0aW9uKHtwYXRobmFtZX0pKTtcblx0fTtcbn1cblxuY2hhbmdlRW52aXJvbm1lbnQudHlwZSA9IHR5cGU7XG4iXX0=