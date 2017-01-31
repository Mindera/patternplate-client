'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = patternRouteFactory;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPatternDemo = require('patternplate-server/library/get-pattern-demo');
var getPatternFile = require('patternplate-server/library/get-pattern-file');

function withErrorHandling(fn) {
	return function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
			var result,
			    _args = arguments;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return fn.apply(undefined, _args);

						case 3:
							result = _context.sent;
							return _context.abrupt('return', [null, result]);

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);
							return _context.abrupt('return', [_context.t0]);

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[0, 7]]);
		}));

		return function () {
			return _ref.apply(this, arguments);
		};
	}();
}

function getPatternId(raw) {
	var parsed = _path2.default.parse(raw);
	var extension = getPatternExtension(raw);
	var base = _path2.default.basename(raw, _path2.default.extname(raw));

	if (base === 'index' && extension !== 'json') {
		return _path2.default.dirname(raw);
	}

	return _path2.default.dirname(raw) + '/' + _path2.default.basename(parsed.base, _path2.default.extname(parsed.base));
}

function getPatternExtension(raw) {
	return _path2.default.extname(raw).slice(1) || 'html';
}

var getPatternDemoOrError = withErrorHandling(getPatternDemo);
var getPatternFileOrError = withErrorHandling(getPatternFile);

function patternRouteFactory(application) {
	return function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var parsed, id, extension, type, errorType, _parsed$query$environ, environment, filters, _ref3, _ref4, _error, demo, err, _ref5, _ref6, error, file, _err;

			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							parsed = _urlQuery2.default.parse(this.params.id);
							id = getPatternId(parsed.pathname);
							extension = getPatternExtension(parsed.pathname);
							type = this.accepts('text', 'html', 'json') || extension;
							errorType = type === 'json' ? 'json' : 'html';
							_parsed$query$environ = parsed.query.environment, environment = _parsed$query$environ === undefined ? 'index' : _parsed$query$environ;
							filters = {
								outFormats: [extension],
								environments: [environment].filter(Boolean)
							};

							if (!(type === 'html' && extension === 'html')) {
								_context2.next = 19;
								break;
							}

							_context2.next = 10;
							return getPatternDemoOrError(application.parent.server, id, filters, environment);

						case 10:
							_ref3 = _context2.sent;
							_ref4 = (0, _slicedToArray3.default)(_ref3, 2);
							_error = _ref4[0];
							demo = _ref4[1];


							if (_error) {
								console.log(_error.message);
								if (_error.stack) {
									console.trace(_error.stack);
								}
							}

							if (demo === null) {
								err = new Error('Could not find demo for ' + id + '.');

								err.file = __filename;
								this.throw(404, err);
							}

							this.type = 'html';
							this.body = demo;
							return _context2.abrupt('return');

						case 19:
							_context2.next = 21;
							return getPatternFileOrError(application.parent.server, id, filters, extension, environment);

						case 21:
							_ref5 = _context2.sent;
							_ref6 = (0, _slicedToArray3.default)(_ref5, 2);
							error = _ref6[0];
							file = _ref6[1];


							if (error) {
								this.type = errorType;
								this.send(500, error);
							}

							if (file === null) {
								this.type = errorType;
								_err = new Error('Could not find file {index,demo}.' + extension + ' for ' + id + '.');

								_err.file = __filename;
								this.throw(404, _err);
							}

							this.type = extension;
							this.body = file;

						case 29:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function patternRoute() {
			return _ref2.apply(this, arguments);
		}

		return patternRoute;
	}();
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvZGVtby5qcyJdLCJuYW1lcyI6WyJwYXR0ZXJuUm91dGVGYWN0b3J5IiwiZ2V0UGF0dGVybkRlbW8iLCJyZXF1aXJlIiwiZ2V0UGF0dGVybkZpbGUiLCJ3aXRoRXJyb3JIYW5kbGluZyIsImZuIiwicmVzdWx0IiwiZ2V0UGF0dGVybklkIiwicmF3IiwicGFyc2VkIiwicGFyc2UiLCJleHRlbnNpb24iLCJnZXRQYXR0ZXJuRXh0ZW5zaW9uIiwiYmFzZSIsImJhc2VuYW1lIiwiZXh0bmFtZSIsImRpcm5hbWUiLCJzbGljZSIsImdldFBhdHRlcm5EZW1vT3JFcnJvciIsImdldFBhdHRlcm5GaWxlT3JFcnJvciIsImFwcGxpY2F0aW9uIiwicGFyYW1zIiwiaWQiLCJwYXRobmFtZSIsInR5cGUiLCJhY2NlcHRzIiwiZXJyb3JUeXBlIiwicXVlcnkiLCJlbnZpcm9ubWVudCIsImZpbHRlcnMiLCJvdXRGb3JtYXRzIiwiZW52aXJvbm1lbnRzIiwiZmlsdGVyIiwiQm9vbGVhbiIsInBhcmVudCIsInNlcnZlciIsImVycm9yIiwiZGVtbyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic3RhY2siLCJ0cmFjZSIsImVyciIsIkVycm9yIiwiZmlsZSIsIl9fZmlsZW5hbWUiLCJ0aHJvdyIsImJvZHkiLCJzZW5kIiwicGF0dGVyblJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBcUN3QkEsbUI7O0FBckN4Qjs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQyxpQkFBaUJDLFFBQVEsOENBQVIsQ0FBdkI7QUFDQSxJQUFNQyxpQkFBaUJELFFBQVEsOENBQVIsQ0FBdkI7O0FBRUEsU0FBU0UsaUJBQVQsQ0FBMkJDLEVBQTNCLEVBQStCO0FBQzlCO0FBQUEsd0VBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FFZ0JBLDBCQUZoQjs7QUFBQTtBQUVDQyxhQUZE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LGNBa0NzQmxCLHNCQUFzQkMsWUFBWWMsTUFBWixDQUFtQkMsTUFBekMsRUFBaURiLEVBQWpELEVBQXFETyxPQUFyRCxFQUE4RGxCLFNBQTlELEVBQXlFaUIsV0FBekUsQ0FsQ3RCOztBQUFBO0FBQUE7QUFBQTtBQWtDQ1EsWUFsQ0Q7QUFrQ1FTLFdBbENSOzs7QUFvQ04sV0FBSVQsS0FBSixFQUFXO0FBQ1YsYUFBS1osSUFBTCxHQUFZRSxTQUFaO0FBQ0EsYUFBS3VCLElBQUwsQ0FBVSxHQUFWLEVBQWViLEtBQWY7QUFDQTs7QUFFRCxXQUFJUyxTQUFTLElBQWIsRUFBbUI7QUFDbEIsYUFBS3JCLElBQUwsR0FBWUUsU0FBWjtBQUNNaUIsWUFGWSxHQUVOLElBQUlDLEtBQUosdUNBQThDakMsU0FBOUMsYUFBK0RXLEVBQS9ELE9BRk07O0FBR2xCcUIsYUFBSUUsSUFBSixHQUFXQyxVQUFYO0FBQ0EsYUFBS0MsS0FBTCxDQUFXLEdBQVgsRUFBZ0JKLElBQWhCO0FBQ0E7O0FBRUQsWUFBS25CLElBQUwsR0FBWWIsU0FBWjtBQUNBLFlBQUtxQyxJQUFMLEdBQVlILElBQVo7O0FBakRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVA7O0FBQUEsV0FBc0JLLFlBQXRCO0FBQUE7QUFBQTs7QUFBQSxTQUFzQkEsWUFBdEI7QUFBQTtBQW1EQSIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCB1cmxRdWVyeSBmcm9tICcuLi91dGlscy91cmwtcXVlcnknO1xuXG5jb25zdCBnZXRQYXR0ZXJuRGVtbyA9IHJlcXVpcmUoJ3BhdHRlcm5wbGF0ZS1zZXJ2ZXIvbGlicmFyeS9nZXQtcGF0dGVybi1kZW1vJyk7XG5jb25zdCBnZXRQYXR0ZXJuRmlsZSA9IHJlcXVpcmUoJ3BhdHRlcm5wbGF0ZS1zZXJ2ZXIvbGlicmFyeS9nZXQtcGF0dGVybi1maWxlJyk7XG5cbmZ1bmN0aW9uIHdpdGhFcnJvckhhbmRsaW5nKGZuKSB7XG5cdHJldHVybiBhc3luYyBmdW5jdGlvbiguLi5hcmdzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKC4uLmFyZ3MpO1xuXHRcdFx0cmV0dXJuIFtudWxsLCByZXN1bHRdO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gW2Vycm9yXTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGdldFBhdHRlcm5JZChyYXcpIHtcblx0Y29uc3QgcGFyc2VkID0gcGF0aC5wYXJzZShyYXcpO1xuXHRjb25zdCBleHRlbnNpb24gPSBnZXRQYXR0ZXJuRXh0ZW5zaW9uKHJhdyk7XG5cdGNvbnN0IGJhc2UgPSBwYXRoLmJhc2VuYW1lKHJhdywgcGF0aC5leHRuYW1lKHJhdykpO1xuXG5cdGlmIChiYXNlID09PSAnaW5kZXgnICYmIGV4dGVuc2lvbiAhPT0gJ2pzb24nKSB7XG5cdFx0cmV0dXJuIHBhdGguZGlybmFtZShyYXcpO1xuXHR9XG5cblx0cmV0dXJuIGAke3BhdGguZGlybmFtZShyYXcpfS8ke3BhdGguYmFzZW5hbWUocGFyc2VkLmJhc2UsIHBhdGguZXh0bmFtZShwYXJzZWQuYmFzZSkpfWA7XG59XG5cbmZ1bmN0aW9uIGdldFBhdHRlcm5FeHRlbnNpb24ocmF3KSB7XG5cdHJldHVybiBwYXRoLmV4dG5hbWUocmF3KS5zbGljZSgxKSB8fCAnaHRtbCc7XG59XG5cbmNvbnN0IGdldFBhdHRlcm5EZW1vT3JFcnJvciA9IHdpdGhFcnJvckhhbmRsaW5nKGdldFBhdHRlcm5EZW1vKTtcbmNvbnN0IGdldFBhdHRlcm5GaWxlT3JFcnJvciA9IHdpdGhFcnJvckhhbmRsaW5nKGdldFBhdHRlcm5GaWxlKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGF0dGVyblJvdXRlRmFjdG9yeShhcHBsaWNhdGlvbikge1xuXHRyZXR1cm4gYXN5bmMgZnVuY3Rpb24gcGF0dGVyblJvdXRlKCkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IHVybFF1ZXJ5LnBhcnNlKHRoaXMucGFyYW1zLmlkKTtcblx0XHRjb25zdCBpZCA9IGdldFBhdHRlcm5JZChwYXJzZWQucGF0aG5hbWUpO1xuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IGdldFBhdHRlcm5FeHRlbnNpb24ocGFyc2VkLnBhdGhuYW1lKTtcblx0XHRjb25zdCB0eXBlID0gdGhpcy5hY2NlcHRzKCd0ZXh0JywgJ2h0bWwnLCAnanNvbicpIHx8IGV4dGVuc2lvbjtcblx0XHRjb25zdCBlcnJvclR5cGUgPSB0eXBlID09PSAnanNvbicgPyAnanNvbicgOiAnaHRtbCc7XG5cdFx0Y29uc3Qge2Vudmlyb25tZW50ID0gJ2luZGV4J30gPSBwYXJzZWQucXVlcnk7XG5cblx0XHRjb25zdCBmaWx0ZXJzID0ge1xuXHRcdFx0b3V0Rm9ybWF0czogW2V4dGVuc2lvbl0sXG5cdFx0XHRlbnZpcm9ubWVudHM6IFtlbnZpcm9ubWVudF0uZmlsdGVyKEJvb2xlYW4pXG5cdFx0fTtcblxuXHRcdGlmICh0eXBlID09PSAnaHRtbCcgJiYgZXh0ZW5zaW9uID09PSAnaHRtbCcpIHtcblx0XHRcdGNvbnN0IFtlcnJvciwgZGVtb10gPSBhd2FpdCBnZXRQYXR0ZXJuRGVtb09yRXJyb3IoYXBwbGljYXRpb24ucGFyZW50LnNlcnZlciwgaWQsIGZpbHRlcnMsIGVudmlyb25tZW50KTtcblxuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRpZiAoZXJyb3Iuc3RhY2spIHtcblx0XHRcdFx0XHRjb25zb2xlLnRyYWNlKGVycm9yLnN0YWNrKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZGVtbyA9PT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBlcnIgPSBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGRlbW8gZm9yICR7aWR9LmApO1xuXHRcdFx0XHRlcnIuZmlsZSA9IF9fZmlsZW5hbWU7XG5cdFx0XHRcdHRoaXMudGhyb3coNDA0LCBlcnIpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnR5cGUgPSAnaHRtbCc7XG5cdFx0XHR0aGlzLmJvZHkgPSBkZW1vO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtlcnJvciwgZmlsZV0gPSBhd2FpdCBnZXRQYXR0ZXJuRmlsZU9yRXJyb3IoYXBwbGljYXRpb24ucGFyZW50LnNlcnZlciwgaWQsIGZpbHRlcnMsIGV4dGVuc2lvbiwgZW52aXJvbm1lbnQpO1xuXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHR0aGlzLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHR0aGlzLnNlbmQoNTAwLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0aWYgKGZpbGUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGNvbnN0IGVyciA9IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgZmlsZSB7aW5kZXgsZGVtb30uJHtleHRlbnNpb259IGZvciAke2lkfS5gKTtcblx0XHRcdGVyci5maWxlID0gX19maWxlbmFtZTtcblx0XHRcdHRoaXMudGhyb3coNDA0LCBlcnIpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZSA9IGV4dGVuc2lvbjtcblx0XHR0aGlzLmJvZHkgPSBmaWxlO1xuXHR9O1xufVxuIl19