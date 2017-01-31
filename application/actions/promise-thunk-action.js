'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.createPromiseThunkAction = createPromiseThunkAction;
exports.handlePromiseThunkAction = handlePromiseThunkAction;

var _reduxActions = require('redux-actions');

var _handleDependentActions = require('./handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ident = function ident(i) {
	return i;
};
var asyncIdent = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(i) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.abrupt('return', i);

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function asyncIdent(_x) {
		return _ref.apply(this, arguments);
	};
}();

function createPromiseThunkAction(name, rawCreator) {
	var _this = this;

	var creator = rawCreator || asyncIdent;

	var fn = function fn(payload) {
		var delayedAction = (0, _reduxActions.createAction)(name + '_DELAYED');
		var successAction = (0, _reduxActions.createAction)(name + '_SUCCESS');
		var startAction = (0, _reduxActions.createAction)(name + '_START');
		var throwsAction = (0, _reduxActions.createAction)(name + '_THROWS');

		return function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(dispatch, getState) {
				var delayedTimer, result;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								dispatch(startAction(payload, ident, getState));
								delayedTimer = global.setTimeout(function () {
									dispatch(delayedAction(payload, ident, getState));
								}, 1000);
								_context2.prev = 2;
								_context2.next = 5;
								return creator(payload, dispatch, getState);

							case 5:
								result = _context2.sent;

								global.clearTimeout(delayedTimer);
								dispatch(successAction(result));
								return _context2.abrupt('return', result);

							case 11:
								_context2.prev = 11;
								_context2.t0 = _context2['catch'](2);

								global.clearTimeout(delayedTimer);
								dispatch(throwsAction(_context2.t0));
								return _context2.abrupt('return', _context2.t0);

							case 16:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this, [[2, 11]]);
			}));

			return function (_x2, _x3) {
				return _ref2.apply(this, arguments);
			};
		}();
	};
	fn.__name = name;
	return fn;
}

function handlePromiseThunkAction(rawName, handler) {
	var _handleDependentActio;

	var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var name = rawName.__name || rawName;
	options.dependencies = options.dependencies || [];
	var reducer = (0, _handleDependentActions2.default)((_handleDependentActio = {}, (0, _defineProperty3.default)(_handleDependentActio, name + '_START', handler.start || ident), (0, _defineProperty3.default)(_handleDependentActio, name + '_DELAYED', handler.delayed || ident), (0, _defineProperty3.default)(_handleDependentActio, name + '_SUCCESS', handler.success || ident), (0, _defineProperty3.default)(_handleDependentActio, name + '_THROWS', handler.throws || ident), _handleDependentActio), options);
	return reducer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3Byb21pc2UtdGh1bmstYWN0aW9uLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVByb21pc2VUaHVua0FjdGlvbiIsImhhbmRsZVByb21pc2VUaHVua0FjdGlvbiIsImlkZW50IiwiaSIsImFzeW5jSWRlbnQiLCJuYW1lIiwicmF3Q3JlYXRvciIsImNyZWF0b3IiLCJmbiIsImRlbGF5ZWRBY3Rpb24iLCJzdWNjZXNzQWN0aW9uIiwic3RhcnRBY3Rpb24iLCJ0aHJvd3NBY3Rpb24iLCJkaXNwYXRjaCIsImdldFN0YXRlIiwicGF5bG9hZCIsImRlbGF5ZWRUaW1lciIsImdsb2JhbCIsInNldFRpbWVvdXQiLCJyZXN1bHQiLCJjbGVhclRpbWVvdXQiLCJfX25hbWUiLCJyYXdOYW1lIiwiaGFuZGxlciIsIm9wdGlvbnMiLCJkZXBlbmRlbmNpZXMiLCJyZWR1Y2VyIiwic3RhcnQiLCJkZWxheWVkIiwic3VjY2VzcyIsInRocm93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBTWdCQSx3QixHQUFBQSx3QjtRQThCQUMsd0IsR0FBQUEsd0I7O0FBcENoQjs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsUUFBUSxTQUFSQSxLQUFRO0FBQUEsUUFBS0MsQ0FBTDtBQUFBLENBQWQ7QUFDQSxJQUFNQztBQUFBLHVFQUFhLGlCQUFNRCxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBV0EsQ0FBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBRU8sU0FBU0gsd0JBQVQsQ0FBa0NLLElBQWxDLEVBQXdDQyxVQUF4QyxFQUFvRDtBQUFBOztBQUMxRCxLQUFNQyxVQUFVRCxjQUFjRixVQUE5Qjs7QUFFQSxLQUFNSSxLQUFLLFNBQUxBLEVBQUssVUFBVztBQUNyQixNQUFNQyxnQkFBZ0IsZ0NBQWdCSixJQUFoQixjQUF0QjtBQUNBLE1BQU1LLGdCQUFnQixnQ0FBZ0JMLElBQWhCLGNBQXRCO0FBQ0EsTUFBTU0sY0FBYyxnQ0FBZ0JOLElBQWhCLFlBQXBCO0FBQ0EsTUFBTU8sZUFBZSxnQ0FBZ0JQLElBQWhCLGFBQXJCOztBQUVBO0FBQUEsMEVBQU8sa0JBQU9RLFFBQVAsRUFBaUJDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNORCxpQkFBU0YsWUFBWUksT0FBWixFQUFxQmIsS0FBckIsRUFBNEJZLFFBQTVCLENBQVQ7QUFDTUUsb0JBRkEsR0FFZUMsT0FBT0MsVUFBUCxDQUFrQixZQUFNO0FBQzVDTCxrQkFBU0osY0FBY00sT0FBZCxFQUF1QmIsS0FBdkIsRUFBOEJZLFFBQTlCLENBQVQ7QUFDQSxTQUZvQixFQUVsQixJQUZrQixDQUZmO0FBQUE7QUFBQTtBQUFBLGVBTWdCUCxRQUFRUSxPQUFSLEVBQWlCRixRQUFqQixFQUEyQkMsUUFBM0IsQ0FOaEI7O0FBQUE7QUFNQ0ssY0FORDs7QUFPTEYsZUFBT0csWUFBUCxDQUFvQkosWUFBcEI7QUFDQUgsaUJBQVNILGNBQWNTLE1BQWQsQ0FBVDtBQVJLLDBDQVNFQSxNQVRGOztBQUFBO0FBQUE7QUFBQTs7QUFXTEYsZUFBT0csWUFBUCxDQUFvQkosWUFBcEI7QUFDQUgsaUJBQVNELDBCQUFUO0FBWks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQSxFQXRCRDtBQXVCQUosSUFBR2EsTUFBSCxHQUFZaEIsSUFBWjtBQUNBLFFBQU9HLEVBQVA7QUFDQTs7QUFFTSxTQUFTUCx3QkFBVCxDQUFrQ3FCLE9BQWxDLEVBQTJDQyxPQUEzQyxFQUFrRTtBQUFBOztBQUFBLEtBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDeEUsS0FBTW5CLE9BQU9pQixRQUFRRCxNQUFSLElBQWtCQyxPQUEvQjtBQUNBRSxTQUFRQyxZQUFSLEdBQXVCRCxRQUFRQyxZQUFSLElBQXdCLEVBQS9DO0FBQ0EsS0FBTUMsVUFBVSx3SEFDWHJCLElBRFcsYUFDSWtCLFFBQVFJLEtBQVIsSUFBaUJ6QixLQURyQix3REFFWEcsSUFGVyxlQUVNa0IsUUFBUUssT0FBUixJQUFtQjFCLEtBRnpCLHdEQUdYRyxJQUhXLGVBR01rQixRQUFRTSxPQUFSLElBQW1CM0IsS0FIekIsd0RBSVhHLElBSlcsY0FJS2tCLFFBQVFPLE1BQVIsSUFBa0I1QixLQUp2QiwyQkFLYnNCLE9BTGEsQ0FBaEI7QUFNQSxRQUFPRSxPQUFQO0FBQ0EiLCJmaWxlIjoicHJvbWlzZS10aHVuay1hY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFjdGlvbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgaGFuZGxlRGVwZW5kZW50QWN0aW9ucyBmcm9tICcuL2hhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucyc7XG5cbmNvbnN0IGlkZW50ID0gaSA9PiBpO1xuY29uc3QgYXN5bmNJZGVudCA9IGFzeW5jIGkgPT4gaTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb21pc2VUaHVua0FjdGlvbihuYW1lLCByYXdDcmVhdG9yKSB7XG5cdGNvbnN0IGNyZWF0b3IgPSByYXdDcmVhdG9yIHx8IGFzeW5jSWRlbnQ7XG5cblx0Y29uc3QgZm4gPSBwYXlsb2FkID0+IHtcblx0XHRjb25zdCBkZWxheWVkQWN0aW9uID0gY3JlYXRlQWN0aW9uKGAke25hbWV9X0RFTEFZRURgKTtcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gY3JlYXRlQWN0aW9uKGAke25hbWV9X1NVQ0NFU1NgKTtcblx0XHRjb25zdCBzdGFydEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfV9TVEFSVGApO1xuXHRcdGNvbnN0IHRocm93c0FjdGlvbiA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfV9USFJPV1NgKTtcblxuXHRcdHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChzdGFydEFjdGlvbihwYXlsb2FkLCBpZGVudCwgZ2V0U3RhdGUpKTtcblx0XHRcdGNvbnN0IGRlbGF5ZWRUaW1lciA9IGdsb2JhbC5zZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goZGVsYXllZEFjdGlvbihwYXlsb2FkLCBpZGVudCwgZ2V0U3RhdGUpKTtcblx0XHRcdH0sIDEwMDApO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRvcihwYXlsb2FkLCBkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuXHRcdFx0XHRnbG9iYWwuY2xlYXJUaW1lb3V0KGRlbGF5ZWRUaW1lcik7XG5cdFx0XHRcdGRpc3BhdGNoKHN1Y2Nlc3NBY3Rpb24ocmVzdWx0KSk7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRnbG9iYWwuY2xlYXJUaW1lb3V0KGRlbGF5ZWRUaW1lcik7XG5cdFx0XHRcdGRpc3BhdGNoKHRocm93c0FjdGlvbihlcnJvcikpO1xuXHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm4uX19uYW1lID0gbmFtZTtcblx0cmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvbWlzZVRodW5rQWN0aW9uKHJhd05hbWUsIGhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuXHRjb25zdCBuYW1lID0gcmF3TmFtZS5fX25hbWUgfHwgcmF3TmFtZTtcblx0b3B0aW9ucy5kZXBlbmRlbmNpZXMgPSBvcHRpb25zLmRlcGVuZGVuY2llcyB8fCBbXTtcblx0Y29uc3QgcmVkdWNlciA9IGhhbmRsZURlcGVuZGVudEFjdGlvbnMoe1xuXHRcdFtgJHtuYW1lfV9TVEFSVGBdOiBoYW5kbGVyLnN0YXJ0IHx8IGlkZW50LFxuXHRcdFtgJHtuYW1lfV9ERUxBWUVEYF06IGhhbmRsZXIuZGVsYXllZCB8fCBpZGVudCxcblx0XHRbYCR7bmFtZX1fU1VDQ0VTU2BdOiBoYW5kbGVyLnN1Y2Nlc3MgfHwgaWRlbnQsXG5cdFx0W2Ake25hbWV9X1RIUk9XU2BdOiBoYW5kbGVyLnRocm93cyB8fCBpZGVudFxuXHR9LCBvcHRpb25zKTtcblx0cmV0dXJuIHJlZHVjZXI7XG59XG4iXX0=