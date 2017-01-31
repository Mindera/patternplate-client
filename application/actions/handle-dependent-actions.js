'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reduxActions = require('redux-actions');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = handleDependentActions;


function partialReduce(deps) {
	return function (handlers) {
		return (0, _entries2.default)(handlers).reduce(function (registry, entry) {
			var _entry = (0, _slicedToArray3.default)(entry, 2),
			    name = _entry[0],
			    fn = _entry[1];

			registry[name] = function (state, action) {
				return fn(state, action, deps);
			};
			return registry;
		}, {});
	};
}

function handleDependentActions(actionHandlers, options) {
	_assert2.default.ok(Array.isArray(options.dependencies), 'options.dependencies must be an array');

	var handler = function handler() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _args$ = args[2],
		    dependencies = _args$ === undefined ? {} : _args$;


		if ((0, _keys2.default)(dependencies).length > 0) {
			var missing = options.dependencies.filter(function (dependency) {
				return !(dependency in dependencies);
			});
			_assert2.default.ok(missing.length === 0, 'dependencies must be present in state. missing: ' + missing.join(','));
		}

		var deps = (0, _lodash.pick)(dependencies, options.dependencies);
		var handlers = partialReduce(deps)(actionHandlers);
		var reducer = (0, _reduxActions.handleActions)(handlers, options.defaultValue);
		return reducer.apply(undefined, args);
	};
	handler.dependencies = options.dependencies;
	return handler;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2hhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJoYW5kbGVEZXBlbmRlbnRBY3Rpb25zIiwicGFydGlhbFJlZHVjZSIsImRlcHMiLCJoYW5kbGVycyIsInJlZHVjZSIsInJlZ2lzdHJ5IiwiZW50cnkiLCJuYW1lIiwiZm4iLCJzdGF0ZSIsImFjdGlvbiIsImFjdGlvbkhhbmRsZXJzIiwib3B0aW9ucyIsIm9rIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVwZW5kZW5jaWVzIiwiaGFuZGxlciIsImFyZ3MiLCJsZW5ndGgiLCJtaXNzaW5nIiwiZmlsdGVyIiwiZGVwZW5kZW5jeSIsImpvaW4iLCJyZWR1Y2VyIiwiZGVmYXVsdFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O2tCQUVlQSxzQjs7O0FBRWYsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDNUIsUUFBTyxvQkFBWTtBQUNsQixTQUFPLHVCQUFlQyxRQUFmLEVBQ0xDLE1BREssQ0FDRSxVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFBQSw2Q0FDVEEsS0FEUztBQUFBLE9BQ3JCQyxJQURxQjtBQUFBLE9BQ2ZDLEVBRGU7O0FBRTVCSCxZQUFTRSxJQUFULElBQWlCLFVBQUNFLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQyxXQUFPRixHQUFHQyxLQUFILEVBQVVDLE1BQVYsRUFBa0JSLElBQWxCLENBQVA7QUFDQSxJQUZEO0FBR0EsVUFBT0csUUFBUDtBQUNBLEdBUEssRUFPSCxFQVBHLENBQVA7QUFRQSxFQVREO0FBVUE7O0FBRUQsU0FBU0wsc0JBQVQsQ0FBZ0NXLGNBQWhDLEVBQWdEQyxPQUFoRCxFQUF5RDtBQUN4RCxrQkFBT0MsRUFBUCxDQUFVQyxNQUFNQyxPQUFOLENBQWNILFFBQVFJLFlBQXRCLENBQVYsRUFBK0MsdUNBQS9DOztBQUVBLEtBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFhO0FBQUEsb0NBQVRDLElBQVM7QUFBVEEsT0FBUztBQUFBOztBQUFBLGVBQ0lBLElBREo7QUFBQSxNQUNqQkYsWUFEaUIsMEJBQ0YsRUFERTs7O0FBRzVCLE1BQUksb0JBQVlBLFlBQVosRUFBMEJHLE1BQTFCLEdBQW1DLENBQXZDLEVBQTBDO0FBQ3pDLE9BQU1DLFVBQVVSLFFBQVFJLFlBQVIsQ0FBcUJLLE1BQXJCLENBQTRCO0FBQUEsV0FBYyxFQUFFQyxjQUFjTixZQUFoQixDQUFkO0FBQUEsSUFBNUIsQ0FBaEI7QUFDQSxvQkFBT0gsRUFBUCxDQUNDTyxRQUFRRCxNQUFSLEtBQW1CLENBRHBCLHVEQUVvREMsUUFBUUcsSUFBUixDQUFhLEdBQWIsQ0FGcEQ7QUFJQTs7QUFFRCxNQUFNckIsT0FBTyxrQkFBS2MsWUFBTCxFQUFtQkosUUFBUUksWUFBM0IsQ0FBYjtBQUNBLE1BQU1iLFdBQVdGLGNBQWNDLElBQWQsRUFBb0JTLGNBQXBCLENBQWpCO0FBQ0EsTUFBTWEsVUFBVSxpQ0FBY3JCLFFBQWQsRUFBd0JTLFFBQVFhLFlBQWhDLENBQWhCO0FBQ0EsU0FBT0QseUJBQVdOLElBQVgsQ0FBUDtBQUNBLEVBZkQ7QUFnQkFELFNBQVFELFlBQVIsR0FBdUJKLFFBQVFJLFlBQS9CO0FBQ0EsUUFBT0MsT0FBUDtBQUNBIiwiZmlsZSI6ImhhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQge3BpY2t9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZURlcGVuZGVudEFjdGlvbnM7XG5cbmZ1bmN0aW9uIHBhcnRpYWxSZWR1Y2UoZGVwcykge1xuXHRyZXR1cm4gaGFuZGxlcnMgPT4ge1xuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyhoYW5kbGVycylcblx0XHRcdC5yZWR1Y2UoKHJlZ2lzdHJ5LCBlbnRyeSkgPT4ge1xuXHRcdFx0XHRjb25zdCBbbmFtZSwgZm5dID0gZW50cnk7XG5cdFx0XHRcdHJlZ2lzdHJ5W25hbWVdID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZm4oc3RhdGUsIGFjdGlvbiwgZGVwcyk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiByZWdpc3RyeTtcblx0XHRcdH0sIHt9KTtcblx0fTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRGVwZW5kZW50QWN0aW9ucyhhY3Rpb25IYW5kbGVycywgb3B0aW9ucykge1xuXHRhc3NlcnQub2soQXJyYXkuaXNBcnJheShvcHRpb25zLmRlcGVuZGVuY2llcyksICdvcHRpb25zLmRlcGVuZGVuY2llcyBtdXN0IGJlIGFuIGFycmF5Jyk7XG5cblx0Y29uc3QgaGFuZGxlciA9ICguLi5hcmdzKSA9PiB7XG5cdFx0Y29uc3QgWywgLCBkZXBlbmRlbmNpZXMgPSB7fV0gPSBhcmdzO1xuXG5cdFx0aWYgKE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbWlzc2luZyA9IG9wdGlvbnMuZGVwZW5kZW5jaWVzLmZpbHRlcihkZXBlbmRlbmN5ID0+ICEoZGVwZW5kZW5jeSBpbiBkZXBlbmRlbmNpZXMpKTtcblx0XHRcdGFzc2VydC5vayhcblx0XHRcdFx0bWlzc2luZy5sZW5ndGggPT09IDAsXG5cdFx0XHRcdGBkZXBlbmRlbmNpZXMgbXVzdCBiZSBwcmVzZW50IGluIHN0YXRlLiBtaXNzaW5nOiAke21pc3Npbmcuam9pbignLCcpfWBcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVwcyA9IHBpY2soZGVwZW5kZW5jaWVzLCBvcHRpb25zLmRlcGVuZGVuY2llcyk7XG5cdFx0Y29uc3QgaGFuZGxlcnMgPSBwYXJ0aWFsUmVkdWNlKGRlcHMpKGFjdGlvbkhhbmRsZXJzKTtcblx0XHRjb25zdCByZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyhoYW5kbGVycywgb3B0aW9ucy5kZWZhdWx0VmFsdWUpO1xuXHRcdHJldHVybiByZWR1Y2VyKC4uLmFyZ3MpO1xuXHR9O1xuXHRoYW5kbGVyLmRlcGVuZGVuY2llcyA9IG9wdGlvbnMuZGVwZW5kZW5jaWVzO1xuXHRyZXR1cm4gaGFuZGxlcjtcbn1cbiJdfQ==