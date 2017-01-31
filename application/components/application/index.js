'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _console = require('../../containers/console');

var _console2 = _interopRequireDefault(_console);

var _problem = require('../../containers/problem');

var _problem2 = _interopRequireDefault(_problem);

var _shortcuts = require('../../containers/shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

var _navigation = require('../navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = (0, _autobindDecorator2.default)(_class = function (_Component) {
	(0, _inherits3.default)(Application, _Component);

	function Application() {
		(0, _classCallCheck3.default)(this, Application);
		return (0, _possibleConstructorReturn3.default)(this, (Application.__proto__ || (0, _getPrototypeOf2.default)(Application)).apply(this, arguments));
	}

	(0, _createClass3.default)(Application, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			global.addEventListener('resize', this.onResize);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			global.removeEventListener('resize', this.onResize);
		}
	}, {
		key: 'onResize',
		value: function onResize() {
			this.props.onResize({
				width: global.innerWidth,
				height: global.innerHeight
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var handleSearch = props.onSearch;

			var className = (0, _classnames2.default)('application', {
				'application--menu-enabled': props.menuEnabled,
				'application--theme-loading': props.themeLoading
			});

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(_reactHelmet2.default, {
					meta: [{
						name: 'description',
						content: props.description
					}, {
						name: 'viewport',
						content: 'width=device-width, initial-scale=1'
					}],
					link: createLinks(props.styles, { base: props.startBase }),
					title: props.title,
					onChangeClientState: getThemeLoadedListener(props.onThemeLoaded)
				}),
				_react2.default.createElement(_navigation2.default, {
					activePattern: props.activePattern,
					base: props.base,
					enabled: props.menuEnabled,
					expanded: props.expanded,
					hierarchy: props.hierarchy,
					hide: props.hide,
					icon: props.logo,
					menuEnabled: props.menuEnabled,
					navigation: props.navigation,
					onSearch: handleSearch,
					onThemeChange: props.onThemeChange,
					pathname: props.pathname,
					query: props.query,
					requestSearchBlur: props.requestSearchBlur,
					searchValue: props.search,
					theme: props.theme,
					title: props.title,
					version: props.version
				}),
				_react2.default.createElement(
					'main',
					{ className: 'application__content' },
					props.children
				),
				props.lightbox === 'console' && _react2.default.createElement(_console2.default, null),
				props.lightbox === 'shortcuts' && _react2.default.createElement(_shortcuts2.default, null),
				props.issue && _react2.default.createElement(_problem2.default, null)
			);
		}
	}]);
	return Application;
}(_react.Component)) || _class;

exports.default = Application;


Application.propTypes = {
	activePattern: _react.PropTypes.string.isRequired,
	base: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.any,
	description: _react.PropTypes.string.isRequired,
	expanded: _react.PropTypes.bool.isRequired,
	hierarchy: _react.PropTypes.object.isRequired,
	hide: _react.PropTypes.bool.isRequired,
	issue: _react.PropTypes.bool.isRequired,
	lightbox: _react.PropTypes.string,
	logo: _react.PropTypes.string.isRequired,
	menuEnabled: _react.PropTypes.bool.isRequired,
	navigation: _react.PropTypes.object.isRequired,
	onResize: _react.PropTypes.func.isRequired,
	onSearch: _react.PropTypes.func.isRequired,
	onThemeLoaded: _react.PropTypes.func.isRequired,
	onThemeChange: _react.PropTypes.func.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	requestSearchBlur: _react.PropTypes.func.isRequired,
	theme: _react.PropTypes.string.isRequired,
	title: _react.PropTypes.string.isRequired,
	version: _react.PropTypes.string.isRequired,
	search: _react.PropTypes.string,
	styles: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
	themeLoading: _react.PropTypes.bool.isRequired
};

function createLinks(styles, options) {
	return styles.map(createStyle(options));
}

function createStyle(options) {
	return function (style) {
		return {
			'rel': 'stylesheet',
			'href': options.base + '/style/' + style + '.css',
			'data-style-id': style
		};
	};
}

function getThemeLoadedListener(fn) {
	return function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _args$1$linkTags = args[1].linkTags,
		    added = _args$1$linkTags === undefined ? [] : _args$1$linkTags;

		var tags = added.filter(function (tag) {
			return tag.rel === 'stylesheet';
		});
		var tag = tags[tags.length - 1];
		if (tag) {
			tag.onload = function () {
				fn(tag.dataset.styleId);
			};
		}
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uIiwiZ2xvYmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb3BzIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVTZWFyY2giLCJvblNlYXJjaCIsImNsYXNzTmFtZSIsIm1lbnVFbmFibGVkIiwidGhlbWVMb2FkaW5nIiwibmFtZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUxpbmtzIiwic3R5bGVzIiwiYmFzZSIsInN0YXJ0QmFzZSIsInRpdGxlIiwiZ2V0VGhlbWVMb2FkZWRMaXN0ZW5lciIsIm9uVGhlbWVMb2FkZWQiLCJhY3RpdmVQYXR0ZXJuIiwiZXhwYW5kZWQiLCJoaWVyYXJjaHkiLCJoaWRlIiwibG9nbyIsIm5hdmlnYXRpb24iLCJvblRoZW1lQ2hhbmdlIiwicGF0aG5hbWUiLCJxdWVyeSIsInJlcXVlc3RTZWFyY2hCbHVyIiwic2VhcmNoIiwidGhlbWUiLCJ2ZXJzaW9uIiwiY2hpbGRyZW4iLCJsaWdodGJveCIsImlzc3VlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFueSIsImJvb2wiLCJvYmplY3QiLCJmdW5jIiwiYXJyYXlPZiIsIm9wdGlvbnMiLCJtYXAiLCJjcmVhdGVTdHlsZSIsInN0eWxlIiwiZm4iLCJhcmdzIiwibGlua1RhZ3MiLCJhZGRlZCIsInRhZ3MiLCJmaWx0ZXIiLCJ0YWciLCJyZWwiLCJsZW5ndGgiLCJvbmxvYWQiLCJkYXRhc2V0Iiwic3R5bGVJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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O0FBQUEsTUFDQ0MsS0FERCxvQ0FDUyxFQURUOztBQUVuQixNQUFNQyxPQUFPRCxNQUFNRSxNQUFOLENBQWE7QUFBQSxVQUFPQyxJQUFJQyxHQUFKLEtBQVksWUFBbkI7QUFBQSxHQUFiLENBQWI7QUFDQSxNQUFNRCxNQUFNRixLQUFLQSxLQUFLSSxNQUFMLEdBQWMsQ0FBbkIsQ0FBWjtBQUNBLE1BQUlGLEdBQUosRUFBUztBQUNSQSxPQUFJRyxNQUFKLEdBQWEsWUFBTTtBQUNsQlQsT0FBR00sSUFBSUksT0FBSixDQUFZQyxPQUFmO0FBQ0EsSUFGRDtBQUdBO0FBQ0QsRUFURDtBQVVBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgam9pbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IENvbnNvbGVMaWdodGJveCBmcm9tICcuLi8uLi9jb250YWluZXJzL2NvbnNvbGUnO1xuaW1wb3J0IFByb2JsZW1MaWdodGJveCBmcm9tICcuLi8uLi9jb250YWluZXJzL3Byb2JsZW0nO1xuaW1wb3J0IFNob3J0Y3V0c0xpZ2h0Ym94IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvc2hvcnRjdXRzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24nO1xuXG5AYXV0b2JpbmRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Z2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Z2xvYmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5wcm9wcy5vblJlc2l6ZSh7XG5cdFx0XHR3aWR0aDogZ2xvYmFsLmlubmVyV2lkdGgsXG5cdFx0XHRoZWlnaHQ6IGdsb2JhbC5pbm5lckhlaWdodFxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdGNvbnN0IGhhbmRsZVNlYXJjaCA9IHByb3BzLm9uU2VhcmNoO1xuXG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gam9pbignYXBwbGljYXRpb24nLCB7XG5cdFx0XHQnYXBwbGljYXRpb24tLW1lbnUtZW5hYmxlZCc6IHByb3BzLm1lbnVFbmFibGVkLFxuXHRcdFx0J2FwcGxpY2F0aW9uLS10aGVtZS1sb2FkaW5nJzogcHJvcHMudGhlbWVMb2FkaW5nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHRcdDxIZWxtZXRcblx0XHRcdFx0XHRtZXRhPXtbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6ICdkZXNjcmlwdGlvbicsXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHByb3BzLmRlc2NyaXB0aW9uXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRuYW1lOiAndmlld3BvcnQnLFxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRsaW5rPXtjcmVhdGVMaW5rcyhwcm9wcy5zdHlsZXMsIHtiYXNlOiBwcm9wcy5zdGFydEJhc2V9KX1cblx0XHRcdFx0XHR0aXRsZT17cHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0b25DaGFuZ2VDbGllbnRTdGF0ZT17Z2V0VGhlbWVMb2FkZWRMaXN0ZW5lcihwcm9wcy5vblRoZW1lTG9hZGVkKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8TmF2aWdhdGlvblxuXHRcdFx0XHRcdGFjdGl2ZVBhdHRlcm49e3Byb3BzLmFjdGl2ZVBhdHRlcm59XG5cdFx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0XHRlbmFibGVkPXtwcm9wcy5tZW51RW5hYmxlZH1cblx0XHRcdFx0XHRleHBhbmRlZD17cHJvcHMuZXhwYW5kZWR9XG5cdFx0XHRcdFx0aGllcmFyY2h5PXtwcm9wcy5oaWVyYXJjaHl9XG5cdFx0XHRcdFx0aGlkZT17cHJvcHMuaGlkZX1cblx0XHRcdFx0XHRpY29uPXtwcm9wcy5sb2dvfVxuXHRcdFx0XHRcdG1lbnVFbmFibGVkPXtwcm9wcy5tZW51RW5hYmxlZH1cblx0XHRcdFx0XHRuYXZpZ2F0aW9uPXtwcm9wcy5uYXZpZ2F0aW9ufVxuXHRcdFx0XHRcdG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9XG5cdFx0XHRcdFx0b25UaGVtZUNoYW5nZT17cHJvcHMub25UaGVtZUNoYW5nZX1cblx0XHRcdFx0XHRwYXRobmFtZT17cHJvcHMucGF0aG5hbWV9XG5cdFx0XHRcdFx0cXVlcnk9e3Byb3BzLnF1ZXJ5fVxuXHRcdFx0XHRcdHJlcXVlc3RTZWFyY2hCbHVyPXtwcm9wcy5yZXF1ZXN0U2VhcmNoQmx1cn1cblx0XHRcdFx0XHRzZWFyY2hWYWx1ZT17cHJvcHMuc2VhcmNofVxuXHRcdFx0XHRcdHRoZW1lPXtwcm9wcy50aGVtZX1cblx0XHRcdFx0XHR0aXRsZT17cHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0dmVyc2lvbj17cHJvcHMudmVyc2lvbn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJhcHBsaWNhdGlvbl9fY29udGVudFwiPlxuXHRcdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9tYWluPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvcHMubGlnaHRib3ggPT09ICdjb25zb2xlJyAmJlxuXHRcdFx0XHRcdFx0PENvbnNvbGVMaWdodGJveC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3BzLmxpZ2h0Ym94ID09PSAnc2hvcnRjdXRzJyAmJlxuXHRcdFx0XHRcdFx0PFNob3J0Y3V0c0xpZ2h0Ym94Lz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvcHMuaXNzdWUgJiZcblx0XHRcdFx0XHRcdDxQcm9ibGVtTGlnaHRib3gvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkFwcGxpY2F0aW9uLnByb3BUeXBlcyA9IHtcblx0YWN0aXZlUGF0dGVybjogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y2hpbGRyZW46IHQuYW55LFxuXHRkZXNjcmlwdGlvbjogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ZXhwYW5kZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRoaWVyYXJjaHk6IHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cdGhpZGU6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRpc3N1ZTogdC5ib29sLmlzUmVxdWlyZWQsXG5cdGxpZ2h0Ym94OiB0LnN0cmluZyxcblx0bG9nbzogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0bWVudUVuYWJsZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRuYXZpZ2F0aW9uOiB0Lm9iamVjdC5pc1JlcXVpcmVkLFxuXHRvblJlc2l6ZTogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uU2VhcmNoOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0b25UaGVtZUxvYWRlZDogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uVGhlbWVDaGFuZ2U6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRwYXRobmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0cXVlcnk6IHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cdHJlcXVlc3RTZWFyY2hCbHVyOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0dGhlbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHRpdGxlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHR2ZXJzaW9uOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRzZWFyY2g6IHQuc3RyaW5nLFxuXHRzdHlsZXM6IHQuYXJyYXlPZih0LnN0cmluZykuaXNSZXF1aXJlZCxcblx0dGhlbWVMb2FkaW5nOiB0LmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlua3Moc3R5bGVzLCBvcHRpb25zKSB7XG5cdHJldHVybiBzdHlsZXMubWFwKGNyZWF0ZVN0eWxlKG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGUob3B0aW9ucykge1xuXHRyZXR1cm4gc3R5bGUgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHQncmVsJzogJ3N0eWxlc2hlZXQnLFxuXHRcdFx0J2hyZWYnOiBgJHtvcHRpb25zLmJhc2V9L3N0eWxlLyR7c3R5bGV9LmNzc2AsXG5cdFx0XHQnZGF0YS1zdHlsZS1pZCc6IHN0eWxlXG5cdFx0fTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0VGhlbWVMb2FkZWRMaXN0ZW5lcihmbikge1xuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcblx0XHRjb25zdCBbLCB7bGlua1RhZ3M6IGFkZGVkID0gW119XSA9IGFyZ3M7XG5cdFx0Y29uc3QgdGFncyA9IGFkZGVkLmZpbHRlcih0YWcgPT4gdGFnLnJlbCA9PT0gJ3N0eWxlc2hlZXQnKTtcblx0XHRjb25zdCB0YWcgPSB0YWdzW3RhZ3MubGVuZ3RoIC0gMV07XG5cdFx0aWYgKHRhZykge1xuXHRcdFx0dGFnLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0Zm4odGFnLmRhdGFzZXQuc3R5bGVJZCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cbiJdfQ==