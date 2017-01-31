'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = search;
var type = exports.type = 'SEARCH';

function search(search) {
	return function (dispatch) {
		dispatch((0, _.patchLocation)({
			query: {
				search: search
			}
		}));
	};
}

search.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJ0eXBlIiwiZGlzcGF0Y2giLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztrQkFFZUEsTTtBQUNSLElBQU1DLHNCQUFPLFFBQWI7O0FBRVAsU0FBU0QsTUFBVCxDQUFnQkEsTUFBaEIsRUFBd0I7QUFDdkIsUUFBTyxvQkFBWTtBQUNsQkUsV0FBUyxxQkFBYztBQUN0QkMsVUFBTztBQUNOSDtBQURNO0FBRGUsR0FBZCxDQUFUO0FBS0EsRUFORDtBQU9BOztBQUVEQSxPQUFPQyxJQUFQLEdBQWNBLElBQWQiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwYXRjaExvY2F0aW9ufSBmcm9tICcuLyc7XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbmV4cG9ydCBjb25zdCB0eXBlID0gJ1NFQVJDSCc7XG5cbmZ1bmN0aW9uIHNlYXJjaChzZWFyY2gpIHtcblx0cmV0dXJuIGRpc3BhdGNoID0+IHtcblx0XHRkaXNwYXRjaChwYXRjaExvY2F0aW9uKHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHNlYXJjaFxuXHRcdFx0fVxuXHRcdH0pKTtcblx0fTtcbn1cblxuc2VhcmNoLnR5cGUgPSB0eXBlO1xuIl19