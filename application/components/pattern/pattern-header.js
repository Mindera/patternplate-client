'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = PatternHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _breadCrumbs = require('../bread-crumbs');

var _breadCrumbs2 = _interopRequireDefault(_breadCrumbs);

var _headline = require('../common/headline');

var _headline2 = _interopRequireDefault(_headline);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _urlQuery = require('../../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autoMount = 'https://github.com/sinnerschrader/patternplate-transform-react-to-markup#component-auto-mounting';

function PatternHeader(props) {
	var flagClassName = (0, _classnames2.default)('pattern__flag', (0, _defineProperty3.default)({}, 'pattern__flag--' + props.flag, props.flag));

	var fullscreen = _urlQuery2.default.format({
		pathname: props.base + 'demo/' + props.id + '/index.html',
		query: {
			environment: props.environment
		}
	});
	var fullscreenTitle = 'Open "' + props.name + '" in fullscreen [ctrl+f]';

	var reloadTitle = 'Reload demo for "' + props.name + '" [ctrl+r]';
	var reloadClassName = (0, _classnames2.default)('button', 'button--reload', {
		'reload--reloading': props.loading,
		'button--is-active': props.loading,
		'reload--error': props.errored
	});

	var rulersTitle = props.rulers ? 'Disable rulers [ctrl+l]' : 'Enable rulers [ctrl+l]';

	var rulersClassName = (0, _classnames2.default)('button button--rulers', {
		'button--is-active': props.rulers
	});

	var opacityClassName = (0, _classnames2.default)('button button--opacity', {
		'button--is-active': props.opacity
	});
	var opacitySymbol = props.opacity ? 'checkers' : 'checkers-inverted';
	var opacityTitle = props.opacity ? 'Show opacity [ctrl+o]' : 'Hide opacity [ctrl+o]';

	return _react2.default.createElement(
		'div',
		{ className: 'pattern-header-container' },
		_react2.default.createElement(_breadCrumbs2.default, {
			base: props.base,
			crumbs: props.breadcrumbs,
			location: props.location,
			className: 'pattern-path'
		}),
		_react2.default.createElement(
			_headline2.default,
			{ className: 'pattern-header', order: 2 },
			_react2.default.createElement(
				'span',
				{ className: 'pattern-name' },
				props.name
			),
			_react2.default.createElement(
				'small',
				{ className: 'pattern-version' },
				props.version ? 'v' + props.version : ''
			),
			props.flag ? _react2.default.createElement(
				'small',
				{ className: flagClassName },
				_react2.default.createElement(
					_reactRouter.Link,
					{
						title: 'Search patterns with flag ' + props.flag,
						to: {
							pathname: props.location.pathname,
							query: (0, _extends3.default)({}, props.location.query, { search: 'flag:' + props.flag })
						}
					},
					props.flag
				)
			) : null,
			props.tags.map(function (tag, key) {
				return _react2.default.createElement(
					'small',
					{ key: key, className: 'pattern-tag' },
					_react2.default.createElement(
						_reactRouter.Link,
						{
							title: 'Search patterns with tag ' + tag,
							to: {
								pathname: props.location.pathname,
								query: (0, _extends3.default)({}, props.location.query, { search: 'tag:' + tag })
							},
							key: key
						},
						tag
					)
				);
			}),
			props.automount && _react2.default.createElement(
				'small',
				{ className: 'pattern-option' },
				_react2.default.createElement(
					'a',
					{
						href: autoMount,
						target: '_blank',
						title: 'Learn about component auto mounting on Github',
						rel: 'noopener'
					},
					'auto-mount'
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'pattern-header__actions' },
			_react2.default.createElement(
				_reactRouter.Link,
				{
					className: reloadClassName,
					title: reloadTitle,
					disabled: props.loading,
					onClick: props.loading ? _lodash.noop : props.onReloadClick,
					to: {
						pathname: props.location.pathname,
						query: (0, _extends3.default)({}, props.location.query, {
							reload: props.reloadTime
						})
					}
				},
				_react2.default.createElement(_icon2.default, { symbol: 'reload' })
			),
			_react2.default.createElement(
				_reactRouter.Link,
				{
					className: rulersClassName,
					title: rulersTitle,
					to: {
						pathname: props.location.pathname,
						query: (0, _extends3.default)({}, props.location.query, {
							rulers: !props.rulers
						})
					}
				},
				_react2.default.createElement(_icon2.default, { symbol: 'rulers' })
			),
			_react2.default.createElement(
				_reactRouter.Link,
				{
					className: opacityClassName,
					title: opacityTitle,
					to: {
						pathname: props.location.pathname,
						query: (0, _extends3.default)({}, props.location.query, {
							opacity: !props.opacity
						})
					}
				},
				_react2.default.createElement(_icon2.default, { symbol: opacitySymbol })
			),
			_react2.default.createElement(
				'a',
				{
					className: 'button fullscreen',
					target: '_blank',
					rel: 'noopener',
					href: fullscreen,
					title: fullscreenTitle
				},
				_react2.default.createElement(_icon2.default, { symbol: 'fullscreen' })
			)
		)
	);
}

PatternHeader.propTypes = {
	automount: _react.PropTypes.bool.isRequired,
	base: _react.PropTypes.string.isRequired,
	breadcrumbs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		id: _react.PropTypes.string.isRequired,
		name: _react.PropTypes.string.isRequired,
		target: _react.PropTypes.shape({
			pathname: _react.PropTypes.string.isRequired,
			query: _react.PropTypes.object.isRequired
		}).isRequired
	})).isRequired,
	environment: _react.PropTypes.string.isRequired,
	errored: _react.PropTypes.bool.isRequired,
	flag: _react.PropTypes.string,
	id: _react.PropTypes.string.isRequired,
	loading: _react.PropTypes.bool.isRequired,
	location: _react.PropTypes.shape({
		pathname: _react.PropTypes.string.isRequired,
		query: _react.PropTypes.object.isRequired
	}),
	name: _react.PropTypes.string.isRequired,
	onReloadClick: _react.PropTypes.func.isRequired,
	opacity: _react.PropTypes.bool.isRequired,
	reloadTime: _react.PropTypes.number,
	reloadedTime: _react.PropTypes.number,
	rulers: _react.PropTypes.bool.isRequired,
	tags: _react.PropTypes.arrayOf(_react.PropTypes.string),
	version: _react.PropTypes.string.isRequired
};

PatternHeader.defaultProps = {
	tags: [],
	onReloadClick: _lodash.noop
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1oZWFkZXIuanMiXSwibmFtZXMiOlsiUGF0dGVybkhlYWRlciIsImF1dG9Nb3VudCIsInByb3BzIiwiZmxhZ0NsYXNzTmFtZSIsImZsYWciLCJmdWxsc2NyZWVuIiwiZm9ybWF0IiwicGF0aG5hbWUiLCJiYXNlIiwiaWQiLCJxdWVyeSIsImVudmlyb25tZW50IiwiZnVsbHNjcmVlblRpdGxlIiwibmFtZSIsInJlbG9hZFRpdGxlIiwicmVsb2FkQ2xhc3NOYW1lIiwibG9hZGluZyIsImVycm9yZWQiLCJydWxlcnNUaXRsZSIsInJ1bGVycyIsInJ1bGVyc0NsYXNzTmFtZSIsIm9wYWNpdHlDbGFzc05hbWUiLCJvcGFjaXR5Iiwib3BhY2l0eVN5bWJvbCIsIm9wYWNpdHlUaXRsZSIsImJyZWFkY3J1bWJzIiwibG9jYXRpb24iLCJ2ZXJzaW9uIiwic2VhcmNoIiwidGFncyIsIm1hcCIsInRhZyIsImtleSIsImF1dG9tb3VudCIsIm9uUmVsb2FkQ2xpY2siLCJyZWxvYWQiLCJyZWxvYWRUaW1lIiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwic2hhcGUiLCJ0YXJnZXQiLCJvYmplY3QiLCJmdW5jIiwibnVtYmVyIiwicmVsb2FkZWRUaW1lIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztrQkFZd0JBLGE7O0FBWnhCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsWUFBWSxrR0FBbEI7O0FBRWUsU0FBU0QsYUFBVCxDQUF1QkUsS0FBdkIsRUFBOEI7QUFDNUMsS0FBTUMsZ0JBQWdCLGlHQUNGRCxNQUFNRSxJQURKLEVBQ2FGLE1BQU1FLElBRG5CLEVBQXRCOztBQUlBLEtBQU1DLGFBQWEsbUJBQVNDLE1BQVQsQ0FB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IHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGpvaW4gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge25vb3B9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBCcmVhZENydW1icyBmcm9tICcuLi9icmVhZC1jcnVtYnMnO1xuaW1wb3J0IEhlYWRsaW5lIGZyb20gJy4uL2NvbW1vbi9oZWFkbGluZSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21tb24vaWNvbic7XG5pbXBvcnQgdXJsUXVlcnkgZnJvbSAnLi4vLi4vdXRpbHMvdXJsLXF1ZXJ5JztcblxuY29uc3QgYXV0b01vdW50ID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9zaW5uZXJzY2hyYWRlci9wYXR0ZXJucGxhdGUtdHJhbnNmb3JtLXJlYWN0LXRvLW1hcmt1cCNjb21wb25lbnQtYXV0by1tb3VudGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5IZWFkZXIocHJvcHMpIHtcblx0Y29uc3QgZmxhZ0NsYXNzTmFtZSA9IGpvaW4oYHBhdHRlcm5fX2ZsYWdgLCB7XG5cdFx0W2BwYXR0ZXJuX19mbGFnLS0ke3Byb3BzLmZsYWd9YF06IHByb3BzLmZsYWdcblx0fSk7XG5cblx0Y29uc3QgZnVsbHNjcmVlbiA9IHVybFF1ZXJ5LmZvcm1hdCh7XG5cdFx0cGF0aG5hbWU6IGAke3Byb3BzLmJhc2V9ZGVtby8ke3Byb3BzLmlkfS9pbmRleC5odG1sYCxcblx0XHRxdWVyeToge1xuXHRcdFx0ZW52aXJvbm1lbnQ6IHByb3BzLmVudmlyb25tZW50XG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgZnVsbHNjcmVlblRpdGxlID0gYE9wZW4gXCIke3Byb3BzLm5hbWV9XCIgaW4gZnVsbHNjcmVlbiBbY3RybCtmXWA7XG5cblx0Y29uc3QgcmVsb2FkVGl0bGUgPSBgUmVsb2FkIGRlbW8gZm9yIFwiJHtwcm9wcy5uYW1lfVwiIFtjdHJsK3JdYDtcblx0Y29uc3QgcmVsb2FkQ2xhc3NOYW1lID0gam9pbihcblx0XHQnYnV0dG9uJyxcblx0XHQnYnV0dG9uLS1yZWxvYWQnLFxuXHRcdHtcblx0XHRcdCdyZWxvYWQtLXJlbG9hZGluZyc6IHByb3BzLmxvYWRpbmcsXG5cdFx0XHQnYnV0dG9uLS1pcy1hY3RpdmUnOiBwcm9wcy5sb2FkaW5nLFxuXHRcdFx0J3JlbG9hZC0tZXJyb3InOiBwcm9wcy5lcnJvcmVkXG5cdFx0fVxuXHQpO1xuXG5cdGNvbnN0IHJ1bGVyc1RpdGxlID0gcHJvcHMucnVsZXJzID9cblx0XHRgRGlzYWJsZSBydWxlcnMgW2N0cmwrbF1gIDpcblx0XHRgRW5hYmxlIHJ1bGVycyBbY3RybCtsXWA7XG5cblx0Y29uc3QgcnVsZXJzQ2xhc3NOYW1lID0gam9pbihcblx0XHRgYnV0dG9uIGJ1dHRvbi0tcnVsZXJzYCxcblx0XHR7XG5cdFx0XHQnYnV0dG9uLS1pcy1hY3RpdmUnOiBwcm9wcy5ydWxlcnNcblx0XHR9XG5cdCk7XG5cblx0Y29uc3Qgb3BhY2l0eUNsYXNzTmFtZSA9IGpvaW4oXG5cdFx0J2J1dHRvbiBidXR0b24tLW9wYWNpdHknLFxuXHRcdHtcblx0XHRcdCdidXR0b24tLWlzLWFjdGl2ZSc6IHByb3BzLm9wYWNpdHlcblx0XHR9XG5cdCk7XG5cdGNvbnN0IG9wYWNpdHlTeW1ib2wgPSBwcm9wcy5vcGFjaXR5ID8gJ2NoZWNrZXJzJyA6ICdjaGVja2Vycy1pbnZlcnRlZCc7XG5cdGNvbnN0IG9wYWNpdHlUaXRsZSA9IHByb3BzLm9wYWNpdHkgP1xuXHRcdCdTaG93IG9wYWNpdHkgW2N0cmwrb10nIDpcblx0XHQnSGlkZSBvcGFjaXR5IFtjdHJsK29dJztcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicGF0dGVybi1oZWFkZXItY29udGFpbmVyXCI+XG5cdFx0XHQ8QnJlYWRDcnVtYnNcblx0XHRcdFx0YmFzZT17cHJvcHMuYmFzZX1cblx0XHRcdFx0Y3J1bWJzPXtwcm9wcy5icmVhZGNydW1ic31cblx0XHRcdFx0bG9jYXRpb249e3Byb3BzLmxvY2F0aW9ufVxuXHRcdFx0XHRjbGFzc05hbWU9XCJwYXR0ZXJuLXBhdGhcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PEhlYWRsaW5lIGNsYXNzTmFtZT1cInBhdHRlcm4taGVhZGVyXCIgb3JkZXI9ezJ9PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwYXR0ZXJuLW5hbWVcIj5cblx0XHRcdFx0XHR7cHJvcHMubmFtZX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwicGF0dGVybi12ZXJzaW9uXCI+XG5cdFx0XHRcdFx0e3Byb3BzLnZlcnNpb24gPyBgdiR7cHJvcHMudmVyc2lvbn1gIDogJyd9XG5cdFx0XHRcdDwvc21hbGw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm9wcy5mbGFnID9cblx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9e2ZsYWdDbGFzc05hbWV9PlxuXHRcdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtgU2VhcmNoIHBhdHRlcm5zIHdpdGggZmxhZyAke3Byb3BzLmZsYWd9YH1cblx0XHRcdFx0XHRcdFx0XHR0bz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0cGF0aG5hbWU6IHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0cXVlcnk6IHsuLi5wcm9wcy5sb2NhdGlvbi5xdWVyeSwgc2VhcmNoOiBgZmxhZzoke3Byb3BzLmZsYWd9YH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7cHJvcHMuZmxhZ31cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9zbWFsbD4gOlxuXHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHR9XG5cdFx0XHRcdHtwcm9wcy50YWdzLm1hcCgodGFnLCBrZXkpID0+XG5cdFx0XHRcdFx0PHNtYWxsIGtleT17a2V5fSBjbGFzc05hbWU9XCJwYXR0ZXJuLXRhZ1wiPlxuXHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0dGl0bGU9e2BTZWFyY2ggcGF0dGVybnMgd2l0aCB0YWcgJHt0YWd9YH1cblx0XHRcdFx0XHRcdFx0dG89e3tcblx0XHRcdFx0XHRcdFx0XHRwYXRobmFtZTogcHJvcHMubG9jYXRpb24ucGF0aG5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0cXVlcnk6IHsuLi5wcm9wcy5sb2NhdGlvbi5xdWVyeSwgc2VhcmNoOiBgdGFnOiR7dGFnfWB9XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHt0YWd9XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9zbWFsbD5cblx0XHRcdFx0KX1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3BzLmF1dG9tb3VudCAmJlxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cInBhdHRlcm4tb3B0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17YXV0b01vdW50fVxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCJMZWFybiBhYm91dCBjb21wb25lbnQgYXV0byBtb3VudGluZyBvbiBHaXRodWJcIlxuXHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0YXV0by1tb3VudFxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3NtYWxsPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L0hlYWRsaW5lPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLWhlYWRlcl9fYWN0aW9uc1wiPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdGNsYXNzTmFtZT17cmVsb2FkQ2xhc3NOYW1lfVxuXHRcdFx0XHRcdHRpdGxlPXtyZWxvYWRUaXRsZX1cblx0XHRcdFx0XHRkaXNhYmxlZD17cHJvcHMubG9hZGluZ31cblx0XHRcdFx0XHRvbkNsaWNrPXtwcm9wcy5sb2FkaW5nID8gbm9vcCA6IHByb3BzLm9uUmVsb2FkQ2xpY2t9XG5cdFx0XHRcdFx0dG89e3tcblx0XHRcdFx0XHRcdHBhdGhuYW1lOiBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZSxcblx0XHRcdFx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdFx0XHRcdC4uLnByb3BzLmxvY2F0aW9uLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0XHRyZWxvYWQ6IHByb3BzLnJlbG9hZFRpbWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8SWNvbiBzeW1ib2w9XCJyZWxvYWRcIi8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRjbGFzc05hbWU9e3J1bGVyc0NsYXNzTmFtZX1cblx0XHRcdFx0XHR0aXRsZT17cnVsZXJzVGl0bGV9XG5cdFx0XHRcdFx0dG89e3tcblx0XHRcdFx0XHRcdHBhdGhuYW1lOiBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZSxcblx0XHRcdFx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdFx0XHRcdC4uLnByb3BzLmxvY2F0aW9uLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0XHRydWxlcnM6ICFwcm9wcy5ydWxlcnNcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8SWNvbiBzeW1ib2w9XCJydWxlcnNcIi8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRjbGFzc05hbWU9e29wYWNpdHlDbGFzc05hbWV9XG5cdFx0XHRcdFx0dGl0bGU9e29wYWNpdHlUaXRsZX1cblx0XHRcdFx0XHR0bz17e1xuXHRcdFx0XHRcdFx0cGF0aG5hbWU6IHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLFxuXHRcdFx0XHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0XHRcdFx0Li4ucHJvcHMubG9jYXRpb24ucXVlcnksXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6ICFwcm9wcy5vcGFjaXR5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEljb24gc3ltYm9sPXtvcGFjaXR5U3ltYm9sfS8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24gZnVsbHNjcmVlblwiXG5cdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRyZWw9XCJub29wZW5lclwiXG5cdFx0XHRcdFx0aHJlZj17ZnVsbHNjcmVlbn1cblx0XHRcdFx0XHR0aXRsZT17ZnVsbHNjcmVlblRpdGxlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8SWNvbiBzeW1ib2w9XCJmdWxsc2NyZWVuXCIvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuUGF0dGVybkhlYWRlci5wcm9wVHlwZXMgPSB7XG5cdGF1dG9tb3VudDogdC5ib29sLmlzUmVxdWlyZWQsXG5cdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGJyZWFkY3J1bWJzOiB0LmFycmF5T2YodC5zaGFwZSh7XG5cdFx0aWQ6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0bmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR0YXJnZXQ6IHQuc2hhcGUoe1xuXHRcdFx0cGF0aG5hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRxdWVyeTogdC5vYmplY3QuaXNSZXF1aXJlZFxuXHRcdH0pLmlzUmVxdWlyZWRcblx0fSkpLmlzUmVxdWlyZWQsXG5cdGVudmlyb25tZW50OiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRlcnJvcmVkOiB0LmJvb2wuaXNSZXF1aXJlZCxcblx0ZmxhZzogdC5zdHJpbmcsXG5cdGlkOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRsb2FkaW5nOiB0LmJvb2wuaXNSZXF1aXJlZCxcblx0bG9jYXRpb246IHQuc2hhcGUoe1xuXHRcdHBhdGhuYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHF1ZXJ5OiB0Lm9iamVjdC5pc1JlcXVpcmVkXG5cdH0pLFxuXHRuYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRvblJlbG9hZENsaWNrOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0b3BhY2l0eTogdC5ib29sLmlzUmVxdWlyZWQsXG5cdHJlbG9hZFRpbWU6IHQubnVtYmVyLFxuXHRyZWxvYWRlZFRpbWU6IHQubnVtYmVyLFxuXHRydWxlcnM6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHR0YWdzOiB0LmFycmF5T2YodC5zdHJpbmcpLFxuXHR2ZXJzaW9uOiB0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5QYXR0ZXJuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0dGFnczogW10sXG5cdG9uUmVsb2FkQ2xpY2s6IG5vb3Bcbn07XG4iXX0=