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

var _class, _temp;

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownLink = (_temp = _class = function (_Component) {
	(0, _inherits3.default)(MarkdownLink, _Component);

	function MarkdownLink() {
		(0, _classCallCheck3.default)(this, MarkdownLink);
		return (0, _possibleConstructorReturn3.default)(this, (MarkdownLink.__proto__ || (0, _getPrototypeOf2.default)(MarkdownLink)).apply(this, arguments));
	}

	(0, _createClass3.default)(MarkdownLink, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var props = this.props;

			var parsed = _url2.default.parse(props.href);
			var pathname = parsed.pathname || '/';
			var hasHash = Boolean(parsed.hash);
			var isSamePathname = !parsed.pathname || props.pathname === pathname;
			var isSameHash = hasHash && isSamePathname && props.hash === parsed.hash;

			if (isSameHash) {
				props.onHashChange(parsed.hash.slice(1));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var parsed = _url2.default.parse(props.href);
			var pathname = parsed.pathname || '/';
			var isAbsolute = Boolean(parsed.protocol);

			if (isAbsolute) {
				return _react2.default.createElement(
					'a',
					{
						href: props.href,
						className: 'link link--external',
						rel: 'noopener',
						target: '_blank',
						title: props.title || 'Open ' + props.href + ' in a new tab'
					},
					props.children
				);
			}

			var hasHash = Boolean(parsed.hash);
			var isSamePathname = !parsed.pathname || props.pathname === pathname;

			var to = {
				pathname: hasHash && isSamePathname ? '' + props.base : '/' + [props.base, parsed.pathname].join('').split('/').filter(Boolean).join('/'),
				query: props.query,
				hash: parsed.hash
			};

			var title = hasHash && isSamePathname ? 'Jump to ' + to.hash.slice(1) : 'Navigate to ' + to.pathname;

			var onClick = function onClick() {
				if (hasHash && isSamePathname) {
					props.onHashChange(to.hash.slice(1));
				}
			};

			return _react2.default.createElement(
				_reactRouter.Link,
				{
					onClick: onClick,
					title: props.title || title,
					to: to
				},
				props.children
			);
		}
	}]);
	return MarkdownLink;
}(_react.Component), _class.propTypes = {
	base: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.any,
	hash: _react.PropTypes.string.isRequired,
	href: _react.PropTypes.string.isRequired,
	onHashChange: _react.PropTypes.func.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	query: _react.PropTypes.object.isRequired,
	title: _react.PropTypes.string
}, _class.defaultProps = {
	onHashChange: function onHashChange() {}
}, _temp);
exports.default = MarkdownLink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1saW5rLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duTGluayIsInByb3BzIiwicGFyc2VkIiwicGFyc2UiLCJocmVmIiwicGF0aG5hbWUiLCJoYXNIYXNoIiwiQm9vbGVhbiIsImhhc2giLCJpc1NhbWVQYXRobmFtZSIsImlzU2FtZUhhc2giLCJvbkhhc2hDaGFuZ2UiLCJzbGljZSIsImlzQWJzb2x1dGUiLCJwcm90b2NvbCIsInRpdGxlIiwiY2hpbGRyZW4iLCJ0byIsImJhc2UiLCJqb2luIiwic3BsaXQiLCJmaWx0ZXIiLCJxdWVyeSIsIm9uQ2xpY2siLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYW55IiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7c0NBZ0JBO0FBQUEsT0FDWkMsS0FEWSxHQUNILElBREcsQ0FDWkEsS0FEWTs7QUFFbkIsT0FBTUMsU0FBUyxjQUFJQyxLQUFKLENBQVVGLE1BQU1HLElBQWhCLENBQWY7QUFDQSxPQUFNQyxXQUFXSCxPQUFPRyxRQUFQLElBQW1CLEdBQXBDO0FBQ0EsT0FBTUMsVUFBVUMsUUFBUUwsT0FBT00sSUFBZixDQUFoQjtBQUNBLE9BQU1DLGlCQUFpQixDQUFDUCxPQUFPRyxRQUFSLElBQW9CSixNQUFNSSxRQUFOLEtBQW1CQSxRQUE5RDtBQUNBLE9BQU1LLGFBQWFKLFdBQVdHLGNBQVgsSUFBNkJSLE1BQU1PLElBQU4sS0FBZU4sT0FBT00sSUFBdEU7O0FBRUEsT0FBSUUsVUFBSixFQUFnQjtBQUNmVCxVQUFNVSxZQUFOLENBQW1CVCxPQUFPTSxJQUFQLENBQVlJLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBbkI7QUFDQTtBQUNEOzs7MkJBRVE7QUFBQSxPQUNEWCxLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDOztBQUVSLE9BQU1DLFNBQVMsY0FBSUMsS0FBSixDQUFVRixNQUFNRyxJQUFoQixDQUFmO0FBQ0EsT0FBTUMsV0FBV0gsT0FBT0csUUFBUCxJQUFtQixHQUFwQztBQUNBLE9BQU1RLGFBQWFOLFFBQVFMLE9BQU9ZLFFBQWYsQ0FBbkI7O0FBRUEsT0FBSUQsVUFBSixFQUFnQjtBQUNmLFdBQ0M7QUFBQTtBQUFBO0FBQ0MsWUFBTVosTUFBTUcsSUFEYjtBQUVDLGlCQUFVLHFCQUZYO0FBR0MsV0FBSSxVQUhMO0FBSUMsY0FBTyxRQUpSO0FBS0MsYUFBT0gsTUFBTWMsS0FBTixjQUF1QmQsTUFBTUcsSUFBN0I7QUFMUjtBQU9FSCxXQUFNZTtBQVBSLEtBREQ7QUFXQTs7QUFFRCxPQUFNVixVQUFVQyxRQUFRTCxPQUFPTSxJQUFmLENBQWhCO0FBQ0EsT0FBTUMsaUJBQWlCLENBQUNQLE9BQU9HLFFBQVIsSUFBb0JKLE1BQU1JLFFBQU4sS0FBbUJBLFFBQTlEOztBQUVBLE9BQU1ZLEtBQUs7QUFDVlosY0FBVUMsV0FBV0csY0FBWCxRQUNOUixNQUFNaUIsSUFEQSxTQUVMLENBQUNqQixNQUFNaUIsSUFBUCxFQUFhaEIsT0FBT0csUUFBcEIsRUFBOEJjLElBQTlCLENBQW1DLEVBQW5DLEVBQXVDQyxLQUF2QyxDQUE2QyxHQUE3QyxFQUFrREMsTUFBbEQsQ0FBeURkLE9BQXpELEVBQWtFWSxJQUFsRSxDQUF1RSxHQUF2RSxDQUhLO0FBSVZHLFdBQU9yQixNQUFNcUIsS0FKSDtBQUtWZCxVQUFNTixPQUFPTTtBQUxILElBQVg7O0FBUUEsT0FBTU8sUUFBUVQsV0FBV0csY0FBWCxnQkFDRlEsR0FBR1QsSUFBSCxDQUFRSSxLQUFSLENBQWMsQ0FBZCxDQURFLG9CQUVFSyxHQUFHWixRQUZuQjs7QUFJQSxPQUFNa0IsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDckIsUUFBSWpCLFdBQVdHLGNBQWYsRUFBK0I7QUFDOUJSLFdBQU1VLFlBQU4sQ0FBbUJNLEdBQUdULElBQUgsQ0FBUUksS0FBUixDQUFjLENBQWQsQ0FBbkI7QUFDQTtBQUNELElBSkQ7O0FBTUEsVUFDQztBQUFBO0FBQUE7QUFDQyxjQUFTVyxPQURWO0FBRUMsWUFBT3RCLE1BQU1jLEtBQU4sSUFBZUEsS0FGdkI7QUFHQyxTQUFJRTtBQUhMO0FBS0VoQixVQUFNZTtBQUxSLElBREQ7QUFTQTs7OzRCQTlFTVEsUyxHQUFZO0FBQ2xCTixPQUFNLGlCQUFFTyxNQUFGLENBQVNDLFVBREc7QUFFbEJWLFdBQVUsaUJBQUVXLEdBRk07QUFHbEJuQixPQUFNLGlCQUFFaUIsTUFBRixDQUFTQyxVQUhHO0FBSWxCdEIsT0FBTSxpQkFBRXFCLE1BQUYsQ0FBU0MsVUFKRztBQUtsQmYsZUFBYyxpQkFBRWlCLElBQUYsQ0FBT0YsVUFMSDtBQU1sQnJCLFdBQVUsaUJBQUVvQixNQUFGLENBQVNDLFVBTkQ7QUFPbEJKLFFBQU8saUJBQUVPLE1BQUYsQ0FBU0gsVUFQRTtBQVFsQlgsUUFBTyxpQkFBRVU7QUFSUyxDLFNBV1pLLFksR0FBZTtBQUNyQm5CLGVBQWMsd0JBQU0sQ0FBRTtBQURELEM7a0JBWkZYLFkiLCJmaWxlIjoibWFya2Rvd24tbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25MaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRiYXNlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGNoaWxkcmVuOiB0LmFueSxcblx0XHRoYXNoOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGhyZWY6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0b25IYXNoQ2hhbmdlOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0XHRwYXRobmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRxdWVyeTogdC5vYmplY3QuaXNSZXF1aXJlZCxcblx0XHR0aXRsZTogdC5zdHJpbmdcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdG9uSGFzaENoYW5nZTogKCkgPT4ge31cblx0fTtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB7cHJvcHN9ID0gdGhpcztcblx0XHRjb25zdCBwYXJzZWQgPSB1cmwucGFyc2UocHJvcHMuaHJlZik7XG5cdFx0Y29uc3QgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWUgfHwgJy8nO1xuXHRcdGNvbnN0IGhhc0hhc2ggPSBCb29sZWFuKHBhcnNlZC5oYXNoKTtcblx0XHRjb25zdCBpc1NhbWVQYXRobmFtZSA9ICFwYXJzZWQucGF0aG5hbWUgfHwgcHJvcHMucGF0aG5hbWUgPT09IHBhdGhuYW1lO1xuXHRcdGNvbnN0IGlzU2FtZUhhc2ggPSBoYXNIYXNoICYmIGlzU2FtZVBhdGhuYW1lICYmIHByb3BzLmhhc2ggPT09IHBhcnNlZC5oYXNoO1xuXG5cdFx0aWYgKGlzU2FtZUhhc2gpIHtcblx0XHRcdHByb3BzLm9uSGFzaENoYW5nZShwYXJzZWQuaGFzaC5zbGljZSgxKSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdGNvbnN0IHBhcnNlZCA9IHVybC5wYXJzZShwcm9wcy5ocmVmKTtcblx0XHRjb25zdCBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZSB8fCAnLyc7XG5cdFx0Y29uc3QgaXNBYnNvbHV0ZSA9IEJvb2xlYW4ocGFyc2VkLnByb3RvY29sKTtcblxuXHRcdGlmIChpc0Fic29sdXRlKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9e3Byb3BzLmhyZWZ9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibGluayBsaW5rLS1leHRlcm5hbFwiXG5cdFx0XHRcdFx0cmVsPVwibm9vcGVuZXJcIlxuXHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0dGl0bGU9e3Byb3BzLnRpdGxlIHx8IGBPcGVuICR7cHJvcHMuaHJlZn0gaW4gYSBuZXcgdGFiYH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhhc0hhc2ggPSBCb29sZWFuKHBhcnNlZC5oYXNoKTtcblx0XHRjb25zdCBpc1NhbWVQYXRobmFtZSA9ICFwYXJzZWQucGF0aG5hbWUgfHwgcHJvcHMucGF0aG5hbWUgPT09IHBhdGhuYW1lO1xuXG5cdFx0Y29uc3QgdG8gPSB7XG5cdFx0XHRwYXRobmFtZTogaGFzSGFzaCAmJiBpc1NhbWVQYXRobmFtZSA/XG5cdFx0XHRcdGAke3Byb3BzLmJhc2V9YCA6XG5cdFx0XHRcdGAvJHtbcHJvcHMuYmFzZSwgcGFyc2VkLnBhdGhuYW1lXS5qb2luKCcnKS5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKS5qb2luKCcvJyl9YCxcblx0XHRcdHF1ZXJ5OiBwcm9wcy5xdWVyeSxcblx0XHRcdGhhc2g6IHBhcnNlZC5oYXNoXG5cdFx0fTtcblxuXHRcdGNvbnN0IHRpdGxlID0gaGFzSGFzaCAmJiBpc1NhbWVQYXRobmFtZSA/XG5cdFx0XHRgSnVtcCB0byAke3RvLmhhc2guc2xpY2UoMSl9YCA6XG5cdFx0XHRgTmF2aWdhdGUgdG8gJHt0by5wYXRobmFtZX1gO1xuXG5cdFx0Y29uc3Qgb25DbGljayA9ICgpID0+IHtcblx0XHRcdGlmIChoYXNIYXNoICYmIGlzU2FtZVBhdGhuYW1lKSB7XG5cdFx0XHRcdHByb3BzLm9uSGFzaENoYW5nZSh0by5oYXNoLnNsaWNlKDEpKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMaW5rXG5cdFx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0XHRcdHRpdGxlPXtwcm9wcy50aXRsZSB8fCB0aXRsZX1cblx0XHRcdFx0dG89e3RvfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvTGluaz5cblx0XHQpO1xuXHR9XG59XG4iXX0=