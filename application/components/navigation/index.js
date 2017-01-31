'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _navigationTree = require('./navigation-tree');

var _navigationTree2 = _interopRequireDefault(_navigationTree);

var _navigationItem = require('./navigation-item');

var _navigationItem2 = _interopRequireDefault(_navigationItem);

var _navigationToolbar = require('./navigation-toolbar');

var _navigationToolbar2 = _interopRequireDefault(_navigationToolbar);

var _searchField = require('../common/search-field');

var _searchField2 = _interopRequireDefault(_searchField);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var Navigation = (0, _pureRenderDecorator2.default)(_class = (_class2 = (_temp = _class3 = function (_React$Component) {
	(0, _inherits3.default)(Navigation, _React$Component);

	function Navigation() {
		(0, _classCallCheck3.default)(this, Navigation);
		return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
	}

	(0, _createClass3.default)(Navigation, [{
		key: 'handleSearchSubmit',
		value: function handleSearchSubmit(e) {
			e.preventDefault();
		}
	}, {
		key: 'handleSearchChange',
		value: function handleSearchChange(e) {
			this.props.onSearch(e.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;


			var className = (0, _classnames2.default)('navigation application__navigation', {
				'slim': !props.expanded,
				'navigation--expanded': props.expanded
			});

			return _react2.default.createElement(
				'nav',
				{ className: className },
				_react2.default.createElement(_header2.default, {
					base: props.base,
					icon: props.icon,
					menuEnabled: props.menuEnabled,
					pathname: props.pathname,
					query: props.query,
					title: props.title,
					version: props.version
				}),
				_react2.default.createElement(
					_navigationTree2.default,
					{
						activePattern: props.activePattern,
						base: props.base,
						data: props.navigation,
						query: props.query,
						hierarchy: props.hierarchy,
						hide: props.hide
					},
					_react2.default.createElement(
						'form',
						{ onSubmit: this.handleSearchSubmit, method: 'GET' },
						_react2.default.createElement(_searchField2.default, {
							base: props.base,
							blur: this.props.requestSearchBlur,
							className: 'navigation__search-field',
							linkTo: '/search',
							name: 'search',
							onBlur: this.handleSearchBlur,
							onChange: this.handleSearchChange,
							onFocus: this.handleSearchFocus,
							placeholder: 'Search',
							title: 'Search for patterns [ctrl+space]',
							value: props.searchValue
						})
					),
					_react2.default.createElement(_navigationItem2.default, {
						active: props.pathname === props.base,
						base: props.base,
						key: 'root',
						linkTo: '/',
						name: 'Documentation',
						query: props.query,
						symbol: 'documentation',
						title: 'Navigate to documentation [ctrl+d]',
						type: 'page'
					})
				),
				_react2.default.createElement(_navigationToolbar2.default, {
					base: props.base,
					expanded: props.expanded,
					onThemeChange: props.onThemeChange,
					pathname: props.pathname,
					query: props.query,
					theme: props.theme
				})
			);
		}
	}]);
	return Navigation;
}(_react2.default.Component), _class3.propTypes = {
	activePattern: _react.PropTypes.string.isRequired,
	base: _react.PropTypes.string.isRequired,
	enabled: _react.PropTypes.bool.isRequired,
	expanded: _react.PropTypes.bool.isRequired,
	hierarchy: _react.PropTypes.object,
	hide: _react.PropTypes.bool.isRequired,
	icon: _react.PropTypes.string.isRequired,
	menuEnabled: _react.PropTypes.bool.isRequired,
	navigation: _react.PropTypes.object.isRequired,
	onSearch: _react.PropTypes.func,
	onSearchBlur: _react.PropTypes.func,
	onThemeChange: _react.PropTypes.func.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	requestSearchBlur: _react.PropTypes.func.isRequired,
	searchQuery: _react.PropTypes.string,
	searchValue: _react.PropTypes.string,
	theme: _react.PropTypes.string.isRequired,
	title: _react.PropTypes.string.isRequired,
	version: _react.PropTypes.string.isRequired
}, _class3.defaultProps = {
	onSearch: function onSearch() {},
	onSearchBlur: function onSearchBlur() {},
	requestSearchBlur: function requestSearchBlur() {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleSearchSubmit', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleSearchSubmit'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSearchChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleSearchChange'), _class2.prototype)), _class2)) || _class;

exports.default = Navigation;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwib25TZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cGFuZGVkIiwiYmFzZSIsImljb24iLCJtZW51RW5hYmxlZCIsInBhdGhuYW1lIiwicXVlcnkiLCJ0aXRsZSIsInZlcnNpb24iLCJhY3RpdmVQYXR0ZXJuIiwibmF2aWdhdGlvbiIsImhpZXJhcmNoeSIsImhpZGUiLCJoYW5kbGVTZWFyY2hTdWJtaXQiLCJyZXF1ZXN0U2VhcmNoQmx1ciIsImhhbmRsZVNlYXJjaEJsdXIiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVTZWFyY2hGb2N1cyIsInNlYXJjaFZhbHVlIiwib25UaGVtZUNoYW5nZSIsInRoZW1lIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImVuYWJsZWQiLCJib29sIiwib2JqZWN0IiwiZnVuYyIsIm9uU2VhcmNoQmx1ciIsInNlYXJjaFF1ZXJ5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsVTs7Ozs7Ozs7OztxQ0ErQmNDLEMsRUFBRztBQUNyQkEsS0FBRUMsY0FBRjtBQUNBOzs7cUNBR2tCRCxDLEVBQUc7QUFDckIsUUFBS0UsS0FBTCxDQUFXQyxRQUFYLENBQW9CSCxFQUFFSSxNQUFGLENBQVNDLEtBQTdCO0FBQ0E7OzsyQkFFUTtBQUFBLE9BQ0RILEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7OztBQUdSLE9BQU1JLFlBQVksMEJBQVcsb0NBQVgsRUFBaUQ7QUFDbEUsWUFBUSxDQUFDSixNQUFNSyxRQURtRDtBQUVsRSw0QkFBd0JMLE1BQU1LO0FBRm9DLElBQWpELENBQWxCOztBQUtBLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBV0QsU0FBaEI7QUFDQztBQUNDLFdBQU1KLE1BQU1NLElBRGI7QUFFQyxXQUFNTixNQUFNTyxJQUZiO0FBR0Msa0JBQWFQLE1BQU1RLFdBSHBCO0FBSUMsZUFBVVIsTUFBTVMsUUFKakI7QUFLQyxZQUFPVCxNQUFNVSxLQUxkO0FBTUMsWUFBT1YsTUFBTVcsS0FOZDtBQU9DLGNBQVNYLE1BQU1ZO0FBUGhCLE1BREQ7QUFVQztBQUFBO0FBQUE7QUFDQyxxQkFBZVosTUFBTWEsYUFEdEI7QUFFQyxZQUFNYixNQUFNTSxJQUZiO0FBR0MsWUFBTU4sTUFBTWMsVUFIYjtBQUlDLGFBQU9kLE1BQU1VLEtBSmQ7QUFLQyxpQkFBV1YsTUFBTWUsU0FMbEI7QUFNQyxZQUFNZixNQUFNZ0I7QUFOYjtBQVFDO0FBQUE7QUFBQSxRQUFNLFVBQVUsS0FBS0Msa0JBQXJCLEVBQXlDLFFBQU8sS0FBaEQ7QUFDQztBQUNDLGFBQU1qQixNQUFNTSxJQURiO0FBRUMsYUFBTSxLQUFLTixLQUFMLENBQVdrQixpQkFGbEI7QUFHQyxrQkFBVSwwQkFIWDtBQUlDLGVBQU8sU0FKUjtBQUtDLGFBQUssUUFMTjtBQU1DLGVBQVEsS0FBS0MsZ0JBTmQ7QUFPQyxpQkFBVSxLQUFLQyxrQkFQaEI7QUFRQyxnQkFBUyxLQUFLQyxpQkFSZjtBQVNDLG9CQUFZLFFBVGI7QUFVQyxjQUFNLGtDQVZQO0FBV0MsY0FBT3JCLE1BQU1zQjtBQVhkO0FBREQsTUFSRDtBQXVCQztBQUNDLGNBQVF0QixNQUFNUyxRQUFOLEtBQW1CVCxNQUFNTSxJQURsQztBQUVDLFlBQU1OLE1BQU1NLElBRmI7QUFHQyxXQUFJLE1BSEw7QUFJQyxjQUFPLEdBSlI7QUFLQyxZQUFLLGVBTE47QUFNQyxhQUFPTixNQUFNVSxLQU5kO0FBT0MsY0FBTyxlQVBSO0FBUUMsYUFBTSxvQ0FSUDtBQVNDLFlBQUs7QUFUTjtBQXZCRCxLQVZEO0FBNkNDO0FBQ0MsV0FBTVYsTUFBTU0sSUFEYjtBQUVDLGVBQVVOLE1BQU1LLFFBRmpCO0FBR0Msb0JBQWVMLE1BQU11QixhQUh0QjtBQUlDLGVBQVV2QixNQUFNUyxRQUpqQjtBQUtDLFlBQU9ULE1BQU1VLEtBTGQ7QUFNQyxZQUFPVixNQUFNd0I7QUFOZDtBQTdDRCxJQUREO0FBd0RBOzs7RUF4R3VCLGdCQUFNQyxTLFdBQ3ZCQyxTLEdBQVk7QUFDbEJiLGdCQUFlLGlCQUFFYyxNQUFGLENBQVNDLFVBRE47QUFFbEJ0QixPQUFNLGlCQUFFcUIsTUFBRixDQUFTQyxVQUZHO0FBR2xCQyxVQUFTLGlCQUFFQyxJQUFGLENBQU9GLFVBSEU7QUFJbEJ2QixXQUFVLGlCQUFFeUIsSUFBRixDQUFPRixVQUpDO0FBS2xCYixZQUFXLGlCQUFFZ0IsTUFMSztBQU1sQmYsT0FBTSxpQkFBRWMsSUFBRixDQUFPRixVQU5LO0FBT2xCckIsT0FBTSxpQkFBRW9CLE1BQUYsQ0FBU0MsVUFQRztBQVFsQnBCLGNBQWEsaUJBQUVzQixJQUFGLENBQU9GLFVBUkY7QUFTbEJkLGFBQVksaUJBQUVpQixNQUFGLENBQVNILFVBVEg7QUFVbEIzQixXQUFVLGlCQUFFK0IsSUFWTTtBQVdsQkMsZUFBYyxpQkFBRUQsSUFYRTtBQVlsQlQsZ0JBQWUsaUJBQUVTLElBQUYsQ0FBT0osVUFaSjtBQWFsQm5CLFdBQVUsaUJBQUVrQixNQUFGLENBQVNDLFVBYkQ7QUFjbEJsQixRQUFPLGlCQUFFcUIsTUFBRixDQUFTSCxVQWRFO0FBZWxCVixvQkFBbUIsaUJBQUVjLElBQUYsQ0FBT0osVUFmUjtBQWdCbEJNLGNBQWEsaUJBQUVQLE1BaEJHO0FBaUJsQkwsY0FBYSxpQkFBRUssTUFqQkc7QUFrQmxCSCxRQUFPLGlCQUFFRyxNQUFGLENBQVNDLFVBbEJFO0FBbUJsQmpCLFFBQU8saUJBQUVnQixNQUFGLENBQVNDLFVBbkJFO0FBb0JsQmhCLFVBQVMsaUJBQUVlLE1BQUYsQ0FBU0M7QUFwQkEsQyxVQXVCWk8sWSxHQUFlO0FBQ3JCbEMsV0FBVSxvQkFBTSxDQUFFLENBREc7QUFFckJnQyxlQUFjLHdCQUFNLENBQUUsQ0FGRDtBQUdyQmYsb0JBQW1CLDZCQUFNLENBQUU7QUFITixDOztrQkFtRlJyQixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcHVyZSBmcm9tICdwdXJlLXJlbmRlci1kZWNvcmF0b3InO1xuXG5pbXBvcnQgTmF2aWdhdGlvblRyZWUgZnJvbSAnLi9uYXZpZ2F0aW9uLXRyZWUnO1xuaW1wb3J0IE5hdmlnYXRpb25JdGVtIGZyb20gJy4vbmF2aWdhdGlvbi1pdGVtJztcbmltcG9ydCBOYXZpZ2F0aW9uVG9vbGJhciBmcm9tICcuL25hdmlnYXRpb24tdG9vbGJhcic7XG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSAnLi4vY29tbW9uL3NlYXJjaC1maWVsZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlcic7XG5cbkBwdXJlXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRhY3RpdmVQYXR0ZXJuOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0ZW5hYmxlZDogdC5ib29sLmlzUmVxdWlyZWQsXG5cdFx0ZXhwYW5kZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRcdGhpZXJhcmNoeTogdC5vYmplY3QsXG5cdFx0aGlkZTogdC5ib29sLmlzUmVxdWlyZWQsXG5cdFx0aWNvbjogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRtZW51RW5hYmxlZDogdC5ib29sLmlzUmVxdWlyZWQsXG5cdFx0bmF2aWdhdGlvbjogdC5vYmplY3QuaXNSZXF1aXJlZCxcblx0XHRvblNlYXJjaDogdC5mdW5jLFxuXHRcdG9uU2VhcmNoQmx1cjogdC5mdW5jLFxuXHRcdG9uVGhlbWVDaGFuZ2U6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdHBhdGhuYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHF1ZXJ5OiB0Lm9iamVjdC5pc1JlcXVpcmVkLFxuXHRcdHJlcXVlc3RTZWFyY2hCbHVyOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0XHRzZWFyY2hRdWVyeTogdC5zdHJpbmcsXG5cdFx0c2VhcmNoVmFsdWU6IHQuc3RyaW5nLFxuXHRcdHRoZW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHRpdGxlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHZlcnNpb246IHQuc3RyaW5nLmlzUmVxdWlyZWRcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdG9uU2VhcmNoOiAoKSA9PiB7fSxcblx0XHRvblNlYXJjaEJsdXI6ICgpID0+IHt9LFxuXHRcdHJlcXVlc3RTZWFyY2hCbHVyOiAoKSA9PiB7fVxuXHR9XG5cblx0QGF1dG9iaW5kXG5cdGhhbmRsZVNlYXJjaFN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0QGF1dG9iaW5kXG5cdGhhbmRsZVNlYXJjaENoYW5nZShlKSB7XG5cdFx0dGhpcy5wcm9wcy5vblNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cblx0XHRjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKCduYXZpZ2F0aW9uIGFwcGxpY2F0aW9uX19uYXZpZ2F0aW9uJywge1xuXHRcdFx0J3NsaW0nOiAhcHJvcHMuZXhwYW5kZWQsXG5cdFx0XHQnbmF2aWdhdGlvbi0tZXhwYW5kZWQnOiBwcm9wcy5leHBhbmRlZFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0XHQ8SGVhZGVyXG5cdFx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0XHRpY29uPXtwcm9wcy5pY29ufVxuXHRcdFx0XHRcdG1lbnVFbmFibGVkPXtwcm9wcy5tZW51RW5hYmxlZH1cblx0XHRcdFx0XHRwYXRobmFtZT17cHJvcHMucGF0aG5hbWV9XG5cdFx0XHRcdFx0cXVlcnk9e3Byb3BzLnF1ZXJ5fVxuXHRcdFx0XHRcdHRpdGxlPXtwcm9wcy50aXRsZX1cblx0XHRcdFx0XHR2ZXJzaW9uPXtwcm9wcy52ZXJzaW9ufVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDxOYXZpZ2F0aW9uVHJlZVxuXHRcdFx0XHRcdGFjdGl2ZVBhdHRlcm49e3Byb3BzLmFjdGl2ZVBhdHRlcm59XG5cdFx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0XHRkYXRhPXtwcm9wcy5uYXZpZ2F0aW9ufVxuXHRcdFx0XHRcdHF1ZXJ5PXtwcm9wcy5xdWVyeX1cblx0XHRcdFx0XHRoaWVyYXJjaHk9e3Byb3BzLmhpZXJhcmNoeX1cblx0XHRcdFx0XHRoaWRlPXtwcm9wcy5oaWRlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2hTdWJtaXR9IG1ldGhvZD1cIkdFVFwiPlxuXHRcdFx0XHRcdFx0PFNlYXJjaEZpZWxkXG5cdFx0XHRcdFx0XHRcdGJhc2U9e3Byb3BzLmJhc2V9XG5cdFx0XHRcdFx0XHRcdGJsdXI9e3RoaXMucHJvcHMucmVxdWVzdFNlYXJjaEJsdXJ9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3NlYXJjaC1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdGxpbmtUbz1cIi9zZWFyY2hcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwic2VhcmNoXCJcblx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZVNlYXJjaEJsdXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cblx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVTZWFyY2hGb2N1c31cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIlNlYXJjaCBmb3IgcGF0dGVybnMgW2N0cmwrc3BhY2VdXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLnNlYXJjaFZhbHVlfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8TmF2aWdhdGlvbkl0ZW1cblx0XHRcdFx0XHRcdGFjdGl2ZT17cHJvcHMucGF0aG5hbWUgPT09IHByb3BzLmJhc2V9XG5cdFx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdFx0a2V5PVwicm9vdFwiXG5cdFx0XHRcdFx0XHRsaW5rVG89XCIvXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJEb2N1bWVudGF0aW9uXCJcblx0XHRcdFx0XHRcdHF1ZXJ5PXtwcm9wcy5xdWVyeX1cblx0XHRcdFx0XHRcdHN5bWJvbD1cImRvY3VtZW50YXRpb25cIlxuXHRcdFx0XHRcdFx0dGl0bGU9XCJOYXZpZ2F0ZSB0byBkb2N1bWVudGF0aW9uIFtjdHJsK2RdXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJwYWdlXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTmF2aWdhdGlvblRyZWU+XG5cdFx0XHRcdDxOYXZpZ2F0aW9uVG9vbGJhclxuXHRcdFx0XHRcdGJhc2U9e3Byb3BzLmJhc2V9XG5cdFx0XHRcdFx0ZXhwYW5kZWQ9e3Byb3BzLmV4cGFuZGVkfVxuXHRcdFx0XHRcdG9uVGhlbWVDaGFuZ2U9e3Byb3BzLm9uVGhlbWVDaGFuZ2V9XG5cdFx0XHRcdFx0cGF0aG5hbWU9e3Byb3BzLnBhdGhuYW1lfVxuXHRcdFx0XHRcdHF1ZXJ5PXtwcm9wcy5xdWVyeX1cblx0XHRcdFx0XHR0aGVtZT17cHJvcHMudGhlbWV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdDwvbmF2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdfQ==