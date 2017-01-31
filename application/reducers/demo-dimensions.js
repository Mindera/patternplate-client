'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _getIdByPathname = require('../utils/get-id-by-pathname');

var _getIdByPathname2 = _interopRequireDefault(_getIdByPathname);

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _handleDependentActions2.default)({
	'@@router/LOCATION_CHANGE': function routerLOCATION_CHANGE(state, action, _ref) {
		var base = _ref.base;

		var id = (0, _getIdByPathname2.default)(action.payload.pathname, base) || null;
		var x = Math.max(100, Number(action.payload.query.width));
		var y = Math.max(100, Number(action.payload.query.height));

		var previous = state[id] || {};

		if (previous.x !== x || previous.y !== y) {
			return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, id, (0, _extends4.default)({}, state[id], {
				x: x,
				y: y
			})));
		}
		return state;
	}
}, { defaultValue: {}, dependencies: ['base'] });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9kZW1vLWRpbWVuc2lvbnMuanMiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJiYXNlIiwiaWQiLCJwYXlsb2FkIiwicGF0aG5hbWUiLCJ4IiwiTWF0aCIsIm1heCIsIk51bWJlciIsInF1ZXJ5Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwicHJldmlvdXMiLCJkZWZhdWx0VmFsdWUiLCJkZXBlbmRlbmNpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUVlLHNDQUF1QjtBQUNyQyw2QkFBNEIsK0JBQUNBLEtBQUQsRUFBUUMsTUFBUixRQUEyQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDdEQsTUFBTUMsS0FBSywrQkFBZ0JGLE9BQU9HLE9BQVAsQ0FBZUMsUUFBL0IsRUFBeUNILElBQXpDLEtBQWtELElBQTdEO0FBQ0EsTUFBTUksSUFBSUMsS0FBS0MsR0FBTCxDQUFTLEdBQVQsRUFBY0MsT0FBT1IsT0FBT0csT0FBUCxDQUFlTSxLQUFmLENBQXFCQyxLQUE1QixDQUFkLENBQVY7QUFDQSxNQUFNQyxJQUFJTCxLQUFLQyxHQUFMLENBQVMsR0FBVCxFQUFjQyxPQUFPUixPQUFPRyxPQUFQLENBQWVNLEtBQWYsQ0FBcUJHLE1BQTVCLENBQWQsQ0FBVjs7QUFFQSxNQUFNQyxXQUFXZCxNQUFNRyxFQUFOLEtBQWEsRUFBOUI7O0FBRUEsTUFBSVcsU0FBU1IsQ0FBVCxLQUFlQSxDQUFmLElBQW9CUSxTQUFTRixDQUFULEtBQWVBLENBQXZDLEVBQTBDO0FBQ3pDLHFDQUNJWixLQURKLG9DQUVFRyxFQUZGLDZCQUdLSCxNQUFNRyxFQUFOLENBSEw7QUFJRUcsUUFKRjtBQUtFTTtBQUxGO0FBUUE7QUFDRCxTQUFPWixLQUFQO0FBQ0E7QUFuQm9DLENBQXZCLEVBb0JaLEVBQUNlLGNBQWMsRUFBZixFQUFtQkMsY0FBYyxDQUFDLE1BQUQsQ0FBakMsRUFwQlksQyIsImZpbGUiOiJkZW1vLWRpbWVuc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0SWRCeVBhdGhuYW1lIGZyb20gJy4uL3V0aWxzL2dldC1pZC1ieS1wYXRobmFtZSc7XG5pbXBvcnQgaGFuZGxlRGVwZW5kZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2hhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZURlcGVuZGVudEFjdGlvbnMoe1xuXHQnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJzogKHN0YXRlLCBhY3Rpb24sIHtiYXNlfSkgPT4ge1xuXHRcdGNvbnN0IGlkID0gZ2V0SWRCeVBhdGhuYW1lKGFjdGlvbi5wYXlsb2FkLnBhdGhuYW1lLCBiYXNlKSB8fCBudWxsO1xuXHRcdGNvbnN0IHggPSBNYXRoLm1heCgxMDAsIE51bWJlcihhY3Rpb24ucGF5bG9hZC5xdWVyeS53aWR0aCkpO1xuXHRcdGNvbnN0IHkgPSBNYXRoLm1heCgxMDAsIE51bWJlcihhY3Rpb24ucGF5bG9hZC5xdWVyeS5oZWlnaHQpKTtcblxuXHRcdGNvbnN0IHByZXZpb3VzID0gc3RhdGVbaWRdIHx8IHt9O1xuXG5cdFx0aWYgKHByZXZpb3VzLnggIT09IHggfHwgcHJldmlvdXMueSAhPT0geSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFtpZF06IHtcblx0XHRcdFx0XHQuLi5zdGF0ZVtpZF0sXG5cdFx0XHRcdFx0eCxcblx0XHRcdFx0XHR5XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxufSwge2RlZmF1bHRWYWx1ZToge30sIGRlcGVuZGVuY2llczogWydiYXNlJ119KTtcbiJdfQ==