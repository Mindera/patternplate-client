'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchField = (0, _pureRenderDecorator2.default)(_class = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(SearchField, _Component);

	function SearchField() {
		(0, _classCallCheck3.default)(this, SearchField);
		return (0, _possibleConstructorReturn3.default)(this, (SearchField.__proto__ || (0, _getPrototypeOf2.default)(SearchField)).apply(this, arguments));
	}

	(0, _createClass3.default)(SearchField, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    base = _props.base,
			    Component = _props.component,
			    userClassName = _props.className,
			    value = _props.value,
			    name = _props.name,
			    onChange = _props.onChange,
			    onFocus = _props.onFocus,
			    onBlur = _props.onBlur,
			    placeholder = _props.placeholder,
			    props = (0, _objectWithoutProperties3.default)(_props, ['base', 'component', 'className', 'value', 'name', 'onChange', 'onFocus', 'onBlur', 'placeholder']);
			var displayName = SearchField.displayName;

			var className = (0, _classnames2.default)(displayName, userClassName);
			var containerClassName = displayName + '__container';
			var iconClassName = displayName + '__icon';
			var inputClassName = displayName + '__input';

			return _react2.default.createElement(
				Component,
				{ className: className },
				_react2.default.createElement(
					'label',
					{ className: containerClassName },
					_react2.default.createElement('input', {
						className: inputClassName,
						value: value,
						placeholder: placeholder,
						title: props.title,
						type: 'search',
						name: name,
						onBlur: onBlur,
						onChange: onChange,
						onFocus: onFocus,
						onKeyDown: this.handleKeyDown
					}),
					_react2.default.createElement(_icon2.default, { base: base, className: iconClassName, symbol: 'search' })
				)
			);
		}
	}]);
	return SearchField;
}(_react.Component), _class2.displayName = 'search-field', _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	blur: _react.PropTypes.func.isRequired,
	className: _react.PropTypes.string,
	component: _react.PropTypes.node,
	linkTo: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired,
	onBlur: _react.PropTypes.func,
	onChange: _react.PropTypes.func,
	onFocus: _react.PropTypes.func,
	placeholder: _react.PropTypes.string,
	title: _react.PropTypes.string,
	value: _react.PropTypes.string
}, _class2.defaultProps = {
	blur: function blur() {},
	component: 'div',
	onChange: function onChange() {},
	onFocus: function onFocus() {},
	onBlur: function onBlur() {}
}, _temp)) || _class) || _class;

exports.default = SearchField;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9zZWFyY2gtZmllbGQuanMiXSwibmFtZXMiOlsiU2VhcmNoRmllbGQiLCJwcm9wcyIsImJhc2UiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ1c2VyQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJuYW1lIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib25CbHVyIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5TmFtZSIsImNvbnRhaW5lckNsYXNzTmFtZSIsImljb25DbGFzc05hbWUiLCJpbnB1dENsYXNzTmFtZSIsInRpdGxlIiwiaGFuZGxlS2V5RG93biIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJibHVyIiwiZnVuYyIsIm5vZGUiLCJsaW5rVG8iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUlxQkEsVzs7Ozs7Ozs7OzsyQkEwQlg7QUFBQSxnQkFZSixLQUFLQyxLQVpEO0FBQUEsT0FFUEMsSUFGTyxVQUVQQSxJQUZPO0FBQUEsT0FHSUMsU0FISixVQUdQQyxTQUhPO0FBQUEsT0FJSUMsYUFKSixVQUlQQyxTQUpPO0FBQUEsT0FLUEMsS0FMTyxVQUtQQSxLQUxPO0FBQUEsT0FNUEMsSUFOTyxVQU1QQSxJQU5PO0FBQUEsT0FPUEMsUUFQTyxVQU9QQSxRQVBPO0FBQUEsT0FRUEMsT0FSTyxVQVFQQSxPQVJPO0FBQUEsT0FTUEMsTUFUTyxVQVNQQSxNQVRPO0FBQUEsT0FVUEMsV0FWTyxVQVVQQSxXQVZPO0FBQUEsT0FXSlgsS0FYSTtBQUFBLE9BY0RZLFdBZEMsR0FjY2IsV0FkZCxDQWNEYSxXQWRDOztBQWVSLE9BQU1QLFlBQVksMEJBQUdPLFdBQUgsRUFBZ0JSLGFBQWhCLENBQWxCO0FBQ0EsT0FBTVMscUJBQXdCRCxXQUF4QixnQkFBTjtBQUNBLE9BQU1FLGdCQUFtQkYsV0FBbkIsV0FBTjtBQUNBLE9BQU1HLGlCQUFvQkgsV0FBcEIsWUFBTjs7QUFFQSxVQUNDO0FBQUMsYUFBRDtBQUFBLE1BQVcsV0FBV1AsU0FBdEI7QUFDQztBQUFBO0FBQUEsT0FBTyxXQUFXUSxrQkFBbEI7QUFDQztBQUNDLGlCQUFXRSxjQURaO0FBRUMsYUFBT1QsS0FGUjtBQUdDLG1CQUFhSyxXQUhkO0FBSUMsYUFBT1gsTUFBTWdCLEtBSmQ7QUFLQyxZQUFLLFFBTE47QUFNQyxZQUFNVCxJQU5QO0FBT0MsY0FBUUcsTUFQVDtBQVFDLGdCQUFVRixRQVJYO0FBU0MsZUFBU0MsT0FUVjtBQVVDLGlCQUFXLEtBQUtRO0FBVmpCLE9BREQ7QUFhQyxxREFBTSxNQUFNaEIsSUFBWixFQUFrQixXQUFXYSxhQUE3QixFQUE0QyxRQUFPLFFBQW5EO0FBYkQ7QUFERCxJQUREO0FBbUJBOzs7NkJBaEVNRixXLEdBQWMsYyxVQUVkTSxTLEdBQVk7QUFDbEJqQixPQUFNLGlCQUFNa0IsTUFBTixDQUFhQyxVQUREO0FBRWxCQyxPQUFNLGlCQUFNQyxJQUFOLENBQVdGLFVBRkM7QUFHbEJmLFlBQVcsaUJBQU1jLE1BSEM7QUFJbEJoQixZQUFXLGlCQUFNb0IsSUFKQztBQUtsQkMsU0FBUSxpQkFBTUwsTUFBTixDQUFhQyxVQUxIO0FBTWxCYixPQUFNLGlCQUFNWSxNQUFOLENBQWFDLFVBTkQ7QUFPbEJWLFNBQVEsaUJBQU1ZLElBUEk7QUFRbEJkLFdBQVUsaUJBQU1jLElBUkU7QUFTbEJiLFVBQVMsaUJBQU1hLElBVEc7QUFVbEJYLGNBQWEsaUJBQU1RLE1BVkQ7QUFXbEJILFFBQU8saUJBQU1HLE1BWEs7QUFZbEJiLFFBQU8saUJBQU1hO0FBWkssQyxVQWVaTSxZLEdBQWU7QUFDckJKLE9BQU0sZ0JBQU0sQ0FBRSxDQURPO0FBRXJCbEIsWUFBVyxLQUZVO0FBR3JCSyxXQUFVLG9CQUFNLENBQUUsQ0FIRztBQUlyQkMsVUFBUyxtQkFBTSxDQUFFLENBSkk7QUFLckJDLFNBQVEsa0JBQU0sQ0FBRTtBQUxLLEM7O2tCQWxCRlgsVyIsImZpbGUiOiJzZWFyY2gtZmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgcHVyZSBmcm9tICdwdXJlLXJlbmRlci1kZWNvcmF0b3InO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nO1xuXG5AcHVyZVxuQGF1dG9iaW5kXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdzZWFyY2gtZmllbGQnO1xuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0YmFzZTogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0Ymx1cjogdHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdGNsYXNzTmFtZTogdHlwZXMuc3RyaW5nLFxuXHRcdGNvbXBvbmVudDogdHlwZXMubm9kZSxcblx0XHRsaW5rVG86IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdG5hbWU6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdG9uQmx1cjogdHlwZXMuZnVuYyxcblx0XHRvbkNoYW5nZTogdHlwZXMuZnVuYyxcblx0XHRvbkZvY3VzOiB0eXBlcy5mdW5jLFxuXHRcdHBsYWNlaG9sZGVyOiB0eXBlcy5zdHJpbmcsXG5cdFx0dGl0bGU6IHR5cGVzLnN0cmluZyxcblx0XHR2YWx1ZTogdHlwZXMuc3RyaW5nXG5cdH07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRibHVyOiAoKSA9PiB7fSxcblx0XHRjb21wb25lbnQ6ICdkaXYnLFxuXHRcdG9uQ2hhbmdlOiAoKSA9PiB7fSxcblx0XHRvbkZvY3VzOiAoKSA9PiB7fSxcblx0XHRvbkJsdXI6ICgpID0+IHt9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGJhc2UsXG5cdFx0XHRjb21wb25lbnQ6IENvbXBvbmVudCxcblx0XHRcdGNsYXNzTmFtZTogdXNlckNsYXNzTmFtZSxcblx0XHRcdHZhbHVlLFxuXHRcdFx0bmFtZSxcblx0XHRcdG9uQ2hhbmdlLFxuXHRcdFx0b25Gb2N1cyxcblx0XHRcdG9uQmx1cixcblx0XHRcdHBsYWNlaG9sZGVyLFxuXHRcdFx0Li4ucHJvcHNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtkaXNwbGF5TmFtZX0gPSBTZWFyY2hGaWVsZDtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBjeChkaXNwbGF5TmFtZSwgdXNlckNsYXNzTmFtZSk7XG5cdFx0Y29uc3QgY29udGFpbmVyQ2xhc3NOYW1lID0gYCR7ZGlzcGxheU5hbWV9X19jb250YWluZXJgO1xuXHRcdGNvbnN0IGljb25DbGFzc05hbWUgPSBgJHtkaXNwbGF5TmFtZX1fX2ljb25gO1xuXHRcdGNvbnN0IGlucHV0Q2xhc3NOYW1lID0gYCR7ZGlzcGxheU5hbWV9X19pbnB1dGA7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PENvbXBvbmVudCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzTmFtZX0+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2lucHV0Q2xhc3NOYW1lfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0dGl0bGU9e3Byb3BzLnRpdGxlfVxuXHRcdFx0XHRcdFx0dHlwZT1cInNlYXJjaFwiXG5cdFx0XHRcdFx0XHRuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdFx0b25CbHVyPXtvbkJsdXJ9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdFx0XHRvbkZvY3VzPXtvbkZvY3VzfVxuXHRcdFx0XHRcdFx0b25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxJY29uIGJhc2U9e2Jhc2V9IGNsYXNzTmFtZT17aWNvbkNsYXNzTmFtZX0gc3ltYm9sPVwic2VhcmNoXCIvPlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9Db21wb25lbnQ+XG5cdFx0KTtcblx0fVxufVxuIl19