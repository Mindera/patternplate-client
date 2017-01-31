'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

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

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternControl = (0, _pureRenderDecorator2.default)(_class = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(PatternControl, _Component);

	function PatternControl() {
		(0, _classCallCheck3.default)(this, PatternControl);
		return (0, _possibleConstructorReturn3.default)(this, (PatternControl.__proto__ || (0, _getPrototypeOf2.default)(PatternControl)).apply(this, arguments));
	}

	(0, _createClass3.default)(PatternControl, [{
		key: 'handleClick',
		value: function handleClick(e) {
			e.preventDefault();
			var _props = this.props,
			    active = _props.active,
			    expand = _props.expand,
			    location = _props.location,
			    shortid = _props.shortid;

			var source = active ? null : shortid;
			var route = {
				pathname: location.pathname,
				query: (0, _extends5.default)({}, location.query, (0, _defineProperty3.default)({
					source: source
				}, 'source-expanded', expand))
			};
			this.context.router.replace(route);
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			var active = props.active,
			    location = props.location;

			var className = (0, _classnames2.default)('pattern-control', { active: active });
			var source = props.active ? null : props.shortid;

			var to = {
				pathname: location.pathname,
				query: (0, _extends5.default)({}, location.query, (0, _defineProperty3.default)({
					source: source
				}, 'source-expanded', props.expand))
			};

			return _react2.default.createElement(
				_reactRouter.Link,
				{
					to: to,
					className: className,
					disabled: props.disabled,
					onClick: this.handleClick,
					title: props.title
				},
				props.children || props.name
			);
		}
	}]);
	return PatternControl;
}(_react.Component), _class2.propTypes = {
	active: _react.PropTypes.bool.isRequired,
	base: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.any,
	disabled: _react.PropTypes.bool,
	expand: _react.PropTypes.bool,
	iconDescription: _react.PropTypes.string,
	location: _react.PropTypes.object.isRequired,
	name: _react.PropTypes.any.isRequired,
	shortid: _react.PropTypes.string.isRequired,
	title: _react.PropTypes.string
}, _class2.contextTypes = {
	router: _react.PropTypes.any
}, _temp)) || _class) || _class;

exports.default = PatternControl;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1jb250cm9sLmpzIl0sIm5hbWVzIjpbIlBhdHRlcm5Db250cm9sIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhY3RpdmUiLCJleHBhbmQiLCJsb2NhdGlvbiIsInNob3J0aWQiLCJzb3VyY2UiLCJyb3V0ZSIsInBhdGhuYW1lIiwicXVlcnkiLCJjb250ZXh0Iiwicm91dGVyIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsInRvIiwiZGlzYWJsZWQiLCJoYW5kbGVDbGljayIsInRpdGxlIiwiY2hpbGRyZW4iLCJuYW1lIiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJiYXNlIiwic3RyaW5nIiwiYW55IiwiaWNvbkRlc2NyaXB0aW9uIiwib2JqZWN0IiwiY29udGV4dFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBSU1BLGM7Ozs7Ozs7Ozs7OEJBa0JPQyxDLEVBQUc7QUFDZEEsS0FBRUMsY0FBRjtBQURjLGdCQUU4QixLQUFLQyxLQUZuQztBQUFBLE9BRVBDLE1BRk8sVUFFUEEsTUFGTztBQUFBLE9BRUNDLE1BRkQsVUFFQ0EsTUFGRDtBQUFBLE9BRVNDLFFBRlQsVUFFU0EsUUFGVDtBQUFBLE9BRW1CQyxPQUZuQixVQUVtQkEsT0FGbkI7O0FBR2QsT0FBTUMsU0FBU0osU0FBUyxJQUFULEdBQWdCRyxPQUEvQjtBQUNBLE9BQU1FLFFBQVE7QUFDYkMsY0FBVUosU0FBU0ksUUFETjtBQUViQyxzQ0FDSUwsU0FBU0ssS0FEYjtBQUVDSDtBQUZELDBCQUdzQkgsTUFIdEI7QUFGYSxJQUFkO0FBUUEsUUFBS08sT0FBTCxDQUFhQyxNQUFiLENBQW9CQyxPQUFwQixDQUE0QkwsS0FBNUI7QUFDQTs7OzJCQUVRO0FBQUEsT0FDRE4sS0FEQyxHQUNRLElBRFIsQ0FDREEsS0FEQztBQUFBLE9BRURDLE1BRkMsR0FFbUJELEtBRm5CLENBRURDLE1BRkM7QUFBQSxPQUVPRSxRQUZQLEdBRW1CSCxLQUZuQixDQUVPRyxRQUZQOztBQUdSLE9BQU1TLFlBQVksMEJBQVcsaUJBQVgsRUFBOEIsRUFBQ1gsY0FBRCxFQUE5QixDQUFsQjtBQUNBLE9BQU1JLFNBQVNMLE1BQU1DLE1BQU4sR0FBZSxJQUFmLEdBQXNCRCxNQUFNSSxPQUEzQzs7QUFFQSxPQUFNUyxLQUFLO0FBQ1ZOLGNBQVVKLFNBQVNJLFFBRFQ7QUFFVkMsc0NBQ0lMLFNBQVNLLEtBRGI7QUFFQ0g7QUFGRCwwQkFHc0JMLE1BQU1FLE1BSDVCO0FBRlUsSUFBWDs7QUFTQSxVQUNDO0FBQUE7QUFBQTtBQUNDLFNBQUlXLEVBREw7QUFFQyxnQkFBV0QsU0FGWjtBQUdDLGVBQVVaLE1BQU1jLFFBSGpCO0FBSUMsY0FBUyxLQUFLQyxXQUpmO0FBS0MsWUFBT2YsTUFBTWdCO0FBTGQ7QUFPRWhCLFVBQU1pQixRQUFOLElBQWtCakIsTUFBTWtCO0FBUDFCLElBREQ7QUFXQTs7OzZCQTFETUMsUyxHQUFZO0FBQ2xCbEIsU0FBUSxpQkFBRW1CLElBQUYsQ0FBT0MsVUFERztBQUVsQkMsT0FBTSxpQkFBRUMsTUFBRixDQUFTRixVQUZHO0FBR2xCSixXQUFVLGlCQUFFTyxHQUhNO0FBSWxCVixXQUFVLGlCQUFFTSxJQUpNO0FBS2xCbEIsU0FBUSxpQkFBRWtCLElBTFE7QUFNbEJLLGtCQUFpQixpQkFBRUYsTUFORDtBQU9sQnBCLFdBQVUsaUJBQUV1QixNQUFGLENBQVNMLFVBUEQ7QUFRbEJILE9BQU0saUJBQUVNLEdBQUYsQ0FBTUgsVUFSTTtBQVNsQmpCLFVBQVMsaUJBQUVtQixNQUFGLENBQVNGLFVBVEE7QUFVbEJMLFFBQU8saUJBQUVPO0FBVlMsQyxVQWFaSSxZLEdBQWU7QUFDckJqQixTQUFRLGlCQUFFYztBQURXLEM7O2tCQWdEUjNCLGMiLCJmaWxlIjoicGF0dGVybi1jb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHQsIENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcHVyZSBmcm9tICdwdXJlLXJlbmRlci1kZWNvcmF0b3InO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5cbkBwdXJlXG5AYXV0b2JpbmRcbmNsYXNzIFBhdHRlcm5Db250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRhY3RpdmU6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRcdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0Y2hpbGRyZW46IHQuYW55LFxuXHRcdGRpc2FibGVkOiB0LmJvb2wsXG5cdFx0ZXhwYW5kOiB0LmJvb2wsXG5cdFx0aWNvbkRlc2NyaXB0aW9uOiB0LnN0cmluZyxcblx0XHRsb2NhdGlvbjogdC5vYmplY3QuaXNSZXF1aXJlZCxcblx0XHRuYW1lOiB0LmFueS5pc1JlcXVpcmVkLFxuXHRcdHNob3J0aWQ6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0dGl0bGU6IHQuc3RyaW5nXG5cdH1cblxuXHRzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuXHRcdHJvdXRlcjogdC5hbnlcblx0fTtcblxuXHRoYW5kbGVDbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IHthY3RpdmUsIGV4cGFuZCwgbG9jYXRpb24sIHNob3J0aWR9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBzb3VyY2UgPSBhY3RpdmUgPyBudWxsIDogc2hvcnRpZDtcblx0XHRjb25zdCByb3V0ZSA9IHtcblx0XHRcdHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdC4uLmxvY2F0aW9uLnF1ZXJ5LFxuXHRcdFx0XHRzb3VyY2UsXG5cdFx0XHRcdFtgc291cmNlLWV4cGFuZGVkYF06IGV4cGFuZFxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlKHJvdXRlKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7cHJvcHN9ID0gdGhpcztcblx0XHRjb25zdCB7YWN0aXZlLCBsb2NhdGlvbn0gPSBwcm9wcztcblx0XHRjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKCdwYXR0ZXJuLWNvbnRyb2wnLCB7YWN0aXZlfSk7XG5cdFx0Y29uc3Qgc291cmNlID0gcHJvcHMuYWN0aXZlID8gbnVsbCA6IHByb3BzLnNob3J0aWQ7XG5cblx0XHRjb25zdCB0byA9IHtcblx0XHRcdHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdC4uLmxvY2F0aW9uLnF1ZXJ5LFxuXHRcdFx0XHRzb3VyY2UsXG5cdFx0XHRcdFtgc291cmNlLWV4cGFuZGVkYF06IHByb3BzLmV4cGFuZFxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmtcblx0XHRcdFx0dG89e3RvfVxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdFx0ZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuXHRcdFx0XHR0aXRsZT17cHJvcHMudGl0bGV9XG5cdFx0XHRcdD5cblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVuIHx8IHByb3BzLm5hbWV9XG5cdFx0XHQ8L0xpbms+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXR0ZXJuQ29udHJvbDtcbiJdfQ==