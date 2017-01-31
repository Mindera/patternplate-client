'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reduxActions = require('redux-actions');

var _ = require('./');

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = loadPattern;


function loadPattern() {
	var _this = this;

	return function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch, getState) {
			var state, location, _location$query$envir, environment, type, dataPayload, actions, jobs, id;

			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							state = getState();

							if (!(state.id === '..')) {
								_context.next = 3;
								break;
							}

							return _context.abrupt('return');

						case 3:
							location = state.routing.locationBeforeTransitions;
							_location$query$envir = location.query.environment, environment = _location$query$envir === undefined ? 'index' : _location$query$envir;
							type = _path2.default.basename(state.sourceId) === 'index.md' ? 'source' : state.sourceType;
							dataPayload = {
								id: state.id,
								query: {
									environment: environment
								},
								options: {
									base: state.base
								}
							};
							actions = [(0, _.loadPatternData)(dataPayload), (0, _.loadPatternDemo)(true)];
							jobs = actions.map(dispatch);
							id = _urlQuery2.default.parse(state.sourceId || '').pathname;


							if (id && id !== 'relations') {
								jobs.push(dispatch((0, _.loadPatternFile)({
									base: state.base,
									environment: environment,
									id: state.sourceId,
									type: type
								})));
							}

							_context.next = 13;
							return least(1000, _promise2.default.all(jobs));

						case 13:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();
}

function wait(timeout, value) {
	return new _promise2.default(function (resolve) {
		return setTimeout(function () {
			return resolve(value);
		}, timeout);
	});
}

function least(timeout, thenable) {
	var then = new Date();

	return _promise2.default.resolve(thenable).then(function (result) {
		var delta = 1000 - (new Date() - then) % 1000;
		return wait(delta, result);
	});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2xvYWQtcGF0dGVybi5qcyJdLCJuYW1lcyI6WyJsb2FkUGF0dGVybiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImlkIiwibG9jYXRpb24iLCJyb3V0aW5nIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsInF1ZXJ5IiwiZW52aXJvbm1lbnQiLCJ0eXBlIiwiYmFzZW5hbWUiLCJzb3VyY2VJZCIsInNvdXJjZVR5cGUiLCJkYXRhUGF5bG9hZCIsIm9wdGlvbnMiLCJiYXNlIiwiYWN0aW9ucyIsImpvYnMiLCJtYXAiLCJwYXJzZSIsInBhdGhuYW1lIiwicHVzaCIsImxlYXN0IiwiYWxsIiwid2FpdCIsInRpbWVvdXQiLCJ2YWx1ZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwidGhlbmFibGUiLCJ0aGVuIiwiRGF0ZSIsImRlbHRhIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7a0JBRWVBLFc7OztBQUVmLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDdEI7QUFBQSx3RUFBTyxpQkFBT0MsUUFBUCxFQUFpQkMsUUFBakI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBQyxZQURBLEdBQ1FELFVBRFI7O0FBQUEsYUFHRkMsTUFBTUMsRUFBTixLQUFhLElBSFg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFPQUMsZUFQQSxHQU9XRixNQUFNRyxPQUFOLENBQWNDLHlCQVB6QjtBQUFBLCtCQVEwQkYsU0FBU0csS0FSbkMsQ0FRQ0MsV0FSRCxFQVFDQSxXQVJELHlDQVFlLE9BUmY7QUFTQUMsV0FUQSxHQVNPLGVBQUtDLFFBQUwsQ0FBY1IsTUFBTVMsUUFBcEIsTUFBa0MsVUFBbEMsR0FDWixRQURZLEdBQ0RULE1BQU1VLFVBVlo7QUFZQUMsa0JBWkEsR0FZYztBQUNuQlYsWUFBSUQsTUFBTUMsRUFEUztBQUVuQkksZUFBTztBQUNOQztBQURNLFNBRlk7QUFLbkJNLGlCQUFTO0FBQ1JDLGVBQU1iLE1BQU1hO0FBREo7QUFMVSxRQVpkO0FBc0JBQyxjQXRCQSxHQXNCVSxDQUNmLHVCQUFnQkgsV0FBaEIsQ0FEZSxFQUVmLHVCQUFnQixJQUFoQixDQUZlLENBdEJWO0FBMkJBSSxXQTNCQSxHQTJCT0QsUUFBUUUsR0FBUixDQUFZbEIsUUFBWixDQTNCUDtBQTRCQUcsU0E1QkEsR0E0QkssbUJBQVNnQixLQUFULENBQWVqQixNQUFNUyxRQUFOLElBQWtCLEVBQWpDLEVBQXFDUyxRQTVCMUM7OztBQThCTixXQUFJakIsTUFBTUEsT0FBTyxXQUFqQixFQUE4QjtBQUM3QmMsYUFBS0ksSUFBTCxDQUFVckIsU0FBUyx1QkFBZ0I7QUFDbENlLGVBQU1iLE1BQU1hLElBRHNCO0FBRWxDUCxpQ0FGa0M7QUFHbENMLGFBQUlELE1BQU1TLFFBSHdCO0FBSWxDRjtBQUprQyxTQUFoQixDQUFULENBQVY7QUFNQTs7QUFyQ0s7QUFBQSxjQXVDQWEsTUFBTSxJQUFOLEVBQVksa0JBQVFDLEdBQVIsQ0FBWU4sSUFBWixDQUFaLENBdkNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5Q0E7O0FBRUQsU0FBU08sSUFBVCxDQUFjQyxPQUFkLEVBQXVCQyxLQUF2QixFQUE4QjtBQUM3QixRQUFPLHNCQUFZO0FBQUEsU0FBV0MsV0FBVztBQUFBLFVBQU1DLFFBQVFGLEtBQVIsQ0FBTjtBQUFBLEdBQVgsRUFBaUNELE9BQWpDLENBQVg7QUFBQSxFQUFaLENBQVA7QUFDQTs7QUFFRCxTQUFTSCxLQUFULENBQWVHLE9BQWYsRUFBd0JJLFFBQXhCLEVBQWtDO0FBQ2pDLEtBQU1DLE9BQU8sSUFBSUMsSUFBSixFQUFiOztBQUVBLFFBQU8sa0JBQVFILE9BQVIsQ0FBZ0JDLFFBQWhCLEVBQ0xDLElBREssQ0FDQSxrQkFBVTtBQUNmLE1BQU1FLFFBQVEsT0FBTyxDQUFDLElBQUlELElBQUosS0FBYUQsSUFBZCxJQUFzQixJQUEzQztBQUNBLFNBQU9OLEtBQUtRLEtBQUwsRUFBWUMsTUFBWixDQUFQO0FBQ0EsRUFKSyxDQUFQO0FBS0EiLCJmaWxlIjoibG9hZC1wYXR0ZXJuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQge2NyZWF0ZUFjdGlvbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmltcG9ydCB7bG9hZFBhdHRlcm5EYXRhLCBsb2FkUGF0dGVybkZpbGUsIGxvYWRQYXR0ZXJuRGVtb30gZnJvbSAnLi8nO1xuaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4uL3V0aWxzL3VybC1xdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYXR0ZXJuO1xuXG5mdW5jdGlvbiBsb2FkUGF0dGVybigpIHtcblx0cmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG5cblx0XHRpZiAoc3RhdGUuaWQgPT09ICcuLicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBsb2NhdGlvbiA9IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucztcblx0XHRjb25zdCB7ZW52aXJvbm1lbnQgPSAnaW5kZXgnfSA9IGxvY2F0aW9uLnF1ZXJ5O1xuXHRcdGNvbnN0IHR5cGUgPSBwYXRoLmJhc2VuYW1lKHN0YXRlLnNvdXJjZUlkKSA9PT0gJ2luZGV4Lm1kJyA/XG5cdFx0XHQnc291cmNlJyA6IHN0YXRlLnNvdXJjZVR5cGU7XG5cblx0XHRjb25zdCBkYXRhUGF5bG9hZCA9IHtcblx0XHRcdGlkOiBzdGF0ZS5pZCxcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdGVudmlyb25tZW50XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRiYXNlOiBzdGF0ZS5iYXNlXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGFjdGlvbnMgPSBbXG5cdFx0XHRsb2FkUGF0dGVybkRhdGEoZGF0YVBheWxvYWQpLFxuXHRcdFx0bG9hZFBhdHRlcm5EZW1vKHRydWUpXG5cdFx0XTtcblxuXHRcdGNvbnN0IGpvYnMgPSBhY3Rpb25zLm1hcChkaXNwYXRjaCk7XG5cdFx0Y29uc3QgaWQgPSB1cmxRdWVyeS5wYXJzZShzdGF0ZS5zb3VyY2VJZCB8fCAnJykucGF0aG5hbWU7XG5cblx0XHRpZiAoaWQgJiYgaWQgIT09ICdyZWxhdGlvbnMnKSB7XG5cdFx0XHRqb2JzLnB1c2goZGlzcGF0Y2gobG9hZFBhdHRlcm5GaWxlKHtcblx0XHRcdFx0YmFzZTogc3RhdGUuYmFzZSxcblx0XHRcdFx0ZW52aXJvbm1lbnQsXG5cdFx0XHRcdGlkOiBzdGF0ZS5zb3VyY2VJZCxcblx0XHRcdFx0dHlwZVxuXHRcdFx0fSkpKTtcblx0XHR9XG5cblx0XHRhd2FpdCBsZWFzdCgxMDAwLCBQcm9taXNlLmFsbChqb2JzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdhaXQodGltZW91dCwgdmFsdWUpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHZhbHVlKSwgdGltZW91dCkpO1xufVxuXG5mdW5jdGlvbiBsZWFzdCh0aW1lb3V0LCB0aGVuYWJsZSkge1xuXHRjb25zdCB0aGVuID0gbmV3IERhdGUoKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoZW5hYmxlKVxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XG5cdFx0XHRjb25zdCBkZWx0YSA9IDEwMDAgLSAobmV3IERhdGUoKSAtIHRoZW4pICUgMTAwMDtcblx0XHRcdHJldHVybiB3YWl0KGRlbHRhLCByZXN1bHQpO1xuXHRcdH0pO1xufVxuIl19