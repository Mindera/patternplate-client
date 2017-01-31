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

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _markBlock = require('../../actions/mark-block');

var _markBlock2 = _interopRequireDefault(_markBlock);

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

var _blockColumn = require('./block-column');

var _blockColumn2 = _interopRequireDefault(_blockColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternDependencies = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(PatternDependencies, _Component);

	function PatternDependencies() {
		(0, _classCallCheck3.default)(this, PatternDependencies);
		return (0, _possibleConstructorReturn3.default)(this, (PatternDependencies.__proto__ || (0, _getPrototypeOf2.default)(PatternDependencies)).apply(this, arguments));
	}

	(0, _createClass3.default)(PatternDependencies, [{
		key: 'handleClick',
		value: function handleClick(props) {
			var id = props.id,
			    base = props.base;
			var location = this.props.location;
			var router = this.context.router;

			router.push({
				pathname: base + 'pattern/' + id,
				query: location.query
			});
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(id) {
			var dispatch = this.props.dispatch;

			dispatch((0, _markBlock2.default)({ id: id, active: true }));
		}
	}, {
		key: 'handleMouseLeave',
		value: function handleMouseLeave(id) {
			var dispatch = this.props.dispatch;

			dispatch((0, _markBlock2.default)({ id: id, active: false }));
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    activeBlock = _props.activeBlock,
			    passedClassName = _props.className,
			    dependencies = _props.dependencies,
			    dependents = _props.dependents,
			    id = _props.id,
			    base = _props.base,
			    name = _props.name,
			    location = _props.location;


			var className = (0, _classnames2.default)('pattern-dependencies', passedClassName);

			var blockHeight = 4;
			var center = 50;
			var rootWidth = Math.max(5, name.length * 1.25);
			var paddingX = 1;
			var rootY = 1;
			var columnY = 2;
			var offsetY = Math.max(rootY, columnY);
			var rootHeight = blockHeight;
			var rootYCenter = rootY + rootHeight / 2;
			var blockSpace = blockHeight + 1;
			var viewBoxHeight = Math.max(Math.max(dependencies.length, dependents.length) * blockSpace + offsetY + 2, blockSpace + offsetY + 2);

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(
					'svg',
					{ viewBox: '0 0 100 ' + viewBoxHeight, className: 'pattern-dependencies__stage' },
					_react2.default.createElement(_blockColumn2.default, {
						activeBlock: activeBlock,
						items: dependencies,
						base: base,
						y: columnY,
						x: paddingX,
						height: blockHeight,
						onClick: this.handleClick,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave,
						description: 'provides for',
						location: location,
						connect: { x: center - rootWidth / 2, y: rootYCenter }
					}),
					_react2.default.createElement(_blockColumn2.default, {
						activeBlock: activeBlock,
						items: dependents,
						base: base,
						y: columnY,
						x: 100,
						height: blockHeight,
						onClick: this.handleClick,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave,
						align: 'right',
						description: 'provides for',
						location: location,
						connect: { x: center + rootWidth / 2, y: rootYCenter }
					}),
					_react2.default.createElement(_block2.default, {
						type: 'root',
						name: name,
						id: id,
						x: 50 - rootWidth / 2,
						y: rootY,
						height: rootHeight,
						width: rootWidth,
						location: location,
						base: base
					})
				)
			);
		}
	}]);
	return PatternDependencies;
}(_react.Component), _class2.propTypes = {
	activeBlock: _react.PropTypes.string,
	base: _react.PropTypes.string.isRequired,
	className: _react.PropTypes.string,
	id: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired,
	dependencies: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		name: _react.PropTypes.string.isRequired,
		id: _react.PropTypes.string.isRequired
	})).isRequired,
	dependents: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		name: _react.PropTypes.string.isRequired,
		id: _react.PropTypes.string.isRequired
	})).isRequired,
	location: _react.PropTypes.shape({
		pathname: _react.PropTypes.string,
		query: _react.PropTypes.any
	})
}, _class2.contextTypes = {
	router: _react.PropTypes.any
}, _temp)) || _class;

exports.default = (0, _reactRedux.connect)(function (_ref) {
	var activeBlock = _ref.activeBlock;

	return { activeBlock: activeBlock };
})(PatternDependencies);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1kZXBlbmRlbmNpZXMuanMiXSwibmFtZXMiOlsiUGF0dGVybkRlcGVuZGVuY2llcyIsInByb3BzIiwiaWQiLCJiYXNlIiwibG9jYXRpb24iLCJyb3V0ZXIiLCJjb250ZXh0IiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJkaXNwYXRjaCIsImFjdGl2ZSIsImFjdGl2ZUJsb2NrIiwicGFzc2VkQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGVwZW5kZW5jaWVzIiwiZGVwZW5kZW50cyIsIm5hbWUiLCJibG9ja0hlaWdodCIsImNlbnRlciIsInJvb3RXaWR0aCIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJwYWRkaW5nWCIsInJvb3RZIiwiY29sdW1uWSIsIm9mZnNldFkiLCJyb290SGVpZ2h0Iiwicm9vdFlDZW50ZXIiLCJibG9ja1NwYWNlIiwidmlld0JveEhlaWdodCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJ4IiwieSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic2hhcGUiLCJhbnkiLCJjb250ZXh0VHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdNQSxtQjs7Ozs7Ozs7Ozs4QkF5Qk9DLEssRUFBTztBQUFBLE9BQ1hDLEVBRFcsR0FDQ0QsS0FERCxDQUNYQyxFQURXO0FBQUEsT0FDUEMsSUFETyxHQUNDRixLQURELENBQ1BFLElBRE87QUFBQSxPQUVYQyxRQUZXLEdBRUMsS0FBS0gsS0FGTixDQUVYRyxRQUZXO0FBQUEsT0FHWEMsTUFIVyxHQUdELEtBQUtDLE9BSEosQ0FHWEQsTUFIVzs7QUFJbEJBLFVBQU9FLElBQVAs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aW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHQsIENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgam9pbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuXG5pbXBvcnQgbWFya0Jsb2NrIGZyb20gJy4uLy4uL2FjdGlvbnMvbWFyay1ibG9jayc7XG5pbXBvcnQgQmxvY2sgZnJvbSAnLi9ibG9jayc7XG5pbXBvcnQgQmxvY2tDb2x1bW4gZnJvbSAnLi9ibG9jay1jb2x1bW4nO1xuXG5AYXV0b2JpbmRcbmNsYXNzIFBhdHRlcm5EZXBlbmRlbmNpZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGFjdGl2ZUJsb2NrOiB0LnN0cmluZyxcblx0XHRiYXNlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGNsYXNzTmFtZTogdC5zdHJpbmcsXG5cdFx0aWQ6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0bmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRkZXBlbmRlbmNpZXM6IHQuYXJyYXlPZih0LnNoYXBlKHtcblx0XHRcdG5hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRpZDogdC5zdHJpbmcuaXNSZXF1aXJlZFxuXHRcdH0pKS5pc1JlcXVpcmVkLFxuXHRcdGRlcGVuZGVudHM6IHQuYXJyYXlPZih0LnNoYXBlKHtcblx0XHRcdG5hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRpZDogdC5zdHJpbmcuaXNSZXF1aXJlZFxuXHRcdH0pKS5pc1JlcXVpcmVkLFxuXHRcdGxvY2F0aW9uOiB0LnNoYXBlKHtcblx0XHRcdHBhdGhuYW1lOiB0LnN0cmluZyxcblx0XHRcdHF1ZXJ5OiB0LmFueVxuXHRcdH0pXG5cdH07XG5cblx0c3RhdGljIGNvbnRleHRUeXBlcyA9IHtcblx0XHRyb3V0ZXI6IHQuYW55XG5cdH07XG5cblx0aGFuZGxlQ2xpY2socHJvcHMpIHtcblx0XHRjb25zdCB7aWQsIGJhc2V9ID0gcHJvcHM7XG5cdFx0Y29uc3Qge2xvY2F0aW9ufSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qge3JvdXRlcn0gPSB0aGlzLmNvbnRleHQ7XG5cdFx0cm91dGVyLnB1c2goe1xuXHRcdFx0cGF0aG5hbWU6IGAke2Jhc2V9cGF0dGVybi8ke2lkfWAsXG5cdFx0XHRxdWVyeTogbG9jYXRpb24ucXVlcnlcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZU1vdXNlRW50ZXIoaWQpIHtcblx0XHRjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wcztcblx0XHRkaXNwYXRjaChtYXJrQmxvY2soe2lkLCBhY3RpdmU6IHRydWV9KSk7XG5cdH1cblxuXHRoYW5kbGVNb3VzZUxlYXZlKGlkKSB7XG5cdFx0Y29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHM7XG5cdFx0ZGlzcGF0Y2gobWFya0Jsb2NrKHtpZCwgYWN0aXZlOiBmYWxzZX0pKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhY3RpdmVCbG9jayxcblx0XHRcdGNsYXNzTmFtZTogcGFzc2VkQ2xhc3NOYW1lLFxuXHRcdFx0ZGVwZW5kZW5jaWVzLFxuXHRcdFx0ZGVwZW5kZW50cyxcblx0XHRcdGlkLFxuXHRcdFx0YmFzZSxcblx0XHRcdG5hbWUsXG5cdFx0XHRsb2NhdGlvblxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gam9pbigncGF0dGVybi1kZXBlbmRlbmNpZXMnLCBwYXNzZWRDbGFzc05hbWUpO1xuXG5cdFx0Y29uc3QgYmxvY2tIZWlnaHQgPSA0O1xuXHRcdGNvbnN0IGNlbnRlciA9IDUwO1xuXHRcdGNvbnN0IHJvb3RXaWR0aCA9IE1hdGgubWF4KDUsIG5hbWUubGVuZ3RoICogMS4yNSk7XG5cdFx0Y29uc3QgcGFkZGluZ1ggPSAxO1xuXHRcdGNvbnN0IHJvb3RZID0gMTtcblx0XHRjb25zdCBjb2x1bW5ZID0gMjtcblx0XHRjb25zdCBvZmZzZXRZID0gTWF0aC5tYXgocm9vdFksIGNvbHVtblkpO1xuXHRcdGNvbnN0IHJvb3RIZWlnaHQgPSBibG9ja0hlaWdodDtcblx0XHRjb25zdCByb290WUNlbnRlciA9IHJvb3RZICsgcm9vdEhlaWdodCAvIDI7XG5cdFx0Y29uc3QgYmxvY2tTcGFjZSA9IGJsb2NrSGVpZ2h0ICsgMTtcblx0XHRjb25zdCB2aWV3Qm94SGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5tYXgoZGVwZW5kZW5jaWVzLmxlbmd0aCwgZGVwZW5kZW50cy5sZW5ndGgpICogYmxvY2tTcGFjZSArIG9mZnNldFkgKyAyLCBibG9ja1NwYWNlICsgb2Zmc2V0WSArIDIpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0XHQ8c3ZnIHZpZXdCb3g9e2AwIDAgMTAwICR7dmlld0JveEhlaWdodH1gfSBjbGFzc05hbWU9XCJwYXR0ZXJuLWRlcGVuZGVuY2llc19fc3RhZ2VcIj5cblx0XHRcdFx0XHQ8QmxvY2tDb2x1bW5cblx0XHRcdFx0XHRcdGFjdGl2ZUJsb2NrPXthY3RpdmVCbG9ja31cblx0XHRcdFx0XHRcdGl0ZW1zPXtkZXBlbmRlbmNpZXN9XG5cdFx0XHRcdFx0XHRiYXNlPXtiYXNlfVxuXHRcdFx0XHRcdFx0eT17Y29sdW1uWX1cblx0XHRcdFx0XHRcdHg9e3BhZGRpbmdYfVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXtibG9ja0hlaWdodH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249XCJwcm92aWRlcyBmb3JcIlxuXHRcdFx0XHRcdFx0bG9jYXRpb249e2xvY2F0aW9ufVxuXHRcdFx0XHRcdFx0Y29ubmVjdD17e3g6IGNlbnRlciAtIHJvb3RXaWR0aCAvIDIsIHk6IHJvb3RZQ2VudGVyfX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJsb2NrQ29sdW1uXG5cdFx0XHRcdFx0XHRhY3RpdmVCbG9jaz17YWN0aXZlQmxvY2t9XG5cdFx0XHRcdFx0XHRpdGVtcz17ZGVwZW5kZW50c31cblx0XHRcdFx0XHRcdGJhc2U9e2Jhc2V9XG5cdFx0XHRcdFx0XHR5PXtjb2x1bW5ZfVxuXHRcdFx0XHRcdFx0eD17MTAwfVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXtibG9ja0hlaWdodH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuXHRcdFx0XHRcdFx0YWxpZ249XCJyaWdodFwiXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj1cInByb3ZpZGVzIGZvclwiXG5cdFx0XHRcdFx0XHRsb2NhdGlvbj17bG9jYXRpb259XG5cdFx0XHRcdFx0XHRjb25uZWN0PXt7eDogY2VudGVyICsgcm9vdFdpZHRoIC8gMiwgeTogcm9vdFlDZW50ZXJ9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QmxvY2tcblx0XHRcdFx0XHRcdHR5cGU9XCJyb290XCJcblx0XHRcdFx0XHRcdG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRpZD17aWR9XG5cdFx0XHRcdFx0XHR4PXs1MCAtIHJvb3RXaWR0aCAvIDJ9XG5cdFx0XHRcdFx0XHR5PXtyb290WX1cblx0XHRcdFx0XHRcdGhlaWdodD17cm9vdEhlaWdodH1cblx0XHRcdFx0XHRcdHdpZHRoPXtyb290V2lkdGh9XG5cdFx0XHRcdFx0XHRsb2NhdGlvbj17bG9jYXRpb259XG5cdFx0XHRcdFx0XHRiYXNlPXtiYXNlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHthY3RpdmVCbG9ja30pID0+IHtcblx0cmV0dXJuIHthY3RpdmVCbG9ja307XG59KShQYXR0ZXJuRGVwZW5kZW5jaWVzKTtcbiJdfQ==