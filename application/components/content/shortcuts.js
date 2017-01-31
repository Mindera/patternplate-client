'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _markdown = require('../../containers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _lightbox = require('../lightbox');

var _lightbox2 = _interopRequireDefault(_lightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var source = '\n> Better living through keyboard controls. :tada:\n\n`patternplate-client` provides a number of keyboard shortcuts for your convenience.\nMost links reveal attached keyboard shortcuts when hovered, complementing the table below.\n\n| Combination     | Scope      | Effect                                         |\n|:---------------:|:----------:|:-----------------------------------------------|\n|`Ctrl+k`       | Global     | Show this reference                            |\n|`Ctrl+c`       | Global     | Toggle the debug console                       |\n|`Ctrl+d`       | Global     | Open the documentation                         |\n|`Ctrl+e`       | Global     | Toggle expansion of the sidebar                |\n|`Ctrl+enter`   | Console    | Apply changes to application state             |\n|`Ctrl+f`       | Pattern    | Open current pattern in new tab                |\n|`Ctrl+h`       | Global     | Toggle visibility of hidden patterns           |\n|`Ctrl+i`       | Global     | Toggle issue reportng helper                   |\n|`Ctrl+l`       | Pattern    | Toggle pattern rulers                          |\n|`Ctrl+o`       | Global     | Show/hide opacity indicators                   |\n|`Ctrl+r`       | Pattern    | Reload the current pattern                     |\n|`Ctrl+space`   | Global     | Toggle search focus                            |\n|`Ctrl+t`       | Global     | Toggle active theme                            |\n|`Esc`          | Global     | Close everything that could be considered open |\n';

exports.default = ShortcutsLightbox;


function ShortcutsLightbox(props) {
	var buttons = [_react2.default.createElement(
		_reactRouter.Link,
		{
			key: '0',
			to: (0, _extends3.default)({}, props.location, {
				query: (0, _extends3.default)({}, props.location.query, {
					lightbox: false
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
			title: 'Keyboard shortcuts',
			backdrop: true,
			buttons: buttons
		},
		_react2.default.createElement(_markdown2.default, {
			base: props.base,
			className: 'lightbox__instructions',
			source: source
		})
	);
}

ShortcutsLightbox.propTypes = {
	base: _react.PropTypes.string.isRequired,
	location: _react.PropTypes.shape({
		pathname: _react.PropTypes.string.isRequired,
		query: _react.PropTypes.object.isRequired
	})
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbnRlbnQvc2hvcnRjdXRzLmpzIl0sIm5hbWVzIjpbInNvdXJjZSIsIlNob3J0Y3V0c0xpZ2h0Ym94IiwicHJvcHMiLCJidXR0b25zIiwibG9jYXRpb24iLCJxdWVyeSIsImxpZ2h0Ym94IiwiYmFzZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsInBhdGhuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSx5Z0RBQU47O2tCQXdCZUMsaUI7OztBQUVmLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUNqQyxLQUFNQyxVQUFVLENBQ2Y7QUFBQTtBQUFBO0FBQ0MsUUFBSSxHQURMO0FBRUMsa0NBQ0lELE1BQU1FLFFBRFY7QUFFQ0Msc0NBQ0lILE1BQU1FLFFBQU4sQ0FBZUMsS0FEbkI7QUFFQ0MsZUFBVTtBQUZYO0FBRkQsS0FGRDtBQVNDLFVBQU0sMkJBVFA7QUFVQyxjQUFVO0FBVlg7QUFBQTtBQUFBLEVBRGUsQ0FBaEI7QUFnQkEsUUFDQztBQUFBO0FBQUE7QUFDQyxVQUFNLG9CQURQO0FBRUMsaUJBRkQ7QUFHQyxZQUFTSDtBQUhWO0FBS0M7QUFDQyxTQUFNRCxNQUFNSyxJQURiO0FBRUMsY0FBVSx3QkFGWDtBQUdDLFdBQVFQO0FBSFQ7QUFMRCxFQUREO0FBYUE7O0FBRURDLGtCQUFrQk8sU0FBbEIsR0FBOEI7QUFDN0JELE9BQU0saUJBQUVFLE1BQUYsQ0FBU0MsVUFEYztBQUU3Qk4sV0FBVSxpQkFBRU8sS0FBRixDQUFRO0FBQ2pCQyxZQUFVLGlCQUFFSCxNQUFGLENBQVNDLFVBREY7QUFFakJMLFNBQU8saUJBQUVRLE1BQUYsQ0FBU0g7QUFGQyxFQUFSO0FBRm1CLENBQTlCIiwiZmlsZSI6InNob3J0Y3V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi8uLi9jb250YWluZXJzL21hcmtkb3duJztcbmltcG9ydCBMaWdodGJveCBmcm9tICcuLi9saWdodGJveCc7XG5cbmNvbnN0IHNvdXJjZSA9IGBcbj4gQmV0dGVyIGxpdmluZyB0aHJvdWdoIGtleWJvYXJkIGNvbnRyb2xzLiA6dGFkYTpcblxuXFxgcGF0dGVybnBsYXRlLWNsaWVudFxcYCBwcm92aWRlcyBhIG51bWJlciBvZiBrZXlib2FyZCBzaG9ydGN1dHMgZm9yIHlvdXIgY29udmVuaWVuY2UuXG5Nb3N0IGxpbmtzIHJldmVhbCBhdHRhY2hlZCBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiBob3ZlcmVkLCBjb21wbGVtZW50aW5nIHRoZSB0YWJsZSBiZWxvdy5cblxufCBDb21iaW5hdGlvbiAgICAgfCBTY29wZSAgICAgIHwgRWZmZWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG58Oi0tLS0tLS0tLS0tLS0tLTp8Oi0tLS0tLS0tLS06fDotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbnxcXGBDdHJsK2tcXGAgICAgICAgfCBHbG9iYWwgICAgIHwgU2hvdyB0aGlzIHJlZmVyZW5jZSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG58XFxgQ3RybCtjXFxgICAgICAgIHwgR2xvYmFsICAgICB8IFRvZ2dsZSB0aGUgZGVidWcgY29uc29sZSAgICAgICAgICAgICAgICAgICAgICAgfFxufFxcYEN0cmwrZFxcYCAgICAgICB8IEdsb2JhbCAgICAgfCBPcGVuIHRoZSBkb2N1bWVudGF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnxcXGBDdHJsK2VcXGAgICAgICAgfCBHbG9iYWwgICAgIHwgVG9nZ2xlIGV4cGFuc2lvbiBvZiB0aGUgc2lkZWJhciAgICAgICAgICAgICAgICB8XG58XFxgQ3RybCtlbnRlclxcYCAgIHwgQ29uc29sZSAgICB8IEFwcGx5IGNoYW5nZXMgdG8gYXBwbGljYXRpb24gc3RhdGUgICAgICAgICAgICAgfFxufFxcYEN0cmwrZlxcYCAgICAgICB8IFBhdHRlcm4gICAgfCBPcGVuIGN1cnJlbnQgcGF0dGVybiBpbiBuZXcgdGFiICAgICAgICAgICAgICAgIHxcbnxcXGBDdHJsK2hcXGAgICAgICAgfCBHbG9iYWwgICAgIHwgVG9nZ2xlIHZpc2liaWxpdHkgb2YgaGlkZGVuIHBhdHRlcm5zICAgICAgICAgICB8XG58XFxgQ3RybCtpXFxgICAgICAgIHwgR2xvYmFsICAgICB8IFRvZ2dsZSBpc3N1ZSByZXBvcnRuZyBoZWxwZXIgICAgICAgICAgICAgICAgICAgfFxufFxcYEN0cmwrbFxcYCAgICAgICB8IFBhdHRlcm4gICAgfCBUb2dnbGUgcGF0dGVybiBydWxlcnMgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnxcXGBDdHJsK29cXGAgICAgICAgfCBHbG9iYWwgICAgIHwgU2hvdy9oaWRlIG9wYWNpdHkgaW5kaWNhdG9ycyAgICAgICAgICAgICAgICAgICB8XG58XFxgQ3RybCtyXFxgICAgICAgIHwgUGF0dGVybiAgICB8IFJlbG9hZCB0aGUgY3VycmVudCBwYXR0ZXJuICAgICAgICAgICAgICAgICAgICAgfFxufFxcYEN0cmwrc3BhY2VcXGAgICB8IEdsb2JhbCAgICAgfCBUb2dnbGUgc2VhcmNoIGZvY3VzICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnxcXGBDdHJsK3RcXGAgICAgICAgfCBHbG9iYWwgICAgIHwgVG9nZ2xlIGFjdGl2ZSB0aGVtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG58XFxgRXNjXFxgICAgICAgICAgIHwgR2xvYmFsICAgICB8IENsb3NlIGV2ZXJ5dGhpbmcgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIG9wZW4gfFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcnRjdXRzTGlnaHRib3g7XG5cbmZ1bmN0aW9uIFNob3J0Y3V0c0xpZ2h0Ym94KHByb3BzKSB7XG5cdGNvbnN0IGJ1dHRvbnMgPSBbXG5cdFx0PExpbmtcblx0XHRcdGtleT1cIjBcIlxuXHRcdFx0dG89e3tcblx0XHRcdFx0Li4ucHJvcHMubG9jYXRpb24sXG5cdFx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdFx0Li4ucHJvcHMubG9jYXRpb24ucXVlcnksXG5cdFx0XHRcdFx0bGlnaHRib3g6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH19XG5cdFx0XHR0aXRsZT1cIkNsb3NlIHRoaXMgbGlnaHRib3ggW2VzY11cIlxuXHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uIGxpZ2h0Ym94X19idXR0b25cIlxuXHRcdFx0PlxuXHRcdFx0Q2xvc2Vcblx0XHQ8L0xpbms+XG5cdF07XG5cdHJldHVybiAoXG5cdFx0PExpZ2h0Ym94XG5cdFx0XHR0aXRsZT1cIktleWJvYXJkIHNob3J0Y3V0c1wiXG5cdFx0XHRiYWNrZHJvcFxuXHRcdFx0YnV0dG9ucz17YnV0dG9uc31cblx0XHRcdD5cblx0XHRcdDxNYXJrZG93blxuXHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJsaWdodGJveF9faW5zdHJ1Y3Rpb25zXCJcblx0XHRcdFx0c291cmNlPXtzb3VyY2V9XG5cdFx0XHRcdC8+XG5cdFx0PC9MaWdodGJveD5cblx0KTtcbn1cblxuU2hvcnRjdXRzTGlnaHRib3gucHJvcFR5cGVzID0ge1xuXHRiYXNlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRsb2NhdGlvbjogdC5zaGFwZSh7XG5cdFx0cGF0aG5hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0cXVlcnk6IHQub2JqZWN0LmlzUmVxdWlyZWRcblx0fSlcbn07XG4iXX0=