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

var _class, _class2, _temp2;

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Handle = (0, _autobindDecorator2.default)(_class = (_temp2 = _class2 = function (_Component) {
	(0, _inherits3.default)(Handle, _Component);

	function Handle() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Handle);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Handle.__proto__ || (0, _getPrototypeOf2.default)(Handle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			active: false
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Handle, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			global.addEventListener('mousemove', this.handleGlobalMouseMove);
			global.addEventListener('mouseup', this.handleGlobalMouseUp);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			global.removeEventListener('mousemove', this.handleGlobalMouseMove);
			global.removeEventListener('mouseup', this.handleGlobalMouseUp);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(e) {
			e.preventDefault();
			this.setState({ active: true });
		}
	}, {
		key: 'handleGlobalMouseMove',
		value: function handleGlobalMouseMove(e) {
			e.preventDefault();
			if (this.state.active) {
				this.props.onDrag(e);
			}
		}
	}, {
		key: 'handleGlobalMouseUp',
		value: function handleGlobalMouseUp() {
			if (this.state.active) {
				this.setState({ active: false });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var style = { width: props.width, height: props.height };

			var target = props.value ? props.pathname + '?' + _queryString2.default.stringify(props.query) : '';

			var className = (0, _classnames2.default)('handle', props.className, {
				'handle--active': this.state.active
			});

			return _react2.default.createElement(
				'div',
				{ className: className, style: style },
				_react2.default.createElement(
					'div',
					{
						className: 'handle__interaction',
						onMouseDown: this.handleMouseDown
					},
					this.state.active && _react2.default.createElement('div', { className: 'handle__capture' })
				)
			);
		}
	}]);
	return Handle;
}(_react.Component), _class2.propTypes = {
	className: _react.PropTypes.string,
	onClear: _react.PropTypes.func.isRequired,
	onDrag: _react.PropTypes.func.isRequired,
	onSubmit: _react.PropTypes.func.isRequired,
	pathname: _react.PropTypes.string,
	query: _react.PropTypes.object,
	value: _react.PropTypes.string
}, _class2.defaultProps = {
	onSubmit: _lodash.noop,
	onClear: _lodash.noop,
	onDrag: _lodash.noop
}, _temp2)) || _class;

exports.default = Handle;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9mcmFtZS9oYW5kbGUuanMiXSwibmFtZXMiOlsiSGFuZGxlIiwic3RhdGUiLCJhY3RpdmUiLCJnbG9iYWwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlR2xvYmFsTW91c2VNb3ZlIiwiaGFuZGxlR2xvYmFsTW91c2VVcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInByb3BzIiwib25EcmFnIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRhcmdldCIsInZhbHVlIiwicGF0aG5hbWUiLCJzdHJpbmdpZnkiLCJxdWVyeSIsImNsYXNzTmFtZSIsImhhbmRsZU1vdXNlRG93biIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uQ2xlYXIiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uU3VibWl0Iiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBNQWlCcEJDLEssR0FBUTtBQUNQQyxXQUFRO0FBREQsRzs7Ozs7c0NBSVk7QUFDbkJDLFVBQU9DLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLEtBQUtDLHFCQUExQztBQUNBRixVQUFPQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLRSxtQkFBeEM7QUFDQTs7O3lDQUVzQjtBQUN0QkgsVUFBT0ksbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0MsS0FBS0YscUJBQTdDO0FBQ0FGLFVBQU9JLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDLEtBQUtELG1CQUEzQztBQUNBOzs7a0NBRWVFLEMsRUFBRztBQUNsQkEsS0FBRUMsY0FBRjtBQUNBLFFBQUtDLFFBQUwsQ0FBYyxFQUFDUixRQUFRLElBQVQsRUFBZDtBQUNBOzs7d0NBRXFCTSxDLEVBQUc7QUFDeEJBLEtBQUVDLGNBQUY7QUFDQSxPQUFJLEtBQUtSLEtBQUwsQ0FBV0MsTUFBZixFQUF1QjtBQUN0QixTQUFLUyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JKLENBQWxCO0FBQ0E7QUFDRDs7O3dDQUVxQjtBQUNyQixPQUFJLEtBQUtQLEtBQUwsQ0FBV0MsTUFBZixFQUF1QjtBQUN0QixTQUFLUSxRQUFMLENBQWMsRUFBQ1IsUUFBUSxLQUFULEVBQWQ7QUFDQTtBQUNEOzs7MkJBRVE7QUFBQSxPQUNEUyxLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDOztBQUVSLE9BQU1FLFFBQVEsRUFBQ0MsT0FBT0gsTUFBTUcsS0FBZCxFQUFxQkMsUUFBUUosTUFBTUksTUFBbkMsRUFBZDs7QUFFQSxPQUFNQyxTQUFTTCxNQUFNTSxLQUFOLEdBQ1hOLE1BQU1PLFFBREssU0FDTyxzQkFBWUMsU0FBWixDQUFzQlIsTUFBTVMsS0FBNUIsQ0FEUCxLQUFmOztBQUdBLE9BQU1DLFlBQVksMEJBQUssUUFBTCxFQUFlVixNQUFNVSxTQUFyQixFQUFnQztBQUNqRCxzQkFBa0IsS0FBS3BCLEtBQUwsQ0FBV0M7QUFEb0IsSUFBaEMsQ0FBbEI7O0FBSUEsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFXbUIsU0FBaEIsRUFBMkIsT0FBT1IsS0FBbEM7QUFDQztBQUFBO0FBQUE7QUFDQyxpQkFBVSxxQkFEWDtBQUVDLG1CQUFhLEtBQUtTO0FBRm5CO0FBS0UsVUFBS3JCLEtBQUwsQ0FBV0MsTUFBWCxJQUNDLHVDQUFLLFdBQVUsaUJBQWY7QUFOSDtBQURELElBREQ7QUFrQ0E7Ozs2QkE3Rk1xQixTLEdBQVk7QUFDbEJGLFlBQVcsaUJBQUVHLE1BREs7QUFFbEJDLFVBQVMsaUJBQUVDLElBQUYsQ0FBT0MsVUFGRTtBQUdsQmYsU0FBUSxpQkFBRWMsSUFBRixDQUFPQyxVQUhHO0FBSWxCQyxXQUFVLGlCQUFFRixJQUFGLENBQU9DLFVBSkM7QUFLbEJULFdBQVUsaUJBQUVNLE1BTE07QUFNbEJKLFFBQU8saUJBQUVTLE1BTlM7QUFPbEJaLFFBQU8saUJBQUVPO0FBUFMsQyxVQVVaTSxZLEdBQWU7QUFDckJGLHVCQURxQjtBQUVyQkgsc0JBRnFCO0FBR3JCYjtBQUhxQixDOztrQkFYRlosTSIsImZpbGUiOiJoYW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBqb2luIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtub29wfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5cbkBhdXRvYmluZFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjbGFzc05hbWU6IHQuc3RyaW5nLFxuXHRcdG9uQ2xlYXI6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdG9uRHJhZzogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdFx0b25TdWJtaXQ6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdHBhdGhuYW1lOiB0LnN0cmluZyxcblx0XHRxdWVyeTogdC5vYmplY3QsXG5cdFx0dmFsdWU6IHQuc3RyaW5nXG5cdH1cblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdG9uU3VibWl0OiBub29wLFxuXHRcdG9uQ2xlYXI6IG5vb3AsXG5cdFx0b25EcmFnOiBub29wXG5cdH07XG5cblx0c3RhdGUgPSB7XG5cdFx0YWN0aXZlOiBmYWxzZVxuXHR9O1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZUdsb2JhbE1vdXNlTW92ZSk7XG5cdFx0Z2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZUdsb2JhbE1vdXNlVXApO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Z2xvYmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlR2xvYmFsTW91c2VNb3ZlKTtcblx0XHRnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlR2xvYmFsTW91c2VVcCk7XG5cdH1cblxuXHRoYW5kbGVNb3VzZURvd24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHthY3RpdmU6IHRydWV9KTtcblx0fVxuXG5cdGhhbmRsZUdsb2JhbE1vdXNlTW92ZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkRyYWcoZSk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlR2xvYmFsTW91c2VVcCgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogZmFsc2V9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3Qgc3R5bGUgPSB7d2lkdGg6IHByb3BzLndpZHRoLCBoZWlnaHQ6IHByb3BzLmhlaWdodH07XG5cblx0XHRjb25zdCB0YXJnZXQgPSBwcm9wcy52YWx1ZSA/XG5cdFx0XHRgJHtwcm9wcy5wYXRobmFtZX0/JHtxdWVyeVN0cmluZy5zdHJpbmdpZnkocHJvcHMucXVlcnkpfWAgOiBgYDtcblxuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IGpvaW4oJ2hhbmRsZScsIHByb3BzLmNsYXNzTmFtZSwge1xuXHRcdFx0J2hhbmRsZS0tYWN0aXZlJzogdGhpcy5zdGF0ZS5hY3RpdmVcblx0XHR9KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGFuZGxlX19pbnRlcmFjdGlvblwiXG5cdFx0XHRcdFx0b25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3dufVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmFjdGl2ZSAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbmRsZV9fY2FwdHVyZVwiLz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7Lypcblx0XHRcdFx0XHQoJ3ZhbHVlJyBpbiB0aGlzLnByb3BzKSAmJlxuXHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGFuZGxlX192YWx1ZVwiXG5cdFx0XHRcdFx0XHRcdG1ldGhvZD1cImdldFwiXG5cdFx0XHRcdFx0XHRcdHRhcmdldD17dGFyZ2V0fVxuXHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17dGhpcy5wcm9wcy5vblN1Ym1pdH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoYW5kbGVfX2lucHV0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJlc2V0XCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoYW5kbGVfX2NsZWFyXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xlYXJ9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdENsZWFyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQqL31cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==