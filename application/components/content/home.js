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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdown = require('../../containers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Messages from './messages';
// import pure from 'pure-render-decorator';

var Home = (_temp = _class = function (_Component) {
	(0, _inherits3.default)(Home, _Component);

	function Home() {
		(0, _classCallCheck3.default)(this, Home);
		return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
	}

	(0, _createClass3.default)(Home, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    readme = _props.readme,
			    base = _props.base;

			return _react2.default.createElement(
				'div',
				{ className: 'application-container application-container--home' },
				_react2.default.createElement(_markdown2.default, { source: readme, base: base, className: 'home' })
			);
		}
	}]);
	return Home;
}(_react.Component), _class.propTypes = {
	readme: _react.PropTypes.string.isRequired,
	base: _react.PropTypes.string.isRequired
}, _temp);
exports.default = Home;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbnRlbnQvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJyZWFkbWUiLCJiYXNlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7O0lBRU1BLEk7Ozs7Ozs7Ozs7MkJBTUk7QUFBQSxnQkFDZSxLQUFLQyxLQURwQjtBQUFBLE9BQ0RDLE1BREMsVUFDREEsTUFEQztBQUFBLE9BQ09DLElBRFAsVUFDT0EsSUFEUDs7QUFFUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsbURBQWY7QUFDQyx3REFBVSxRQUFRRCxNQUFsQixFQUEwQixNQUFNQyxJQUFoQyxFQUFzQyxXQUFVLE1BQWhEO0FBREQsSUFERDtBQUtBOzs7NEJBWk1DLFMsR0FBWTtBQUNsQkYsU0FBUSxpQkFBRUcsTUFBRixDQUFTQyxVQURDO0FBRWxCSCxPQUFNLGlCQUFFRSxNQUFGLENBQVNDO0FBRkcsQztrQkFlTE4sSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvbWFya2Rvd24nO1xuXG4vLyBpbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcyc7XG4vLyBpbXBvcnQgcHVyZSBmcm9tICdwdXJlLXJlbmRlci1kZWNvcmF0b3InO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRyZWFkbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7cmVhZG1lLCBiYXNlfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwbGljYXRpb24tY29udGFpbmVyIGFwcGxpY2F0aW9uLWNvbnRhaW5lci0taG9tZVwiPlxuXHRcdFx0XHQ8TWFya2Rvd24gc291cmNlPXtyZWFkbWV9IGJhc2U9e2Jhc2V9IGNsYXNzTmFtZT1cImhvbWVcIi8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0=