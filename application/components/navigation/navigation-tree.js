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

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _navigationItem = require('./navigation-item');

var _navigationItem2 = _interopRequireDefault(_navigationItem);

var _augmentHierarchy = require('../../utils/augment-hierarchy');

var _augmentHierarchy2 = _interopRequireDefault(_augmentHierarchy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationTree = (0, _pureRenderDecorator2.default)(_class = (_temp2 = _class2 = function (_Component) {
	(0, _inherits3.default)(NavigationTree, _Component);

	function NavigationTree() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, NavigationTree);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NavigationTree.__proto__ || (0, _getPrototypeOf2.default)(NavigationTree)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'NavigationTree', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(NavigationTree, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props;

			var _getAugmentedChildren = (0, _augmentHierarchy2.default)(props.data, props.hierarchy),
			    folders = _getAugmentedChildren.folders,
			    patterns = _getAugmentedChildren.patterns;

			return _react2.default.createElement(
				_reactAddonsCssTransitionGroup2.default,
				{
					component: 'ul',
					className: 'navigation-tree',
					transitionName: 'pattern-content-transition',
					transitionEnterTimeout: 300,
					transitionLeaveTimeout: 300
				},
				props.children,
				folders.map(function (folder) {
					var active = (0, _lodash.startsWith)(props.activePattern, folder.id);

					return _react2.default.createElement(
						_navigationItem2.default,
						{
							active: active || folder.expanded,
							base: props.base,
							id: folder.id,
							key: folder.id,
							name: folder.displayName,
							onClick: _this2.handleFolderClick,
							query: props.query,
							searchQuery: props.searchQuery,
							symbol: folder.icon,
							symbolActive: folder.iconActive,
							type: 'directory',
							hide: props.hide
						},
						_react2.default.createElement(NavigationTree, {
							activePattern: props.activePattern,
							base: props.base,
							data: folder.children,
							hierarchy: props.hierarchy,
							id: folder.id,
							query: props.query,
							searchQuery: props.searchQuery,
							hide: props.hide
						})
					);
				}),
				patterns.map(function (pattern) {
					var displayName = pattern.displayName,
					    expanded = pattern.expanded,
					    type = pattern.type,
					    manifest = pattern.manifest;
					var _manifest$options = manifest.options,
					    options = _manifest$options === undefined ? {} : _manifest$options;
					var _options$hidden = options.hidden,
					    hidden = _options$hidden === undefined ? false : _options$hidden;

					var hideItem = props.hide ? hidden : false;

					return _react2.default.createElement(_navigationItem2.default, {
						active: props.activePattern === pattern.id || expanded,
						base: props.base,
						hidden: hideItem,
						id: pattern.id,
						key: pattern.id,
						name: displayName,
						query: props.query,
						ref: _this2.getActiveReference,
						searchQuery: props.searchQuery,
						symbol: type,
						type: type,
						hide: props.hide
					});
				})
			);
		}
	}]);
	return NavigationTree;
}(_react.Component), _class2.propTypes = {
	id: _react.PropTypes.string,
	activePattern: _react.PropTypes.string,
	base: _react.PropTypes.string.isRequired,
	data: _react.PropTypes.object,
	hide: _react.PropTypes.bool.isRequired,
	query: _react.PropTypes.object.isRequired,
	searchQuery: _react.PropTypes.string,
	children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.arrayOf(_react.PropTypes.node)]),
	config: _react.PropTypes.object,
	hierarchy: _react.PropTypes.object
}, _temp2)) || _class;

exports.default = NavigationTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi10cmVlLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25UcmVlIiwiZGlzcGxheU5hbWUiLCJwcm9wcyIsImRhdGEiLCJoaWVyYXJjaHkiLCJmb2xkZXJzIiwicGF0dGVybnMiLCJjaGlsZHJlbiIsIm1hcCIsImFjdGl2ZSIsImFjdGl2ZVBhdHRlcm4iLCJmb2xkZXIiLCJpZCIsImV4cGFuZGVkIiwiYmFzZSIsImhhbmRsZUZvbGRlckNsaWNrIiwicXVlcnkiLCJzZWFyY2hRdWVyeSIsImljb24iLCJpY29uQWN0aXZlIiwiaGlkZSIsInBhdHRlcm4iLCJ0eXBlIiwibWFuaWZlc3QiLCJvcHRpb25zIiwiaGlkZGVuIiwiaGlkZUl0ZW0iLCJnZXRBY3RpdmVSZWZlcmVuY2UiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYm9vbCIsIm9uZU9mVHlwZSIsIm5vZGUiLCJhcnJheU9mIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0lBR01BLGM7Ozs7Ozs7Ozs7Ozs7OzBOQUNMQyxXLEdBQWMsZ0I7Ozs7OzJCQWtCTDtBQUFBOztBQUFBLE9BQ0RDLEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7O0FBQUEsK0JBRW9CLGdDQUFxQkEsTUFBTUMsSUFBM0IsRUFBaUNELE1BQU1FLFNBQXZDLENBRnBCO0FBQUEsT0FFREMsT0FGQyx5QkFFREEsT0FGQztBQUFBLE9BRVFDLFFBRlIseUJBRVFBLFFBRlI7O0FBSVIsVUFDQztBQUFBO0FBQUE7QUFDQyxnQkFBVSxJQURYO0FBRUMsZ0JBQVUsaUJBRlg7QUFHQyxxQkFBZSw0QkFIaEI7QUFJQyw2QkFBd0IsR0FKekI7QUFLQyw2QkFBd0I7QUFMekI7QUFPRUosVUFBTUssUUFQUjtBQVNFRixZQUFRRyxHQUFSLENBQVksa0JBQVU7QUFDckIsU0FBTUMsU0FBUyx3QkFBV1AsTUFBTVEsYUFBakIsRUFBZ0NDLE9BQU9DLEVBQXZDLENBQWY7O0FBRUEsWUFDQztBQUFBO0FBQUE7QUFDQyxlQUFRSCxVQUFVRSxPQUFPRSxRQUQxQjtBQUVDLGFBQU1YLE1BQU1ZLElBRmI7QUFHQyxXQUFJSCxPQUFPQyxFQUhaO0FBSUMsWUFBS0QsT0FBT0MsRUFKYjtBQUtDLGFBQU1ELE9BQU9WLFdBTGQ7QUFNQyxnQkFBUyxPQUFLYyxpQkFOZjtBQU9DLGNBQU9iLE1BQU1jLEtBUGQ7QUFRQyxvQkFBYWQsTUFBTWUsV0FScEI7QUFTQyxlQUFRTixPQUFPTyxJQVRoQjtBQVVDLHFCQUFjUCxPQUFPUSxVQVZ0QjtBQVdDLGFBQUssV0FYTjtBQVlDLGFBQU1qQixNQUFNa0I7QUFaYjtBQWNDLG9DQUFDLGNBQUQ7QUFDQyxzQkFBZWxCLE1BQU1RLGFBRHRCO0FBRUMsYUFBTVIsTUFBTVksSUFGYjtBQUdDLGFBQU1ILE9BQU9KLFFBSGQ7QUFJQyxrQkFBV0wsTUFBTUUsU0FKbEI7QUFLQyxXQUFJTyxPQUFPQyxFQUxaO0FBTUMsY0FBT1YsTUFBTWMsS0FOZDtBQU9DLG9CQUFhZCxNQUFNZSxXQVBwQjtBQVFDLGFBQU1mLE1BQU1rQjtBQVJiO0FBZEQsTUFERDtBQTJCQSxLQTlCRCxDQVRGO0FBMENFZCxhQUFTRSxHQUFULENBQWEsbUJBQVc7QUFBQSxTQUV0QlAsV0FGc0IsR0FNbkJvQixPQU5tQixDQUV0QnBCLFdBRnNCO0FBQUEsU0FHdEJZLFFBSHNCLEdBTW5CUSxPQU5tQixDQUd0QlIsUUFIc0I7QUFBQSxTQUl0QlMsSUFKc0IsR0FNbkJELE9BTm1CLENBSXRCQyxJQUpzQjtBQUFBLFNBS3RCQyxRQUxzQixHQU1uQkYsT0FObUIsQ0FLdEJFLFFBTHNCO0FBQUEsNkJBUUFBLFFBUkEsQ0FRaEJDLE9BUmdCO0FBQUEsU0FRaEJBLE9BUmdCLHFDQVFOLEVBUk07QUFBQSwyQkFTRUEsT0FURixDQVNoQkMsTUFUZ0I7QUFBQSxTQVNoQkEsTUFUZ0IsbUNBU1AsS0FUTzs7QUFVdkIsU0FBTUMsV0FBV3hCLE1BQU1rQixJQUFOLEdBQWFLLE1BQWIsR0FBc0IsS0FBdkM7O0FBRUEsWUFDQztBQUNDLGNBQVF2QixNQUFNUSxhQUFOLEtBQXdCVyxRQUFRVCxFQUFoQyxJQUFzQ0MsUUFEL0M7QUFFQyxZQUFNWCxNQUFNWSxJQUZiO0FBR0MsY0FBUVksUUFIVDtBQUlDLFVBQUlMLFFBQVFULEVBSmI7QUFLQyxXQUFLUyxRQUFRVCxFQUxkO0FBTUMsWUFBTVgsV0FOUDtBQU9DLGFBQU9DLE1BQU1jLEtBUGQ7QUFRQyxXQUFLLE9BQUtXLGtCQVJYO0FBU0MsbUJBQWF6QixNQUFNZSxXQVRwQjtBQVVDLGNBQVFLLElBVlQ7QUFXQyxZQUFNQSxJQVhQO0FBWUMsWUFBTXBCLE1BQU1rQjtBQVpiLE9BREQ7QUFnQkEsS0E1QkQ7QUExQ0YsSUFERDtBQTJFQTs7OzZCQS9GTVEsUyxHQUFZO0FBQ2xCaEIsS0FBSSxpQkFBTWlCLE1BRFE7QUFFbEJuQixnQkFBZSxpQkFBTW1CLE1BRkg7QUFHbEJmLE9BQU0saUJBQU1lLE1BQU4sQ0FBYUMsVUFIRDtBQUlsQjNCLE9BQU0saUJBQU00QixNQUpNO0FBS2xCWCxPQUFNLGlCQUFNWSxJQUFOLENBQVdGLFVBTEM7QUFNbEJkLFFBQU8saUJBQU1lLE1BQU4sQ0FBYUQsVUFORjtBQU9sQmIsY0FBYSxpQkFBTVksTUFQRDtBQVFsQnRCLFdBQVUsaUJBQU0wQixTQUFOLENBQWdCLENBQ3pCLGlCQUFNQyxJQURtQixFQUV6QixpQkFBTUMsT0FBTixDQUFjLGlCQUFNRCxJQUFwQixDQUZ5QixDQUFoQixDQVJRO0FBWWxCRSxTQUFRLGlCQUFNTCxNQVpJO0FBYWxCM0IsWUFBVyxpQkFBTTJCO0FBYkMsQzs7a0JBa0dML0IsYyIsImZpbGUiOiJuYXZpZ2F0aW9uLXRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N0YXJ0c1dpdGh9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHB1cmUgZnJvbSAncHVyZS1yZW5kZXItZGVjb3JhdG9yJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IE5hdmlnYXRpb25JdGVtIGZyb20gJy4vbmF2aWdhdGlvbi1pdGVtJztcbmltcG9ydCBnZXRBdWdtZW50ZWRDaGlsZHJlbiBmcm9tICcuLi8uLi91dGlscy9hdWdtZW50LWhpZXJhcmNoeSc7XG5cbkBwdXJlXG5jbGFzcyBOYXZpZ2F0aW9uVHJlZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGRpc3BsYXlOYW1lID0gJ05hdmlnYXRpb25UcmVlJztcblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGlkOiB0eXBlcy5zdHJpbmcsXG5cdFx0YWN0aXZlUGF0dGVybjogdHlwZXMuc3RyaW5nLFxuXHRcdGJhc2U6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGRhdGE6IHR5cGVzLm9iamVjdCxcblx0XHRoaWRlOiB0eXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cdFx0cXVlcnk6IHR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXHRcdHNlYXJjaFF1ZXJ5OiB0eXBlcy5zdHJpbmcsXG5cdFx0Y2hpbGRyZW46IHR5cGVzLm9uZU9mVHlwZShbXG5cdFx0XHR0eXBlcy5ub2RlLFxuXHRcdFx0dHlwZXMuYXJyYXlPZih0eXBlcy5ub2RlKVxuXHRcdF0pLFxuXHRcdGNvbmZpZzogdHlwZXMub2JqZWN0LFxuXHRcdGhpZXJhcmNoeTogdHlwZXMub2JqZWN0XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdGNvbnN0IHtmb2xkZXJzLCBwYXR0ZXJuc30gPSBnZXRBdWdtZW50ZWRDaGlsZHJlbihwcm9wcy5kYXRhLCBwcm9wcy5oaWVyYXJjaHkpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxDU1NUcmFuc2l0aW9uR3JvdXBcblx0XHRcdFx0Y29tcG9uZW50PVwidWxcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLXRyZWVcIlxuXHRcdFx0XHR0cmFuc2l0aW9uTmFtZT1cInBhdHRlcm4tY29udGVudC10cmFuc2l0aW9uXCJcblx0XHRcdFx0dHJhbnNpdGlvbkVudGVyVGltZW91dD17MzAwfVxuXHRcdFx0XHR0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9XG5cdFx0XHRcdD5cblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Zm9sZGVycy5tYXAoZm9sZGVyID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGFjdGl2ZSA9IHN0YXJ0c1dpdGgocHJvcHMuYWN0aXZlUGF0dGVybiwgZm9sZGVyLmlkKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PE5hdmlnYXRpb25JdGVtXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmUgfHwgZm9sZGVyLmV4cGFuZGVkfVxuXHRcdFx0XHRcdFx0XHRcdGJhc2U9e3Byb3BzLmJhc2V9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2ZvbGRlci5pZH1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2ZvbGRlci5pZH1cblx0XHRcdFx0XHRcdFx0XHRuYW1lPXtmb2xkZXIuZGlzcGxheU5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVGb2xkZXJDbGlja31cblx0XHRcdFx0XHRcdFx0XHRxdWVyeT17cHJvcHMucXVlcnl9XG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoUXVlcnk9e3Byb3BzLnNlYXJjaFF1ZXJ5fVxuXHRcdFx0XHRcdFx0XHRcdHN5bWJvbD17Zm9sZGVyLmljb259XG5cdFx0XHRcdFx0XHRcdFx0c3ltYm9sQWN0aXZlPXtmb2xkZXIuaWNvbkFjdGl2ZX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZGlyZWN0b3J5XCJcblx0XHRcdFx0XHRcdFx0XHRoaWRlPXtwcm9wcy5oaWRlfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8TmF2aWdhdGlvblRyZWVcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZVBhdHRlcm49e3Byb3BzLmFjdGl2ZVBhdHRlcm59XG5cdFx0XHRcdFx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17Zm9sZGVyLmNoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHRcdFx0aGllcmFyY2h5PXtwcm9wcy5oaWVyYXJjaHl9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17Zm9sZGVyLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0cXVlcnk9e3Byb3BzLnF1ZXJ5fVxuXHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoUXVlcnk9e3Byb3BzLnNlYXJjaFF1ZXJ5fVxuXHRcdFx0XHRcdFx0XHRcdFx0aGlkZT17cHJvcHMuaGlkZX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvTmF2aWdhdGlvbkl0ZW0+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBhdHRlcm5zLm1hcChwYXR0ZXJuID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheU5hbWUsXG5cdFx0XHRcdFx0XHRcdGV4cGFuZGVkLFxuXHRcdFx0XHRcdFx0XHR0eXBlLFxuXHRcdFx0XHRcdFx0XHRtYW5pZmVzdFxuXHRcdFx0XHRcdFx0fSA9IHBhdHRlcm47XG5cblx0XHRcdFx0XHRcdGNvbnN0IHtvcHRpb25zID0ge319ID0gbWFuaWZlc3Q7XG5cdFx0XHRcdFx0XHRjb25zdCB7aGlkZGVuID0gZmFsc2V9ID0gb3B0aW9ucztcblx0XHRcdFx0XHRcdGNvbnN0IGhpZGVJdGVtID0gcHJvcHMuaGlkZSA/IGhpZGRlbiA6IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8TmF2aWdhdGlvbkl0ZW1cblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e3Byb3BzLmFjdGl2ZVBhdHRlcm4gPT09IHBhdHRlcm4uaWQgfHwgZXhwYW5kZWR9XG5cdFx0XHRcdFx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0XHRcdFx0XHRoaWRkZW49e2hpZGVJdGVtfVxuXHRcdFx0XHRcdFx0XHRcdGlkPXtwYXR0ZXJuLmlkfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17cGF0dGVybi5pZH1cblx0XHRcdFx0XHRcdFx0XHRuYW1lPXtkaXNwbGF5TmFtZX1cblx0XHRcdFx0XHRcdFx0XHRxdWVyeT17cHJvcHMucXVlcnl9XG5cdFx0XHRcdFx0XHRcdFx0cmVmPXt0aGlzLmdldEFjdGl2ZVJlZmVyZW5jZX1cblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hRdWVyeT17cHJvcHMuc2VhcmNoUXVlcnl9XG5cdFx0XHRcdFx0XHRcdFx0c3ltYm9sPXt0eXBlfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9e3R5cGV9XG5cdFx0XHRcdFx0XHRcdFx0aGlkZT17cHJvcHMuaGlkZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvQ1NTVHJhbnNpdGlvbkdyb3VwPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblRyZWU7XG4iXX0=