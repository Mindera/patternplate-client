'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _unescapeHtml = require('unescape-html');

var _unescapeHtml2 = _interopRequireDefault(_unescapeHtml);

var _home = require('../components/content/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		base: state.base,
		readme: selectReadme(state)
	};
})(_home2.default);


function getDefaultReadme(data) {
	return '\n# :construction: Add documentation\n\n> Undocumented software could not exist just as well.\n>\n> \u2013 The Voice of Common Sense\n\nCurrently there is no readme data at `./patterns/readme.md`, so we left this\nfriendly reminder here to change that soon.\n\nYou could start right away:\n\n```sh\necho "# ' + data.name + '\\n This patternplate contains ..." > patterns/readme.md\n```\n\nSome ideas on what to write into your pattern readme\n\n*  Why this Living Styleguide interface exists, e.g. what problems it should solve\n*  What the components in are intended for, e.g. a brand, website or product\n*  The component hierarchy you use, e.g. Atomic Design\n*  Naming conventions\n*  Rules for dependencies\n*  Browser matrix\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate).\n\n';
}

function selectReadme(state) {
	if (state.schema.readme) {
		return (0, _unescapeHtml2.default)(state.schema.readme);
	}
	return getDefaultReadme({
		name: state.config.title || state.schema.name,
		description: state.schema.description
	});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2hvbWUuanMiXSwibmFtZXMiOlsiYmFzZSIsInN0YXRlIiwicmVhZG1lIiwic2VsZWN0UmVhZG1lIiwiZ2V0RGVmYXVsdFJlYWRtZSIsImRhdGEiLCJuYW1lIiwic2NoZW1hIiwiY29uZmlnIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLHlCQUFRLGlCQUFTO0FBQy9CLFFBQU87QUFDTkEsUUFBTUMsTUFBTUQsSUFETjtBQUVORSxVQUFRQyxhQUFhRixLQUFiO0FBRkYsRUFBUDtBQUlBLENBTGMsaUI7OztBQU9mLFNBQVNHLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUMvQixnVUFhU0EsS0FBS0MsSUFiZDtBQThCQTs7QUFFRCxTQUFTSCxZQUFULENBQXNCRixLQUF0QixFQUE2QjtBQUM1QixLQUFJQSxNQUFNTSxNQUFOLENBQWFMLE1BQWpCLEVBQXlCO0FBQ3hCLFNBQU8sNEJBQWFELE1BQU1NLE1BQU4sQ0FBYUwsTUFBMUIsQ0FBUDtBQUNBO0FBQ0QsUUFBT0UsaUJBQWlCO0FBQ3ZCRSxRQUFNTCxNQUFNTyxNQUFOLENBQWFDLEtBQWIsSUFBc0JSLE1BQU1NLE1BQU4sQ0FBYUQsSUFEbEI7QUFFdkJJLGVBQWFULE1BQU1NLE1BQU4sQ0FBYUc7QUFGSCxFQUFqQixDQUFQO0FBSUEiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHVuZXNjYXBlSHRtbCBmcm9tICd1bmVzY2FwZS1odG1sJztcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiB7XG5cdHJldHVybiB7XG5cdFx0YmFzZTogc3RhdGUuYmFzZSxcblx0XHRyZWFkbWU6IHNlbGVjdFJlYWRtZShzdGF0ZSlcblx0fTtcbn0pKEhvbWUpO1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0UmVhZG1lKGRhdGEpIHtcblx0cmV0dXJuIGBcbiMgOmNvbnN0cnVjdGlvbjogQWRkIGRvY3VtZW50YXRpb25cblxuPiBVbmRvY3VtZW50ZWQgc29mdHdhcmUgY291bGQgbm90IGV4aXN0IGp1c3QgYXMgd2VsbC5cbj5cbj4g4oCTIFRoZSBWb2ljZSBvZiBDb21tb24gU2Vuc2VcblxuQ3VycmVudGx5IHRoZXJlIGlzIG5vIHJlYWRtZSBkYXRhIGF0IFxcYC4vcGF0dGVybnMvcmVhZG1lLm1kXFxgLCBzbyB3ZSBsZWZ0IHRoaXNcbmZyaWVuZGx5IHJlbWluZGVyIGhlcmUgdG8gY2hhbmdlIHRoYXQgc29vbi5cblxuWW91IGNvdWxkIHN0YXJ0IHJpZ2h0IGF3YXk6XG5cblxcYFxcYFxcYHNoXG5lY2hvIFwiIyAke2RhdGEubmFtZX1cXFxcbiBUaGlzIHBhdHRlcm5wbGF0ZSBjb250YWlucyAuLi5cIiA+IHBhdHRlcm5zL3JlYWRtZS5tZFxuXFxgXFxgXFxgXG5cblNvbWUgaWRlYXMgb24gd2hhdCB0byB3cml0ZSBpbnRvIHlvdXIgcGF0dGVybiByZWFkbWVcblxuKiAgV2h5IHRoaXMgTGl2aW5nIFN0eWxlZ3VpZGUgaW50ZXJmYWNlIGV4aXN0cywgZS5nLiB3aGF0IHByb2JsZW1zIGl0IHNob3VsZCBzb2x2ZVxuKiAgV2hhdCB0aGUgY29tcG9uZW50cyBpbiBhcmUgaW50ZW5kZWQgZm9yLCBlLmcuIGEgYnJhbmQsIHdlYnNpdGUgb3IgcHJvZHVjdFxuKiAgVGhlIGNvbXBvbmVudCBoaWVyYXJjaHkgeW91IHVzZSwgZS5nLiBBdG9taWMgRGVzaWduXG4qICBOYW1pbmcgY29udmVudGlvbnNcbiogIFJ1bGVzIGZvciBkZXBlbmRlbmNpZXNcbiogIEJyb3dzZXIgbWF0cml4XG5cbi0tLVxuXG5IZWxwIHVzIHRvIG1ha2UgdGhpcyBtZXNzYWdlIG1vcmUgaGVscGZ1bCBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vc2lubmVyc2NocmFkZXIvcGF0dGVybnBsYXRlKS5cblxuYDtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UmVhZG1lKHN0YXRlKSB7XG5cdGlmIChzdGF0ZS5zY2hlbWEucmVhZG1lKSB7XG5cdFx0cmV0dXJuIHVuZXNjYXBlSHRtbChzdGF0ZS5zY2hlbWEucmVhZG1lKTtcblx0fVxuXHRyZXR1cm4gZ2V0RGVmYXVsdFJlYWRtZSh7XG5cdFx0bmFtZTogc3RhdGUuY29uZmlnLnRpdGxlIHx8IHN0YXRlLnNjaGVtYS5uYW1lLFxuXHRcdGRlc2NyaXB0aW9uOiBzdGF0ZS5zY2hlbWEuZGVzY3JpcHRpb25cblx0fSk7XG59XG4iXX0=