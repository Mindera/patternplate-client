'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

var _themeLoaded = require('../actions/theme-loaded');

var _themeLoaded2 = _interopRequireDefault(_themeLoaded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = [];
var dependencies = ['theme'];

var stylesReducer = (0, _handleDependentActions2.default)((0, _defineProperty3.default)({
	'@@router/LOCATION_CHANGE': onLocationChange
}, _themeLoaded2.default, onThemeLoaded), { defaultValue: defaultValue, dependencies: dependencies });

exports.default = stylesReducer;


function onLocationChange(state, _, _ref) {
	var theme = _ref.theme;

	if (theme === state[state.length - 1]) {
		return state;
	}

	return [].concat((0, _toConsumableArray3.default)(state), [theme]);
}

function onThemeLoaded(state, action) {
	return [action.payload];
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9zdHlsZXMuanMiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlIiwiZGVwZW5kZW5jaWVzIiwic3R5bGVzUmVkdWNlciIsIm9uTG9jYXRpb25DaGFuZ2UiLCJvblRoZW1lTG9hZGVkIiwic3RhdGUiLCJfIiwidGhlbWUiLCJsZW5ndGgiLCJhY3Rpb24iLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsRUFBckI7QUFDQSxJQUFNQyxlQUFlLENBQUMsT0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxnQkFBZ0I7QUFDckIsNkJBQTRCQztBQURQLDBCQUVOQyxhQUZNLEdBR25CLEVBQUNKLDBCQUFELEVBQWVDLDBCQUFmLEVBSG1CLENBQXRCOztrQkFLZUMsYTs7O0FBRWYsU0FBU0MsZ0JBQVQsQ0FBMEJFLEtBQTFCLEVBQWlDQyxDQUFqQyxRQUE2QztBQUFBLEtBQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFDNUMsS0FBSUEsVUFBVUYsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLENBQWQsRUFBdUM7QUFDdEMsU0FBT0gsS0FBUDtBQUNBOztBQUVELG1EQUFXQSxLQUFYLElBQWtCRSxLQUFsQjtBQUNBOztBQUVELFNBQVNILGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCSSxNQUE5QixFQUFzQztBQUNyQyxRQUFPLENBQUNBLE9BQU9DLE9BQVIsQ0FBUDtBQUNBIiwiZmlsZSI6InN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoYW5kbGVEZXBlbmRlbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaGFuZGxlLWRlcGVuZGVudC1hY3Rpb25zJztcbmltcG9ydCB0aGVtZUxvYWRlZCBmcm9tICcuLi9hY3Rpb25zL3RoZW1lLWxvYWRlZCc7XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZSA9IFtdO1xuY29uc3QgZGVwZW5kZW5jaWVzID0gWyd0aGVtZSddO1xuXG5jb25zdCBzdHlsZXNSZWR1Y2VyID0gaGFuZGxlRGVwZW5kZW50QWN0aW9ucyh7XG5cdCdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnOiBvbkxvY2F0aW9uQ2hhbmdlLFxuXHRbdGhlbWVMb2FkZWRdOiBvblRoZW1lTG9hZGVkXG59LCB7ZGVmYXVsdFZhbHVlLCBkZXBlbmRlbmNpZXN9KTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzUmVkdWNlcjtcblxuZnVuY3Rpb24gb25Mb2NhdGlvbkNoYW5nZShzdGF0ZSwgXywge3RoZW1lfSkge1xuXHRpZiAodGhlbWUgPT09IHN0YXRlW3N0YXRlLmxlbmd0aCAtIDFdKSB7XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG5cblx0cmV0dXJuIFsuLi5zdGF0ZSwgdGhlbWVdO1xufVxuXG5mdW5jdGlvbiBvblRoZW1lTG9hZGVkKHN0YXRlLCBhY3Rpb24pIHtcblx0cmV0dXJuIFthY3Rpb24ucGF5bG9hZF07XG59XG4iXX0=