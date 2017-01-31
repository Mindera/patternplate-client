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

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _lodash = require('lodash');

var _pattern = require('../../containers/pattern');

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternSection = (0, _pureRenderDecorator2.default)(_class = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function (_React$Component) {
	(0, _inherits3.default)(PatternSection, _React$Component);

	function PatternSection() {
		(0, _classCallCheck3.default)(this, PatternSection);
		return (0, _possibleConstructorReturn3.default)(this, (PatternSection.__proto__ || (0, _getPrototypeOf2.default)(PatternSection)).apply(this, arguments));
	}

	(0, _createClass3.default)(PatternSection, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    id = _props.id,
			    base = _props.base,
			    environment = _props.environment;

			this.props.onDataRequest(id, { environment: environment }, { loading: true, base: base });
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var next = (0, _lodash.pick)(nextProps, ['id', 'environment']);
			var current = (0, _lodash.pick)(this.props, ['id', 'environment']);
			var query = { environment: next.environment };
			var options = { loading: next.id !== current.id, base: nextProps.base };
			if (nextProps.type === 'pattern' && !(0, _lodash.isEqual)(next, current)) {
				this.props.onDataRequest(next.id, query, options);
			}
		}
	}, {
		key: 'handleDataRequest',
		value: function handleDataRequest(id, query, options) {
			this.props.onDataRequest(id, query, options);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'pattern-section' },
				_react2.default.createElement(_pattern2.default, {
					location: this.props.location
				})
			);
		}
	}]);
	return PatternSection;
}(_react2.default.Component), _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	environment: _react.PropTypes.string.isRequired,
	id: _react.PropTypes.string.isRequired,
	location: _react.PropTypes.object.isRequired,
	onDataRequest: _react.PropTypes.func.isRequired
}, _class2.defaultProps = {
	environment: 'index',
	onDataRequest: function onDataRequest() {}
}, _temp)) || _class) || _class;

exports.default = PatternSection;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1zZWN0aW9uLmpzIl0sIm5hbWVzIjpbIlBhdHRlcm5TZWN0aW9uIiwicHJvcHMiLCJpZCIsImJhc2UiLCJlbnZpcm9ubWVudCIsIm9uRGF0YVJlcXVlc3QiLCJsb2FkaW5nIiwibmV4dFByb3BzIiwibmV4dCIsImN1cnJlbnQiLCJxdWVyeSIsIm9wdGlvbnMiLCJ0eXBlIiwibG9jYXRpb24iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7SUFJTUEsYzs7Ozs7Ozs7OztzQ0FjZTtBQUFBLGdCQUNhLEtBQUtDLEtBRGxCO0FBQUEsT0FDWkMsRUFEWSxVQUNaQSxFQURZO0FBQUEsT0FDUkMsSUFEUSxVQUNSQSxJQURRO0FBQUEsT0FDRkMsV0FERSxVQUNGQSxXQURFOztBQUVuQixRQUFLSCxLQUFMLENBQVdJLGFBQVgsQ0FBeUJILEVBQXpCLEVBQTZCLEVBQUNFLHdCQUFELEVBQTdCLEVBQTRDLEVBQUNFLFNBQVMsSUFBVixFQUFnQkgsVUFBaEIsRUFBNUM7QUFDQTs7OzRDQUV5QkksUyxFQUFXO0FBQ3BDLE9BQU1DLE9BQU8sa0JBQUtELFNBQUwsRUFBZ0IsQ0FBQyxJQUFELEVBQU8sYUFBUCxDQUFoQixDQUFiO0FBQ0EsT0FBTUUsVUFBVSxrQkFBSyxLQUFLUixLQUFWLEVBQWlCLENBQUMsSUFBRCxFQUFPLGFBQVAsQ0FBakIsQ0FBaEI7QUFDQSxPQUFNUyxRQUFRLEVBQUNOLGFBQWFJLEtBQUtKLFdBQW5CLEVBQWQ7QUFDQSxPQUFNTyxVQUFVLEVBQUNMLFNBQVNFLEtBQUtOLEVBQUwsS0FBWU8sUUFBUVAsRUFBOUIsRUFBa0NDLE1BQU1JLFVBQVVKLElBQWxELEVBQWhCO0FBQ0EsT0FBSUksVUFBVUssSUFBVixLQUFtQixTQUFuQixJQUFnQyxDQUFDLHFCQUFRSixJQUFSLEVBQWNDLE9BQWQsQ0FBckMsRUFBNkQ7QUFDNUQsU0FBS1IsS0FBTCxDQUFXSSxhQUFYLENBQXlCRyxLQUFLTixFQUE5QixFQUFrQ1EsS0FBbEMsRUFBeUNDLE9BQXpDO0FBQ0E7QUFDRDs7O29DQUVpQlQsRSxFQUFJUSxLLEVBQU9DLE8sRUFBUztBQUNyQyxRQUFLVixLQUFMLENBQVdJLGFBQVgsQ0FBeUJILEVBQXpCLEVBQTZCUSxLQUE3QixFQUFvQ0MsT0FBcEM7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBUyxXQUFVLGlCQUFuQjtBQUNDO0FBQ0MsZUFBVSxLQUFLVixLQUFMLENBQVdZO0FBRHRCO0FBREQsSUFERDtBQU9BOzs7RUF6QzJCLGdCQUFNQyxTLFdBQzNCQyxTLEdBQVk7QUFDbEJaLE9BQU0saUJBQUVhLE1BQUYsQ0FBU0MsVUFERztBQUVsQmIsY0FBYSxpQkFBRVksTUFBRixDQUFTQyxVQUZKO0FBR2xCZixLQUFJLGlCQUFFYyxNQUFGLENBQVNDLFVBSEs7QUFJbEJKLFdBQVUsaUJBQUVLLE1BQUYsQ0FBU0QsVUFKRDtBQUtsQlosZ0JBQWUsaUJBQUVjLElBQUYsQ0FBT0Y7QUFMSixDLFVBUVpHLFksR0FBZTtBQUNyQmhCLGNBQWEsT0FEUTtBQUVyQkMsZ0JBQWUseUJBQU0sQ0FBRTtBQUZGLEM7O2tCQW1DUkwsYyIsImZpbGUiOiJwYXR0ZXJuLXNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHB1cmUgZnJvbSAncHVyZS1yZW5kZXItZGVjb3JhdG9yJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHtwaWNrLCBpc0VxdWFsfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgUGF0dGVybkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL3BhdHRlcm4nO1xuXG5AcHVyZVxuQGF1dG9iaW5kXG5jbGFzcyBQYXR0ZXJuU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRlbnZpcm9ubWVudDogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRpZDogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRsb2NhdGlvbjogdC5vYmplY3QuaXNSZXF1aXJlZCxcblx0XHRvbkRhdGFSZXF1ZXN0OiB0LmZ1bmMuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0ZW52aXJvbm1lbnQ6ICdpbmRleCcsXG5cdFx0b25EYXRhUmVxdWVzdDogKCkgPT4ge31cblx0fTtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB7aWQsIGJhc2UsIGVudmlyb25tZW50fSA9IHRoaXMucHJvcHM7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFSZXF1ZXN0KGlkLCB7ZW52aXJvbm1lbnR9LCB7bG9hZGluZzogdHJ1ZSwgYmFzZX0pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRjb25zdCBuZXh0ID0gcGljayhuZXh0UHJvcHMsIFsnaWQnLCAnZW52aXJvbm1lbnQnXSk7XG5cdFx0Y29uc3QgY3VycmVudCA9IHBpY2sodGhpcy5wcm9wcywgWydpZCcsICdlbnZpcm9ubWVudCddKTtcblx0XHRjb25zdCBxdWVyeSA9IHtlbnZpcm9ubWVudDogbmV4dC5lbnZpcm9ubWVudH07XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtsb2FkaW5nOiBuZXh0LmlkICE9PSBjdXJyZW50LmlkLCBiYXNlOiBuZXh0UHJvcHMuYmFzZX07XG5cdFx0aWYgKG5leHRQcm9wcy50eXBlID09PSAncGF0dGVybicgJiYgIWlzRXF1YWwobmV4dCwgY3VycmVudCkpIHtcblx0XHRcdHRoaXMucHJvcHMub25EYXRhUmVxdWVzdChuZXh0LmlkLCBxdWVyeSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlRGF0YVJlcXVlc3QoaWQsIHF1ZXJ5LCBvcHRpb25zKSB7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFSZXF1ZXN0KGlkLCBxdWVyeSwgb3B0aW9ucyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhdHRlcm4tc2VjdGlvblwiPlxuXHRcdFx0XHQ8UGF0dGVybkNvbnRhaW5lclxuXHRcdFx0XHRcdGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuXHRcdFx0XHRcdC8+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXR0ZXJuU2VjdGlvbjtcbiJdfQ==