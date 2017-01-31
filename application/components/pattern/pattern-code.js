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

var _prettyData = require('pretty-data');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _code = require('../common/code');

var _code2 = _interopRequireDefault(_code);

var _select = require('../common/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternCode = (0, _pureRenderDecorator2.default)(_class = (0, _autobindDecorator2.default)(_class = (_temp2 = _class2 = function (_React$Component) {
	(0, _inherits3.default)(PatternCode, _React$Component);

	function PatternCode() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PatternCode);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PatternCode.__proto__ || (0, _getPrototypeOf2.default)(PatternCode)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			copying: false
		}, _this.timeout = null, _this.idle = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PatternCode, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.timeout) {
				global.clearTimeout(this.timeout);
			}
		}
	}, {
		key: 'saveReference',
		value: function saveReference(ref) {
			this.ref = ref;
		}
	}, {
		key: 'handleCopyClick',
		value: function handleCopyClick() {
			var _this2 = this;

			if (this.ref && !this.state.copying) {
				this.ref.focus();
				this.ref.select();
				global.document.execCommand('copy');
				this.setState((0, _extends3.default)({}, this.state, {
					copying: true
				}));
				this.timeout = setTimeout(function () {
					_this2.setState((0, _extends3.default)({}, _this2.state, {
						copying: false
					}));
				}, 3000);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var prettify = props.highlight && props.format === 'html';
			var source = prettify ? _prettyData.pd.xml(props.source) : props.source;
			var copying = this.state.copying;


			var concern = {
				value: props.concern,
				name: '' + props.concern + props.extname
			};

			var concerns = this.props.concerns.map(function (concern) {
				return { name: '' + concern + props.extname, value: concern };
			});

			var type = {
				value: this.props.type,
				name: this.props.type
			};

			var types = this.props.types.map(function (type) {
				return { name: type, value: type };
			});

			return _react2.default.createElement(
				'div',
				{ className: 'pattern-code' },
				_react2.default.createElement(
					'div',
					{ className: 'pattern-code__toolbar' },
					_react2.default.createElement(
						'div',
						{ className: 'pattern-code__name' },
						concerns.length > 1 ? _react2.default.createElement(_select2.default, {
							base: props.base,
							className: 'pattern-code__concern',
							options: concerns,
							onChange: props.onConcernChange,
							value: concern
						}) : _react2.default.createElement(
							'span',
							{ className: 'pattern-code__concern' },
							concern.name
						),
						types.length > 1 ? _react2.default.createElement(_select2.default, {
							base: props.base,
							className: 'pattern-code__type',
							options: types,
							onChange: props.onTypeChange,
							value: type
						}) : _react2.default.createElement(
							'span',
							{ className: 'pattern-code__type' },
							type.name
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'pattern-code__tools' },
						props.copy && _react2.default.createElement(
							'button',
							{ type: 'button', onClick: this.handleCopyClick },
							copying ? 'Copied!' : 'Copy to clipboard'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'pattern-code__content' },
					_react2.default.createElement(
						'pre',
						null,
						_react2.default.createElement(
							_code2.default,
							{
								highlights: props.highlights,
								highlight: props.requestHighlight,
								language: props.format
							},
							source
						)
					),
					_react2.default.createElement('textarea', {
						className: 'clipboard',
						value: source,
						ref: this.saveReference,
						readOnly: true
					})
				)
			);
		}
	}]);
	return PatternCode;
}(_react2.default.Component), _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	concern: _react.PropTypes.string.isRequired,
	concerns: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
	copy: _react.PropTypes.bool,
	extname: _react.PropTypes.string.isRequired,
	format: _react.PropTypes.string.isRequired,
	id: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	onConcernChange: _react.PropTypes.func.isRequired,
	onTypeChange: _react.PropTypes.func.isRequired,
	source: _react.PropTypes.string.isRequired,
	type: _react.PropTypes.string.isRequired,
	types: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
}, _class2.defaultProps = {
	// format: 'html',
	highlight: true,
	copy: true
}, _temp2)) || _class) || _class;

exports.default = PatternCode;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1jb2RlLmpzIl0sIm5hbWVzIjpbIlBhdHRlcm5Db2RlIiwic3RhdGUiLCJjb3B5aW5nIiwidGltZW91dCIsImlkbGUiLCJnbG9iYWwiLCJjbGVhclRpbWVvdXQiLCJyZWYiLCJmb2N1cyIsInNlbGVjdCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJwcm9wcyIsInByZXR0aWZ5IiwiaGlnaGxpZ2h0IiwiZm9ybWF0Iiwic291cmNlIiwieG1sIiwiY29uY2VybiIsInZhbHVlIiwibmFtZSIsImV4dG5hbWUiLCJjb25jZXJucyIsIm1hcCIsInR5cGUiLCJ0eXBlcyIsImxlbmd0aCIsImJhc2UiLCJvbkNvbmNlcm5DaGFuZ2UiLCJvblR5cGVDaGFuZ2UiLCJjb3B5IiwiaGFuZGxlQ29weUNsaWNrIiwiaGlnaGxpZ2h0cyIsInJlcXVlc3RIaWdobGlnaHQiLCJzYXZlUmVmZXJlbmNlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJib29sIiwiaWQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7SUFJcUJBLFc7Ozs7Ozs7Ozs7Ozs7O29OQXVCcEJDLEssR0FBUTtBQUNQQyxZQUFTO0FBREYsRyxRQUlSQyxPLEdBQVUsSSxRQUNWQyxJLEdBQU8sSTs7Ozs7eUNBRWdCO0FBQ3RCLE9BQUksS0FBS0QsT0FBVCxFQUFrQjtBQUNqQkUsV0FBT0MsWUFBUCxDQUFvQixLQUFLSCxPQUF6QjtBQUNBO0FBQ0Q7OztnQ0FFYUksRyxFQUFLO0FBQ2xCLFFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBOzs7b0NBRWlC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TUFERDtBQVVDO0FBQ0MsaUJBQVUsV0FEWDtBQUVDLGFBQU9BLE1BRlI7QUFHQyxXQUFLLEtBQUtrQixhQUhYO0FBSUM7QUFKRDtBQVZEO0FBdkNELElBREQ7QUEyREE7OztFQTdJdUMsZ0JBQU1DLFMsV0FDdkNDLFMsR0FBWTtBQUNsQlQsT0FBTSxpQkFBTVUsTUFBTixDQUFhQyxVQUREO0FBRWxCcEIsVUFBUyxpQkFBTW1CLE1BQU4sQ0FBYUMsVUFGSjtBQUdsQmhCLFdBQVUsaUJBQU1pQixPQUFOLENBQWMsaUJBQU1GLE1BQXBCLEVBQTRCQyxVQUhwQjtBQUlsQlIsT0FBTSxpQkFBTVUsSUFKTTtBQUtsQm5CLFVBQVMsaUJBQU1nQixNQUFOLENBQWFDLFVBTEo7QUFNbEJ2QixTQUFRLGlCQUFNc0IsTUFBTixDQUFhQyxVQU5IO0FBT2xCRyxLQUFJLGlCQUFNSixNQVBRO0FBUWxCakIsT0FBTSxpQkFBTWlCLE1BQU4sQ0FBYUMsVUFSRDtBQVNsQlYsa0JBQWlCLGlCQUFNYyxJQUFOLENBQVdKLFVBVFY7QUFVbEJULGVBQWMsaUJBQU1hLElBQU4sQ0FBV0osVUFWUDtBQVdsQnRCLFNBQVEsaUJBQU1xQixNQUFOLENBQWFDLFVBWEg7QUFZbEJkLE9BQU0saUJBQU1hLE1BQU4sQ0FBYUMsVUFaRDtBQWFsQmIsUUFBTyxpQkFBTWMsT0FBTixDQUFjLGlCQUFNRixNQUFwQixFQUE0QkM7QUFiakIsQyxVQWdCWkssWSxHQUFlO0FBQ3JCO0FBQ0E3QixZQUFXLElBRlU7QUFHckJnQixPQUFNO0FBSGUsQzs7a0JBakJGaEMsVyIsImZpbGUiOiJwYXR0ZXJuLWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cGQgYXMgcHJldHR5fSBmcm9tICdwcmV0dHktZGF0YSc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBwdXJlIGZyb20gJ3B1cmUtcmVuZGVyLWRlY29yYXRvcic7XG5cbmltcG9ydCBDb2RlIGZyb20gJy4uL2NvbW1vbi9jb2RlJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vY29tbW9uL3NlbGVjdCc7XG5cbkBwdXJlXG5AYXV0b2JpbmRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdHRlcm5Db2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRiYXNlOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb25jZXJuOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb25jZXJuczogdHlwZXMuYXJyYXlPZih0eXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG5cdFx0Y29weTogdHlwZXMuYm9vbCxcblx0XHRleHRuYW1lOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRmb3JtYXQ6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGlkOiB0eXBlcy5zdHJpbmcsXG5cdFx0bmFtZTogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0b25Db25jZXJuQ2hhbmdlOiB0eXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdFx0b25UeXBlQ2hhbmdlOiB0eXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdFx0c291cmNlOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR0eXBlOiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR0eXBlczogdHlwZXMuYXJyYXlPZih0eXBlcy5zdHJpbmcpLmlzUmVxdWlyZWRcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdC8vIGZvcm1hdDogJ2h0bWwnLFxuXHRcdGhpZ2hsaWdodDogdHJ1ZSxcblx0XHRjb3B5OiB0cnVlXG5cdH07XG5cblx0c3RhdGUgPSB7XG5cdFx0Y29weWluZzogZmFsc2Vcblx0fTtcblxuXHR0aW1lb3V0ID0gbnVsbDtcblx0aWRsZSA9IG51bGw7XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0aWYgKHRoaXMudGltZW91dCkge1xuXHRcdFx0Z2xvYmFsLmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHRcdH1cblx0fVxuXG5cdHNhdmVSZWZlcmVuY2UocmVmKSB7XG5cdFx0dGhpcy5yZWYgPSByZWY7XG5cdH1cblxuXHRoYW5kbGVDb3B5Q2xpY2soKSB7XG5cdFx0aWYgKHRoaXMucmVmICYmICF0aGlzLnN0YXRlLmNvcHlpbmcpIHtcblx0XHRcdHRoaXMucmVmLmZvY3VzKCk7XG5cdFx0XHR0aGlzLnJlZi5zZWxlY3QoKTtcblx0XHRcdGdsb2JhbC5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHRcdGNvcHlpbmc6IHRydWVcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHRcdFx0Y29weWluZzogZmFsc2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9LCAzMDAwKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3QgcHJldHRpZnkgPSBwcm9wcy5oaWdobGlnaHQgJiYgcHJvcHMuZm9ybWF0ID09PSAnaHRtbCc7XG5cdFx0Y29uc3Qgc291cmNlID0gcHJldHRpZnkgPyBwcmV0dHkueG1sKHByb3BzLnNvdXJjZSkgOiBwcm9wcy5zb3VyY2U7XG5cdFx0Y29uc3Qge2NvcHlpbmd9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGNvbnN0IGNvbmNlcm4gPSB7XG5cdFx0XHR2YWx1ZTogcHJvcHMuY29uY2Vybixcblx0XHRcdG5hbWU6IGAke3Byb3BzLmNvbmNlcm59JHtwcm9wcy5leHRuYW1lfWBcblx0XHR9O1xuXG5cdFx0Y29uc3QgY29uY2VybnMgPSB0aGlzLnByb3BzLmNvbmNlcm5zLm1hcChjb25jZXJuID0+IHtcblx0XHRcdHJldHVybiB7bmFtZTogYCR7Y29uY2Vybn0ke3Byb3BzLmV4dG5hbWV9YCwgdmFsdWU6IGNvbmNlcm59O1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgdHlwZSA9IHtcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnR5cGUsXG5cdFx0XHRuYW1lOiB0aGlzLnByb3BzLnR5cGVcblx0XHR9O1xuXG5cdFx0Y29uc3QgdHlwZXMgPSB0aGlzLnByb3BzLnR5cGVzLm1hcCh0eXBlID0+IHtcblx0XHRcdHJldHVybiB7bmFtZTogdHlwZSwgdmFsdWU6IHR5cGV9O1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGF0dGVybi1jb2RlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGF0dGVybi1jb2RlX190b29sYmFyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLWNvZGVfX25hbWVcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29uY2VybnMubGVuZ3RoID4gMSA/XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdFxuXHRcdFx0XHRcdFx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhdHRlcm4tY29kZV9fY29uY2VyblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtjb25jZXJuc31cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtwcm9wcy5vbkNvbmNlcm5DaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29uY2Vybn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+IDpcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwYXR0ZXJuLWNvZGVfX2NvbmNlcm5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtjb25jZXJuLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0eXBlcy5sZW5ndGggPiAxID9cblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0XG5cdFx0XHRcdFx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGF0dGVybi1jb2RlX190eXBlXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e3R5cGVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3Byb3BzLm9uVHlwZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0eXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz4gOlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBhdHRlcm4tY29kZV9fdHlwZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3R5cGUubmFtZX1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLWNvZGVfX3Rvb2xzXCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHByb3BzLmNvcHkgJiZcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvcHlDbGlja30+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29weWluZyA/ICdDb3BpZWQhJyA6ICdDb3B5IHRvIGNsaXBib2FyZCd9XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tY29kZV9fY29udGVudFwiPlxuXHRcdFx0XHRcdDxwcmU+XG5cdFx0XHRcdFx0XHQ8Q29kZVxuXHRcdFx0XHRcdFx0XHRoaWdobGlnaHRzPXtwcm9wcy5oaWdobGlnaHRzfVxuXHRcdFx0XHRcdFx0XHRoaWdobGlnaHQ9e3Byb3BzLnJlcXVlc3RIaWdobGlnaHR9XG5cdFx0XHRcdFx0XHRcdGxhbmd1YWdlPXtwcm9wcy5mb3JtYXR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3NvdXJjZX1cblx0XHRcdFx0XHRcdDwvQ29kZT5cblx0XHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsaXBib2FyZFwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17c291cmNlfVxuXHRcdFx0XHRcdFx0cmVmPXt0aGlzLnNhdmVSZWZlcmVuY2V9XG5cdFx0XHRcdFx0XHRyZWFkT25seVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4iXX0=