'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = PatternToolEnvSelect;


var name = 'pattern-tool pattern-environment-selection';

function PatternToolEnvSelect(props) {
	var envs = props.environments,
	    env = props.environment;

	var selected = envs.filter(function (item) {
		return item.id === env;
	})[0] || {};
	var className = (0, _classnames2.default)(name, {
		'pattern-environment-selection--disabled': props.disabled
	});

	var title = getTitle(selected, envs);

	return _react2.default.createElement(
		'label',
		{ className: className },
		_react2.default.createElement(
			'span',
			{ className: 'pattern-environment-selection__label' },
			'Environment'
		),
		_react2.default.createElement(
			'span',
			{ className: 'pattern-environment-selection__value' },
			selected.name
		),
		_react2.default.createElement(
			'select',
			{
				className: 'pattern-environment-selection__native',
				disabled: props.disabled,
				value: env,
				onChange: props.onChange,
				title: title
			},
			envs.map(function (env) {
				return _react2.default.createElement(
					'option',
					{
						key: env.id,
						value: env.id
					},
					env.name
				);
			})
		),
		_react2.default.createElement(_icon2.default, {
			base: props.base,
			className: 'pattern-environment-selection__arrow',
			symbol: 'arrow-right'
		})
	);
}

PatternToolEnvSelect.propTypes = {
	base: _react.PropTypes.string.isRequired,
	disabled: _react.PropTypes.bool,
	environment: _react.PropTypes.string.isRequired,
	environments: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		name: _react.PropTypes.string.isRequired,
		id: _react.PropTypes.string.isRequired
	})).isRequired,
	onChange: _react.PropTypes.func.isRequired
};

PatternToolEnvSelect.defaultProps = {
	onChange: function onChange() {}
};

function getTitle() {
	var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var envs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	_assert2.default.equal(typeof selected === 'undefined' ? 'undefined' : (0, _typeof3.default)(selected), 'object', 'selected must be an object');
	_assert2.default.ok(Array.isArray(envs), 'envs must be an array');
	var other = envs.filter(function (e) {
		return e.id !== selected.id;
	});

	var lead = other[0];

	if (!lead) {
		return null;
	}

	var head = other.slice(0, other.length - 1);
	var tail = other[other.length - 1];

	var environments = tail ? head.map(function (e) {
		return '"' + e.name + '"';
	}).join(', ') + ' or "' + tail.name + '"' : lead.name;

	return 'Change currently active environment "' + selected.name + '" to ' + environments;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi10b29sLWVudmlyb25tZW50LXNlbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJQYXR0ZXJuVG9vbEVudlNlbGVjdCIsIm5hbWUiLCJwcm9wcyIsImVudnMiLCJlbnZpcm9ubWVudHMiLCJlbnYiLCJlbnZpcm9ubWVudCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJ0aXRsZSIsImdldFRpdGxlIiwib25DaGFuZ2UiLCJtYXAiLCJiYXNlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhcnJheU9mIiwic2hhcGUiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiZXF1YWwiLCJvayIsIkFycmF5IiwiaXNBcnJheSIsIm90aGVyIiwiZSIsImxlYWQiLCJoZWFkIiwic2xpY2UiLCJsZW5ndGgiLCJ0YWlsIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWVBLG9COzs7QUFFZixJQUFNQyxPQUFPLDRDQUFiOztBQUVBLFNBQVNELG9CQUFULENBQThCRSxLQUE5QixFQUFxQztBQUFBLEtBQ2ZDLElBRGUsR0FDV0QsS0FEWCxDQUM3QkUsWUFENkI7QUFBQSxLQUNJQyxHQURKLEdBQ1dILEtBRFgsQ0FDVEksV0FEUzs7QUFFcEMsS0FBTUMsV0FBV0osS0FBS0ssTUFBTCxDQUFZO0FBQUEsU0FBUUMsS0FBS0MsRUFBTCxLQUFZTCxHQUFwQjtBQUFBLEVBQVosRUFBcUMsQ0FBckMsS0FBMkMsRUFBNUQ7QUFDQSxLQUFNTSxZQUFZLDBCQUFLVixJQUFMLEVBQVc7QUFDNUIsNkNBQTJDQyxNQUFNVTtBQURyQixFQUFYLENBQWxCOztBQUlBLEtBQU1DLFFBQVFDLFNBQVNQLFFBQVQsRUFBbUJKLElBQW5CLENBQWQ7O0FBRUEsUUFDQztBQUFBO0FBQUEsSUFBTyxXQUFXUSxTQUFsQjtBQUNDO0FBQUE7QUFBQSxLQUFNLFdBQVUsc0NBQWhCO0FBQUE7QUFBQSxHQUREO0FBSUM7QUFBQTtBQUFBLEtBQU0sV0FBVSxzQ0FBaEI7QUFDRUosWUFBU047QUFEWCxHQUpEO0FBT0M7QUFBQTtBQUFBO0FBQ0MsZUFBVSx1Q0FEWDtBQUVDLGNBQVVDLE1BQU1VLFFBRmpCO0FBR0MsV0FBT1AsR0FIUjtBQUlDLGNBQVVILE1BQU1hLFFBSmpCO0FBS0MsV0FBT0Y7QUFMUjtBQVFFVixRQUFLYSxHQUFMLENBQVMsZUFBTztBQUNmLFdBQ0M7QUFBQTtBQUFBO0FBQ0MsV0FBS1gsSUFBSUssRUFEVjtBQUVDLGFBQU9MLElBQUlLO0FBRlo7QUFJRUwsU0FBSUo7QUFKTixLQUREO0FBUUEsSUFURDtBQVJGLEdBUEQ7QUEyQkM7QUFDQyxTQUFNQyxNQUFNZSxJQURiO0FBRUMsY0FBVSxzQ0FGWDtBQUdDLFdBQU87QUFIUjtBQTNCRCxFQUREO0FBbUNBOztBQUVEakIscUJBQXFCa0IsU0FBckIsR0FBaUM7QUFDaENELE9BQU0saUJBQUVFLE1BQUYsQ0FBU0MsVUFEaUI7QUFFaENSLFdBQVUsaUJBQUVTLElBRm9CO0FBR2hDZixjQUFhLGlCQUFFYSxNQUFGLENBQVNDLFVBSFU7QUFJaENoQixlQUFjLGlCQUFFa0IsT0FBRixDQUFVLGlCQUFFQyxLQUFGLENBQVE7QUFDL0J0QixRQUFNLGlCQUFFa0IsTUFBRixDQUFTQyxVQURnQjtBQUUvQlYsTUFBSSxpQkFBRVMsTUFBRixDQUFTQztBQUZrQixFQUFSLENBQVYsRUFHVkEsVUFQNEI7QUFRaENMLFdBQVUsaUJBQUVTLElBQUYsQ0FBT0o7QUFSZSxDQUFqQzs7QUFXQXBCLHFCQUFxQnlCLFlBQXJCLEdBQW9DO0FBQ25DVixXQUFVLG9CQUFNLENBQUU7QUFEaUIsQ0FBcEM7O0FBSUEsU0FBU0QsUUFBVCxHQUE0QztBQUFBLEtBQTFCUCxRQUEwQix1RUFBZixFQUFlO0FBQUEsS0FBWEosSUFBVyx1RUFBSixFQUFJOztBQUMzQyxrQkFBT3VCLEtBQVAsUUFBb0JuQixRQUFwQix1REFBb0JBLFFBQXBCLEdBQThCLFFBQTlCLEVBQXdDLDRCQUF4QztBQUNBLGtCQUFPb0IsRUFBUCxDQUFVQyxNQUFNQyxPQUFOLENBQWMxQixJQUFkLENBQVYsRUFBK0IsdUJBQS9CO0FBQ0EsS0FBTTJCLFFBQVEzQixLQUFLSyxNQUFMLENBQVk7QUFBQSxTQUFLdUIsRUFBRXJCLEVBQUYsS0FBU0gsU0FBU0csRUFBdkI7QUFBQSxFQUFaLENBQWQ7O0FBRUEsS0FBTXNCLE9BQU9GLE1BQU0sQ0FBTixDQUFiOztBQUVBLEtBQUksQ0FBQ0UsSUFBTCxFQUFXO0FBQ1YsU0FBTyxJQUFQO0FBQ0E7O0FBRUQsS0FBTUMsT0FBT0gsTUFBTUksS0FBTixDQUFZLENBQVosRUFBZUosTUFBTUssTUFBTixHQUFlLENBQTlCLENBQWI7QUFDQSxLQUFNQyxPQUFPTixNQUFNQSxNQUFNSyxNQUFOLEdBQWUsQ0FBckIsQ0FBYjs7QUFFQSxLQUFNL0IsZUFBZWdDLE9BQ2pCSCxLQUFLakIsR0FBTCxDQUFTO0FBQUEsZUFBU2UsRUFBRTlCLElBQVg7QUFBQSxFQUFULEVBQTZCb0MsSUFBN0IsQ0FBa0MsSUFBbEMsQ0FEaUIsYUFDOEJELEtBQUtuQyxJQURuQyxTQUVwQitCLEtBQUsvQixJQUZOOztBQUlBLGtEQUErQ00sU0FBU04sSUFBeEQsYUFBb0VHLFlBQXBFO0FBQ0EiLCJmaWxlIjoicGF0dGVybi10b29sLWVudmlyb25tZW50LXNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgam9pbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbW1vbi9pY29uJztcblxuZXhwb3J0IGRlZmF1bHQgUGF0dGVyblRvb2xFbnZTZWxlY3Q7XG5cbmNvbnN0IG5hbWUgPSAncGF0dGVybi10b29sIHBhdHRlcm4tZW52aXJvbm1lbnQtc2VsZWN0aW9uJztcblxuZnVuY3Rpb24gUGF0dGVyblRvb2xFbnZTZWxlY3QocHJvcHMpIHtcblx0Y29uc3Qge2Vudmlyb25tZW50czogZW52cywgZW52aXJvbm1lbnQ6IGVudn0gPSBwcm9wcztcblx0Y29uc3Qgc2VsZWN0ZWQgPSBlbnZzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGVudilbMF0gfHwge307XG5cdGNvbnN0IGNsYXNzTmFtZSA9IGpvaW4obmFtZSwge1xuXHRcdCdwYXR0ZXJuLWVudmlyb25tZW50LXNlbGVjdGlvbi0tZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlZFxuXHR9KTtcblxuXHRjb25zdCB0aXRsZSA9IGdldFRpdGxlKHNlbGVjdGVkLCBlbnZzKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwYXR0ZXJuLWVudmlyb25tZW50LXNlbGVjdGlvbl9fbGFiZWxcIj5cblx0XHRcdFx0RW52aXJvbm1lbnRcblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBhdHRlcm4tZW52aXJvbm1lbnQtc2VsZWN0aW9uX192YWx1ZVwiPlxuXHRcdFx0XHR7c2VsZWN0ZWQubmFtZX1cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwicGF0dGVybi1lbnZpcm9ubWVudC1zZWxlY3Rpb25fX25hdGl2ZVwiXG5cdFx0XHRcdGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0dmFsdWU9e2Vudn1cblx0XHRcdFx0b25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxuXHRcdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRcdD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVudnMubWFwKGVudiA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtlbnYuaWR9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2Vudi5pZH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2Vudi5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8SWNvblxuXHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJwYXR0ZXJuLWVudmlyb25tZW50LXNlbGVjdGlvbl9fYXJyb3dcIlxuXHRcdFx0XHRzeW1ib2w9XCJhcnJvdy1yaWdodFwiXG5cdFx0XHRcdC8+XG5cdFx0PC9sYWJlbD5cblx0KTtcbn1cblxuUGF0dGVyblRvb2xFbnZTZWxlY3QucHJvcFR5cGVzID0ge1xuXHRiYXNlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRkaXNhYmxlZDogdC5ib29sLFxuXHRlbnZpcm9ubWVudDogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ZW52aXJvbm1lbnRzOiB0LmFycmF5T2YodC5zaGFwZSh7XG5cdFx0bmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRpZDogdC5zdHJpbmcuaXNSZXF1aXJlZFxuXHR9KSkuaXNSZXF1aXJlZCxcblx0b25DaGFuZ2U6IHQuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5QYXR0ZXJuVG9vbEVudlNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG5cdG9uQ2hhbmdlOiAoKSA9PiB7fVxufTtcblxuZnVuY3Rpb24gZ2V0VGl0bGUoc2VsZWN0ZWQgPSB7fSwgZW52cyA9IFtdKSB7XG5cdGFzc2VydC5lcXVhbCh0eXBlb2Ygc2VsZWN0ZWQsICdvYmplY3QnLCAnc2VsZWN0ZWQgbXVzdCBiZSBhbiBvYmplY3QnKTtcblx0YXNzZXJ0Lm9rKEFycmF5LmlzQXJyYXkoZW52cyksICdlbnZzIG11c3QgYmUgYW4gYXJyYXknKTtcblx0Y29uc3Qgb3RoZXIgPSBlbnZzLmZpbHRlcihlID0+IGUuaWQgIT09IHNlbGVjdGVkLmlkKTtcblxuXHRjb25zdCBsZWFkID0gb3RoZXJbMF07XG5cblx0aWYgKCFsZWFkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBoZWFkID0gb3RoZXIuc2xpY2UoMCwgb3RoZXIubGVuZ3RoIC0gMSk7XG5cdGNvbnN0IHRhaWwgPSBvdGhlcltvdGhlci5sZW5ndGggLSAxXTtcblxuXHRjb25zdCBlbnZpcm9ubWVudHMgPSB0YWlsID9cblx0XHRgJHtoZWFkLm1hcChlID0+IGBcIiR7ZS5uYW1lfVwiYCkuam9pbignLCAnKX0gb3IgXCIke3RhaWwubmFtZX1cImAgOlxuXHRcdGxlYWQubmFtZTtcblxuXHRyZXR1cm4gYENoYW5nZSBjdXJyZW50bHkgYWN0aXZlIGVudmlyb25tZW50IFwiJHtzZWxlY3RlZC5uYW1lfVwiIHRvICR7ZW52aXJvbm1lbnRzfWA7XG59XG4iXX0=