'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dependencies = undefined;

var _activeBlock = require('./active-block');

var _activeBlock2 = _interopRequireDefault(_activeBlock);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _depth = require('./depth');

var _depth2 = _interopRequireDefault(_depth);

var _demoContentDimensions = require('./demo-content-dimensions');

var _demoContentDimensions2 = _interopRequireDefault(_demoContentDimensions);

var _demoDimensions = require('./demo-dimensions');

var _demoDimensions2 = _interopRequireDefault(_demoDimensions);

var _environment = require('./environment');

var _environment2 = _interopRequireDefault(_environment);

var _expanded = require('./expanded');

var _expanded2 = _interopRequireDefault(_expanded);

var _id = require('./id');

var _id2 = _interopRequireDefault(_id);

var _issue = require('./issue');

var _issue2 = _interopRequireDefault(_issue);

var _lightbox = require('./lightbox');

var _lightbox2 = _interopRequireDefault(_lightbox);

var _menuEnabled = require('./menu-enabled');

var _menuEnabled2 = _interopRequireDefault(_menuEnabled);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _opacity = require('./opacity');

var _opacity2 = _interopRequireDefault(_opacity);

var _pattern = require('./pattern');

var _pattern2 = _interopRequireDefault(_pattern);

var _rulers = require('./rulers');

var _rulers2 = _interopRequireDefault(_rulers);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _searchMatches = require('./search-matches');

var _searchMatches2 = _interopRequireDefault(_searchMatches);

var _scrollDemoX = require('./scroll-demo-x');

var _scrollDemoX2 = _interopRequireDefault(_scrollDemoX);

var _scrollDemoY = require('./scroll-demo-y');

var _scrollDemoY2 = _interopRequireDefault(_scrollDemoY);

var _sourceExpanded = require('./source-expanded');

var _sourceExpanded2 = _interopRequireDefault(_sourceExpanded);

var _sourceId = require('./source-id');

var _sourceId2 = _interopRequireDefault(_sourceId);

var _sourceType = require('./source-type');

var _sourceType2 = _interopRequireDefault(_sourceType);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _hide = require('./hide');

var _hide2 = _interopRequireDefault(_hide);

var _window = require('./window');

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ident = function ident() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return state;
};
var getDependencies = function getDependencies() {
	var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return reducer.dependencies || [];
};

exports.default = {
	activeBlock: _activeBlock2.default,
	base: _base2.default,
	config: ident,
	demoContentDimensions: _demoContentDimensions2.default,
	demoDimensions: _demoDimensions2.default,
	depth: _depth2.default,
	environment: _environment2.default,
	expanded: _expanded2.default,
	hide: _hide2.default,
	id: _id2.default,
	issue: _issue2.default,
	lightbox: _lightbox2.default,
	menuEnabled: _menuEnabled2.default,
	messages: _messages2.default,
	navigation: _navigation2.default,
	opacity: _opacity2.default,
	pattern: _pattern2.default,
	rulers: _rulers2.default,
	schema: ident,
	scrollDemoX: _scrollDemoX2.default,
	scrollDemoY: _scrollDemoY2.default,
	search: _search2.default,
	searchMatches: _searchMatches2.default,
	sourceExpanded: _sourceExpanded2.default,
	sourceId: _sourceId2.default,
	sourceType: _sourceType2.default,
	startBase: ident,
	styles: _styles2.default,
	theme: _theme2.default,
	window: _window2.default
};
var dependencies = exports.dependencies = {
	pattern: getDependencies(_pattern2.default),
	searchMatches: getDependencies(_searchMatches2.default),
	styles: getDependencies(_styles2.default),
	scrollDemoY: getDependencies(_scrollDemoY2.default),
	scrollDemoX: getDependencies(_scrollDemoX2.default)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpZGVudCIsInN0YXRlIiwiZ2V0RGVwZW5kZW5jaWVzIiwicmVkdWNlciIsImRlcGVuZGVuY2llcyIsImFjdGl2ZUJsb2NrIiwiYmFzZSIsImNvbmZpZyIsImRlbW9Db250ZW50RGltZW5zaW9ucyIsImRlbW9EaW1lbnNpb25zIiwiZGVwdGgiLCJlbnZpcm9ubWVudCIsImV4cGFuZGVkIiwiaGlkZSIsImlkIiwiaXNzdWUiLCJsaWdodGJveCIsIm1lbnVFbmFibGVkIiwibWVzc2FnZXMiLCJuYXZpZ2F0aW9uIiwib3BhY2l0eSIsInBhdHRlcm4iLCJydWxlcnMiLCJzY2hlbWEiLCJzY3JvbGxEZW1vWCIsInNjcm9sbERlbW9ZIiwic2VhcmNoIiwic2VhcmNoTWF0Y2hlcyIsInNvdXJjZUV4cGFuZGVkIiwic291cmNlSWQiLCJzb3VyY2VUeXBlIiwic3RhcnRCYXNlIiwic3R5bGVzIiwidGhlbWUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsU0FBUkEsS0FBUTtBQUFBLEtBQUNDLEtBQUQsdUVBQVMsRUFBVDtBQUFBLFFBQWdCQSxLQUFoQjtBQUFBLENBQWQ7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsS0FBQ0MsT0FBRCx1RUFBVyxFQUFYO0FBQUEsUUFBa0JBLFFBQVFDLFlBQVIsSUFBd0IsRUFBMUM7QUFBQSxDQUF4Qjs7a0JBRWU7QUFDZEMsbUNBRGM7QUFFZEMscUJBRmM7QUFHZEMsU0FBUVAsS0FITTtBQUlkUSx1REFKYztBQUtkQyx5Q0FMYztBQU1kQyx1QkFOYztBQU9kQyxtQ0FQYztBQVFkQyw2QkFSYztBQVNkQyxxQkFUYztBQVVkQyxpQkFWYztBQVdkQyx1QkFYYztBQVlkQyw2QkFaYztBQWFkQyxtQ0FiYztBQWNkQyw2QkFkYztBQWVkQyxpQ0FmYztBQWdCZEMsMkJBaEJjO0FBaUJkQywyQkFqQmM7QUFrQmRDLHlCQWxCYztBQW1CZEMsU0FBUXZCLEtBbkJNO0FBb0Jkd0IsbUNBcEJjO0FBcUJkQyxtQ0FyQmM7QUFzQmRDLHlCQXRCYztBQXVCZEMsdUNBdkJjO0FBd0JkQyx5Q0F4QmM7QUF5QmRDLDZCQXpCYztBQTBCZEMsaUNBMUJjO0FBMkJkQyxZQUFXL0IsS0EzQkc7QUE0QmRnQyx5QkE1QmM7QUE2QmRDLHVCQTdCYztBQThCZEM7QUE5QmMsQztBQWlDUixJQUFNOUIsc0NBQWU7QUFDM0JpQixVQUFTbkIsa0NBRGtCO0FBRTNCeUIsZ0JBQWV6Qix3Q0FGWTtBQUczQjhCLFNBQVE5QixpQ0FIbUI7QUFJM0J1QixjQUFhdkIsc0NBSmM7QUFLM0JzQixjQUFhdEI7QUFMYyxDQUFyQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhY3RpdmVCbG9jayBmcm9tICcuL2FjdGl2ZS1ibG9jayc7XG5pbXBvcnQgYmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IGRlcHRoIGZyb20gJy4vZGVwdGgnO1xuaW1wb3J0IGRlbW9Db250ZW50RGltZW5zaW9ucyBmcm9tICcuL2RlbW8tY29udGVudC1kaW1lbnNpb25zJztcbmltcG9ydCBkZW1vRGltZW5zaW9ucyBmcm9tICcuL2RlbW8tZGltZW5zaW9ucyc7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgZXhwYW5kZWQgZnJvbSAnLi9leHBhbmRlZCc7XG5pbXBvcnQgaWQgZnJvbSAnLi9pZCc7XG5pbXBvcnQgaXNzdWUgZnJvbSAnLi9pc3N1ZSc7XG5pbXBvcnQgbGlnaHRib3ggZnJvbSAnLi9saWdodGJveCc7XG5pbXBvcnQgbWVudUVuYWJsZWQgZnJvbSAnLi9tZW51LWVuYWJsZWQnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCBvcGFjaXR5IGZyb20gJy4vb3BhY2l0eSc7XG5pbXBvcnQgcGF0dGVybiBmcm9tICcuL3BhdHRlcm4nO1xuaW1wb3J0IHJ1bGVycyBmcm9tICcuL3J1bGVycyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoJztcbmltcG9ydCBzZWFyY2hNYXRjaGVzIGZyb20gJy4vc2VhcmNoLW1hdGNoZXMnO1xuaW1wb3J0IHNjcm9sbERlbW9YIGZyb20gJy4vc2Nyb2xsLWRlbW8teCc7XG5pbXBvcnQgc2Nyb2xsRGVtb1kgZnJvbSAnLi9zY3JvbGwtZGVtby15JztcbmltcG9ydCBzb3VyY2VFeHBhbmRlZCBmcm9tICcuL3NvdXJjZS1leHBhbmRlZCc7XG5pbXBvcnQgc291cmNlSWQgZnJvbSAnLi9zb3VyY2UtaWQnO1xuaW1wb3J0IHNvdXJjZVR5cGUgZnJvbSAnLi9zb3VyY2UtdHlwZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCBoaWRlIGZyb20gJy4vaGlkZSc7XG5pbXBvcnQgd2luZG93IGZyb20gJy4vd2luZG93JztcblxuY29uc3QgaWRlbnQgPSAoc3RhdGUgPSB7fSkgPT4gc3RhdGU7XG5jb25zdCBnZXREZXBlbmRlbmNpZXMgPSAocmVkdWNlciA9IHt9KSA9PiByZWR1Y2VyLmRlcGVuZGVuY2llcyB8fCBbXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRhY3RpdmVCbG9jayxcblx0YmFzZSxcblx0Y29uZmlnOiBpZGVudCxcblx0ZGVtb0NvbnRlbnREaW1lbnNpb25zLFxuXHRkZW1vRGltZW5zaW9ucyxcblx0ZGVwdGgsXG5cdGVudmlyb25tZW50LFxuXHRleHBhbmRlZCxcblx0aGlkZSxcblx0aWQsXG5cdGlzc3VlLFxuXHRsaWdodGJveCxcblx0bWVudUVuYWJsZWQsXG5cdG1lc3NhZ2VzLFxuXHRuYXZpZ2F0aW9uLFxuXHRvcGFjaXR5LFxuXHRwYXR0ZXJuLFxuXHRydWxlcnMsXG5cdHNjaGVtYTogaWRlbnQsXG5cdHNjcm9sbERlbW9YLFxuXHRzY3JvbGxEZW1vWSxcblx0c2VhcmNoLFxuXHRzZWFyY2hNYXRjaGVzLFxuXHRzb3VyY2VFeHBhbmRlZCxcblx0c291cmNlSWQsXG5cdHNvdXJjZVR5cGUsXG5cdHN0YXJ0QmFzZTogaWRlbnQsXG5cdHN0eWxlcyxcblx0dGhlbWUsXG5cdHdpbmRvd1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVuY2llcyA9IHtcblx0cGF0dGVybjogZ2V0RGVwZW5kZW5jaWVzKHBhdHRlcm4pLFxuXHRzZWFyY2hNYXRjaGVzOiBnZXREZXBlbmRlbmNpZXMoc2VhcmNoTWF0Y2hlcyksXG5cdHN0eWxlczogZ2V0RGVwZW5kZW5jaWVzKHN0eWxlcyksXG5cdHNjcm9sbERlbW9ZOiBnZXREZXBlbmRlbmNpZXMoc2Nyb2xsRGVtb1kpLFxuXHRzY3JvbGxEZW1vWDogZ2V0RGVwZW5kZW5jaWVzKHNjcm9sbERlbW9YKVxufTtcbiJdfQ==