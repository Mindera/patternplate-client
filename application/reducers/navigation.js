'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _actions = require('../actions');

var _promiseThunkAction = require('../actions/promise-thunk-action');

var _navigate = require('../utils/navigate');

var _navigate2 = _interopRequireDefault(_navigate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlePatternLoad = (0, _promiseThunkAction.handlePromiseThunkAction)(_actions.loadPatternData, {
	success: function success(state, _ref) {
		var payload = _ref.payload;

		var match = (0, _navigate2.default)(payload.id, state);
		if (match) {
			var _ret = function () {
				var fragments = payload.id.split('/');

				var entities = fragments.map(function (fragment, index) {
					return (0, _navigate2.default)(fragments.slice(0, index + 1).join('/'), state);
				});

				var entityPath = entities.reduce(function (registry, entity) {
					var id = _path2.default.basename(entity.id);
					var amend = entity.type === 'folder' ? [id, 'children'] : [id];
					return [].concat((0, _toConsumableArray3.default)(registry), amend);
				}, []).join('.');

				var data = (0, _lodash.merge)({}, match, {
					dependencies: payload.dependencies,
					dependents: payload.dependents,
					display: payload.display,
					environments: payload.environments,
					files: payload.files,
					id: payload.id,
					manifest: {
						displayName: payload.manifest.displayName,
						flag: payload.manifest.flag,
						tags: payload.manifest.tags,
						name: payload.manifest.name,
						version: payload.manifest.version
					}
				});
				var envelope = (0, _lodash.zipObjectDeep)([entityPath], [data]);
				return {
					v: (0, _lodash.merge)({}, state, envelope)
				};
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
		}
		return state;
	}
}, {});

exports.default = handlePatternLoad;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbImhhbmRsZVBhdHRlcm5Mb2FkIiwic3VjY2VzcyIsInN0YXRlIiwicGF5bG9hZCIsIm1hdGNoIiwiaWQiLCJmcmFnbWVudHMiLCJzcGxpdCIsImVudGl0aWVzIiwibWFwIiwiZnJhZ21lbnQiLCJpbmRleCIsInNsaWNlIiwiam9pbiIsImVudGl0eVBhdGgiLCJyZWR1Y2UiLCJyZWdpc3RyeSIsImVudGl0eSIsImJhc2VuYW1lIiwiYW1lbmQiLCJ0eXBlIiwiZGF0YSIsImRlcGVuZGVuY2llcyIsImRlcGVuZGVudHMiLCJkaXNwbGF5IiwiZW52aXJvbm1lbnRzIiwiZmlsZXMiLCJtYW5pZmVzdCIsImRpc3BsYXlOYW1lIiwiZmxhZyIsInRhZ3MiLCJuYW1lIiwidmVyc2lvbiIsImVudmVsb3BlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLG9CQUFvQiw0RUFBMEM7QUFDbkVDLFFBRG1FLG1CQUMzREMsS0FEMkQsUUFDekM7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7O0FBQ3pCLE1BQU1DLFFBQVEsd0JBQVNELFFBQVFFLEVBQWpCLEVBQXFCSCxLQUFyQixDQUFkO0FBQ0EsTUFBSUUsS0FBSixFQUFXO0FBQUE7QUFDVixRQUFNRSxZQUFZSCxRQUFRRSxFQUFSLENBQVdFLEtBQVgsQ0FBaUIsR0FBakIsQ0FBbEI7O0FBRUEsUUFBTUMsV0FBV0YsVUFBVUcsR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUNuRCxZQUFPLHdCQUFTTCxVQUFVTSxLQUFWLENBQWdCLENBQWhCLEVBQW1CRCxRQUFRLENBQTNCLEVBQThCRSxJQUE5QixDQUFtQyxHQUFuQyxDQUFULEVBQWtEWCxLQUFsRCxDQUFQO0FBQ0EsS0FGZ0IsQ0FBakI7O0FBSUEsUUFBTVksYUFBYU4sU0FBU08sTUFBVCxDQUFnQixVQUFDQyxRQUFELEVBQVdDLE1BQVgsRUFBc0I7QUFDeEQsU0FBTVosS0FBSyxlQUFLYSxRQUFMLENBQWNELE9BQU9aLEVBQXJCLENBQVg7QUFDQSxTQUFNYyxRQUFRRixPQUFPRyxJQUFQLEtBQWdCLFFBQWhCLEdBQ2IsQ0FBQ2YsRUFBRCxFQUFLLFVBQUwsQ0FEYSxHQUViLENBQUNBLEVBQUQsQ0FGRDtBQUdBLHVEQUFXVyxRQUFYLEdBQXdCRyxLQUF4QjtBQUNBLEtBTmtCLEVBTWhCLEVBTmdCLEVBTVpOLElBTlksQ0FNUCxHQU5PLENBQW5COztBQVFBLFFBQU1RLE9BQU8sbUJBQU0sRUFBTixFQUFVakIsS0FBVixFQUFpQjtBQUM3QmtCLG1CQUFjbkIsUUFBUW1CLFlBRE87QUFFN0JDLGlCQUFZcEIsUUFBUW9CLFVBRlM7QUFHN0JDLGNBQVNyQixRQUFRcUIsT0FIWTtBQUk3QkMsbUJBQWN0QixRQUFRc0IsWUFKTztBQUs3QkMsWUFBT3ZCLFFBQVF1QixLQUxjO0FBTTdCckIsU0FBSUYsUUFBUUUsRUFOaUI7QUFPN0JzQixlQUFVO0FBQ1RDLG1CQUFhekIsUUFBUXdCLFFBQVIsQ0FBaUJDLFdBRHJCO0FBRVRDLFlBQU0xQixRQUFRd0IsUUFBUixDQUFpQkUsSUFGZDtBQUdUQyxZQUFNM0IsUUFBUXdCLFFBQVIsQ0FBaUJHLElBSGQ7QUFJVEMsWUFBTTVCLFFBQVF3QixRQUFSLENBQWlCSSxJQUpkO0FBS1RDLGVBQVM3QixRQUFRd0IsUUFBUixDQUFpQks7QUFMakI7QUFQbUIsS0FBakIsQ0FBYjtBQWVBLFFBQU1DLFdBQVcsMkJBQWMsQ0FBQ25CLFVBQUQsQ0FBZCxFQUE0QixDQUFDTyxJQUFELENBQTVCLENBQWpCO0FBQ0E7QUFBQSxRQUFPLG1CQUFNLEVBQU4sRUFBVW5CLEtBQVYsRUFBaUIrQixRQUFqQjtBQUFQO0FBL0JVOztBQUFBO0FBZ0NWO0FBQ0QsU0FBTy9CLEtBQVA7QUFDQTtBQXJDa0UsQ0FBMUMsRUFzQ3ZCLEVBdEN1QixDQUExQjs7a0JBd0NlRixpQiIsImZpbGUiOiJuYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQge21lcmdlLCB6aXBPYmplY3REZWVwfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge2xvYWRQYXR0ZXJuRGF0YX0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQge2hhbmRsZVByb21pc2VUaHVua0FjdGlvbn0gZnJvbSAnLi4vYWN0aW9ucy9wcm9taXNlLXRodW5rLWFjdGlvbic7XG5pbXBvcnQgbmF2aWdhdGUgZnJvbSAnLi4vdXRpbHMvbmF2aWdhdGUnO1xuXG5jb25zdCBoYW5kbGVQYXR0ZXJuTG9hZCA9IGhhbmRsZVByb21pc2VUaHVua0FjdGlvbihsb2FkUGF0dGVybkRhdGEsIHtcblx0c3VjY2VzcyhzdGF0ZSwge3BheWxvYWR9KSB7XG5cdFx0Y29uc3QgbWF0Y2ggPSBuYXZpZ2F0ZShwYXlsb2FkLmlkLCBzdGF0ZSk7XG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRjb25zdCBmcmFnbWVudHMgPSBwYXlsb2FkLmlkLnNwbGl0KCcvJyk7XG5cblx0XHRcdGNvbnN0IGVudGl0aWVzID0gZnJhZ21lbnRzLm1hcCgoZnJhZ21lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBuYXZpZ2F0ZShmcmFnbWVudHMuc2xpY2UoMCwgaW5kZXggKyAxKS5qb2luKCcvJyksIHN0YXRlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBlbnRpdHlQYXRoID0gZW50aXRpZXMucmVkdWNlKChyZWdpc3RyeSwgZW50aXR5KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gcGF0aC5iYXNlbmFtZShlbnRpdHkuaWQpO1xuXHRcdFx0XHRjb25zdCBhbWVuZCA9IGVudGl0eS50eXBlID09PSAnZm9sZGVyJyA/XG5cdFx0XHRcdFx0W2lkLCAnY2hpbGRyZW4nXSA6XG5cdFx0XHRcdFx0W2lkXTtcblx0XHRcdFx0cmV0dXJuIFsuLi5yZWdpc3RyeSwgLi4uYW1lbmRdO1xuXHRcdFx0fSwgW10pLmpvaW4oJy4nKTtcblxuXHRcdFx0Y29uc3QgZGF0YSA9IG1lcmdlKHt9LCBtYXRjaCwge1xuXHRcdFx0XHRkZXBlbmRlbmNpZXM6IHBheWxvYWQuZGVwZW5kZW5jaWVzLFxuXHRcdFx0XHRkZXBlbmRlbnRzOiBwYXlsb2FkLmRlcGVuZGVudHMsXG5cdFx0XHRcdGRpc3BsYXk6IHBheWxvYWQuZGlzcGxheSxcblx0XHRcdFx0ZW52aXJvbm1lbnRzOiBwYXlsb2FkLmVudmlyb25tZW50cyxcblx0XHRcdFx0ZmlsZXM6IHBheWxvYWQuZmlsZXMsXG5cdFx0XHRcdGlkOiBwYXlsb2FkLmlkLFxuXHRcdFx0XHRtYW5pZmVzdDoge1xuXHRcdFx0XHRcdGRpc3BsYXlOYW1lOiBwYXlsb2FkLm1hbmlmZXN0LmRpc3BsYXlOYW1lLFxuXHRcdFx0XHRcdGZsYWc6IHBheWxvYWQubWFuaWZlc3QuZmxhZyxcblx0XHRcdFx0XHR0YWdzOiBwYXlsb2FkLm1hbmlmZXN0LnRhZ3MsXG5cdFx0XHRcdFx0bmFtZTogcGF5bG9hZC5tYW5pZmVzdC5uYW1lLFxuXHRcdFx0XHRcdHZlcnNpb246IHBheWxvYWQubWFuaWZlc3QudmVyc2lvblxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGVudmVsb3BlID0gemlwT2JqZWN0RGVlcChbZW50aXR5UGF0aF0sIFtkYXRhXSk7XG5cdFx0XHRyZXR1cm4gbWVyZ2Uoe30sIHN0YXRlLCBlbnZlbG9wZSk7XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVQYXR0ZXJuTG9hZDtcbiJdfQ==