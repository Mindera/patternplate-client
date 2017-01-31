'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = PatternFolder;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ItemField(props) {
	var Component = props.component;
	var className = (0, _classnames2.default)('pattern-field', props.className, (0, _defineProperty3.default)({}, 'pattern-field--' + props.valueKey, props.value));
	var children = props.children || props.value;

	return _react2.default.createElement(
		Component,
		{ className: className },
		Array.isArray(children) ? children.map(function (c, i) {
			return _react2.default.createElement(
				'span',
				{ key: i },
				c
			);
		}) : children
	);
}

ItemField.propTypes = {
	component: _react.PropTypes.string.isRequired,
	valueKey: _react.PropTypes.string.isRequired,
	value: _react.PropTypes.any,
	className: _react.PropTypes.string,
	children: _react.PropTypes.any
};

ItemField.defaultProps = {
	component: 'div'
};

function PatternFolderItem(props) {
	var name = props.name,
	    type = props.type,
	    id = props.id,
	    location = props.location,
	    base = props.base;

	var to = {
		pathname: base + 'pattern/' + id,
		query: location.query
	};

	var title = 'Navigate to ' + type + ' "' + name + '" at ' + id;
	var href = base + 'demo/' + id;

	return _react2.default.createElement(
		'li',
		{ className: 'pattern-item' },
		_react2.default.createElement(
			ItemField,
			{ valueKey: 'name', value: props.name },
			_react2.default.createElement(
				_reactRouter.Link,
				{ to: to, title: title },
				_react2.default.createElement(
					_icon2.default,
					{ base: base, symbol: type },
					name
				),
				_react2.default.createElement(
					'span',
					null,
					props.name
				)
			)
		),
		_react2.default.createElement(ItemField, { valueKey: 'version', value: props.version }),
		_react2.default.createElement(ItemField, { valueKey: 'tags', value: props.tags }),
		_react2.default.createElement(ItemField, { valueKey: 'flag', value: props.flag }),
		props.type === 'pattern' ? _react2.default.createElement(
			'a',
			{
				href: href,
				target: '_blank',
				rel: 'nofollow',
				className: 'pattern-field',
				title: 'Open ' + type + ' "' + name + '" at ' + id + ' in fullscreen'
			},
			_react2.default.createElement(
				_icon2.default,
				{ base: base, symbol: 'fullscreen', description: 'Fullscreen' },
				id + ' in fullscreen'
			)
		) : _react2.default.createElement('div', { className: 'pattern-field' })
	);
}

PatternFolderItem.propTypes = {
	base: _react.PropTypes.string.isRequired,
	id: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired,
	type: _react.PropTypes.string.isRequired,
	version: _react.PropTypes.string,
	tags: _react.PropTypes.array,
	flag: _react.PropTypes.string,
	location: _react.PropTypes.shape({
		pathname: _react.PropTypes.string.isRequired,
		query: _react.PropTypes.object.isRequired
	}).isRequired
};

function PatternFolder(_ref) {
	var items = _ref.items,
	    location = _ref.location,
	    up = _ref.up,
	    base = _ref.base;

	return _react2.default.createElement(
		'ul',
		{ className: 'pattern-folder' },
		_react2.default.createElement(
			'li',
			{ className: 'pattern-folder-head' },
			_react2.default.createElement('div', { className: 'pattern-folder-head__cell' }),
			_react2.default.createElement(
				'div',
				{ className: 'pattern-folder-head__cell' },
				'Version'
			),
			_react2.default.createElement(
				'div',
				{ className: 'pattern-folder-head__cell' },
				'Tags'
			),
			_react2.default.createElement(
				'div',
				{ className: 'pattern-folder-head__cell' },
				'Flag'
			),
			_react2.default.createElement('div', { className: 'pattern-folder-head__cell' })
		),
		up && _react2.default.createElement(PatternFolderItem, {
			id: up,
			name: '..',
			type: 'folder',
			location: location,
			base: base
		}),
		items.map(function (item) {
			return _react2.default.createElement(PatternFolderItem, (0, _extends3.default)({}, item, {
				location: location,
				key: item.id,
				base: base
			}));
		})
	);
}

PatternFolder.propTypes = {
	base: _react.PropTypes.string.isRequired,
	items: _react.PropTypes.arrayOf(_react.PropTypes.shape(PatternFolderItem.propTypes)).isRequired,
	location: _react.PropTypes.shape({
		pathname: _react.PropTypes.string.isRequired,
		query: _react.PropTypes.object.isRequired
	}).isRequired,
	up: _react.PropTypes.string
};

PatternFolder.defaultProps = {
	items: []
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1mb2xkZXIuanMiXSwibmFtZXMiOlsiUGF0dGVybkZvbGRlciIsIkl0ZW1GaWVsZCIsInByb3BzIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY2xhc3NOYW1lIiwidmFsdWVLZXkiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiYyIsImkiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYW55IiwiZGVmYXVsdFByb3BzIiwiUGF0dGVybkZvbGRlckl0ZW0iLCJuYW1lIiwidHlwZSIsImlkIiwibG9jYXRpb24iLCJiYXNlIiwidG8iLCJwYXRobmFtZSIsInF1ZXJ5IiwidGl0bGUiLCJocmVmIiwidmVyc2lvbiIsInRhZ3MiLCJmbGFnIiwiYXJyYXkiLCJzaGFwZSIsIm9iamVjdCIsIml0ZW1zIiwidXAiLCJpdGVtIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBNEZ3QkEsYTs7QUE1RnhCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDekIsS0FBTUMsWUFBWUQsTUFBTUUsU0FBeEI7QUFDQSxLQUFNQyxZQUFZLDBCQUFLLGVBQUwsRUFBc0JILE1BQU1HLFNBQTVCLHdEQUNFSCxNQUFNSSxRQURSLEVBQ3FCSixNQUFNSyxLQUQzQixFQUFsQjtBQUdBLEtBQU1DLFdBQVdOLE1BQU1NLFFBQU4sSUFBa0JOLE1BQU1LLEtBQXpDOztBQUVBLFFBQ0M7QUFBQyxXQUFEO0FBQUEsSUFBVyxXQUFXRixTQUF0QjtBQUVFSSxRQUFNQyxPQUFOLENBQWNGLFFBQWQsSUFDQ0EsU0FBU0csR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3RCLFVBQU87QUFBQTtBQUFBLE1BQU0sS0FBS0EsQ0FBWDtBQUFl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ekJxQixLQUFJLGlCQUFFdEI7QUFQbUIsQ0FBMUI7O0FBVUFmLGNBQWNrQixZQUFkLEdBQTZCO0FBQzVCa0IsUUFBTztBQURxQixDQUE3QiIsImZpbGUiOiJwYXR0ZXJuLWZvbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgam9pbiBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi4vY29tbW9uL2ljb24nO1xuXG5mdW5jdGlvbiBJdGVtRmllbGQocHJvcHMpIHtcblx0Y29uc3QgQ29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuXHRjb25zdCBjbGFzc05hbWUgPSBqb2luKCdwYXR0ZXJuLWZpZWxkJywgcHJvcHMuY2xhc3NOYW1lLCB7XG5cdFx0W2BwYXR0ZXJuLWZpZWxkLS0ke3Byb3BzLnZhbHVlS2V5fWBdOiBwcm9wcy52YWx1ZVxuXHR9KTtcblx0Y29uc3QgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbiB8fCBwcm9wcy52YWx1ZTtcblxuXHRyZXR1cm4gKFxuXHRcdDxDb21wb25lbnQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0e1xuXHRcdFx0XHRBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/XG5cdFx0XHRcdFx0Y2hpbGRyZW4ubWFwKChjLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfT57Y308L3NwYW4+O1xuXHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHRjaGlsZHJlblxuXHRcdFx0fVxuXHRcdDwvQ29tcG9uZW50PlxuXHQpO1xufVxuXG5JdGVtRmllbGQucHJvcFR5cGVzID0ge1xuXHRjb21wb25lbnQ6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHZhbHVlS2V5OiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHR2YWx1ZTogdC5hbnksXG5cdGNsYXNzTmFtZTogdC5zdHJpbmcsXG5cdGNoaWxkcmVuOiB0LmFueVxufTtcblxuSXRlbUZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnZGl2J1xufTtcblxuZnVuY3Rpb24gUGF0dGVybkZvbGRlckl0ZW0ocHJvcHMpIHtcblx0Y29uc3Qge25hbWUsIHR5cGUsIGlkLCBsb2NhdGlvbiwgYmFzZX0gPSBwcm9wcztcblx0Y29uc3QgdG8gPSB7XG5cdFx0cGF0aG5hbWU6IGAke2Jhc2V9cGF0dGVybi8ke2lkfWAsXG5cdFx0cXVlcnk6IGxvY2F0aW9uLnF1ZXJ5XG5cdH07XG5cblx0Y29uc3QgdGl0bGUgPSBgTmF2aWdhdGUgdG8gJHt0eXBlfSBcIiR7bmFtZX1cIiBhdCAke2lkfWA7XG5cdGNvbnN0IGhyZWYgPSBgJHtiYXNlfWRlbW8vJHtpZH1gO1xuXG5cdHJldHVybiAoXG5cdFx0PGxpIGNsYXNzTmFtZT1cInBhdHRlcm4taXRlbVwiPlxuXHRcdFx0PEl0ZW1GaWVsZCB2YWx1ZUtleT1cIm5hbWVcIiB2YWx1ZT17cHJvcHMubmFtZX0+XG5cdFx0XHRcdDxMaW5rIHRvPXt0b30gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0XHQ8SWNvbiBiYXNlPXtiYXNlfSBzeW1ib2w9e3R5cGV9PntuYW1lfTwvSWNvbj5cblx0XHRcdFx0XHQ8c3Bhbj57cHJvcHMubmFtZX08L3NwYW4+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvSXRlbUZpZWxkPlxuXHRcdFx0PEl0ZW1GaWVsZCB2YWx1ZUtleT1cInZlcnNpb25cIiB2YWx1ZT17cHJvcHMudmVyc2lvbn0vPlxuXHRcdFx0PEl0ZW1GaWVsZCB2YWx1ZUtleT1cInRhZ3NcIiB2YWx1ZT17cHJvcHMudGFnc30vPlxuXHRcdFx0PEl0ZW1GaWVsZCB2YWx1ZUtleT1cImZsYWdcIiB2YWx1ZT17cHJvcHMuZmxhZ30vPlxuXHRcdFx0e1xuXHRcdFx0XHRwcm9wcy50eXBlID09PSAncGF0dGVybicgP1xuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPXtocmVmfVxuXHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdHJlbD1cIm5vZm9sbG93XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhdHRlcm4tZmllbGRcIlxuXHRcdFx0XHRcdFx0dGl0bGU9e2BPcGVuICR7dHlwZX0gXCIke25hbWV9XCIgYXQgJHtpZH0gaW4gZnVsbHNjcmVlbmB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8SWNvbiBiYXNlPXtiYXNlfSBzeW1ib2w9XCJmdWxsc2NyZWVuXCIgZGVzY3JpcHRpb249XCJGdWxsc2NyZWVuXCI+XG5cdFx0XHRcdFx0XHRcdHtgJHtpZH0gaW4gZnVsbHNjcmVlbmB9XG5cdFx0XHRcdFx0XHQ8L0ljb24+XG5cdFx0XHRcdFx0PC9hPiA6XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLWZpZWxkXCIvPlxuXHRcdFx0fVxuXHRcdDwvbGk+XG5cdCk7XG59XG5cblBhdHRlcm5Gb2xkZXJJdGVtLnByb3BUeXBlcyA9IHtcblx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aWQ6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdG5hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHR5cGU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHZlcnNpb246IHQuc3RyaW5nLFxuXHR0YWdzOiB0LmFycmF5LFxuXHRmbGFnOiB0LnN0cmluZyxcblx0bG9jYXRpb246IHQuc2hhcGUoe1xuXHRcdHBhdGhuYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHF1ZXJ5OiB0Lm9iamVjdC5pc1JlcXVpcmVkXG5cdH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5Gb2xkZXIoe2l0ZW1zLCBsb2NhdGlvbiwgdXAsIGJhc2V9KSB7XG5cdHJldHVybiAoXG5cdFx0PHVsIGNsYXNzTmFtZT1cInBhdHRlcm4tZm9sZGVyXCI+XG5cdFx0XHQ8bGkgY2xhc3NOYW1lPVwicGF0dGVybi1mb2xkZXItaGVhZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tZm9sZGVyLWhlYWRfX2NlbGxcIi8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGF0dGVybi1mb2xkZXItaGVhZF9fY2VsbFwiPlZlcnNpb248L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLWZvbGRlci1oZWFkX19jZWxsXCI+VGFnczwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tZm9sZGVyLWhlYWRfX2NlbGxcIj5GbGFnPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGF0dGVybi1mb2xkZXItaGVhZF9fY2VsbFwiLz5cblx0XHRcdDwvbGk+XG5cdFx0XHR7XG5cdFx0XHRcdHVwICYmXG5cdFx0XHRcdFx0PFBhdHRlcm5Gb2xkZXJJdGVtXG5cdFx0XHRcdFx0XHRpZD17dXB9XG5cdFx0XHRcdFx0XHRuYW1lPVwiLi5cIlxuXHRcdFx0XHRcdFx0dHlwZT1cImZvbGRlclwiXG5cdFx0XHRcdFx0XHRsb2NhdGlvbj17bG9jYXRpb259XG5cdFx0XHRcdFx0XHRiYXNlPXtiYXNlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdH1cblx0XHRcdHtcblx0XHRcdFx0aXRlbXMubWFwKGl0ZW0gPT4gKFxuXHRcdFx0XHRcdDxQYXR0ZXJuRm9sZGVySXRlbVxuXHRcdFx0XHRcdFx0ey4uLml0ZW19XG5cdFx0XHRcdFx0XHRsb2NhdGlvbj17bG9jYXRpb259XG5cdFx0XHRcdFx0XHRrZXk9e2l0ZW0uaWR9XG5cdFx0XHRcdFx0XHRiYXNlPXtiYXNlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSlcblx0XHRcdH1cblx0XHQ8L3VsPlxuXHQpO1xufVxuXG5QYXR0ZXJuRm9sZGVyLnByb3BUeXBlcyA9IHtcblx0YmFzZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aXRlbXM6IHQuYXJyYXlPZih0LnNoYXBlKFBhdHRlcm5Gb2xkZXJJdGVtLnByb3BUeXBlcykpLmlzUmVxdWlyZWQsXG5cdGxvY2F0aW9uOiB0LnNoYXBlKHtcblx0XHRwYXRobmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRxdWVyeTogdC5vYmplY3QuaXNSZXF1aXJlZFxuXHR9KS5pc1JlcXVpcmVkLFxuXHR1cDogdC5zdHJpbmdcbn07XG5cblBhdHRlcm5Gb2xkZXIuZGVmYXVsdFByb3BzID0ge1xuXHRpdGVtczogW11cbn07XG4iXX0=