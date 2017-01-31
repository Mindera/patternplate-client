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

var _class, _class2, _temp;
// import strip from 'strip-indent';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _lightbox = require('../lightbox');

var _lightbox2 = _interopRequireDefault(_lightbox);

var _editor = require('../common/editor');

var _editor2 = _interopRequireDefault(_editor);

var _markdown = require('../../containers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProblemLightbox = (0, _autobindDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(ProblemLightbox, _Component);

	function ProblemLightbox() {
		(0, _classCallCheck3.default)(this, ProblemLightbox);
		return (0, _possibleConstructorReturn3.default)(this, (ProblemLightbox.__proto__ || (0, _getPrototypeOf2.default)(ProblemLightbox)).apply(this, arguments));
	}

	(0, _createClass3.default)(ProblemLightbox, [{
		key: 'render',
		value: function render() {
			var props = this.props;

			var issueTemplate = getIssueTemplate(props, true);

			var buttons = [_react2.default.createElement(
				_reactRouter.Link,
				{
					key: '0',
					to: (0, _extends3.default)({}, props.location, {
						query: (0, _extends3.default)({}, props.location.query, {
							issue: false
						})
					}),
					title: 'Close this lightbox [esc]',
					className: 'button lightbox__button'
				},
				'Close'
			)];

			return _react2.default.createElement(
				_lightbox2.default,
				{
					title: 'Report an issue',
					backdrop: true,
					buttons: buttons
				},
				_react2.default.createElement(_markdown2.default, {
					base: props.base,
					className: 'lightbox__instructions',
					source: getInstructions(props)
				}),
				_react2.default.createElement(
					'div',
					{ className: 'problem-lightbox__preview' },
					_react2.default.createElement(_editor2.default, {
						className: 'editor problem-lightbox__state',
						reaOnly: true,
						value: issueTemplate
					})
				)
			);
		}
	}]);
	return ProblemLightbox;
}(_react.Component), _class2.propTypes = {
	base: _react.PropTypes.string.isRequired,
	state: _react.PropTypes.string.isRequired,
	theme: _react.PropTypes.oneOf(['dark', 'light']).isRequired,
	version: _react.PropTypes.string.isRequired,
	serverVersion: _react.PropTypes.string.isRequired,
	clientVersion: _react.PropTypes.string.isRequired,
	browserName: _react.PropTypes.string.isRequired,
	browserVersion: _react.PropTypes.string.isRequired
}, _temp)) || _class;

exports.default = ProblemLightbox;


function getIssueTemplate(props, includeDetails) {
	return '\n- [ ] Provide a brief title of the problem\n- [ ] Describe what you are trying to do\n- [ ] Describe actual behaviour\n- [ ] Describe expected behaviour\n\n## Steps to reproduce\n`[Describe how to produce the bug in the application by manual action]`\n\n## Actual\n`[The faulty behaviour as produced by the steps above]`\n\n## Expected\n`[Result of the steps above that match user expectations and allow usage]`\n\n' + (includeDetails ? getDetails(props) : '') + '\n';
}

function getDetails(props) {
	return '\n## Details\n<details id="application-state">\n<summary>Application State</summary>\n```json\n' + props.state + '\n```\n</details>\n<details>\n<summary>Versions</summary>\n<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tSoftware\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tVersion\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tpatternplate\n\t\t\t</td>\n\t\t\t<th>\n\t\t\t\t' + props.version + '\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tpatternplate-server\n\t\t\t</td>\n\t\t\t<th>\n\t\t\t\t' + props.serverVersion + '\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tpatternplate-client\n\t\t\t</td>\n\t\t\t<th>\n\t\t\t\t' + props.clientVersion + '\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t' + props.browserName + '\n\t\t\t</td>\n\t\t\t<th>\n\t\t\t\t' + props.browserVersion + '\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t' + (props.runtimeName ? props.runtimeName : 'Runtime') + '\n\t\t\t</td>\n\t\t\t<th>\n\t\t\t\t' + props.runtimeVersion + '\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t' + (props.clientOsName ? props.clientOsName : 'OS') + ' (Client)\n\t\t\t</td>\n\t\t\t<th>\n\t\t\t\t' + props.clientOsVersion + '\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t' + (props.serverOsName ? props.serverOsName : 'OS') + ' (Server)\n\t\t\t</td>\n\t\t\t<th>\n\t\t\t\t' + props.serverOsVersion + '\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n</details>\n';
}

function getInstructions(props) {
	var query = _queryString2.default.stringify({
		title: '[v' + props.version + ']',
		body: '[Please paste the contents of patternplate issue template here]'
	});

	return '\n> patternplate issue template, please use for issue reporting :bow:\n\n`[Cmd+A] [Cmd+C]` the markdown below into a new isse at\n[sinnerschrader/patternplate](https://github.com/sinnerschrader/patternplate/issues/new?' + query + ')\n';
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbnRlbnQvcHJvYmxlbS5qcyJdLCJuYW1lcyI6WyJQcm9ibGVtTGlnaHRib3giLCJwcm9wcyIsImlzc3VlVGVtcGxhdGUiLCJnZXRJc3N1ZVRlbXBsYXRlIiwiYnV0dG9ucyIsImxvY2F0aW9uIiwicXVlcnkiLCJpc3N1ZSIsImJhc2UiLCJnZXRJbnN0cnVjdGlvbnMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic3RhdGUiLCJ0aGVtZSIsIm9uZU9mIiwidmVyc2lvbiIsInNlcnZlclZlcnNpb24iLCJjbGllbnRWZXJzaW9uIiwiYnJvd3Nlck5hbWUiLCJicm93c2VyVmVyc2lvbiIsImluY2x1ZGVEZXRhaWxzIiwiZ2V0RGV0YWlscyIsInJ1bnRpbWVOYW1lIiwicnVudGltZVZlcnNpb24iLCJjbGllbnRPc05hbWUiLCJjbGllbnRPc1ZlcnNpb24iLCJzZXJ2ZXJPc05hbWUiLCJzZXJ2ZXJPc1ZlcnNpb24iLCJzdHJpbmdpZnkiLCJ0aXRsZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBSEE7Ozs7QUFDQTs7QUFDQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUJBLGU7Ozs7Ozs7Ozs7MkJBWVg7QUFBQSxPQUNEQyxLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDOztBQUVSLE9BQU1DLGdCQUFnQkMsaUJBQWlCRixLQUFqQixFQUF3QixJQUF4QixDQUF0Qjs7QUFFQSxPQUFNRyxVQUFVLENBQ2Y7QUFBQTtBQUFBO0FBQ0MsVUFBSSxHQURMO0FBRUMsb0NBQ0lILE1BQU1JLFFBRFY7QUFFQ0Msd0NBQ0lMLE1BQU1JLFFBQU4sQ0FBZUMsS0FEbkI7QUFFQ0MsY0FBTztBQUZSO0FBRkQsT0FGRDtBQVNDLFlBQU0sMkJBVFA7QUFVQyxnQkFBVTtBQVZYO0FBQUE7QUFBQSxJQURlLENBQWhCOztBQWlCQSxVQUNDO0FBQUE7QUFBQTtBQUNDLFlBQU0saUJBRFA7QUFFQyxtQkFGRDtBQUdDLGNBQVNIO0FBSFY7QUFLQztBQUNDLFdBQU1ILE1BQU1PLElBRGI7QUFFQyxnQkFBVSx3QkFGWDtBQUdDLGFBQVFDLGdCQUFnQlIsS0FBaEI7QUFIVCxNQUxEO0FBVUM7QUFBQTtBQUFBLE9BQUssV0FBVSwyQkFBZjtBQUNDO0FBQ0MsaUJBQVUsZ0NBRFg7QUFFQyxtQkFGRDtBQUdDLGFBQU9DO0FBSFI7QUFERDtBQVZELElBREQ7QUFvQkE7Ozs2QkFwRE1RLFMsR0FBWTtBQUNsQkYsT0FBTSxpQkFBRUcsTUFBRixDQUFTQyxVQURHO0FBRWxCQyxRQUFPLGlCQUFFRixNQUFGLENBQVNDLFVBRkU7QUFHbEJFLFFBQU8saUJBQUVDLEtBQUYsQ0FBUSxDQUFDLE1BQUQsRUFBUyxPQUFULENBQVIsRUFBMkJILFVBSGhCO0FBSWxCSSxVQUFTLGlCQUFFTCxNQUFGLENBQVNDLFVBSkE7QUFLbEJLLGdCQUFlLGlCQUFFTixNQUFGLENBQVNDLFVBTE47QUFNbEJNLGdCQUFlLGlCQUFFUCxNQUFGLENBQVNDLFVBTk47QUFPbEJPLGNBQWEsaUJBQUVSLE1BQUYsQ0FBU0MsVUFQSjtBQVFsQlEsaUJBQWdCLGlCQUFFVCxNQUFGLENBQVNDO0FBUlAsQzs7a0JBRENaLGU7OztBQXdEckIsU0FBU0csZ0JBQVQsQ0FBMEJGLEtBQTFCLEVBQWlDb0IsY0FBakMsRUFBaUQ7QUFDaEQsK2FBZUNBLGlCQUFpQkMsV0FBV3JCLEtBQVgsQ0FBakIsR0FBcUMsRUFmdEM7QUFpQkE7O0FBRUQsU0FBU3FCLFVBQVQsQ0FBb0JyQixLQUFwQixFQUEyQjtBQUMxQiw0R0FLQ0EsTUFBTVksS0FMUCxxU0EyQktaLE1BQU1lLE9BM0JYLHNIQW1DS2YsTUFBTWdCLGFBbkNYLHNIQTJDS2hCLE1BQU1pQixhQTNDWCxnRUFnREtqQixNQUFNa0IsV0FoRFgsMkNBbURLbEIsTUFBTW1CLGNBbkRYLGlFQXdES25CLE1BQU1zQixXQUFOLEdBQW9CdEIsTUFBTXNCLFdBQTFCLEdBQXdDLFNBeEQ3Qyw0Q0EyREt0QixNQUFNdUIsY0EzRFgsaUVBZ0VLdkIsTUFBTXdCLFlBQU4sR0FBcUJ4QixNQUFNd0IsWUFBM0IsR0FBMEMsSUFoRS9DLHFEQW1FS3hCLE1BQU15QixlQW5FWCxpRUF3RUt6QixNQUFNMEIsWUFBTixHQUFxQjFCLE1BQU0wQixZQUEzQixHQUEwQyxJQXhFL0MscURBMkVLMUIsTUFBTTJCLGVBM0VYO0FBa0ZBOztBQUVELFNBQVNuQixlQUFULENBQXlCUixLQUF6QixFQUFnQztBQUMvQixLQUFNSyxRQUFRLHNCQUFZdUIsU0FBWixDQUFzQjtBQUNuQ0MsZ0JBQVk3QixNQUFNZSxPQUFsQixNQURtQztBQUVuQ2U7QUFGbUMsRUFBdEIsQ0FBZDs7QUFLQSx1T0FJeUZ6QixLQUp6RjtBQU1BIiwiZmlsZSI6InByb2JsZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbi8vIGltcG9ydCBzdHJpcCBmcm9tICdzdHJpcC1pbmRlbnQnO1xuXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcblxuaW1wb3J0IExpZ2h0Ym94IGZyb20gJy4uL2xpZ2h0Ym94JztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vY29tbW9uL2VkaXRvcic7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vLi4vY29udGFpbmVycy9tYXJrZG93bic7XG5cbkBhdXRvYmluZFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvYmxlbUxpZ2h0Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRiYXNlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHN0YXRlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHRoZW1lOiB0Lm9uZU9mKFsnZGFyaycsICdsaWdodCddKS5pc1JlcXVpcmVkLFxuXHRcdHZlcnNpb246IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0c2VydmVyVmVyc2lvbjogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjbGllbnRWZXJzaW9uOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGJyb3dzZXJOYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGJyb3dzZXJWZXJzaW9uOiB0LnN0cmluZy5pc1JlcXVpcmVkXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdGNvbnN0IGlzc3VlVGVtcGxhdGUgPSBnZXRJc3N1ZVRlbXBsYXRlKHByb3BzLCB0cnVlKTtcblxuXHRcdGNvbnN0IGJ1dHRvbnMgPSBbXG5cdFx0XHQ8TGlua1xuXHRcdFx0XHRrZXk9XCIwXCJcblx0XHRcdFx0dG89e3tcblx0XHRcdFx0XHQuLi5wcm9wcy5sb2NhdGlvbixcblx0XHRcdFx0XHRxdWVyeToge1xuXHRcdFx0XHRcdFx0Li4ucHJvcHMubG9jYXRpb24ucXVlcnksXG5cdFx0XHRcdFx0XHRpc3N1ZTogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19XG5cdFx0XHRcdHRpdGxlPVwiQ2xvc2UgdGhpcyBsaWdodGJveCBbZXNjXVwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBsaWdodGJveF9fYnV0dG9uXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRDbG9zZVxuXHRcdFx0PC9MaW5rPlxuXHRcdF07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpZ2h0Ym94XG5cdFx0XHRcdHRpdGxlPVwiUmVwb3J0IGFuIGlzc3VlXCJcblx0XHRcdFx0YmFja2Ryb3Bcblx0XHRcdFx0YnV0dG9ucz17YnV0dG9uc31cblx0XHRcdFx0PlxuXHRcdFx0XHQ8TWFya2Rvd25cblx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImxpZ2h0Ym94X19pbnN0cnVjdGlvbnNcIlxuXHRcdFx0XHRcdHNvdXJjZT17Z2V0SW5zdHJ1Y3Rpb25zKHByb3BzKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2JsZW0tbGlnaHRib3hfX3ByZXZpZXdcIj5cblx0XHRcdFx0XHQ8RWRpdG9yXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJlZGl0b3IgcHJvYmxlbS1saWdodGJveF9fc3RhdGVcIlxuXHRcdFx0XHRcdFx0cmVhT25seVxuXHRcdFx0XHRcdFx0dmFsdWU9e2lzc3VlVGVtcGxhdGV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGlnaHRib3g+XG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRJc3N1ZVRlbXBsYXRlKHByb3BzLCBpbmNsdWRlRGV0YWlscykge1xuXHRyZXR1cm4gYFxuLSBbIF0gUHJvdmlkZSBhIGJyaWVmIHRpdGxlIG9mIHRoZSBwcm9ibGVtXG4tIFsgXSBEZXNjcmliZSB3aGF0IHlvdSBhcmUgdHJ5aW5nIHRvIGRvXG4tIFsgXSBEZXNjcmliZSBhY3R1YWwgYmVoYXZpb3VyXG4tIFsgXSBEZXNjcmliZSBleHBlY3RlZCBiZWhhdmlvdXJcblxuIyMgU3RlcHMgdG8gcmVwcm9kdWNlXG5cXGBbRGVzY3JpYmUgaG93IHRvIHByb2R1Y2UgdGhlIGJ1ZyBpbiB0aGUgYXBwbGljYXRpb24gYnkgbWFudWFsIGFjdGlvbl1cXGBcblxuIyMgQWN0dWFsXG5cXGBbVGhlIGZhdWx0eSBiZWhhdmlvdXIgYXMgcHJvZHVjZWQgYnkgdGhlIHN0ZXBzIGFib3ZlXVxcYFxuXG4jIyBFeHBlY3RlZFxuXFxgW1Jlc3VsdCBvZiB0aGUgc3RlcHMgYWJvdmUgdGhhdCBtYXRjaCB1c2VyIGV4cGVjdGF0aW9ucyBhbmQgYWxsb3cgdXNhZ2VdXFxgXG5cbiR7aW5jbHVkZURldGFpbHMgPyBnZXREZXRhaWxzKHByb3BzKSA6ICcnfVxuYDtcbn1cblxuZnVuY3Rpb24gZ2V0RGV0YWlscyhwcm9wcykge1xuXHRyZXR1cm4gYFxuIyMgRGV0YWlsc1xuPGRldGFpbHMgaWQ9XCJhcHBsaWNhdGlvbi1zdGF0ZVwiPlxuPHN1bW1hcnk+QXBwbGljYXRpb24gU3RhdGU8L3N1bW1hcnk+XG5cXGBcXGBcXGBqc29uXG4ke3Byb3BzLnN0YXRlfVxuXFxgXFxgXFxgXG48L2RldGFpbHM+XG48ZGV0YWlscz5cbjxzdW1tYXJ5PlZlcnNpb25zPC9zdW1tYXJ5PlxuPHRhYmxlPlxuXHQ8dGhlYWQ+XG5cdFx0PHRyPlxuXHRcdFx0PHRoPlxuXHRcdFx0XHRTb2Z0d2FyZVxuXHRcdFx0PC90aD5cblx0XHRcdDx0aD5cblx0XHRcdFx0VmVyc2lvblxuXHRcdFx0PC90aD5cblx0XHQ8L3RyPlxuXHQ8L3RoZWFkPlxuXHQ8dGJvZHk+XG5cdFx0PHRyPlxuXHRcdFx0PHRkPlxuXHRcdFx0XHRwYXR0ZXJucGxhdGVcblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGg+XG5cdFx0XHRcdCR7cHJvcHMudmVyc2lvbn1cblx0XHRcdDwvdGQ+XG5cdFx0PC90cj5cblx0XHQ8dHI+XG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdHBhdHRlcm5wbGF0ZS1zZXJ2ZXJcblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGg+XG5cdFx0XHRcdCR7cHJvcHMuc2VydmVyVmVyc2lvbn1cblx0XHRcdDwvdGQ+XG5cdFx0PC90cj5cblx0XHQ8dHI+XG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdHBhdHRlcm5wbGF0ZS1jbGllbnRcblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGg+XG5cdFx0XHRcdCR7cHJvcHMuY2xpZW50VmVyc2lvbn1cblx0XHRcdDwvdGQ+XG5cdFx0PC90cj5cblx0XHQ8dHI+XG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdCR7cHJvcHMuYnJvd3Nlck5hbWV9XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PHRoPlxuXHRcdFx0XHQke3Byb3BzLmJyb3dzZXJWZXJzaW9ufVxuXHRcdFx0PC90ZD5cblx0XHQ8L3RyPlxuXHRcdDx0cj5cblx0XHRcdDx0ZD5cblx0XHRcdFx0JHtwcm9wcy5ydW50aW1lTmFtZSA/IHByb3BzLnJ1bnRpbWVOYW1lIDogJ1J1bnRpbWUnfVxuXHRcdFx0PC90ZD5cblx0XHRcdDx0aD5cblx0XHRcdFx0JHtwcm9wcy5ydW50aW1lVmVyc2lvbn1cblx0XHRcdDwvdGQ+XG5cdFx0PC90cj5cblx0XHQ8dHI+XG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdCR7cHJvcHMuY2xpZW50T3NOYW1lID8gcHJvcHMuY2xpZW50T3NOYW1lIDogJ09TJ30gKENsaWVudClcblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGg+XG5cdFx0XHRcdCR7cHJvcHMuY2xpZW50T3NWZXJzaW9ufVxuXHRcdFx0PC90ZD5cblx0XHQ8L3RyPlxuXHRcdDx0cj5cblx0XHRcdDx0ZD5cblx0XHRcdFx0JHtwcm9wcy5zZXJ2ZXJPc05hbWUgPyBwcm9wcy5zZXJ2ZXJPc05hbWUgOiAnT1MnfSAoU2VydmVyKVxuXHRcdFx0PC90ZD5cblx0XHRcdDx0aD5cblx0XHRcdFx0JHtwcm9wcy5zZXJ2ZXJPc1ZlcnNpb259XG5cdFx0XHQ8L3RkPlxuXHRcdDwvdHI+XG5cdDwvdGJvZHk+XG48L3RhYmxlPlxuPC9kZXRhaWxzPlxuYDtcbn1cblxuZnVuY3Rpb24gZ2V0SW5zdHJ1Y3Rpb25zKHByb3BzKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHtcblx0XHR0aXRsZTogYFt2JHtwcm9wcy52ZXJzaW9ufV1gLFxuXHRcdGJvZHk6IGBbUGxlYXNlIHBhc3RlIHRoZSBjb250ZW50cyBvZiBwYXR0ZXJucGxhdGUgaXNzdWUgdGVtcGxhdGUgaGVyZV1gXG5cdH0pO1xuXG5cdHJldHVybiBgXG4+IHBhdHRlcm5wbGF0ZSBpc3N1ZSB0ZW1wbGF0ZSwgcGxlYXNlIHVzZSBmb3IgaXNzdWUgcmVwb3J0aW5nIDpib3c6XG5cblxcYFtDbWQrQV0gW0NtZCtDXVxcYCB0aGUgbWFya2Rvd24gYmVsb3cgaW50byBhIG5ldyBpc3NlIGF0XG5bc2lubmVyc2NocmFkZXIvcGF0dGVybnBsYXRlXShodHRwczovL2dpdGh1Yi5jb20vc2lubmVyc2NocmFkZXIvcGF0dGVybnBsYXRlL2lzc3Vlcy9uZXc/JHtxdWVyeX0pXG5gO1xufVxuIl19