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

var _class, _class2, _temp;

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _bind = require('./bind');

var _bind2 = _interopRequireDefault(_bind);

var _handles = require('./handles');

var _handles2 = _interopRequireDefault(_handles);

var _relay = require('./relay');

var _relay2 = _interopRequireDefault(_relay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Frame = (0, _pureRenderDecorator2.default)(_class = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(Frame, _Component);

	function Frame() {
		(0, _classCallCheck3.default)(this, Frame);
		return (0, _possibleConstructorReturn3.default)(this, (Frame.__proto__ || (0, _getPrototypeOf2.default)(Frame)).apply(this, arguments));
	}

	(0, _createClass3.default)(Frame, [{
		key: 'handleDiagonalDrag',
		value: function handleDiagonalDrag(e) {
			var rect = (0, _reactDom.findDOMNode)(this.ref).getBoundingClientRect();
			this.props.resize({
				y: Math.round(e.pageY - rect.top),
				x: Math.round(e.pageX - rect.left)
			});
		}
	}, {
		key: 'handleHorizontalSubmit',
		value: function handleHorizontalSubmit(e) {
			this.props.resize({
				y: e.target.value
			});
		}
	}, {
		key: 'handleHorizontalDrag',
		value: function handleHorizontalDrag(e) {
			var rect = (0, _reactDom.findDOMNode)(this.ref).getBoundingClientRect();
			this.props.resize({
				y: Math.round(e.pageY - rect.top)
			});
		}
	}, {
		key: 'handleVerticalSubmit',
		value: function handleVerticalSubmit(e) {
			this.props.resize({
				x: e.target.value
			});
		}
	}, {
		key: 'handleVerticalDrag',
		value: function handleVerticalDrag(e) {
			var rect = (0, _reactDom.findDOMNode)(this.ref).getBoundingClientRect();
			this.props.resize({
				x: Math.round(e.pageX - rect.left)
			});
		}
	}, {
		key: 'saveRef',
		value: function saveRef(ref) {
			this.ref = ref;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props;


			var onLoad = function onLoad(e) {
				(0, _bind2.default)(_this2.ref, _this2.props);
				props.onLoad(e);
			};

			var frameClassName = (0, _classnames2.default)('iframe', {
				'iframe--resizeable': props.resizeable
			});

			var frameResizeClassName = (0, _classnames2.default)('frame__resize-container', 'pattern__frame');

			var style = props.resizeable ? {
				width: props.width,
				height: props.height
			} : {};

			return _react2.default.createElement(
				'div',
				{ className: props.className },
				_react2.default.createElement(
					'div',
					{ className: frameResizeClassName, style: style },
					_react2.default.createElement('iframe', {
						className: frameClassName,
						onLoad: (0, _relay2.default)(onLoad, props.onError),
						ref: this.saveRef,
						src: props.src,
						sandbox: props.sandbox,
						onKeyDown: this.handleKeyDown
					}),
					props.resizeable && _react2.default.createElement(_handles2.default, {
						height: props.height,
						onDragDiagonal: this.handleDiagonalDrag,
						onDragHorizontal: this.handleHorizontalDrag,
						onDragVertical: this.handleVerticalDrag,
						onSubmitHorizontal: this.handleHorizontalSubmit,
						onSubmitVertical: this.handleVerticalSubmit,
						width: props.width
					})
				)
			);
		}
	}]);
	return Frame;
}(_react.Component), _class2.displayName = 'Frame', _class2.propTypes = {
	src: _react.PropTypes.string.isRequired,
	height: _react.PropTypes.number,
	id: _react.PropTypes.string.isRequired,
	resizeable: _react.PropTypes.bool.isRequired,
	resize: _react.PropTypes.func.isRequired,
	width: _react.PropTypes.number
}, _class2.defaultProps = {
	resize: _lodash.noop
}, _temp)) || _class) || _class;

exports.default = Frame;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9mcmFtZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJGcmFtZSIsImUiLCJyZWN0IiwicmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicHJvcHMiLCJyZXNpemUiLCJ5IiwiTWF0aCIsInJvdW5kIiwicGFnZVkiLCJ0b3AiLCJ4IiwicGFnZVgiLCJsZWZ0IiwidGFyZ2V0IiwidmFsdWUiLCJvbkxvYWQiLCJmcmFtZUNsYXNzTmFtZSIsInJlc2l6ZWFibGUiLCJmcmFtZVJlc2l6ZUNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJvbkVycm9yIiwic2F2ZVJlZiIsInNyYyIsInNhbmRib3giLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlRGlhZ29uYWxEcmFnIiwiaGFuZGxlSG9yaXpvbnRhbERyYWciLCJoYW5kbGVWZXJ0aWNhbERyYWciLCJoYW5kbGVIb3Jpem9udGFsU3VibWl0IiwiaGFuZGxlVmVydGljYWxTdWJtaXQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJpZCIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFJcUJBLEs7Ozs7Ozs7Ozs7cUNBZ0JEQyxDLEVBQUc7QUFDckIsT0FBTUMsT0FBTywyQkFBWSxLQUFLQyxHQUFqQixFQUFzQkMscUJBQXRCLEVBQWI7QUFDQSxRQUFLQyxLQUFMLENBQVdDLE1BQVgsQ0FBa0I7QUFDakJDLE9BQUdDLEtBQUtDLEtBQUwsQ0FBV1IsRUFBRVMsS0FBRixHQUFVUixLQUFLUyxHQUExQixDQURjO0FBRWpCQyxPQUFHSixL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WkZOLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBqb2luIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtub29wfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHB1cmUgZnJvbSAncHVyZS1yZW5kZXItZGVjb3JhdG9yJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgYmluZCBmcm9tICcuL2JpbmQnO1xuaW1wb3J0IEhhbmRsZXMgZnJvbSAnLi9oYW5kbGVzJztcbmltcG9ydCByZWxheSBmcm9tICcuL3JlbGF5JztcblxuQHB1cmVcbkBhdXRvYmluZFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgZGlzcGxheU5hbWUgPSAnRnJhbWUnO1xuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0c3JjOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRoZWlnaHQ6IHR5cGVzLm51bWJlcixcblx0XHRpZDogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0cmVzaXplYWJsZTogdHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXHRcdHJlc2l6ZTogdHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdHdpZHRoOiB0eXBlcy5udW1iZXJcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdHJlc2l6ZTogbm9vcFxuXHR9O1xuXG5cdGhhbmRsZURpYWdvbmFsRHJhZyhlKSB7XG5cdFx0Y29uc3QgcmVjdCA9IGZpbmRET01Ob2RlKHRoaXMucmVmKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR0aGlzLnByb3BzLnJlc2l6ZSh7XG5cdFx0XHR5OiBNYXRoLnJvdW5kKGUucGFnZVkgLSByZWN0LnRvcCksXG5cdFx0XHR4OiBNYXRoLnJvdW5kKGUucGFnZVggLSByZWN0LmxlZnQpXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVIb3Jpem9udGFsU3VibWl0KGUpIHtcblx0XHR0aGlzLnByb3BzLnJlc2l6ZSh7XG5cdFx0XHR5OiBlLnRhcmdldC52YWx1ZVxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlSG9yaXpvbnRhbERyYWcoZSkge1xuXHRcdGNvbnN0IHJlY3QgPSBmaW5kRE9NTm9kZSh0aGlzLnJlZikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dGhpcy5wcm9wcy5yZXNpemUoe1xuXHRcdFx0eTogTWF0aC5yb3VuZChlLnBhZ2VZIC0gcmVjdC50b3ApXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVWZXJ0aWNhbFN1Ym1pdChlKSB7XG5cdFx0dGhpcy5wcm9wcy5yZXNpemUoe1xuXHRcdFx0eDogZS50YXJnZXQudmFsdWVcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZVZlcnRpY2FsRHJhZyhlKSB7XG5cdFx0Y29uc3QgcmVjdCA9IGZpbmRET01Ob2RlKHRoaXMucmVmKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR0aGlzLnByb3BzLnJlc2l6ZSh7XG5cdFx0XHR4OiBNYXRoLnJvdW5kKGUucGFnZVggLSByZWN0LmxlZnQpXG5cdFx0fSk7XG5cdH1cblxuXHRzYXZlUmVmKHJlZikge1xuXHRcdHRoaXMucmVmID0gcmVmO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXG5cdFx0Y29uc3Qgb25Mb2FkID0gZSA9PiB7XG5cdFx0XHRiaW5kKHRoaXMucmVmLCB0aGlzLnByb3BzKTtcblx0XHRcdHByb3BzLm9uTG9hZChlKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZnJhbWVDbGFzc05hbWUgPSBqb2luKFxuXHRcdFx0J2lmcmFtZScsXG5cdFx0XHR7XG5cdFx0XHRcdCdpZnJhbWUtLXJlc2l6ZWFibGUnOiBwcm9wcy5yZXNpemVhYmxlXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGNvbnN0IGZyYW1lUmVzaXplQ2xhc3NOYW1lID0gam9pbihcblx0XHRcdCdmcmFtZV9fcmVzaXplLWNvbnRhaW5lcicsXG5cdFx0XHQncGF0dGVybl9fZnJhbWUnXG5cdFx0KTtcblxuXHRcdGNvbnN0IHN0eWxlID0gcHJvcHMucmVzaXplYWJsZSA/IHtcblx0XHRcdHdpZHRoOiBwcm9wcy53aWR0aCxcblx0XHRcdGhlaWdodDogcHJvcHMuaGVpZ2h0XG5cdFx0fSA6IHt9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ZnJhbWVSZXNpemVDbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdFx0PGlmcmFtZVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtmcmFtZUNsYXNzTmFtZX1cblx0XHRcdFx0XHRcdG9uTG9hZD17cmVsYXkob25Mb2FkLCBwcm9wcy5vbkVycm9yKX1cblx0XHRcdFx0XHRcdHJlZj17dGhpcy5zYXZlUmVmfVxuXHRcdFx0XHRcdFx0c3JjPXtwcm9wcy5zcmN9XG5cdFx0XHRcdFx0XHRzYW5kYm94PXtwcm9wcy5zYW5kYm94fVxuXHRcdFx0XHRcdFx0b25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHByb3BzLnJlc2l6ZWFibGUgJiZcblx0XHRcdFx0XHRcdFx0PEhhbmRsZXNcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9e3Byb3BzLmhlaWdodH1cblx0XHRcdFx0XHRcdFx0XHRvbkRyYWdEaWFnb25hbD17dGhpcy5oYW5kbGVEaWFnb25hbERyYWd9XG5cdFx0XHRcdFx0XHRcdFx0b25EcmFnSG9yaXpvbnRhbD17dGhpcy5oYW5kbGVIb3Jpem9udGFsRHJhZ31cblx0XHRcdFx0XHRcdFx0XHRvbkRyYWdWZXJ0aWNhbD17dGhpcy5oYW5kbGVWZXJ0aWNhbERyYWd9XG5cdFx0XHRcdFx0XHRcdFx0b25TdWJtaXRIb3Jpem9udGFsPXt0aGlzLmhhbmRsZUhvcml6b250YWxTdWJtaXR9XG5cdFx0XHRcdFx0XHRcdFx0b25TdWJtaXRWZXJ0aWNhbD17dGhpcy5oYW5kbGVWZXJ0aWNhbFN1Ym1pdH1cblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17cHJvcHMud2lkdGh9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIl19