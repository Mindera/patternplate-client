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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(Block, _Component);

	function Block() {
		(0, _classCallCheck3.default)(this, Block);
		return (0, _possibleConstructorReturn3.default)(this, (Block.__proto__ || (0, _getPrototypeOf2.default)(Block)).apply(this, arguments));
	}

	(0, _createClass3.default)(Block, [{
		key: 'handleClick',
		value: function handleClick(e) {
			e.preventDefault();
			this.props.onClick(this.props);
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			var location = props.location,
			    base = props.base;

			var className = 'pattern-dependencies__' + props.type;
			var orientation = props.x < 50 ? 1 : 0;

			var onMouseEnter = function onMouseEnter() {
				return props.onMouseEnter(props.blockId);
			};
			var onMouseLeave = function onMouseLeave() {
				return props.onMouseLeave(props.blockId);
			};

			var block = {
				x: props.x + props.width * orientation,
				y: props.y + props.height / 2
			};

			var target = props.connect;

			var from = orientation === 1 ? block : target;
			var to = orientation === 1 ? target : block;

			var textX = props.type === 'root' ? 50 : props.x + props.width / 2;
			var textY = props.y + props.height / 2;

			var href = [base + 'pattern/' + props.id, _querystring2.default.stringify(location.query)].join('?');

			return _react2.default.createElement(
				'g',
				{ className: 'block-group', onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
				_react2.default.createElement(
					'a',
					{ xlinkHref: href, className: className },
					_react2.default.createElement('rect', {
						className: className,
						x: props.x,
						y: props.y,
						width: props.width,
						height: props.height,
						onClick: this.handleClick
					})
				),
				props.connect && _react2.default.createElement(_connection2.default, {
					labels: [props.id, props.localName],
					from: from,
					to: to,
					n: target.n || 20
				}),
				props.name && _react2.default.createElement(
					'a',
					{ xlinkHref: href },
					_react2.default.createElement(
						'text',
						{
							x: textX,
							y: textY,
							width: props.width,
							height: props.height,
							className: 'block-name'
						},
						props.name
					)
				)
			);
		}
	}]);
	return Block;
}(_react.Component), _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired,
	id: _react.PropTypes.string.isRequired,
	type: _react.PropTypes.string.isRequired,
	x: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
	y: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	connect: _react.PropTypes.shape({
		x: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
		y: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
		n: _react.PropTypes.number
	}),
	onClick: _react.PropTypes.func.isRequired,
	location: _react.PropTypes.shape({
		pathname: _react.PropTypes.string,
		query: _react.PropTypes.any
	}).isRequired
}, _class2.defaultProps = {
	type: 'block',
	width: 8,
	height: 8,
	onClick: function onClick() {},
	onMouseEnter: function onMouseEnter() {},
	onMouseLeave: function onMouseLeave() {}
}, _temp)) || _class;

exports.default = Block;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vYmxvY2suanMiXSwibmFtZXMiOlsiQmxvY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIm9uQ2xpY2siLCJsb2NhdGlvbiIsImJhc2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwib3JpZW50YXRpb24iLCJ4Iiwib25Nb3VzZUVudGVyIiwiYmxvY2tJZCIsIm9uTW91c2VMZWF2ZSIsImJsb2NrIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidGFyZ2V0IiwiY29ubmVjdCIsImZyb20iLCJ0byIsInRleHRYIiwidGV4dFkiLCJocmVmIiwiaWQiLCJzdHJpbmdpZnkiLCJxdWVyeSIsImpvaW4iLCJoYW5kbGVDbGljayIsImxvY2FsTmFtZSIsIm4iLCJuYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsInNoYXBlIiwiZnVuYyIsInBhdGhuYW1lIiwiYW55IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7OEJBK0JSQyxDLEVBQUc7QUFDZEEsS0FBRUMsY0FBRjtBQUNBLFFBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixLQUFLRCxLQUF4QjtBQUNBOzs7MkJBRVE7QUFBQSxPQUNEQSxLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDO0FBQUEsT0FFREUsUUFGQyxHQUVpQkYsS0FGakIsQ0FFREUsUUFGQztBQUFBLE9BRVNDLElBRlQsR0FFaUJILEtBRmpCLENBRVNHLElBRlQ7O0FBR1IsT0FBTUMsdUNBQXFDSixNQUFNSyxJQUFqRDtBQUNBLE9BQU1DLGNBQWNOLE1BQU1PLENBQU4sR0FBVSxFQUFWLEdBQWUsQ0FBZixHQUFtQixDQUF2Qzs7QUFFQSxPQUFNQyxlQUFlLFNB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QVosRUFBa0NGLFVBRHJCO0FBRWhCbkIsS0FBRyxpQkFBRW9CLFNBQUYsQ0FBWSxDQUFDLGlCQUFFRixNQUFILEVBQVcsaUJBQUVHLE1BQWIsQ0FBWixFQUFrQ0YsVUFGckI7QUFHaEJKLEtBQUcsaUJBQUVNO0FBSFcsRUFBUixDQVRTO0FBY2xCakMsVUFBUyxpQkFBRW1DLElBQUYsQ0FBT0osVUFkRTtBQWVsQjlCLFdBQVUsaUJBQUVpQyxLQUFGLENBQVE7QUFDakJFLFlBQVUsaUJBQUVOLE1BREs7QUFFakJQLFNBQU8saUJBQUVjO0FBRlEsRUFBUixFQUdQTjtBQWxCZSxDLFVBcUJaTyxZLEdBQWU7QUFDckJsQyxPQUFNLE9BRGU7QUFFckJPLFFBQU8sQ0FGYztBQUdyQkUsU0FBUSxDQUhhO0FBSXJCYixVQUFTLG1CQUFNLENBQUUsQ0FKSTtBQUtyQk8sZUFBYyx3QkFBTSxDQUFFLENBTEQ7QUFNckJFLGVBQWMsd0JBQU0sQ0FBRTtBQU5ELEM7O2tCQXRCRmIsSyIsImZpbGUiOiJibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0LCBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XG5cbkBhdXRvYmluZFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0bmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRpZDogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR0eXBlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHg6IHQub25lT2ZUeXBlKFt0LnN0cmluZywgdC5udW1iZXJdKS5pc1JlcXVpcmVkLFxuXHRcdHk6IHQub25lT2ZUeXBlKFt0LnN0cmluZywgdC5udW1iZXJdKS5pc1JlcXVpcmVkLFxuXHRcdHdpZHRoOiB0Lm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdGhlaWdodDogdC5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRjb25uZWN0OiB0LnNoYXBlKHtcblx0XHRcdHg6IHQub25lT2ZUeXBlKFt0LnN0cmluZywgdC5udW1iZXJdKS5pc1JlcXVpcmVkLFxuXHRcdFx0eTogdC5vbmVPZlR5cGUoW3Quc3RyaW5nLCB0Lm51bWJlcl0pLmlzUmVxdWlyZWQsXG5cdFx0XHRuOiB0Lm51bWJlclxuXHRcdH0pLFxuXHRcdG9uQ2xpY2s6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdGxvY2F0aW9uOiB0LnNoYXBlKHtcblx0XHRcdHBhdGhuYW1lOiB0LnN0cmluZyxcblx0XHRcdHF1ZXJ5OiB0LmFueVxuXHRcdH0pLmlzUmVxdWlyZWRcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdHR5cGU6ICdibG9jaycsXG5cdFx0d2lkdGg6IDgsXG5cdFx0aGVpZ2h0OiA4LFxuXHRcdG9uQ2xpY2s6ICgpID0+IHt9LFxuXHRcdG9uTW91c2VFbnRlcjogKCkgPT4ge30sXG5cdFx0b25Nb3VzZUxlYXZlOiAoKSA9PiB7fVxuXHR9O1xuXG5cdGhhbmRsZUNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdGNvbnN0IHtsb2NhdGlvbiwgYmFzZX0gPSBwcm9wcztcblx0XHRjb25zdCBjbGFzc05hbWUgPSBgcGF0dGVybi1kZXBlbmRlbmNpZXNfXyR7cHJvcHMudHlwZX1gO1xuXHRcdGNvbnN0IG9yaWVudGF0aW9uID0gcHJvcHMueCA8IDUwID8gMSA6IDA7XG5cblx0XHRjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiBwcm9wcy5vbk1vdXNlRW50ZXIocHJvcHMuYmxvY2tJZCk7XG5cdFx0Y29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4gcHJvcHMub25Nb3VzZUxlYXZlKHByb3BzLmJsb2NrSWQpO1xuXG5cdFx0Y29uc3QgYmxvY2sgPSB7XG5cdFx0XHR4OiBwcm9wcy54ICsgcHJvcHMud2lkdGggKiBvcmllbnRhdGlvbixcblx0XHRcdHk6IHByb3BzLnkgKyAocHJvcHMuaGVpZ2h0IC8gMilcblx0XHR9O1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gcHJvcHMuY29ubmVjdDtcblxuXHRcdGNvbnN0IGZyb20gPSBvcmllbnRhdGlvbiA9PT0gMSA/IGJsb2NrIDogdGFyZ2V0O1xuXHRcdGNvbnN0IHRvID0gb3JpZW50YXRpb24gPT09IDEgPyB0YXJnZXQgOiBibG9jaztcblxuXHRcdGNvbnN0IHRleHRYID0gcHJvcHMudHlwZSA9PT0gJ3Jvb3QnID8gNTAgOiBwcm9wcy54ICsgcHJvcHMud2lkdGggLyAyO1xuXHRcdGNvbnN0IHRleHRZID0gcHJvcHMueSArIHByb3BzLmhlaWdodCAvIDI7XG5cblx0XHRjb25zdCBocmVmID0gW1xuXHRcdFx0YCR7YmFzZX1wYXR0ZXJuLyR7cHJvcHMuaWR9YCxcblx0XHRcdHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShsb2NhdGlvbi5xdWVyeSlcblx0XHRdLmpvaW4oJz8nKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZyBjbGFzc05hbWU9XCJibG9jay1ncm91cFwiIG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XG5cdFx0XHRcdDxhIHhsaW5rSHJlZj17aHJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0XHRcdDxyZWN0XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdFx0XHRcdHg9e3Byb3BzLnh9XG5cdFx0XHRcdFx0XHR5PXtwcm9wcy55fVxuXHRcdFx0XHRcdFx0d2lkdGg9e3Byb3BzLndpZHRofVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXtwcm9wcy5oZWlnaHR9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvcHMuY29ubmVjdCAmJlxuXHRcdFx0XHRcdFx0PENvbm5lY3Rpb25cblx0XHRcdFx0XHRcdFx0bGFiZWxzPXtbcHJvcHMuaWQsIHByb3BzLmxvY2FsTmFtZV19XG5cdFx0XHRcdFx0XHRcdGZyb209e2Zyb219XG5cdFx0XHRcdFx0XHRcdHRvPXt0b31cblx0XHRcdFx0XHRcdFx0bj17dGFyZ2V0Lm4gfHwgMjB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3BzLm5hbWUgJiZcblx0XHRcdFx0XHRcdDxhIHhsaW5rSHJlZj17aHJlZn0+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0XG5cdFx0XHRcdFx0XHRcdFx0eD17dGV4dFh9XG5cdFx0XHRcdFx0XHRcdFx0eT17dGV4dFl9XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9e3Byb3BzLndpZHRofVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLW5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7cHJvcHMubmFtZX1cblx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2c+XG5cdFx0KTtcblx0fVxufVxuIl19