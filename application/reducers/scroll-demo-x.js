'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _handleDependentActions2.default)({
	'@@router/LOCATION_CHANGE': function routerLOCATION_CHANGE(state, action, _ref) {
		var pattern = _ref.pattern;

		return { x: 0, pattern: pattern };
	},
	'SCROLL_DEMO_X': function SCROLL_DEMO_X(state, _ref2) {
		var payload = _ref2.payload;

		return (0, _extends3.default)({}, state, { x: payload });
	}
}, { defaultValue: { x: 0 }, dependencies: ['pattern'] });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9zY3JvbGwtZGVtby14LmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiYWN0aW9uIiwicGF0dGVybiIsIngiLCJwYXlsb2FkIiwiZGVmYXVsdFZhbHVlIiwiZGVwZW5kZW5jaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxzQ0FBdUI7QUFDckMsNkJBQTRCLCtCQUFDQSxLQUFELEVBQVFDLE1BQVIsUUFBOEI7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7O0FBQ3pELFNBQU8sRUFBQ0MsR0FBRyxDQUFKLEVBQU9ELGdCQUFQLEVBQVA7QUFDQSxFQUhvQztBQUlyQyxrQkFBaUIsdUJBQUNGLEtBQUQsU0FBc0I7QUFBQSxNQUFiSSxPQUFhLFNBQWJBLE9BQWE7O0FBQ3RDLG9DQUFXSixLQUFYLElBQWtCRyxHQUFHQyxPQUFyQjtBQUNBO0FBTm9DLENBQXZCLEVBT1osRUFBQ0MsY0FBYyxFQUFDRixHQUFHLENBQUosRUFBZixFQUF1QkcsY0FBYyxDQUFDLFNBQUQsQ0FBckMsRUFQWSxDIiwiZmlsZSI6InNjcm9sbC1kZW1vLXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGFuZGxlRGVwZW5kZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2hhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZURlcGVuZGVudEFjdGlvbnMoe1xuXHQnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJzogKHN0YXRlLCBhY3Rpb24sIHtwYXR0ZXJufSkgPT4ge1xuXHRcdHJldHVybiB7eDogMCwgcGF0dGVybn07XG5cdH0sXG5cdCdTQ1JPTExfREVNT19YJzogKHN0YXRlLCB7cGF5bG9hZH0pID0+IHtcblx0XHRyZXR1cm4gey4uLnN0YXRlLCB4OiBwYXlsb2FkfTtcblx0fVxufSwge2RlZmF1bHRWYWx1ZToge3g6IDB9LCBkZXBlbmRlbmNpZXM6IFsncGF0dGVybiddfSk7XG4iXX0=