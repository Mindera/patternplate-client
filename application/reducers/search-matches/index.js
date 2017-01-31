'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _fuse = require('fuse.js');

var _fuse2 = _interopRequireDefault(_fuse);

var _helpers = require('./helpers');

var helpers = _interopRequireWildcard(_helpers);

var _handleDependentActions = require('../../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = [];
var dependencies = ['expanded', 'navigation'];

var searchMatchReducer = (0, _handleDependentActions2.default)({
	'@@router/LOCATION_CHANGE': locationChangeHandler
}, { defaultValue: defaultValue, dependencies: dependencies });

exports.default = searchMatchReducer;


function locationChangeHandler(state, action, dependencies) {
	var navigation = dependencies.navigation,
	    expanded = dependencies.expanded;
	var _action$payload$query = action.payload.query.search,
	    search = _action$payload$query === undefined ? '' : _action$payload$query;


	if (!expanded) {
		return navigation;
	}

	// Check for a matching folder first
	// e.g. atoms/ => atoms
	/* const folder = helpers.searchFolder(search, navigation, {expanded: true});
 	if (folder) {
 	return folder;
 } */

	var stems = helpers.createStems(search);
	var tokens = helpers.createTokens(search);
	var patterns = helpers.getPatterns(navigation, tokens);

	var ids = stems.length > 0 ? createFuse(patterns, stems).search(stems.join(' ')) : patterns.map(function (pattern) {
		return pattern.id;
	});

	// Boil down to single pattern if a fully qualified id has been entered

	var _ids$filter = ids.filter(function (id) {
		return id === search;
	}),
	    _ids$filter2 = (0, _slicedToArray3.default)(_ids$filter, 1),
	    direct = _ids$filter2[0];

	var matches = direct ? [direct] : ids;

	return helpers.filterPatterns(navigation, matches);
}

function createFuse(patterns) {
	return new _fuse2.default(patterns, {
		id: 'id',
		threshold: 0.3,
		keys: ['id', 'manifest.name', 'manifest.displayName', 'manifest.tags', 'manifest.flag']
	});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9zZWFyY2gtbWF0Y2hlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJoZWxwZXJzIiwiZGVmYXVsdFZhbHVlIiwiZGVwZW5kZW5jaWVzIiwic2VhcmNoTWF0Y2hSZWR1Y2VyIiwibG9jYXRpb25DaGFuZ2VIYW5kbGVyIiwic3RhdGUiLCJhY3Rpb24iLCJuYXZpZ2F0aW9uIiwiZXhwYW5kZWQiLCJwYXlsb2FkIiwicXVlcnkiLCJzZWFyY2giLCJzdGVtcyIsImNyZWF0ZVN0ZW1zIiwidG9rZW5zIiwiY3JlYXRlVG9rZW5zIiwicGF0dGVybnMiLCJnZXRQYXR0ZXJucyIsImlkcyIsImxlbmd0aCIsImNyZWF0ZUZ1c2UiLCJqb2luIiwibWFwIiwicGF0dGVybiIsImlkIiwiZmlsdGVyIiwiZGlyZWN0IiwibWF0Y2hlcyIsImZpbHRlclBhdHRlcm5zIiwidGhyZXNob2xkIiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7O0lBQVlBLE87O0FBQ1o7Ozs7Ozs7O0FBRUEsSUFBTUMsZUFBZSxFQUFyQjtBQUNBLElBQU1DLGVBQWUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUFyQjs7QUFFQSxJQUFNQyxxQkFBcUIsc0NBQXVCO0FBQ2pELDZCQUE0QkM7QUFEcUIsQ0FBdkIsRUFFeEIsRUFBQ0gsMEJBQUQsRUFBZUMsMEJBQWYsRUFGd0IsQ0FBM0I7O2tCQUllQyxrQjs7O0FBRWYsU0FBU0MscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDQyxNQUF0QyxFQUE4Q0osWUFBOUMsRUFBNEQ7QUFBQSxLQUNwREssVUFEb0QsR0FDNUJMLFlBRDRCLENBQ3BESyxVQURvRDtBQUFBLEtBQ3hDQyxRQUR3QyxHQUM1Qk4sWUFENEIsQ0FDeENNLFFBRHdDO0FBQUEsNkJBRXJDRixPQUFPRyxPQUFQLENBQWVDLEtBRnNCLENBRXBEQyxNQUZvRDtBQUFBLEtBRXBEQSxNQUZvRCx5Q0FFM0MsRUFGMkM7OztBQUkzRCxLQUFJLENBQUNILFFBQUwsRUFBZTtBQUNkLFNBQU9ELFVBQVA7QUFDQTs7QUFFRDtBQUNBO0FBQ0E7Ozs7O0FBTUEsS0FBTUssUUFBUVosUUFBUWEsV0FBUixDQUFvQkYsTUFBcEIsQ0FBZDtBQUNBLEtBQU1HLFNBQVNkLFFBQVFlLFlBQVIsQ0FBcUJKLE1BQXJCLENBQWY7QUFDQSxLQUFNSyxXQUFXaEIsUUFBUWlCLFdBQVIsQ0FBb0JWLFVBQXBCLEVBQWdDTyxNQUFoQyxDQUFqQjs7QUFFQSxLQUFNSSxNQUFNTixNQUFNTyxNQUFOLEdBQWUsQ0FBZixHQUNYQyxXQUFXSixRQUFYLEVBQXFCSixLQUFyQixFQUE0QkQsTUFBNUIsQ0FBbUNDLE1BQU1TLElBQU4sQ0FBVyxHQUFYLENBQW5DLENBRFcsR0FFWEwsU0FBU00sR0FBVCxDQUFhO0FBQUEsU0FBV0MsUUFBUUMsRUFBbkI7QUFBQSxFQUFiLENBRkQ7O0FBSUE7O0FBeEIyRCxtQkF5QjFDTixJQUFJTyxNQUFKLENBQVc7QUFBQSxTQUFNRCxPQUFPYixNQUFiO0FBQUEsRUFBWCxDQXpCMEM7QUFBQTtBQUFBLEtBeUJwRGUsTUF6Qm9EOztBQTBCM0QsS0FBTUMsVUFBVUQsU0FBUyxDQUFDQSxNQUFELENBQVQsR0FBb0JSLEdBQXBDOztBQUVBLFFBQU9sQixRQUFRNEIsY0FBUixDQUF1QnJCLFVBQXZCLEVBQW1Db0IsT0FBbkMsQ0FBUDtBQUNBOztBQUVELFNBQVNQLFVBQVQsQ0FBb0JKLFFBQXBCLEVBQThCO0FBQzdCLFFBQU8sbUJBQVNBLFFBQVQsRUFBbUI7QUFDekJRLE1BQUksSUFEcUI7QUFFekJLLGFBQVcsR0FGYztBQUd6QkMsUUFBTSxDQUNMLElBREssRUFFTCxlQUZLLEVBR0wsc0JBSEssRUFJTCxlQUpLLEVBS0wsZUFMSztBQUhtQixFQUFuQixDQUFQO0FBV0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJztcblxuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IGhhbmRsZURlcGVuZGVudEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9oYW5kbGUtZGVwZW5kZW50LWFjdGlvbnMnO1xuXG5jb25zdCBkZWZhdWx0VmFsdWUgPSBbXTtcbmNvbnN0IGRlcGVuZGVuY2llcyA9IFsnZXhwYW5kZWQnLCAnbmF2aWdhdGlvbiddO1xuXG5jb25zdCBzZWFyY2hNYXRjaFJlZHVjZXIgPSBoYW5kbGVEZXBlbmRlbnRBY3Rpb25zKHtcblx0J0BAcm91dGVyL0xPQ0FUSU9OX0NIQU5HRSc6IGxvY2F0aW9uQ2hhbmdlSGFuZGxlclxufSwge2RlZmF1bHRWYWx1ZSwgZGVwZW5kZW5jaWVzfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaE1hdGNoUmVkdWNlcjtcblxuZnVuY3Rpb24gbG9jYXRpb25DaGFuZ2VIYW5kbGVyKHN0YXRlLCBhY3Rpb24sIGRlcGVuZGVuY2llcykge1xuXHRjb25zdCB7bmF2aWdhdGlvbiwgZXhwYW5kZWR9ID0gZGVwZW5kZW5jaWVzO1xuXHRjb25zdCB7c2VhcmNoID0gJyd9ID0gYWN0aW9uLnBheWxvYWQucXVlcnk7XG5cblx0aWYgKCFleHBhbmRlZCkge1xuXHRcdHJldHVybiBuYXZpZ2F0aW9uO1xuXHR9XG5cblx0Ly8gQ2hlY2sgZm9yIGEgbWF0Y2hpbmcgZm9sZGVyIGZpcnN0XG5cdC8vIGUuZy4gYXRvbXMvID0+IGF0b21zXG5cdC8qIGNvbnN0IGZvbGRlciA9IGhlbHBlcnMuc2VhcmNoRm9sZGVyKHNlYXJjaCwgbmF2aWdhdGlvbiwge2V4cGFuZGVkOiB0cnVlfSk7XG5cblx0aWYgKGZvbGRlcikge1xuXHRcdHJldHVybiBmb2xkZXI7XG5cdH0gKi9cblxuXHRjb25zdCBzdGVtcyA9IGhlbHBlcnMuY3JlYXRlU3RlbXMoc2VhcmNoKTtcblx0Y29uc3QgdG9rZW5zID0gaGVscGVycy5jcmVhdGVUb2tlbnMoc2VhcmNoKTtcblx0Y29uc3QgcGF0dGVybnMgPSBoZWxwZXJzLmdldFBhdHRlcm5zKG5hdmlnYXRpb24sIHRva2Vucyk7XG5cblx0Y29uc3QgaWRzID0gc3RlbXMubGVuZ3RoID4gMCA/XG5cdFx0Y3JlYXRlRnVzZShwYXR0ZXJucywgc3RlbXMpLnNlYXJjaChzdGVtcy5qb2luKCcgJykpIDpcblx0XHRwYXR0ZXJucy5tYXAocGF0dGVybiA9PiBwYXR0ZXJuLmlkKTtcblxuXHQvLyBCb2lsIGRvd24gdG8gc2luZ2xlIHBhdHRlcm4gaWYgYSBmdWxseSBxdWFsaWZpZWQgaWQgaGFzIGJlZW4gZW50ZXJlZFxuXHRjb25zdCBbZGlyZWN0XSA9IGlkcy5maWx0ZXIoaWQgPT4gaWQgPT09IHNlYXJjaCk7XG5cdGNvbnN0IG1hdGNoZXMgPSBkaXJlY3QgPyBbZGlyZWN0XSA6IGlkcztcblxuXHRyZXR1cm4gaGVscGVycy5maWx0ZXJQYXR0ZXJucyhuYXZpZ2F0aW9uLCBtYXRjaGVzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVzZShwYXR0ZXJucykge1xuXHRyZXR1cm4gbmV3IEZ1c2UocGF0dGVybnMsIHtcblx0XHRpZDogJ2lkJyxcblx0XHR0aHJlc2hvbGQ6IDAuMyxcblx0XHRrZXlzOiBbXG5cdFx0XHQnaWQnLFxuXHRcdFx0J21hbmlmZXN0Lm5hbWUnLFxuXHRcdFx0J21hbmlmZXN0LmRpc3BsYXlOYW1lJyxcblx0XHRcdCdtYW5pZmVzdC50YWdzJyxcblx0XHRcdCdtYW5pZmVzdC5mbGFnJ1xuXHRcdF1cblx0fSk7XG59XG4iXX0=