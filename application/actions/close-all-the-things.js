'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = closeAllTheThings;
var type = exports.type = 'CLOSE_ALL_THE_THINGS';

function closeAllTheThings() {
	return function (dispatch) {
		dispatch((0, _.dismissAllMessages)());
		dispatch((0, _.patchLocation)({
			query: {
				'issue': null,
				'lightbox': null,
				'menu-enabled': null,
				'source': null,
				'source-expanded': null
			}
		}));
	};
}

closeAllTheThings.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2Nsb3NlLWFsbC10aGUtdGhpbmdzLmpzIl0sIm5hbWVzIjpbImNsb3NlQWxsVGhlVGhpbmdzIiwidHlwZSIsImRpc3BhdGNoIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7a0JBRWVBLGlCO0FBQ1IsSUFBTUMsc0JBQU8sc0JBQWI7O0FBRVAsU0FBU0QsaUJBQVQsR0FBNkI7QUFDNUIsUUFBTyxvQkFBWTtBQUNsQkUsV0FBUywyQkFBVDtBQUNBQSxXQUFTLHFCQUFjO0FBQ3RCQyxVQUFPO0FBQ04sYUFBUyxJQURIO0FBRU4sZ0JBQVksSUFGTjtBQUdOLG9CQUFnQixJQUhWO0FBSU4sY0FBVSxJQUpKO0FBS04sdUJBQW1CO0FBTGI7QUFEZSxHQUFkLENBQVQ7QUFTQSxFQVhEO0FBWUE7O0FBRURILGtCQUFrQkMsSUFBbEIsR0FBeUJBLElBQXpCIiwiZmlsZSI6ImNsb3NlLWFsbC10aGUtdGhpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwYXRjaExvY2F0aW9uLCBkaXNtaXNzQWxsTWVzc2FnZXN9IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgY2xvc2VBbGxUaGVUaGluZ3M7XG5leHBvcnQgY29uc3QgdHlwZSA9ICdDTE9TRV9BTExfVEhFX1RISU5HUyc7XG5cbmZ1bmN0aW9uIGNsb3NlQWxsVGhlVGhpbmdzKCkge1xuXHRyZXR1cm4gZGlzcGF0Y2ggPT4ge1xuXHRcdGRpc3BhdGNoKGRpc21pc3NBbGxNZXNzYWdlcygpKTtcblx0XHRkaXNwYXRjaChwYXRjaExvY2F0aW9uKHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdCdpc3N1ZSc6IG51bGwsXG5cdFx0XHRcdCdsaWdodGJveCc6IG51bGwsXG5cdFx0XHRcdCdtZW51LWVuYWJsZWQnOiBudWxsLFxuXHRcdFx0XHQnc291cmNlJzogbnVsbCxcblx0XHRcdFx0J3NvdXJjZS1leHBhbmRlZCc6IG51bGxcblx0XHRcdH1cblx0XHR9KSk7XG5cdH07XG59XG5cbmNsb3NlQWxsVGhlVGhpbmdzLnR5cGUgPSB0eXBlO1xuIl19