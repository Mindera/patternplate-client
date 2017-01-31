'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _patternLoaderIcon = require('./pattern-loader-icon');

var _patternLoaderIcon2 = _interopRequireDefault(_patternLoaderIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternLoader = (0, _pureRenderDecorator2.default)(_class = (_temp2 = _class2 = function (_React$Component) {
	(0, _inherits3.default)(PatternLoader, _React$Component);

	function PatternLoader() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PatternLoader);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PatternLoader.__proto__ || (0, _getPrototypeOf2.default)(PatternLoader)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'PatternLoader', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PatternLoader, [{
		key: 'render',
		value: function render() {
			var className = (0, _classnames2.default)('pattern-loader', {
				'pattern-error': this.props.error,
				'pattern-loader--hidden': this.props.hidden
			});

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(_patternLoaderIcon2.default, {
					base: this.props.base,
					width: 200,
					height: 200,
					inverted: this.props.inverted
				})
			);
		}
	}]);
	return PatternLoader;
}(_react2.default.Component), _class2.defaultProps = {
	error: false
}, _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	error: _react.PropTypes.bool.isRequired,
	inverted: _react.PropTypes.bool,
	hidden: _react.PropTypes.bool
}, _temp2)) || _class;

exports.default = PatternLoader;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1sb2FkZXIuanMiXSwibmFtZXMiOlsiUGF0dGVybkxvYWRlciIsImRpc3BsYXlOYW1lIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJlcnJvciIsImhpZGRlbiIsImJhc2UiLCJpbnZlcnRlZCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUdNQSxhOzs7Ozs7Ozs7Ozs7Ozt3TkFDTEMsVyxHQUFjLGU7Ozs7OzJCQWFMO0FBQ1IsT0FBTUMsWUFBWSwwQkFBVyxnQkFBWCxFQUE2QjtBQUM5QyxxQkFBaUIsS0FBS0MsS0FBTCxDQUFXQyxLQURrQjtBQUU5Qyw4QkFBMEIsS0FBS0QsS0FBTCxDQUFXRTtBQUZTLElBQTdCLENBQWxCOztBQUtBLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBV0gsU0FBaEI7QUFDQztBQUNDLFdBQU0sS0FBS0MsS0FBTCxDQUFXRyxJQURsQjtBQUVDLFlBQU8sR0FGUjtBQUdDLGFBQVEsR0FIVDtBQUlDLGVBQVUsS0FBS0gsS0FBTCxDQUFXSTtBQUp0QjtBQURELElBREQ7QUFVQTs7O0VBOUIwQixnQkFBTUMsUyxXQUcxQkMsWSxHQUFlO0FBQ3JCTCxRQUFPO0FBRGMsQyxVQUlmTSxTLEdBQVk7QUFDbEJKLE9BQU0saUJBQU1LLE1BQU4sQ0FBYUMsVUFERDtBQUVsQlIsUUFBTyxpQkFBTVMsSUFBTixDQUFXRCxVQUZBO0FBR2xCTCxXQUFVLGlCQUFNTSxJQUhFO0FBSWxCUixTQUFRLGlCQUFNUTtBQUpJLEM7O2tCQTBCTGIsYSIsImZpbGUiOiJwYXR0ZXJuLWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcHVyZSBmcm9tICdwdXJlLXJlbmRlci1kZWNvcmF0b3InO1xuXG5pbXBvcnQgUGF0dGVybkxvYWRlckljb24gZnJvbSAnLi9wYXR0ZXJuLWxvYWRlci1pY29uJztcblxuQHB1cmVcbmNsYXNzIFBhdHRlcm5Mb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRkaXNwbGF5TmFtZSA9ICdQYXR0ZXJuTG9hZGVyJztcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdGVycm9yOiBmYWxzZVxuXHR9O1xuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0YmFzZTogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0ZXJyb3I6IHR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0XHRpbnZlcnRlZDogdHlwZXMuYm9vbCxcblx0XHRoaWRkZW46IHR5cGVzLmJvb2xcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcygncGF0dGVybi1sb2FkZXInLCB7XG5cdFx0XHQncGF0dGVybi1lcnJvcic6IHRoaXMucHJvcHMuZXJyb3IsXG5cdFx0XHQncGF0dGVybi1sb2FkZXItLWhpZGRlbic6IHRoaXMucHJvcHMuaGlkZGVuXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHRcdDxQYXR0ZXJuTG9hZGVySWNvblxuXHRcdFx0XHRcdGJhc2U9e3RoaXMucHJvcHMuYmFzZX1cblx0XHRcdFx0XHR3aWR0aD17MjAwfVxuXHRcdFx0XHRcdGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdGludmVydGVkPXt0aGlzLnByb3BzLmludmVydGVkfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhdHRlcm5Mb2FkZXI7XG4iXX0=