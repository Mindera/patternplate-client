'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _lodash = require('lodash');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _resolve = require('resolve');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

var _server = require('../application/react-routes/server');

var _server2 = _interopRequireDefault(_server);

var _layouts = require('../application/layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _getIdByPathname = require('../application/utils/get-id-by-pathname');

var _getIdByPathname2 = _interopRequireDefault(_getIdByPathname);

var _navigate = require('../application/utils/navigate');

var _navigate2 = _interopRequireDefault(_navigate);

var _icon = require('../application/components/common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cwd = process.cwd();
var resolve = function resolve(id) {
	return (0, _resolve.sync)(id, { basedir: cwd });
};

var getSchema = require(resolve('patternplate-server/library/get-schema'));
var getNavigation = require(resolve('patternplate-server/library/get-navigation'));
var getPatternMetaData = require(resolve('patternplate-server/library/get-pattern-meta-data'));

var defaultData = {
	schema: {},
	navigation: {},
	patterns: null,
	messages: []
};

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(application, pageUrl) {
		var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		var app, client, server, filter, parsed, depth, query, base, id, schema, navigation, filteredNavigation, pattern, isPattern, patternData, config, options, serverData, data, content, head, icons;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						app = application.parent;
						client = application;
						server = app.server;
						filter = getFilter(filters);
						parsed = _url2.default.parse(pageUrl);
						depth = parsed.pathname.split('/').filter(Boolean).length;
						query = _queryString2.default.parse(parsed.query);
						base = depth > 0 ? (0, _lodash.fill)(Array(depth), '..').join('/') + '/tvg-ui' : '.';
						id = (0, _getIdByPathname2.default)(parsed.pathname);

						if (!app) {
							_context.next = 15;
							break;
						}

						_context.next = 12;
						return getSchema(app, client, server);

					case 12:
						_context.t0 = _context.sent;
						_context.next = 16;
						break;

					case 15:
						_context.t0 = {};

					case 16:
						schema = _context.t0;

						if (!app) {
							_context.next = 23;
							break;
						}

						_context.next = 20;
						return getNavigation(app, client, server);

					case 20:
						_context.t1 = _context.sent;
						_context.next = 24;
						break;

					case 23:
						_context.t1 = {};

					case 24:
						navigation = _context.t1;
						filteredNavigation = applyFilters(navigation, filter);
						pattern = (0, _lodash.merge)({}, (0, _navigate2.default)(id, filteredNavigation));
						isPattern = pattern && pattern.type === 'pattern';

						if (!isPattern) {
							_context.next = 39;
							break;
						}

						_context.prev = 29;
						_context.next = 32;
						return getPatternMetaData(server, id);

					case 32:
						patternData = _context.sent;

						(0, _lodash.merge)(pattern, patternData);
						_context.next = 39;
						break;

					case 36:
						_context.prev = 36;
						_context.t2 = _context['catch'](29);

						application.log.error(_context.t2);

					case 39:
						config = application.configuration.ui;
						options = {
							url: pageUrl,
							title: application.configuration.ui.title || schema.name,
							theme: query.theme || application.configuration.ui.theme,
							config: config
						};
						serverData = { schema: schema, navigation: filteredNavigation, pattern: pattern };
						data = (0, _lodash.merge)({}, defaultData, options.data, serverData, { config: config }, {
							schema: {
								serverOsName: _os2.default.type(),
								serverOsVersion: _os2.default.release(),
								serverRuntimeName: _platform2.default.name,
								serverRuntimeVersion: _platform2.default.version
							},
							startPathname: pageUrl,
							startBase: base
						});
						_context.next = 45;
						return (0, _server2.default)(options.url, data);

					case 45:
						content = _context.sent;
						head = _reactHelmet2.default.rewind();
						icons = _icon2.default.rewind();
						return _context.abrupt('return', (0, _layouts2.default)({
							attributes: head.htmlAttributes,
							base: base,
							content: content,
							icons: icons,
							data: (0, _stringify2.default)(data),
							link: head.link,
							meta: head.meta,
							style: head.style,
							title: head.title,
							scripts: [base + '/script/vendors.bundle.js', base + '/script/index.bundle.js']
						}));

					case 49:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[29, 36]]);
	}));

	function renderPage(_x, _x2) {
		return _ref.apply(this, arguments);
	}

	return renderPage;
}();

var pass = function pass() {
	return true;
};

function applyFilters(raw, filter) {
	return (0, _lodash.entries)(raw).reduce(function (results, entry) {
		var _entry = (0, _slicedToArray3.default)(entry, 2),
		    key = _entry[0],
		    item = _entry[1];

		if (item.type !== 'pattern') {
			results[key] = item;
			item.children = applyFilters(item.children, filter);
			return results;
		}
		if (filter(item.manifest)) {
			results[key] = item;
		}
		return results;
	}, {});
}

function getFilter(filters) {
	var flags = filters.flags || [];

	if (flags.length === 0) {
		return pass;
	}

	return function (item) {
		return flags.includes(item.flag);
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9saWJyYXJ5L3JlbmRlci1wYWdlLmpzIl0sIm5hbWVzIjpbImN3ZCIsInByb2Nlc3MiLCJyZXNvbHZlIiwiaWQiLCJiYXNlZGlyIiwiZ2V0U2NoZW1hIiwicmVxdWlyZSIsImdldE5hdmlnYXRpb24iLCJnZXRQYXR0ZXJuTWV0YURhdGEiLCJkZWZhdWx0RGF0YSIsInNjaGVtYSIsIm5hdmlnYXRpb24iLCJwYXR0ZXJucyIsIm1lc3NhZ2VzIiwiYXBwbGljYXRpb24iLCJwYWdlVXJsIiwiZmlsdGVycyIsImFwcCIsInBhcmVudCIsImNsaWVudCIsInNlcnZlciIsImZpbHRlciIsImdldEZpbHRlciIsInBhcnNlZCIsInBhcnNlIiwiZGVwdGgiLCJwYXRobmFtZSIsInNwbGl0IiwiQm9vbGVhbiIsImxlbmd0aCIsInF1ZXJ5IiwiYmFzZSIsIkFycmF5Iiwiam9pbiIsImZpbHRlcmVkTmF2aWdhdGlvbiIsImFwcGx5RmlsdGVycyIsInBhdHRlcm4iLCJpc1BhdHRlcm4iLCJ0eXBlIiwicGF0dGVybkRhdGEiLCJsb2ciLCJlcnJvciIsImNvbmZpZyIsImNvbmZpZ3VyYXRpb24iLCJ1aSIsIm9wdGlvbnMiLCJ1cmwiLCJ0aXRsZSIsIm5hbWUiLCJ0aGVtZSIsInNlcnZlckRhdGEiLCJkYXRhIiwic2VydmVyT3NOYW1lIiwic2VydmVyT3NWZXJzaW9uIiwicmVsZWFzZSIsInNlcnZlclJ1bnRpbWVOYW1lIiwic2VydmVyUnVudGltZVZlcnNpb24iLCJ2ZXJzaW9uIiwic3RhcnRQYXRobmFtZSIsInN0YXJ0QmFzZSIsImNvbnRlbnQiLCJoZWFkIiwicmV3aW5kIiwiaWNvbnMiLCJhdHRyaWJ1dGVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJsaW5rIiwibWV0YSIsInN0eWxlIiwic2NyaXB0cyIsInJlbmRlclBhZ2UiLCJwYXNzIiwicmF3IiwicmVkdWNlIiwicmVzdWx0cyIsImVudHJ5Iiwia2V5IiwiaXRlbSIsImNoaWxkcmVuIiwibWFuaWZlc3QiLCJm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cmwnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcblxuaW1wb3J0IHtmaWxsLCBtZXJnZSwgZW50cmllc30gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7c3luYyBhcyByZXNvbHZlU3luY30gZnJvbSAncmVzb2x2ZSc7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XG5cbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vYXBwbGljYXRpb24vcmVhY3Qtcm91dGVzL3NlcnZlcic7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL2FwcGxpY2F0aW9uL2xheW91dHMnO1xuaW1wb3J0IGdldElkQnlQYXRobmFtZSBmcm9tICcuLi9hcHBsaWNhdGlvbi91dGlscy9nZXQtaWQtYnktcGF0aG5hbWUnO1xuaW1wb3J0IG5hdmlnYXRlIGZyb20gJy4uL2FwcGxpY2F0aW9uL3V0aWxzL25hdmlnYXRlJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvY29tbW9uL2ljb24nO1xuXG5jb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xuY29uc3QgcmVzb2x2ZSA9IGlkID0+IHJlc29sdmVTeW5jKGlkLCB7YmFzZWRpcjogY3dkfSk7XG5cbmNvbnN0IGdldFNjaGVtYSA9IHJlcXVpcmUocmVzb2x2ZSgncGF0dGVybnBsYXRlLXNlcnZlci9saWJyYXJ5L2dldC1zY2hlbWEnKSk7XG5jb25zdCBnZXROYXZpZ2F0aW9uID0gcmVxdWlyZShyZXNvbHZlKCdwYXR0ZXJucGxhdGUtc2VydmVyL2xpYnJhcnkvZ2V0LW5hdmlnYXRpb24nKSk7XG5jb25zdCBnZXRQYXR0ZXJuTWV0YURhdGEgPSByZXF1aXJlKHJlc29sdmUoJ3BhdHRlcm5wbGF0ZS1zZXJ2ZXIvbGlicmFyeS9nZXQtcGF0dGVybi1tZXRhLWRhdGEnKSk7XG5cbmNvbnN0IGRlZmF1bHREYXRhID0ge1xuXHRzY2hlbWE6IHt9LFxuXHRuYXZpZ2F0aW9uOiB7fSxcblx0cGF0dGVybnM6IG51bGwsXG5cdG1lc3NhZ2VzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUGFnZShhcHBsaWNhdGlvbiwgcGFnZVVybCwgZmlsdGVycyA9IHt9KSB7XG5cdGNvbnN0IGFwcCA9IGFwcGxpY2F0aW9uLnBhcmVudDtcblx0Y29uc3QgY2xpZW50ID0gYXBwbGljYXRpb247XG5cdGNvbnN0IHNlcnZlciA9IGFwcC5zZXJ2ZXI7XG5cdGNvbnN0IGZpbHRlciA9IGdldEZpbHRlcihmaWx0ZXJzKTtcblxuXHRjb25zdCBwYXJzZWQgPSB1cmwucGFyc2UocGFnZVVybCk7XG5cdGNvbnN0IGRlcHRoID0gcGFyc2VkLnBhdGhuYW1lLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aDtcblx0Y29uc3QgcXVlcnkgPSBxdWVyeVN0cmluZy5wYXJzZShwYXJzZWQucXVlcnkpO1xuXHRjb25zdCBiYXNlID0gZGVwdGggPiAwID8gYCR7ZmlsbChBcnJheShkZXB0aCksICcuLicpLmpvaW4oJy8nKX0vdHZnLXVpYCA6ICcuJztcblxuXHRjb25zdCBpZCA9IGdldElkQnlQYXRobmFtZShwYXJzZWQucGF0aG5hbWUpO1xuXG5cdGNvbnN0IHNjaGVtYSA9IGFwcCA/IGF3YWl0IGdldFNjaGVtYShhcHAsIGNsaWVudCwgc2VydmVyKSA6IHt9O1xuXHRjb25zdCBuYXZpZ2F0aW9uID0gYXBwID8gYXdhaXQgZ2V0TmF2aWdhdGlvbihhcHAsIGNsaWVudCwgc2VydmVyKSA6IHt9O1xuXHRjb25zdCBmaWx0ZXJlZE5hdmlnYXRpb24gPSBhcHBseUZpbHRlcnMobmF2aWdhdGlvbiwgZmlsdGVyKTtcblxuXHRjb25zdCBwYXR0ZXJuID0gbWVyZ2Uoe30sIG5hdmlnYXRlKGlkLCBmaWx0ZXJlZE5hdmlnYXRpb24pKTtcblx0Y29uc3QgaXNQYXR0ZXJuID0gcGF0dGVybiAmJiBwYXR0ZXJuLnR5cGUgPT09ICdwYXR0ZXJuJztcblxuXHRpZiAoaXNQYXR0ZXJuKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhdHRlcm5EYXRhID0gYXdhaXQgZ2V0UGF0dGVybk1ldGFEYXRhKHNlcnZlciwgaWQpO1xuXHRcdFx0bWVyZ2UocGF0dGVybiwgcGF0dGVybkRhdGEpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhcHBsaWNhdGlvbi5sb2cuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNvbmZpZyA9IGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24udWk7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0dXJsOiBwYWdlVXJsLFxuXHRcdHRpdGxlOiBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnVpLnRpdGxlIHx8IHNjaGVtYS5uYW1lLFxuXHRcdHRoZW1lOiBxdWVyeS50aGVtZSB8fCBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnVpLnRoZW1lLFxuXHRcdGNvbmZpZ1xuXHR9O1xuXG5cdGNvbnN0IHNlcnZlckRhdGEgPSB7c2NoZW1hLCBuYXZpZ2F0aW9uOiBmaWx0ZXJlZE5hdmlnYXRpb24sIHBhdHRlcm59O1xuXHRjb25zdCBkYXRhID0gbWVyZ2Uoe30sIGRlZmF1bHREYXRhLCBvcHRpb25zLmRhdGEsIHNlcnZlckRhdGEsIHtjb25maWd9LCB7XG5cdFx0c2NoZW1hOiB7XG5cdFx0XHRzZXJ2ZXJPc05hbWU6IG9zLnR5cGUoKSxcblx0XHRcdHNlcnZlck9zVmVyc2lvbjogb3MucmVsZWFzZSgpLFxuXHRcdFx0c2VydmVyUnVudGltZU5hbWU6IHBsYXRmb3JtLm5hbWUsXG5cdFx0XHRzZXJ2ZXJSdW50aW1lVmVyc2lvbjogcGxhdGZvcm0udmVyc2lvblxuXHRcdH0sXG5cdFx0c3RhcnRQYXRobmFtZTogcGFnZVVybCxcblx0XHRzdGFydEJhc2U6IGJhc2Vcblx0fSk7XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IHJvdXRlcihvcHRpb25zLnVybCwgZGF0YSk7XG5cdGNvbnN0IGhlYWQgPSBIZWxtZXQucmV3aW5kKCk7XG5cdGNvbnN0IGljb25zID0gSWNvbi5yZXdpbmQoKTtcblxuXHRyZXR1cm4gbGF5b3V0KHtcblx0XHRhdHRyaWJ1dGVzOiBoZWFkLmh0bWxBdHRyaWJ1dGVzLFxuXHRcdGJhc2UsXG5cdFx0Y29udGVudCxcblx0XHRpY29ucyxcblx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHRsaW5rOiBoZWFkLmxpbmssXG5cdFx0bWV0YTogaGVhZC5tZXRhLFxuXHRcdHN0eWxlOiBoZWFkLnN0eWxlLFxuXHRcdHRpdGxlOiBoZWFkLnRpdGxlLFxuXHRcdHNjcmlwdHM6IFtcblx0XHRcdGAke2Jhc2V9L3NjcmlwdC92ZW5kb3JzLmJ1bmRsZS5qc2AsXG5cdFx0XHRgJHtiYXNlfS9zY3JpcHQvaW5kZXguYnVuZGxlLmpzYFxuXHRcdF1cblx0fSk7XG59XG5cbmNvbnN0IHBhc3MgPSAoKSA9PiB0cnVlO1xuXG5mdW5jdGlvbiBhcHBseUZpbHRlcnMocmF3LCBmaWx0ZXIpIHtcblx0cmV0dXJuIGVudHJpZXMocmF3KS5yZWR1Y2UoKHJlc3VsdHMsIGVudHJ5KSA9PiB7XG5cdFx0Y29uc3QgW2tleSwgaXRlbV0gPSBlbnRyeTtcblx0XHRpZiAoaXRlbS50eXBlICE9PSAncGF0dGVybicpIHtcblx0XHRcdHJlc3VsdHNba2V5XSA9IGl0ZW07XG5cdFx0XHRpdGVtLmNoaWxkcmVuID0gYXBwbHlGaWx0ZXJzKGl0ZW0uY2hpbGRyZW4sIGZpbHRlcik7XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9XG5cdFx0aWYgKGZpbHRlcihpdGVtLm1hbmlmZXN0KSkge1xuXHRcdFx0cmVzdWx0c1trZXldID0gaXRlbTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsdGVyKGZpbHRlcnMpIHtcblx0Y29uc3QgZmxhZ3MgPSBmaWx0ZXJzLmZsYWdzIHx8IFtdO1xuXG5cdGlmIChmbGFncy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gcGFzcztcblx0fVxuXG5cdHJldHVybiBpdGVtID0+IHtcblx0XHRyZXR1cm4gZmxhZ3MuaW5jbHVkZXMoaXRlbS5mbGFnKTtcblx0fTtcbn1cbiJdfQ==