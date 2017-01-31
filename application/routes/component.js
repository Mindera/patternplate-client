'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = function (application) {
	return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var parsed, id, environment, server, component;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						this.type = 'js';

						parsed = _urlQuery2.default.parse(this.params.id);
						id = parsed.pathname;
						environment = parsed.query.environment;
						server = application.parent.server;
						_context.next = 7;
						return getComponent(server, id, environment);

					case 7:
						component = _context.sent;


						if (!component.buffer) {
							this.throw(404);
						}

						this.body = component.buffer;

					case 10:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));
};

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getComponent = require('patternplate-server/library/get-component');

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uIiwidHlwZSIsInBhcnNlZCIsInBhcnNlIiwicGFyYW1zIiwiaWQiLCJwYXRobmFtZSIsImVudmlyb25tZW50IiwicXVlcnkiLCJzZXJ2ZXIiLCJwYXJlbnQiLCJnZXRDb21wb25lbnQiLCJjb21wb25lbnQiLCJidWZmZXIiLCJ0aHJvdyIsImJvZHkiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztrQkFHZSxVQUFVQSxXQUFWLEVBQXVCO0FBQ3JDLG1FQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNOLFdBQUtDLElBQUwsR0FBWSxJQUFaOztBQUVNQyxZQUhBLEdBR1MsbUJBQVNDLEtBQVQsQ0FBZSxLQUFLQyxNQUFMLENBQVlDLEVBQTNCLENBSFQ7QUFJQUEsUUFKQSxHQUlLSCxPQUFPSSxRQUpaO0FBS0NDLGlCQUxELEdBS2dCTCxPQUFPTSxLQUx2QixDQUtDRCxXQUxEO0FBTUFFLFlBTkEsR0FNU1QsWUFBWVUsTUFBWixDQUFtQkQsTUFONUI7QUFBQTtBQUFBLGFBUWtCRSxhQUFhRixNQUFiLEVBQXFCSixFQUFyQixFQUF5QkUsV0FBekIsQ0FSbEI7O0FBQUE7QUFRQUssZUFSQTs7O0FBVU4sVUFBSSxDQUFDQSxVQUFVQyxNQUFmLEVBQXVCO0FBQ3RCLFlBQUtDLEtBQUwsQ0FBVyxHQUFYO0FBQ0E7O0FBRUQsV0FBS0MsSUFBTCxHQUFZSCxVQUFVQyxNQUF0Qjs7QUFkTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFQO0FBZ0JBLEM7O0FBcEJEOzs7Ozs7QUFDQSxJQUFNRixlQUFlSyxRQUFRLDJDQUFSLENBQXJCIiwiZmlsZSI6ImNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1cmxRdWVyeSBmcm9tICcuLi91dGlscy91cmwtcXVlcnknO1xuY29uc3QgZ2V0Q29tcG9uZW50ID0gcmVxdWlyZSgncGF0dGVybnBsYXRlLXNlcnZlci9saWJyYXJ5L2dldC1jb21wb25lbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcGxpY2F0aW9uKSB7XG5cdHJldHVybiBhc3luYyBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnR5cGUgPSAnanMnO1xuXG5cdFx0Y29uc3QgcGFyc2VkID0gdXJsUXVlcnkucGFyc2UodGhpcy5wYXJhbXMuaWQpO1xuXHRcdGNvbnN0IGlkID0gcGFyc2VkLnBhdGhuYW1lO1xuXHRcdGNvbnN0IHtlbnZpcm9ubWVudH0gPSBwYXJzZWQucXVlcnk7XG5cdFx0Y29uc3Qgc2VydmVyID0gYXBwbGljYXRpb24ucGFyZW50LnNlcnZlcjtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGF3YWl0IGdldENvbXBvbmVudChzZXJ2ZXIsIGlkLCBlbnZpcm9ubWVudCk7XG5cblx0XHRpZiAoIWNvbXBvbmVudC5idWZmZXIpIHtcblx0XHRcdHRoaXMudGhyb3coNDA0KTtcblx0XHR9XG5cblx0XHR0aGlzLmJvZHkgPSBjb21wb25lbnQuYnVmZmVyO1xuXHR9O1xufVxuIl19