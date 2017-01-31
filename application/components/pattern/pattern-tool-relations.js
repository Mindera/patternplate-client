'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _patternControl = require('./pattern-control');

var _patternControl2 = _interopRequireDefault(_patternControl);

var _patternDependencies = require('./pattern-dependencies');

var _patternDependencies2 = _interopRequireDefault(_patternDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = PatternToolRelations;


function PatternToolRelations(props) {
	var relationCount = props.dependencies.length + props.dependents.length;
	var title = 'Browse relations of ' + props.id + ' to ' + relationCount + ' other patterns';
	return _react2.default.createElement(
		'div',
		{ className: 'pattern-tool pattern-tool--relations' },
		_react2.default.createElement(
			_patternControl2.default,
			{
				active: props.active,
				base: props.base,
				location: props.location,
				shortid: 'relations',
				id: 'relations',
				name: 'relations',
				title: title
			},
			_react2.default.createElement(_icon2.default, {
				base: props.base,
				symbol: 'dependencies',
				description: 'Relations'
			})
		),
		props.active && _react2.default.createElement(
			'div',
			{ className: 'pattern-code pattern-code--max' },
			_react2.default.createElement(
				'div',
				{ className: 'pattern-code__toolbar' },
				_react2.default.createElement(
					'div',
					{ className: 'pattern-code__name' },
					'Relations'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'pattern-code__content' },
				_react2.default.createElement(_patternDependencies2.default, {
					base: props.base,
					dependencies: props.dependencies,
					dependents: props.dependents,
					id: props.id,
					name: props.name,
					location: props.location
				})
			)
		)
	);
}

PatternToolRelations.propTypes = {
	active: _react.PropTypes.bool.isRequired,
	base: _react.PropTypes.string.isRequired,
	dependencies: _react.PropTypes.array.isRequired,
	dependents: _react.PropTypes.array.isRequired,
	id: _react.PropTypes.string.isRequired,
	location: _react.PropTypes.shape({
		pathname: _react.PropTypes.string.isRequired,
		query: _react.PropTypes.object.isRequired
	}).isRequired,
	name: _react.PropTypes.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi10b29sLXJlbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJQYXR0ZXJuVG9vbFJlbGF0aW9ucyIsInByb3BzIiwicmVsYXRpb25Db3VudCIsImRlcGVuZGVuY2llcyIsImxlbmd0aCIsImRlcGVuZGVudHMiLCJ0aXRsZSIsImlkIiwiYWN0aXZlIiwiYmFzZSIsImxvY2F0aW9uIiwibmFtZSIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYXJyYXkiLCJzaGFwZSIsInBhdGhuYW1lIiwicXVlcnkiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWVBLG9COzs7QUFFZixTQUFTQSxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFDcEMsS0FBTUMsZ0JBQWdCRCxNQUFNRSxZQUFOLENBQW1CQyxNQUFuQixHQUE0QkgsTUFBTUksVUFBTixDQUFpQkQsTUFBbkU7QUFDQSxLQUFNRSxpQ0FBK0JMLE1BQU1NLEVBQXJDLFlBQThDTCxhQUE5QyxvQkFBTjtBQUNBLFFBQ0M7QUFBQTtBQUFBLElBQUssV0FBVSxzQ0FBZjtBQUNDO0FBQUE7QUFBQTtBQUNDLFlBQVFELE1BQU1PLE1BRGY7QUFFQyxVQUFNUCxNQUFNUSxJQUZiO0FBR0MsY0FBVVIsTUFBTVMsUUFIakI7QUFJQyxhQUFRLFdBSlQ7QUFLQyxRQUFHLFdBTEo7QUFNQyxVQUFLLFdBTk47QUFPQyxXQUFPSjtBQVBSO0FBU0M7QUFDQyxVQUFNTCxNQUFNUSxJQURiO0FBRUMsWUFBTyxjQUZSO0FBR0MsaUJBQVk7QUFIYjtBQVRELEdBREQ7QUFpQkVSLFFBQU1PLE1BQU4sSUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLGdDQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSx1QkFBZjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsb0JBQWY7QUFBQTtBQUFBO0FBREQsSUFERDtBQUlDO0FBQUE7QUFBQSxNQUFLLFdBQVUsdUJBQWY7QUFDQztBQUNDLFdBQU1QLE1BQU1RLElBRGI7QUFFQyxtQkFBY1IsTUFBTUUsWUFGckI7QUFHQyxpQkFBWUYsTUFBTUksVUFIbkI7QUFJQyxTQUFJSixNQUFNTSxFQUpYO0FBS0MsV0FBTU4sTUFBTVUsSUFMYjtBQU1DLGVBQVVWLE1BQU1TO0FBTmpCO0FBREQ7QUFKRDtBQWxCSCxFQUREO0FBcUNBOztBQUVEVixxQkFBcUJZLFNBQXJCLEdBQWlDO0FBQ2hDSixTQUFRLGlCQUFFSyxJQUFGLENBQU9DLFVBRGlCO0FBRWhDTCxPQUFNLGlCQUFFTSxNQUFGLENBQVNELFVBRmlCO0FBR2hDWCxlQUFjLGlCQUFFYSxLQUFGLENBQVFGLFVBSFU7QUFJaENULGFBQVksaUJBQUVXLEtBQUYsQ0FBUUYsVUFKWTtBQUtoQ1AsS0FBSSxpQkFBRVEsTUFBRixDQUFTRCxVQUxtQjtBQU1oQ0osV0FBVSxpQkFBRU8sS0FBRixDQUFRO0FBQ2pCQyxZQUFVLGlCQUFFSCxNQUFGLENBQVNELFVBREY7QUFFakJLLFNBQU8saUJBQUVDLE1BQUYsQ0FBU047QUFGQyxFQUFSLEVBR1BBLFVBVDZCO0FBVWhDSCxPQUFNLGlCQUFFSSxNQUFGLENBQVNEO0FBVmlCLENBQWpDIiwiZmlsZSI6InBhdHRlcm4tdG9vbC1yZWxhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vY29tbW9uL2ljb24nO1xuaW1wb3J0IFBhdHRlcm5Db250cm9sIGZyb20gJy4vcGF0dGVybi1jb250cm9sJztcbmltcG9ydCBQYXR0ZXJuRGVwZW5kZW5jaWVzIGZyb20gJy4vcGF0dGVybi1kZXBlbmRlbmNpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBQYXR0ZXJuVG9vbFJlbGF0aW9ucztcblxuZnVuY3Rpb24gUGF0dGVyblRvb2xSZWxhdGlvbnMocHJvcHMpIHtcblx0Y29uc3QgcmVsYXRpb25Db3VudCA9IHByb3BzLmRlcGVuZGVuY2llcy5sZW5ndGggKyBwcm9wcy5kZXBlbmRlbnRzLmxlbmd0aDtcblx0Y29uc3QgdGl0bGUgPSBgQnJvd3NlIHJlbGF0aW9ucyBvZiAke3Byb3BzLmlkfSB0byAke3JlbGF0aW9uQ291bnR9IG90aGVyIHBhdHRlcm5zYDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tdG9vbCBwYXR0ZXJuLXRvb2wtLXJlbGF0aW9uc1wiPlxuXHRcdFx0PFBhdHRlcm5Db250cm9sXG5cdFx0XHRcdGFjdGl2ZT17cHJvcHMuYWN0aXZlfVxuXHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRsb2NhdGlvbj17cHJvcHMubG9jYXRpb259XG5cdFx0XHRcdHNob3J0aWQ9XCJyZWxhdGlvbnNcIlxuXHRcdFx0XHRpZD1cInJlbGF0aW9uc1wiXG5cdFx0XHRcdG5hbWU9XCJyZWxhdGlvbnNcIlxuXHRcdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRcdD5cblx0XHRcdFx0PEljb25cblx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdHN5bWJvbD1cImRlcGVuZGVuY2llc1wiXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249XCJSZWxhdGlvbnNcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHQ8L1BhdHRlcm5Db250cm9sPlxuXHRcdFx0e1xuXHRcdFx0XHRwcm9wcy5hY3RpdmUgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhdHRlcm4tY29kZSBwYXR0ZXJuLWNvZGUtLW1heFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLWNvZGVfX3Rvb2xiYXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLWNvZGVfX25hbWVcIj5SZWxhdGlvbnM8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLWNvZGVfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PFBhdHRlcm5EZXBlbmRlbmNpZXNcblx0XHRcdFx0XHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llcz17cHJvcHMuZGVwZW5kZW5jaWVzfVxuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVudHM9e3Byb3BzLmRlcGVuZGVudHN9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9e3Byb3BzLmlkfVxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9e3Byb3BzLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb249e3Byb3BzLmxvY2F0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5QYXR0ZXJuVG9vbFJlbGF0aW9ucy5wcm9wVHlwZXMgPSB7XG5cdGFjdGl2ZTogdC5ib29sLmlzUmVxdWlyZWQsXG5cdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGRlcGVuZGVuY2llczogdC5hcnJheS5pc1JlcXVpcmVkLFxuXHRkZXBlbmRlbnRzOiB0LmFycmF5LmlzUmVxdWlyZWQsXG5cdGlkOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRsb2NhdGlvbjogdC5zaGFwZSh7XG5cdFx0cGF0aG5hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0cXVlcnk6IHQub2JqZWN0LmlzUmVxdWlyZWRcblx0fSkuaXNSZXF1aXJlZCxcblx0bmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcbiJdfQ==