'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _home = require('../components/content/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		base: state.base,
		readme: selectReadme(state)
	};
})(_home2.default);


function selectReadme(state) {
	var url = state.routing.locationBeforeTransitions.pathname;
	return '\n# Nothing found\n\n> Pretty sure these aren\'t the hypertext documents you are looking for.\n\nWe looked everywhere and could not find a single thing at `' + url + '`.\n\nYou might want to navigate back to [Home](/) or use the search.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate)\n';
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL25vdC1mb3VuZC5qcyJdLCJuYW1lcyI6WyJiYXNlIiwic3RhdGUiLCJyZWFkbWUiLCJzZWxlY3RSZWFkbWUiLCJ1cmwiLCJyb3V0aW5nIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2tCQUVlLHlCQUFRLGlCQUFTO0FBQy9CLFFBQU87QUFDTkEsUUFBTUMsTUFBTUQsSUFETjtBQUVORSxVQUFRQyxhQUFhRixLQUFiO0FBRkYsRUFBUDtBQUlBLENBTGMsaUI7OztBQU9mLFNBQVNFLFlBQVQsQ0FBc0JGLEtBQXRCLEVBQTZCO0FBQzVCLEtBQU1HLE1BQU1ILE1BQU1JLE9BQU4sQ0FBY0MseUJBQWQsQ0FBd0NDLFFBQXBEO0FBQ0EseUtBSzZESCxHQUw3RDtBQWFBIiwiZmlsZSI6Im5vdC1mb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZW50L2hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcblx0cmV0dXJuIHtcblx0XHRiYXNlOiBzdGF0ZS5iYXNlLFxuXHRcdHJlYWRtZTogc2VsZWN0UmVhZG1lKHN0YXRlKVxuXHR9O1xufSkoSG9tZSk7XG5cbmZ1bmN0aW9uIHNlbGVjdFJlYWRtZShzdGF0ZSkge1xuXHRjb25zdCB1cmwgPSBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMucGF0aG5hbWU7XG5cdHJldHVybiBgXG4jIE5vdGhpbmcgZm91bmRcblxuPiBQcmV0dHkgc3VyZSB0aGVzZSBhcmVuJ3QgdGhlIGh5cGVydGV4dCBkb2N1bWVudHMgeW91IGFyZSBsb29raW5nIGZvci5cblxuV2UgbG9va2VkIGV2ZXJ5d2hlcmUgYW5kIGNvdWxkIG5vdCBmaW5kIGEgc2luZ2xlIHRoaW5nIGF0IFxcYCR7dXJsfVxcYC5cblxuWW91IG1pZ2h0IHdhbnQgdG8gbmF2aWdhdGUgYmFjayB0byBbSG9tZV0oLykgb3IgdXNlIHRoZSBzZWFyY2guXG5cbi0tLVxuXG5IZWxwIHVzIHRvIG1ha2UgdGhpcyBtZXNzYWdlIG1vcmUgaGVscGZ1bCBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vc2lubmVyc2NocmFkZXIvcGF0dGVybnBsYXRlKVxuYDtcbn1cbiJdfQ==