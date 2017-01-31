'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _lodash = require('lodash');

var _actions = require('../actions');

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = {};

exports.default = (0, _handleDependentActions2.default)((0, _defineProperty3.default)({}, _actions.demoContentResize, function (state, _ref, _ref2) {
	var payload = _ref.payload;
	var pattern = _ref2.pattern;

	var previous = state[pattern.id];
	var next = { width: payload.width, height: payload.height };
	if (!(0, _lodash.isEqual)(previous, next)) {
		return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, pattern.id, next));
	}
	return state;
}), { defaultValue: defaultValue, dependencies: ['pattern'] });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9kZW1vLWNvbnRlbnQtZGltZW5zaW9ucy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0VmFsdWUiLCJzdGF0ZSIsInBheWxvYWQiLCJwYXR0ZXJuIiwicHJldmlvdXMiLCJpZCIsIm5leHQiLCJ3aWR0aCIsImhlaWdodCIsImRlcGVuZGVuY2llcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxFQUFyQjs7a0JBRWUsb0dBQ08sVUFBQ0MsS0FBRCxlQUFpQztBQUFBLEtBQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxLQUFiQyxPQUFhLFNBQWJBLE9BQWE7O0FBQ3JELEtBQU1DLFdBQVdILE1BQU1FLFFBQVFFLEVBQWQsQ0FBakI7QUFDQSxLQUFNQyxPQUFPLEVBQUNDLE9BQU9MLFFBQVFLLEtBQWhCLEVBQXVCQyxRQUFRTixRQUFRTSxNQUF2QyxFQUFiO0FBQ0EsS0FBSSxDQUFDLHFCQUFRSixRQUFSLEVBQWtCRSxJQUFsQixDQUFMLEVBQThCO0FBQzdCLG9DQUNJTCxLQURKLG9DQUVFRSxRQUFRRSxFQUZWLEVBRWVDLElBRmY7QUFJQTtBQUNELFFBQU9MLEtBQVA7QUFDQSxDQVhhLEdBWVosRUFBQ0QsMEJBQUQsRUFBZVMsY0FBYyxDQUFDLFNBQUQsQ0FBN0IsRUFaWSxDIiwiZmlsZSI6ImRlbW8tY29udGVudC1kaW1lbnNpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0VxdWFsfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtkZW1vQ29udGVudFJlc2l6ZX0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgaGFuZGxlRGVwZW5kZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2hhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucyc7XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVEZXBlbmRlbnRBY3Rpb25zKHtcblx0W2RlbW9Db250ZW50UmVzaXplXTogKHN0YXRlLCB7cGF5bG9hZH0sIHtwYXR0ZXJufSkgPT4ge1xuXHRcdGNvbnN0IHByZXZpb3VzID0gc3RhdGVbcGF0dGVybi5pZF07XG5cdFx0Y29uc3QgbmV4dCA9IHt3aWR0aDogcGF5bG9hZC53aWR0aCwgaGVpZ2h0OiBwYXlsb2FkLmhlaWdodH07XG5cdFx0aWYgKCFpc0VxdWFsKHByZXZpb3VzLCBuZXh0KSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFtwYXR0ZXJuLmlkXTogbmV4dFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59LCB7ZGVmYXVsdFZhbHVlLCBkZXBlbmRlbmNpZXM6IFsncGF0dGVybiddfSk7XG4iXX0=