'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _editor = require('../common/editor');

var _editor2 = _interopRequireDefault(_editor);

var _markdown = require('../../containers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _lightbox = require('../lightbox');

var _lightbox2 = _interopRequireDefault(_lightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsoleLightbox = (0, _autobindDecorator2.default)(_class = (_temp2 = _class2 = function (_Component) {
	(0, _inherits3.default)(ConsoleLightbox, _Component);

	function ConsoleLightbox() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ConsoleLightbox);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConsoleLightbox.__proto__ || (0, _getPrototypeOf2.default)(ConsoleLightbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: ''
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ConsoleLightbox, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.ref) {
				var node = (0, _reactDom.findDOMNode)(this.ref);
				node.focus();
			}
		}
	}, {
		key: 'handleApplyState',
		value: function handleApplyState() {
			if (isDisabled(this.state, this.props)) {
				return;
			}
			try {
				var data = JSON.parse(this.state.value);
				this.props.onApplyState(data);
			} catch (error) {
				console.error(error);
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			this.setState({ value: e.target.value });
		}
	}, {
		key: 'handleClose',
		value: function handleClose() {
			this.props.onClose();
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(e) {
			if (e.ctrlKey && e.keyCode === 13) {
				e.preventDefault();
				this.handleApplyState();
			}
			if (e.keyCode === 27) {
				this.handleClose();
			}
		}
	}, {
		key: 'saveRef',
		value: function saveRef(ref) {
			this.ref = ref;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var disabled = isDisabled(this.state, this.props);
			var title = disabled ? 'No changes to apply' : 'Apply changes [ctrl+enter]';

			return _react2.default.createElement(
				_lightbox2.default,
				{
					title: 'Modify state',
					backdrop: true,
					buttons: [_react2.default.createElement(
						'button',
						{
							key: 'Apply',
							className: 'button console-lightbox__button console-lightbox__button--apply',
							disabled: disabled,
							title: title,
							onClick: this.handleApplyState
						},
						'Apply changes'
					), _react2.default.createElement(
						_reactRouter.Link,
						{
							key: 'Close',
							to: (0, _extends3.default)({}, props.location, {
								query: (0, _extends3.default)({}, props.location.query, {
									lightbox: false
								})
							}),
							title: 'Close this lightbox [esc]',
							className: 'button console-lightbox__button console-lightbox__button--abort'
						},
						'Close'
					)]
				},
				_react2.default.createElement(_markdown2.default, {
					base: props.base,
					className: 'lightbox__instructions',
					source: '> :rocket: Edit `patternplate-client` redux state directly'
				}),
				_react2.default.createElement(
					'div',
					{ className: 'console-lightbox__preview' },
					_react2.default.createElement(_editor2.default, {
						className: 'editor console-lightbox__state',
						value: this.state.value || props.state,
						onChange: this.handleChange,
						onKeyDown: this.handleKeyDown,
						ref: this.saveRef
					})
				)
			);
		}
	}]);
	return ConsoleLightbox;
}(_react.Component), _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	onApplyState: _react.PropTypes.func.isRequired,
	onClose: _react.PropTypes.func.isRequired,
	state: _react.PropTypes.string.isRequired,
	theme: _react.PropTypes.oneOf(['dark', 'light']).isRequired
}, _temp2)) || _class;

exports.default = ConsoleLightbox;


function isDisabled(state, props) {
	return !state.value || state.value === props.state;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbnRlbnQvY29uc29sZS5qcyJdLCJuYW1lcyI6WyJDb25zb2xlTGlnaHRib3giLCJzdGF0ZSIsInZhbHVlIiwicmVmIiwibm9kZSIsImZvY3VzIiwiaXNEaXNhYmxlZCIsInByb3BzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm9uQXBwbHlTdGF0ZSIsImVycm9yIiwiY29uc29sZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm9uQ2xvc2UiLCJjdHJsS2V5Iiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQXBwbHlTdGF0ZSIsImhhbmRsZUNsb3NlIiwiZGlzYWJsZWQiLCJ0aXRsZSIsImxvY2F0aW9uIiwicXVlcnkiLCJsaWdodGJveCIsImJhc2UiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwic2F2ZVJlZiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwidGhlbWUiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCQSxlOzs7Ozs7Ozs7Ozs7Ozs0TkFTcEJDLEssR0FBUTtBQUNQQyxVQUFPO0FBREEsRzs7Ozs7c0NBSVk7QUFDbkIsT0FBSSxLQUFLQyxHQUFULEVBQWM7QUFDYixRQUFNQyxPQUFPLDJCQUFZLEtBQUtELEdBQWpCLENBQWI7QUFDQUMsU0FBS0MsS0FBTDtBQUNBO0FBQ0Q7OztxQ0FFa0I7QUFDbEIsT0FBSUMsV0FBVyxLQUFLTCxLQUFoQixFQUF1QixLQUFLTSxLQUE1QixDQUFKLEVBQXdDO0FBQ3ZDO0FBQ0E7QUFDRCxPQUFJO0FBQ0gsUUFBTUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXLEtBQUtULEtBQUwsQ0FBV0MsS0FBdEIsQ0FBYjtBQUNBLFNBQUtLLEtBQUwsQ0FBV0ksWUFBWCxDQUF3QkgsSUFBeEI7QUFDQSxJQUhELENBR0UsT0FBT0ksS0FBUCxFQUFjO0FBQ2ZDLFlBQVFELEtBQVIsQ0FBY0EsS0FBZDtBQUNBO0FBQ0Q7OzsrQkFFWUUsQyxFQUFHO0FBQ2YsUUFBS0MsUUFBTCxDQUFjLEVBQUNiLE9BQU9ZLEVBQUVFLE1BQUYsQ0FBU2QsS0FBakIsRUFBZDtBQUNBOzs7Z0NBRWE7QUFDYixRQUFLSyxLQUFMLENBQVdVLE9BQVg7QUFDQTs7O2dDQUVhSCxDLEVBQUc7QUFDaEIsT0FBSUEsRUFBRUksT0FBRixJQUFhSixFQUFFSyxPQUFGLEtBQWMsRUFBL0IsRUFBbUM7QUFDbENMLE1BQUVNLGNBQUY7QUFDQSxTQUFLQyxnQkFBTDtBQUNBO0FBQ0QsT0FBSVAsRUFBRUssT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ3JCLFNBQUtHLFdBQUw7QUFDQTtBQUNEOzs7MEJBRU9uQixHLEVBQUs7QUFDWixRQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQTs7OzJCQUVRO0FBQUEsT0FDREksS0FEQyxHQUNRLElBRFIsQ0FDREEsS0FEQzs7QUFFUixPQUFNZ0IsV0FBV2pCLFdBQVcsS0FBS0wsS0FBaEIsRUFBdUIsS0FBS00sS0FBNUIsQ0FBakI7QUFDQSxPQUFNaUIsUUFBUUQsV0FDYixxQkFEYSxHQUNXLDRCQUR6Qjs7QUFHQSxVQUNDO0FBQUE7QUFBQTtBQUNDLFlBQU0sY0FEUDtBQUVDLG1CQUZEO0FBR0MsY0FBUyxDQUNSO0FBQUE7QUFBQTtBQUNDLFlBQUksT0FETDtBQUVDLGtCQUFVLGlFQUZYO0FBR0MsaUJBQVVBLFFBSFg7QUFJQyxjQUFPQyxLQUpSO0FBS0MsZ0JBQVMsS0FBS0g7QUFMZjtBQUFBO0FBQUEsTUFEUSxFQVVSO0FBQUE7QUFBQTtBQUNDLFlBQUksT0FETDtBQUVDLHNDQUNJZCxNQUFNa0IsUUFEVjtBQUVDQywwQ0FDSW5CLE1BQU1rQixRQUFOLENBQWVDLEtBRG5CO0FBRUNDLG1CQUFVO0FBRlg7QUFGRCxTQUZEO0FBU0MsY0FBTSwyQkFUUDtBQVVDLGtCQUFVO0FBVlg7QUFBQTtBQUFBLE1BVlE7QUFIVjtBQTZCQztBQUNDLFdBQU1wQixNQUFNcUIsSUFEYjtBQUVDLGdCQUFVLHdCQUZYO0FBR0MsYUFBTztBQUhSLE1BN0JEO0FBa0NDO0FBQUE7QUFBQSxPQUFLLFdBQVUsMkJBQWY7QUFDQztBQUNDLGlCQUFVLGdDQURYO0FBRUMsYUFBTyxLQUFLM0IsS0FBTCxDQUFXQyxLQUFYLElBQW9CSyxNQUFNTixLQUZsQztBQUdDLGdCQUFVLEtBQUs0QixZQUhoQjtBQUlDLGlCQUFXLEtBQUtDLGFBSmpCO0FBS0MsV0FBSyxLQUFLQztBQUxYO0FBREQ7QUFsQ0QsSUFERDtBQThDQTs7OzZCQXpHTUMsUyxHQUFZO0FBQ2xCSixPQUFNLGlCQUFFSyxNQUFGLENBQVNDLFVBREc7QUFFbEJ2QixlQUFjLGlCQUFFd0IsSUFBRixDQUFPRCxVQUZIO0FBR2xCakIsVUFBUyxpQkFBRWtCLElBQUYsQ0FBT0QsVUFIRTtBQUlsQmpDLFFBQU8saUJBQUVnQyxNQUFGLENBQVNDLFVBSkU7QUFLbEJFLFFBQU8saUJBQUVDLEtBQUYsQ0FBUSxDQUFDLE1BQUQsRUFBUyxPQUFULENBQVIsRUFBMkJIO0FBTGhCLEM7O2tCQURDbEMsZTs7O0FBNkdyQixTQUFTTSxVQUFULENBQW9CTCxLQUFwQixFQUEyQk0sS0FBM0IsRUFBa0M7QUFDakMsUUFBTyxDQUFDTixNQUFNQyxLQUFQLElBQWdCRCxNQUFNQyxLQUFOLEtBQWdCSyxNQUFNTixLQUE3QztBQUNBIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vY29tbW9uL2VkaXRvcic7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vLi4vY29udGFpbmVycy9tYXJrZG93bic7XG5pbXBvcnQgTGlnaHRib3ggZnJvbSAnLi4vbGlnaHRib3gnO1xuXG5AYXV0b2JpbmRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRvbkFwcGx5U3RhdGU6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdG9uQ2xvc2U6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdHN0YXRlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHRoZW1lOiB0Lm9uZU9mKFsnZGFyaycsICdsaWdodCddKS5pc1JlcXVpcmVkXG5cdH07XG5cblx0c3RhdGUgPSB7XG5cdFx0dmFsdWU6ICcnXG5cdH07XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHRoaXMucmVmKSB7XG5cdFx0XHRjb25zdCBub2RlID0gZmluZERPTU5vZGUodGhpcy5yZWYpO1xuXHRcdFx0bm9kZS5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUFwcGx5U3RhdGUoKSB7XG5cdFx0aWYgKGlzRGlzYWJsZWQodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUudmFsdWUpO1xuXHRcdFx0dGhpcy5wcm9wcy5vbkFwcGx5U3RhdGUoZGF0YSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNoYW5nZShlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlfSk7XG5cdH1cblxuXHRoYW5kbGVDbG9zZSgpIHtcblx0XHR0aGlzLnByb3BzLm9uQ2xvc2UoKTtcblx0fVxuXG5cdGhhbmRsZUtleURvd24oZSkge1xuXHRcdGlmIChlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSAxMykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5oYW5kbGVBcHBseVN0YXRlKCk7XG5cdFx0fVxuXHRcdGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHR0aGlzLmhhbmRsZUNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0c2F2ZVJlZihyZWYpIHtcblx0XHR0aGlzLnJlZiA9IHJlZjtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7cHJvcHN9ID0gdGhpcztcblx0XHRjb25zdCBkaXNhYmxlZCA9IGlzRGlzYWJsZWQodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcyk7XG5cdFx0Y29uc3QgdGl0bGUgPSBkaXNhYmxlZCA/XG5cdFx0XHQnTm8gY2hhbmdlcyB0byBhcHBseScgOiAnQXBwbHkgY2hhbmdlcyBbY3RybCtlbnRlcl0nO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMaWdodGJveFxuXHRcdFx0XHR0aXRsZT1cIk1vZGlmeSBzdGF0ZVwiXG5cdFx0XHRcdGJhY2tkcm9wXG5cdFx0XHRcdGJ1dHRvbnM9e1tcblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRrZXk9XCJBcHBseVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24gY29uc29sZS1saWdodGJveF9fYnV0dG9uIGNvbnNvbGUtbGlnaHRib3hfX2J1dHRvbi0tYXBwbHlcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2Rpc2FibGVkfVxuXHRcdFx0XHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVBcHBseVN0YXRlfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0QXBwbHkgY2hhbmdlc1xuXHRcdFx0XHRcdDwvYnV0dG9uPixcblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0a2V5PVwiQ2xvc2VcIlxuXHRcdFx0XHRcdFx0dG89e3tcblx0XHRcdFx0XHRcdFx0Li4ucHJvcHMubG9jYXRpb24sXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdFx0XHRcdFx0Li4ucHJvcHMubG9jYXRpb24ucXVlcnksXG5cdFx0XHRcdFx0XHRcdFx0bGlnaHRib3g6IGZhbHNlXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR0aXRsZT1cIkNsb3NlIHRoaXMgbGlnaHRib3ggW2VzY11cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uIGNvbnNvbGUtbGlnaHRib3hfX2J1dHRvbiBjb25zb2xlLWxpZ2h0Ym94X19idXR0b24tLWFib3J0XCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdENsb3NlXG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdDxNYXJrZG93blxuXHRcdFx0XHRcdGJhc2U9e3Byb3BzLmJhc2V9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibGlnaHRib3hfX2luc3RydWN0aW9uc1wiXG5cdFx0XHRcdFx0c291cmNlPVwiPiA6cm9ja2V0OiBFZGl0IGBwYXR0ZXJucGxhdGUtY2xpZW50YCByZWR1eCBzdGF0ZSBkaXJlY3RseVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb25zb2xlLWxpZ2h0Ym94X19wcmV2aWV3XCI+XG5cdFx0XHRcdFx0PEVkaXRvclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZWRpdG9yIGNvbnNvbGUtbGlnaHRib3hfX3N0YXRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlIHx8IHByb3BzLnN0YXRlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0b25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG5cdFx0XHRcdFx0XHRyZWY9e3RoaXMuc2F2ZVJlZn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MaWdodGJveD5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGlzRGlzYWJsZWQoc3RhdGUsIHByb3BzKSB7XG5cdHJldHVybiAhc3RhdGUudmFsdWUgfHwgc3RhdGUudmFsdWUgPT09IHByb3BzLnN0YXRlO1xufVxuIl19