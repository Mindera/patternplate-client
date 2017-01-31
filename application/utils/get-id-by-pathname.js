'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getIdByPathname;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _urlQuery = require('./url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIdByPathname(pathname) {
	var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

	var parsed = _urlQuery2.default.parse(pathname);
	return _path2.default.relative(base + 'pattern', parsed.pathname).split(_path2.default.sep).join('/');
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9nZXQtaWQtYnktcGF0aG5hbWUuanMiXSwibmFtZXMiOlsiZ2V0SWRCeVBhdGhuYW1lIiwicGF0aG5hbWUiLCJiYXNlIiwicGFyc2VkIiwicGFyc2UiLCJyZWxhdGl2ZSIsInNwbGl0Iiwic2VwIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3dCQSxlOztBQUh4Qjs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxlQUFULENBQXlCQyxRQUF6QixFQUErQztBQUFBLEtBQVpDLElBQVksdUVBQUwsR0FBSzs7QUFDN0QsS0FBTUMsU0FBUyxtQkFBU0MsS0FBVCxDQUFlSCxRQUFmLENBQWY7QUFDQSxRQUFPLGVBQUtJLFFBQUwsQ0FBaUJILElBQWpCLGNBQWdDQyxPQUFPRixRQUF2QyxFQUNMSyxLQURLLENBQ0MsZUFBS0MsR0FETixFQUVMQyxJQUZLLENBRUEsR0FGQSxDQUFQO0FBR0EiLCJmaWxlIjoiZ2V0LWlkLWJ5LXBhdGhuYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgdXJsUXVlcnkgZnJvbSAnLi91cmwtcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJZEJ5UGF0aG5hbWUocGF0aG5hbWUsIGJhc2UgPSAnLycpIHtcblx0Y29uc3QgcGFyc2VkID0gdXJsUXVlcnkucGFyc2UocGF0aG5hbWUpO1xuXHRyZXR1cm4gcGF0aC5yZWxhdGl2ZShgJHtiYXNlfXBhdHRlcm5gLCBwYXJzZWQucGF0aG5hbWUpXG5cdFx0LnNwbGl0KHBhdGguc2VwKVxuXHRcdC5qb2luKCcvJyk7XG59XG4iXX0=