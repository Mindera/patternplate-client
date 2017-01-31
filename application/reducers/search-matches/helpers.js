'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.searchFolder = searchFolder;
exports.matchPattern = matchPattern;
exports.createStems = createStems;
exports.createTokens = createTokens;
exports.getPatterns = getPatterns;
exports.filterPatterns = filterPatterns;
exports.isToken = isToken;
exports.isStem = isStem;
exports.isTagToken = isTagToken;
exports.isFlagToken = isFlagToken;
exports.isDependsToken = isDependsToken;
exports.isProvidesToken = isProvidesToken;
exports.getTokenValues = getTokenValues;

var _lodash = require('lodash');

var _navigate = require('../../utils/navigate');

var _navigate2 = _interopRequireDefault(_navigate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchFolder(search, navigation) {
	var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	if (!search) {
		return;
	}

	var cut = search.slice(0, search.length - 1);
	var match = (0, _navigate2.default)(cut, navigation);

	if (!match || match && !match.type === 'folder') {
		return;
	}

	return rewrap(cut, match, merge);
}

function rewrap(id, data, merge) {
	var fragments = id.split('/').filter(Boolean);
	var stack = [];

	return fragments.reduce(function (registry, fragment, index) {
		var sub = stack.length > 0 ? (0, _navigate2.default)(stack.join('/'), registry) : registry;
		sub[fragment] = fragments.length - 1 === index ? (0, _extends4.default)({}, data, merge) : (0, _extends4.default)({}, merge);
		stack.push(fragment);
		return registry;
	}, {});
}

function matchPattern(pattern) {
	var criteria = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if ((0, _keys2.default)(criteria).length === 0) {
		return true;
	}

	return (0, _entries2.default)(criteria).every(function (item) {
		var _item = (0, _slicedToArray3.default)(item, 2),
		    name = _item[0],
		    values = _item[1];

		if (values.length === 0) {
			return true;
		}

		if (name === 'tags') {
			var _ret = function () {
				var tags = pattern.manifest.tags || [];
				return {
					v: values.some(function (tag) {
						return (0, _lodash.includes)(tags, tag);
					})
				};
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
		} else if (name === 'flags') {
			var _ret2 = function () {
				var flag = pattern.manifest.flag || '';
				return {
					v: values.some(function (valueFlag) {
						return valueFlag === flag;
					})
				};
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
		} else if (name === 'depends') {
			var _ret3 = function () {
				var dependencies = (0, _keys2.default)(pattern.manifest.patterns || {});
				return {
					v: values.some(function (dependency) {
						return (0, _lodash.includes)(dependencies, dependency);
					})
				};
			}();

			if ((typeof _ret3 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret3)) === "object") return _ret3.v;
		} else if (name === 'provides') {
			var _ret4 = function () {
				var dependents = (0, _keys2.default)(pattern.manifest.dependentPatterns || {});
				return {
					v: values.some(function (dependent) {
						return (0, _lodash.includes)(dependents, dependent);
					})
				};
			}();

			if ((typeof _ret4 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret4)) === "object") return _ret4.v;
		}

		return true;
	});
}

function createStems(search) {
	return search.split(' ').filter(isStem).filter(Boolean);
}

function createTokens(search) {
	var fragments = search.split(' ');
	var tokens = fragments.filter(isToken);
	var tags = (0, _lodash.flatten)(tokens.filter(isTagToken).map(getTokenValues));
	var flags = (0, _lodash.flatten)(tokens.filter(isFlagToken).map(getTokenValues));
	var depends = (0, _lodash.flatten)(tokens.filter(isDependsToken).map(getTokenValues));
	var provides = (0, _lodash.flatten)(tokens.filter(isProvidesToken).map(getTokenValues));

	return {
		tags: tags, flags: flags, depends: depends, provides: provides
	};
}

function getPatterns(haystack) {
	var criteria = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return (0, _values2.default)(haystack).reduce(function (registry, item) {
		if (item.type === 'pattern') {
			return matchPattern(item, criteria) ? [].concat((0, _toConsumableArray3.default)(registry), [item]) : registry;
		} else if (item.type === 'folder') {
			return [].concat((0, _toConsumableArray3.default)(registry), (0, _toConsumableArray3.default)(getPatterns(item.children, criteria)));
		}
		return registry;
	}, []);
}

function filterPatterns(patterns, ids) {
	return getPatterns(patterns).filter(function (_ref) {
		var id = _ref.id;
		return (0, _lodash.includes)(ids, id);
	}).reduce(function (registry, item) {
		var fragments = item.id.split('/');
		var key = fragments[fragments.length - 1];
		return (0, _extends4.default)({}, registry, (0, _defineProperty3.default)({}, key, item));
	}, {});
}

var tokenKeys = ['tag', 'flag', 'depends', 'provides'];

function matchesToken(key, token) {
	return (0, _lodash.startsWith)(token, key + ':');
}

function isToken(token) {
	return tokenKeys.some(function (tokenKey) {
		return matchesToken(tokenKey, token);
	});
}

function isStem(token) {
	return !isToken(token);
}

function isTagToken(token) {
	return matchesToken('tag', token);
}

function isFlagToken(token) {
	return matchesToken('flag', token);
}

function isDependsToken(token) {
	return matchesToken('depends', token);
}

function isProvidesToken(token) {
	return matchesToken('provides', token);
}

function getTokenValues(token) {
	return token.split(':').slice(1).join('.').split(',').filter(Boolean).map(function (item) {
		return item.trim();
	});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9zZWFyY2gtbWF0Y2hlcy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInNlYXJjaEZvbGRlciIsIm1hdGNoUGF0dGVybiIsImNyZWF0ZVN0ZW1zIiwiY3JlYXRlVG9rZW5zIiwiZ2V0UGF0dGVybnMiLCJmaWx0ZXJQYXR0ZXJucyIsImlzVG9rZW4iLCJpc1N0ZW0iLCJpc1RhZ1Rva2VuIiwiaXNGbGFnVG9rZW4iLCJpc0RlcGVuZHNUb2tlbiIsImlzUHJvdmlkZXNUb2tlbiIsImdldFRva2VuVmFsdWVzIiwic2VhcmNoIiwibmF2aWdhdGlvbiIsIm1lcmdlIiwiY3V0Iiwic2xpY2UiLCJsZW5ndGgiLCJtYXRjaCIsInR5cGUiLCJyZXdyYXAiLCJpZCIsImRhdGEiLCJmcmFnbWVudHMiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJzdGFjayIsInJlZHVjZSIsInJlZ2lzdHJ5IiwiZnJhZ21lbnQiLCJpbmRleCIsInN1YiIsImpvaW4iLCJwdXNoIiwicGF0dGVybiIsImNyaXRlcmlhIiwiZXZlcnkiLCJpdGVtIiwibmFtZSIsInZhbHVlcyIsInRhZ3MiLCJtYW5pZmVzdCIsInNvbWUiLCJ0YWciLCJmbGFnIiwidmFsdWVGbGFnIiwiZGVwZW5kZW5jaWVzIiwicGF0dGVybnMiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50cyIsImRlcGVuZGVudFBhdHRlcm5zIiwiZGVwZW5kZW50IiwidG9rZW5zIiwibWFwIiwiZmxhZ3MiLCJkZXBlbmRzIiwicHJvdmlkZXMiLCJoYXlzdGFjayIsImNoaWxkcmVuIiwiaWRzIiwia2V5IiwidG9rZW5LZXlzIiwibWF0Y2hlc1Rva2VuIiwidG9rZW4iLCJ0b2tlbktleSIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSWdCQSxZLEdBQUFBLFk7UUEyQkFDLFksR0FBQUEsWTtRQStCQUMsVyxHQUFBQSxX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QyxHQUpELEVBS0xDLE1BTEssQ0FLRUMsT0FMRixFQU1MNEIsR0FOSyxDQU1EO0FBQUEsU0FBUWhCLEtBQUs0QixJQUFMLEVBQVI7QUFBQSxFQU5DLENBQVA7QUFPQSIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmNsdWRlcywgZmxhdHRlbiwgc3RhcnRzV2l0aH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IG5hdmlnYXRlIGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEZvbGRlcihzZWFyY2gsIG5hdmlnYXRpb24sIG1lcmdlID0ge30pIHtcblx0aWYgKCFzZWFyY2gpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjdXQgPSBzZWFyY2guc2xpY2UoMCwgc2VhcmNoLmxlbmd0aCAtIDEpO1xuXHRjb25zdCBtYXRjaCA9IG5hdmlnYXRlKGN1dCwgbmF2aWdhdGlvbik7XG5cblx0aWYgKCFtYXRjaCB8fCBtYXRjaCAmJiAhbWF0Y2gudHlwZSA9PT0gJ2ZvbGRlcicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXR1cm4gcmV3cmFwKGN1dCwgbWF0Y2gsIG1lcmdlKTtcbn1cblxuZnVuY3Rpb24gcmV3cmFwKGlkLCBkYXRhLCBtZXJnZSkge1xuXHRjb25zdCBmcmFnbWVudHMgPSBpZC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKTtcblx0Y29uc3Qgc3RhY2sgPSBbXTtcblxuXHRyZXR1cm4gZnJhZ21lbnRzLnJlZHVjZSgocmVnaXN0cnksIGZyYWdtZW50LCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IHN1YiA9IHN0YWNrLmxlbmd0aCA+IDAgPyBuYXZpZ2F0ZShzdGFjay5qb2luKCcvJyksIHJlZ2lzdHJ5KSA6IHJlZ2lzdHJ5O1xuXHRcdHN1YltmcmFnbWVudF0gPSBmcmFnbWVudHMubGVuZ3RoIC0gMSA9PT0gaW5kZXggPyB7Li4uZGF0YSwgLi4ubWVyZ2V9IDogey4uLm1lcmdlfTtcblx0XHRzdGFjay5wdXNoKGZyYWdtZW50KTtcblx0XHRyZXR1cm4gcmVnaXN0cnk7XG5cdH0sIHt9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGF0dGVybihwYXR0ZXJuLCBjcml0ZXJpYSA9IHt9KSB7XG5cdGlmIChPYmplY3Qua2V5cyhjcml0ZXJpYSkubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoY3JpdGVyaWEpXG5cdFx0LmV2ZXJ5KGl0ZW0gPT4ge1xuXHRcdFx0Y29uc3QgW25hbWUsIHZhbHVlc10gPSBpdGVtO1xuXG5cdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5hbWUgPT09ICd0YWdzJykge1xuXHRcdFx0XHRjb25zdCB0YWdzID0gcGF0dGVybi5tYW5pZmVzdC50YWdzIHx8IFtdO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVzLnNvbWUodGFnID0+IGluY2x1ZGVzKHRhZ3MsIHRhZykpO1xuXHRcdFx0fSBlbHNlIGlmIChuYW1lID09PSAnZmxhZ3MnKSB7XG5cdFx0XHRcdGNvbnN0IGZsYWcgPSBwYXR0ZXJuLm1hbmlmZXN0LmZsYWcgfHwgJyc7XG5cdFx0XHRcdHJldHVybiB2YWx1ZXMuc29tZSh2YWx1ZUZsYWcgPT4gdmFsdWVGbGFnID09PSBmbGFnKTtcblx0XHRcdH0gZWxzZSBpZiAobmFtZSA9PT0gJ2RlcGVuZHMnKSB7XG5cdFx0XHRcdGNvbnN0IGRlcGVuZGVuY2llcyA9IE9iamVjdC5rZXlzKHBhdHRlcm4ubWFuaWZlc3QucGF0dGVybnMgfHwge30pO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVzLnNvbWUoZGVwZW5kZW5jeSA9PiBpbmNsdWRlcyhkZXBlbmRlbmNpZXMsIGRlcGVuZGVuY3kpKTtcblx0XHRcdH0gZWxzZSBpZiAobmFtZSA9PT0gJ3Byb3ZpZGVzJykge1xuXHRcdFx0XHRjb25zdCBkZXBlbmRlbnRzID0gT2JqZWN0LmtleXMocGF0dGVybi5tYW5pZmVzdC5kZXBlbmRlbnRQYXR0ZXJucyB8fCB7fSk7XG5cdFx0XHRcdHJldHVybiB2YWx1ZXMuc29tZShkZXBlbmRlbnQgPT4gaW5jbHVkZXMoZGVwZW5kZW50cywgZGVwZW5kZW50KSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RlbXMoc2VhcmNoKSB7XG5cdHJldHVybiBzZWFyY2guc3BsaXQoJyAnKVxuXHRcdC5maWx0ZXIoaXNTdGVtKVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2tlbnMoc2VhcmNoKSB7XG5cdGNvbnN0IGZyYWdtZW50cyA9IHNlYXJjaC5zcGxpdCgnICcpO1xuXHRjb25zdCB0b2tlbnMgPSBmcmFnbWVudHMuZmlsdGVyKGlzVG9rZW4pO1xuXHRjb25zdCB0YWdzID0gZmxhdHRlbih0b2tlbnMuZmlsdGVyKGlzVGFnVG9rZW4pLm1hcChnZXRUb2tlblZhbHVlcykpO1xuXHRjb25zdCBmbGFncyA9IGZsYXR0ZW4odG9rZW5zLmZpbHRlcihpc0ZsYWdUb2tlbikubWFwKGdldFRva2VuVmFsdWVzKSk7XG5cdGNvbnN0IGRlcGVuZHMgPSBmbGF0dGVuKHRva2Vucy5maWx0ZXIoaXNEZXBlbmRzVG9rZW4pLm1hcChnZXRUb2tlblZhbHVlcykpO1xuXHRjb25zdCBwcm92aWRlcyA9IGZsYXR0ZW4odG9rZW5zLmZpbHRlcihpc1Byb3ZpZGVzVG9rZW4pLm1hcChnZXRUb2tlblZhbHVlcykpO1xuXG5cdHJldHVybiB7XG5cdFx0dGFncywgZmxhZ3MsIGRlcGVuZHMsIHByb3ZpZGVzXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXR0ZXJucyhoYXlzdGFjaywgY3JpdGVyaWEgPSB7fSkge1xuXHRyZXR1cm4gT2JqZWN0LnZhbHVlcyhoYXlzdGFjaylcblx0XHQucmVkdWNlKChyZWdpc3RyeSwgaXRlbSkgPT4ge1xuXHRcdFx0aWYgKGl0ZW0udHlwZSA9PT0gJ3BhdHRlcm4nKSB7XG5cdFx0XHRcdHJldHVybiBtYXRjaFBhdHRlcm4oaXRlbSwgY3JpdGVyaWEpID9cblx0XHRcdFx0XHRbLi4ucmVnaXN0cnksIGl0ZW1dIDpcblx0XHRcdFx0XHRyZWdpc3RyeTtcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnZm9sZGVyJykge1xuXHRcdFx0XHRyZXR1cm4gWy4uLnJlZ2lzdHJ5LCAuLi5nZXRQYXR0ZXJucyhpdGVtLmNoaWxkcmVuLCBjcml0ZXJpYSldO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlZ2lzdHJ5O1xuXHRcdH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclBhdHRlcm5zKHBhdHRlcm5zLCBpZHMpIHtcblx0cmV0dXJuIGdldFBhdHRlcm5zKHBhdHRlcm5zKVxuXHRcdC5maWx0ZXIoKHtpZH0pID0+IGluY2x1ZGVzKGlkcywgaWQpKVxuXHRcdC5yZWR1Y2UoKHJlZ2lzdHJ5LCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBmcmFnbWVudHMgPSBpdGVtLmlkLnNwbGl0KCcvJyk7XG5cdFx0XHRjb25zdCBrZXkgPSBmcmFnbWVudHNbZnJhZ21lbnRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucmVnaXN0cnksXG5cdFx0XHRcdFtrZXldOiBpdGVtXG5cdFx0XHR9O1xuXHRcdH0sIHt9KTtcbn1cblxuY29uc3QgdG9rZW5LZXlzID0gWyd0YWcnLCAnZmxhZycsICdkZXBlbmRzJywgJ3Byb3ZpZGVzJ107XG5cbmZ1bmN0aW9uIG1hdGNoZXNUb2tlbihrZXksIHRva2VuKSB7XG5cdHJldHVybiBzdGFydHNXaXRoKHRva2VuLCBgJHtrZXl9OmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb2tlbih0b2tlbikge1xuXHRyZXR1cm4gdG9rZW5LZXlzLnNvbWUodG9rZW5LZXkgPT4gbWF0Y2hlc1Rva2VuKHRva2VuS2V5LCB0b2tlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdGVtKHRva2VuKSB7XG5cdHJldHVybiAhaXNUb2tlbih0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RhZ1Rva2VuKHRva2VuKSB7XG5cdHJldHVybiBtYXRjaGVzVG9rZW4oJ3RhZycsIHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmxhZ1Rva2VuKHRva2VuKSB7XG5cdHJldHVybiBtYXRjaGVzVG9rZW4oJ2ZsYWcnLCB0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlcGVuZHNUb2tlbih0b2tlbikge1xuXHRyZXR1cm4gbWF0Y2hlc1Rva2VuKCdkZXBlbmRzJywgdG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm92aWRlc1Rva2VuKHRva2VuKSB7XG5cdHJldHVybiBtYXRjaGVzVG9rZW4oJ3Byb3ZpZGVzJywgdG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW5WYWx1ZXModG9rZW4pIHtcblx0cmV0dXJuIHRva2VuXG5cdFx0LnNwbGl0KCc6Jylcblx0XHQuc2xpY2UoMSlcblx0XHQuam9pbignLicpXG5cdFx0LnNwbGl0KCcsJylcblx0XHQuZmlsdGVyKEJvb2xlYW4pXG5cdFx0Lm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKTtcbn1cbiJdfQ==