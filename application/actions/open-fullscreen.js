'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = openFullscreen;
var type = exports.type = 'OPEN_FULLSCREEN';

function openFullscreen() {
	return function (dispatch, getState) {
		var _getState = getState(),
		    base = _getState.base,
		    id = _getState.id,
		    environment = _getState.environment;

		if (id === '..' || !window.open) {
			return;
		}

		var href = _urlQuery2.default.format({
			pathname: base + 'demo/' + id + '/index.html',
			query: { environment: environment }
		});

		window.open(href, '_blank');
	};
}

openFullscreen.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL29wZW4tZnVsbHNjcmVlbi5qcyJdLCJuYW1lcyI6WyJvcGVuRnVsbHNjcmVlbiIsInR5cGUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiYmFzZSIsImlkIiwiZW52aXJvbm1lbnQiLCJ3aW5kb3ciLCJvcGVuIiwiaHJlZiIsImZvcm1hdCIsInBhdGhuYW1lIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlQSxjO0FBQ1IsSUFBTUMsc0JBQU8saUJBQWI7O0FBRVAsU0FBU0QsY0FBVCxHQUEwQjtBQUN6QixRQUFPLFVBQUNFLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUFBLGtCQUNFQSxVQURGO0FBQUEsTUFDdkJDLElBRHVCLGFBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2pCQyxFQURpQixhQUNqQkEsRUFEaUI7QUFBQSxNQUNiQyxXQURhLGFBQ2JBLFdBRGE7O0FBRTlCLE1BQUlELE9BQU8sSUFBUCxJQUFlLENBQUNFLE9BQU9DLElBQTNCLEVBQWlDO0FBQ2hDO0FBQ0E7O0FBRUQsTUFBTUMsT0FBTyxtQkFBU0MsTUFBVCxDQUFnQjtBQUM1QkMsYUFBYVAsSUFBYixhQUF5QkMsRUFBekIsZ0JBRDRCO0FBRTVCTyxVQUFPLEVBQUNOLHdCQUFEO0FBRnFCLEdBQWhCLENBQWI7O0FBS0FDLFNBQU9DLElBQVAsQ0FBWUMsSUFBWixFQUFrQixRQUFsQjtBQUNBLEVBWkQ7QUFhQTs7QUFFRFQsZUFBZUMsSUFBZixHQUFzQkEsSUFBdEIiLCJmaWxlIjoib3Blbi1mdWxsc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4uL3V0aWxzL3VybC1xdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5GdWxsc2NyZWVuO1xuZXhwb3J0IGNvbnN0IHR5cGUgPSAnT1BFTl9GVUxMU0NSRUVOJztcblxuZnVuY3Rpb24gb3BlbkZ1bGxzY3JlZW4oKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG5cdFx0Y29uc3Qge2Jhc2UsIGlkLCBlbnZpcm9ubWVudH0gPSBnZXRTdGF0ZSgpO1xuXHRcdGlmIChpZCA9PT0gJy4uJyB8fCAhd2luZG93Lm9wZW4pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmID0gdXJsUXVlcnkuZm9ybWF0KHtcblx0XHRcdHBhdGhuYW1lOiBgJHtiYXNlfWRlbW8vJHtpZH0vaW5kZXguaHRtbGAsXG5cdFx0XHRxdWVyeToge2Vudmlyb25tZW50fVxuXHRcdH0pO1xuXG5cdFx0d2luZG93Lm9wZW4oaHJlZiwgJ19ibGFuaycpO1xuXHR9O1xufVxuXG5vcGVuRnVsbHNjcmVlbi50eXBlID0gdHlwZTtcbiJdfQ==