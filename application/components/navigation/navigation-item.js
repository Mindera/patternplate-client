'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

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

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

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

function getPathName() {
	for (var _len = arguments.length, fragments = Array(_len), _key = 0; _key < _len; _key++) {
		fragments[_key] = arguments[_key];
	}

	var raw = fragments.join('/').split('/').filter(Boolean).map(function (fragment) {
		return fragment === '/' ? '' : fragment;
	}).filter(Boolean).join('/');
	var rawish = raw === '' ? '/' : raw;
	var pre = rawish[0] === '/' ? '' : '/';
	var post = rawish[rawish.length - 1] === '/' ? '' : '/';
	return '' + pre + rawish + post;
}

var NavigationItem = (_class = (_temp = _class2 = function (_React$Component) {
	(0, _inherits3.default)(NavigationItem, _React$Component);

	function NavigationItem() {
		(0, _classCallCheck3.default)(this, NavigationItem);
		return (0, _possibleConstructorReturn3.default)(this, (NavigationItem.__proto__ || (0, _getPrototypeOf2.default)(NavigationItem)).apply(this, arguments));
	}

	(0, _createClass3.default)(NavigationItem, [{
		key: 'handleClick',
		value: function handleClick(e) {
			this.props.onClick(e, this);
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			var Component = props.component;


			var modifiers = {
				'child-active': props.active,
				'hidden': props.hidden,
				'anchored': props.anchored
			};

			var itemClassName = (0, _classnames2.default)('navigation-item navigation-item--' + props.type, modifiers);
			var linkClassName = (0, _classnames2.default)('navigation-link', modifiers);
			var pathname = getPathName(props.base, props.linkTo, props.id);
			var to = { pathname: pathname, query: (0, _lodash.omit)(props.query, ['menu-enabled']) };
			var title = props.title || 'Navigate to ' + props.name + ' ' + props.type;
			var symbol = props.active && props.symbol === 'folder' ? props.symbolActive : props.symbol;

			return _react2.default.createElement(
				Component,
				{ className: itemClassName },
				_react2.default.createElement(
					_reactRouter.Link,
					{
						onClick: this.handleClick,
						to: to,
						title: title,
						className: linkClassName
					},
					_react2.default.createElement(_icon2.default, { symbol: symbol }),
					_react2.default.createElement(
						'span',
						null,
						props.name
					)
				),
				props.active && props.children
			);
		}
	}]);
	return NavigationItem;
}(_react2.default.Component), _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	component: _react.PropTypes.node,
	active: _react.PropTypes.bool,
	hidden: _react.PropTypes.bool,
	anchored: _react.PropTypes.bool,
	linkTo: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	symbol: _react.PropTypes.string.isRequired,
	symbolActive: _react.PropTypes.string,
	searchQuery: _react.PropTypes.string,
	id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.arrayOf(_react.PropTypes.node)]),
	onClick: _react.PropTypes.func,
	type: _react.PropTypes.string
}, _class2.defaultProps = {
	component: 'li',
	active: false,
	hidden: false,
	linkTo: 'pattern',
	onClick: function onClick() {}
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'handleClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'handleClick'), _class.prototype)), _class);
exports.default = NavigationItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtLmpzIl0sIm5hbWVzIjpbImdldFBhdGhOYW1lIiwiZnJhZ21lbnRzIiwicmF3Iiwiam9pbiIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsIm1hcCIsImZyYWdtZW50IiwicmF3aXNoIiwicHJlIiwicG9zdCIsImxlbmd0aCIsIk5hdmlnYXRpb25JdGVtIiwiZSIsInByb3BzIiwib25DbGljayIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsIm1vZGlmaWVycyIsImFjdGl2ZSIsImhpZGRlbiIsImFuY2hvcmVkIiwiaXRlbUNsYXNzTmFtZSIsInR5cGUiLCJsaW5rQ2xhc3NOYW1lIiwicGF0aG5hbWUiLCJiYXNlIiwibGlua1RvIiwiaWQiLCJ0byIsInF1ZXJ5IiwidGl0bGUiLCJuYW1lIiwic3ltYm9sIiwic3ltYm9sQWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwiYm9vbCIsIm9iamVjdCIsInNlYXJjaFF1ZXJ5Iiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXlPZiIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFdBQVQsR0FBbUM7QUFBQSxtQ0FBWEMsU0FBVztBQUFYQSxXQUFXO0FBQUE7O0FBQ2xDLEtBQU1DLE1BQU1ELFVBQ1ZFLElBRFUsQ0FDTCxHQURLLEVBRVZDLEtBRlUsQ0FFSixHQUZJLEVBR1ZDLE1BSFUsQ0FHSEMsT0FIRyxFQUlWQyxHQUpVLENBSU47QUFBQSxTQUFZQyxhQUFhLEdBQWIsR0FBbUIsRUFB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LENBRnlCLENBQWhCLENBaEJRO0FBb0JsQnpCLFVBQVMsaUJBQU1nQyxJQXBCRztBQXFCbEJ4QixPQUFNLGlCQUFNZTtBQXJCTSxDLFVBd0JaVSxZLEdBQWU7QUFDckIvQixZQUFXLElBRFU7QUFFckJFLFNBQVEsS0FGYTtBQUdyQkMsU0FBUSxLQUhhO0FBSXJCTyxTQUFRLFNBSmE7QUFLckJaLFVBQVMsbUJBQU0sQ0FBRTtBQUxJLEM7a0JBekJGSCxjIiwiZmlsZSI6Im5hdmlnYXRpb24taXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7b21pdH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbW1vbi9pY29uJztcblxuZnVuY3Rpb24gZ2V0UGF0aE5hbWUoLi4uZnJhZ21lbnRzKSB7XG5cdGNvbnN0IHJhdyA9IGZyYWdtZW50c1xuXHRcdC5qb2luKCcvJylcblx0XHQuc3BsaXQoJy8nKVxuXHRcdC5maWx0ZXIoQm9vbGVhbilcblx0XHQubWFwKGZyYWdtZW50ID0+IGZyYWdtZW50ID09PSAnLycgPyAnJyA6IGZyYWdtZW50KVxuXHRcdC5maWx0ZXIoQm9vbGVhbilcblx0XHQuam9pbignLycpO1xuXHRjb25zdCByYXdpc2ggPSByYXcgPT09ICcnID8gJy8nIDogcmF3O1xuXHRjb25zdCBwcmUgPSByYXdpc2hbMF0gPT09ICcvJyA/ICcnIDogJy8nO1xuXHRjb25zdCBwb3N0ID0gcmF3aXNoW3Jhd2lzaC5sZW5ndGggLSAxXSA9PT0gJy8nID8gJycgOiAnLyc7XG5cdHJldHVybiBgJHtwcmV9JHtyYXdpc2h9JHtwb3N0fWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRiYXNlOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb21wb25lbnQ6IHR5cGVzLm5vZGUsXG5cdFx0YWN0aXZlOiB0eXBlcy5ib29sLFxuXHRcdGhpZGRlbjogdHlwZXMuYm9vbCxcblx0XHRhbmNob3JlZDogdHlwZXMuYm9vbCxcblx0XHRsaW5rVG86IHR5cGVzLnN0cmluZyxcblx0XHRuYW1lOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRxdWVyeTogdHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdFx0c3ltYm9sOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRzeW1ib2xBY3RpdmU6IHR5cGVzLnN0cmluZyxcblx0XHRzZWFyY2hRdWVyeTogdHlwZXMuc3RyaW5nLFxuXHRcdGlkOiB0eXBlcy5vbmVPZlR5cGUoW1xuXHRcdFx0dHlwZXMuc3RyaW5nLFxuXHRcdFx0dHlwZXMubnVtYmVyXG5cdFx0XSksXG5cdFx0Y2hpbGRyZW46IHR5cGVzLm9uZU9mVHlwZShbXG5cdFx0XHR0eXBlcy5ub2RlLFxuXHRcdFx0dHlwZXMuYXJyYXlPZih0eXBlcy5ub2RlKVxuXHRcdF0pLFxuXHRcdG9uQ2xpY2s6IHR5cGVzLmZ1bmMsXG5cdFx0dHlwZTogdHlwZXMuc3RyaW5nXG5cdH07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRjb21wb25lbnQ6ICdsaScsXG5cdFx0YWN0aXZlOiBmYWxzZSxcblx0XHRoaWRkZW46IGZhbHNlLFxuXHRcdGxpbmtUbzogJ3BhdHRlcm4nLFxuXHRcdG9uQ2xpY2s6ICgpID0+IHt9XG5cdH07XG5cblx0QGF1dG9iaW5kXG5cdGhhbmRsZUNsaWNrKGUpIHtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2soZSwgdGhpcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3Qge2NvbXBvbmVudDogQ29tcG9uZW50fSA9IHByb3BzO1xuXG5cdFx0Y29uc3QgbW9kaWZpZXJzID0ge1xuXHRcdFx0J2NoaWxkLWFjdGl2ZSc6IHByb3BzLmFjdGl2ZSxcblx0XHRcdCdoaWRkZW4nOiBwcm9wcy5oaWRkZW4sXG5cdFx0XHQnYW5jaG9yZWQnOiBwcm9wcy5hbmNob3JlZFxuXHRcdH07XG5cblx0XHRjb25zdCBpdGVtQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhgbmF2aWdhdGlvbi1pdGVtIG5hdmlnYXRpb24taXRlbS0tJHtwcm9wcy50eXBlfWAsIG1vZGlmaWVycyk7XG5cdFx0Y29uc3QgbGlua0NsYXNzTmFtZSA9IGNsYXNzbmFtZXMoJ25hdmlnYXRpb24tbGluaycsIG1vZGlmaWVycyk7XG5cdFx0Y29uc3QgcGF0aG5hbWUgPSBnZXRQYXRoTmFtZShwcm9wcy5iYXNlLCBwcm9wcy5saW5rVG8sIHByb3BzLmlkKTtcblx0XHRjb25zdCB0byA9IHtwYXRobmFtZSwgcXVlcnk6IG9taXQocHJvcHMucXVlcnksIFsnbWVudS1lbmFibGVkJ10pfTtcblx0XHRjb25zdCB0aXRsZSA9IHByb3BzLnRpdGxlIHx8IGBOYXZpZ2F0ZSB0byAke3Byb3BzLm5hbWV9ICR7cHJvcHMudHlwZX1gO1xuXHRcdGNvbnN0IHN5bWJvbCA9IHByb3BzLmFjdGl2ZSAmJiAocHJvcHMuc3ltYm9sID09PSAnZm9sZGVyJykgPyBwcm9wcy5zeW1ib2xBY3RpdmUgOiBwcm9wcy5zeW1ib2w7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PENvbXBvbmVudCBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9PlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdFx0dG89e3RvfVxuXHRcdFx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9e2xpbmtDbGFzc05hbWV9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDxJY29uIHN5bWJvbD17c3ltYm9sfS8+XG5cdFx0XHRcdFx0PHNwYW4+e3Byb3BzLm5hbWV9PC9zcGFuPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm9wcy5hY3RpdmUgJiYgcHJvcHMuY2hpbGRyZW5cblx0XHRcdFx0fVxuXHRcdFx0PC9Db21wb25lbnQ+XG5cdFx0KTtcblx0fVxufVxuIl19