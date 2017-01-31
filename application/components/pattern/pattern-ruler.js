'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _class, _class2;

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _lodash = require('lodash');

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var start = { transform: 'translate3d(0, 0, 0)' };

var Ruler = (0, _autobindDecorator2.default)(_class = function (_Component) {
	(0, _inherits3.default)(Ruler, _Component);

	function Ruler() {
		(0, _classCallCheck3.default)(this, Ruler);
		return (0, _possibleConstructorReturn3.default)(this, (Ruler.__proto__ || (0, _getPrototypeOf2.default)(Ruler)).apply(this, arguments));
	}

	(0, _createClass3.default)(Ruler, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var end = this.props.type === 'horizontal' ? { transform: 'translate3d(-100%, 0, 0)' } : { transform: 'translate3d(0, -100%, 0)' };

			var keyframes = [start, end];
			var options = { duration: 100 };
			this.animation = this.ref.animate(keyframes, options);
			this.animation.pause();
			this.animation.currentTime = this.props.offset;
			global.a = this.animation;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.animation.currentTime = this.props.offset;
		}
	}, {
		key: 'saveRef',
		value: function saveRef(ref) {
			this.ref = ref;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;

			var type = props.type === 'horizontal' ? 'horizontal' : 'vertical';
			var markerPositionProperty = props.type === 'horizontal' ? 'left' : 'top';

			return _react2.default.createElement(
				'div',
				{ className: 'pattern-ruler pattern-ruler--' + type },
				_react2.default.createElement(
					'div',
					{ className: 'pattern-ruler__scale', ref: this.saveRef },
					_react2.default.createElement(RulerSteps, { type: props.type, length: props.length, step: props.step })
				),
				props.markers.map(function (marker) {
					var style = (0, _defineProperty3.default)({}, markerPositionProperty, marker + 'px');
					return _react2.default.createElement('div', { className: 'pattern-ruler__marker', key: marker, style: style });
				})
			);
		}
	}]);
	return Ruler;
}(_react.Component)) || _class;

exports.default = Ruler;


Ruler.propTypes = {
	length: _react.PropTypes.number.isRequired,
	markers: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
	offset: _react.PropTypes.number.isRequired,
	step: _react.PropTypes.number.isRequired,
	type: _react.PropTypes.string.isRequired
};

Ruler.defaultProps = {
	length: 0
};

var RulerSteps = (0, _pureRenderDecorator2.default)(_class2 = function (_Component2) {
	(0, _inherits3.default)(RulerSteps, _Component2);

	function RulerSteps() {
		(0, _classCallCheck3.default)(this, RulerSteps);
		return (0, _possibleConstructorReturn3.default)(this, (RulerSteps.__proto__ || (0, _getPrototypeOf2.default)(RulerSteps)).apply(this, arguments));
	}

	(0, _createClass3.default)(RulerSteps, [{
		key: 'render',
		value: function render() {
			var props = this.props;

			var steps = getSteps(props.length, props.step);
			var spacerProperty = props.type === 'horizontal' ? 'marginLeft' : 'marginTop';
			var orderProperty = props.type === 'horizontal' ? 'height' : 'width';
			var sizingProperty = props.type === 'horizontal' ? 'width' : 'height';

			return _react2.default.createElement(
				'ul',
				{ className: 'pattern-ruler__steps' },
				steps.map(function (step, index) {
					var _ref;

					var orderDimension = ['15px', '10px', '5px'][step.order - 1];
					var spacer = index > 0 ? props.step - 1 : 0;

					return _react2.default.createElement(
						'li',
						{
							key: index,
							className: 'pattern-ruler__step pattern-ruler__step--' + step.order,
							style: (_ref = {}, (0, _defineProperty3.default)(_ref, spacerProperty, spacer + 'px'), (0, _defineProperty3.default)(_ref, sizingProperty, '1px'), (0, _defineProperty3.default)(_ref, orderProperty, orderDimension), _ref)
						},
						typeof step.label !== 'undefined' && _react2.default.createElement(
							'span',
							{ className: 'pattern-ruler__label' },
							step.label
						)
					);
				})
			);
		}
	}]);
	return RulerSteps;
}(_react.Component)) || _class2;

RulerSteps.propTypes = {
	length: _react.PropTypes.number.isRequired,
	step: _react.PropTypes.number.isRequired,
	type: _react.PropTypes.string.isRequired
};

function getSteps(length, step) {
	return (0, _lodash.range)(Math.round(length / step)).map(function (_, index) {
		return index;
	}).map(function (count) {
		var label = count % 10 === 0 ? count * step : null;
		var matches = [10, 5];
		var match = (0, _lodash.find)(matches, function (n) {
			return count % n === 0;
		});
		var order = match ? matches.indexOf(match) + 1 : 3;
		return { label: label, order: order };
	});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vcGF0dGVybi1ydWxlci5qcyJdLCJuYW1lcyI6WyJzdGFydCIsInRyYW5zZm9ybSIsIlJ1bGVyIiwiZW5kIiwicHJvcHMiLCJ0eXBlIiwia2V5ZnJhbWVzIiwib3B0aW9ucyIsImR1cmF0aW9uIiwiYW5pbWF0aW9uIiwicmVmIiwiYW5pbWF0ZSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJvZmZzZXQiLCJnbG9iYWwiLCJhIiwibWFya2VyUG9zaXRpb25Qcm9wZXJ0eSIsInNhdmVSZWYiLCJsZW5ndGgiLCJzdGVwIiwibWFya2VycyIsIm1hcCIsInN0eWxlIiwibWFya2VyIiwicHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJSdWxlclN0ZXBzIiwic3RlcHMiLCJnZXRTdGVwcyIsInNwYWNlclByb3BlcnR5Iiwib3JkZXJQcm9wZXJ0eSIsInNpemluZ1Byb3BlcnR5IiwiaW5kZXgiLCJvcmRlckRpbWVuc2lvbiIsIm9yZGVyIiwic3BhY2VyIiwibGFiZWwiLCJNYXRoIiwicm91bmQiLCJfIiwiY291bnQiLCJtYXRjaGVzIiwibWF0Y2giLCJuIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLEVBQUNDLFdBQVcsc0JBQVosRUFBZDs7SUFHcUJDLEs7Ozs7Ozs7Ozs7c0NBQ0E7QUFDbkIsT0FBTUMsTUFBTSxLQUFLQyxLQUFMLENBQVdDLElBQVgsS0FBb0IsWUFBcEIsR0FDWCxFQUFDSixXQUFXLDBCQUFaLEVBRFcsR0FFWCxFQUFDQSxXQUFXLDBCQUFaLEVBRkQ7O0FBSUEsT0FBTUssWUFBWSxDQUFDTixLQUFELEVBQVFHLEdBQVIsQ0FBbEI7QUFDQSxPQUFNSSxV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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQge2ZpbmQsIHJhbmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHB1cmUgZnJvbSAncHVyZS1yZW5kZXItZGVjb3JhdG9yJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3RhcnQgPSB7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknfTtcblxuQGF1dG9iaW5kXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGVuZCA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ2hvcml6b250YWwnID9cblx0XHRcdHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCknfSA6XG5cdFx0XHR7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApJ307XG5cblx0XHRjb25zdCBrZXlmcmFtZXMgPSBbc3RhcnQsIGVuZF07XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtkdXJhdGlvbjogMTAwfTtcblx0XHR0aGlzLmFuaW1hdGlvbiA9IHRoaXMucmVmLmFuaW1hdGUoa2V5ZnJhbWVzLCBvcHRpb25zKTtcblx0XHR0aGlzLmFuaW1hdGlvbi5wYXVzZSgpO1xuXHRcdHRoaXMuYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gdGhpcy5wcm9wcy5vZmZzZXQ7XG5cdFx0Z2xvYmFsLmEgPSB0aGlzLmFuaW1hdGlvbjtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHR0aGlzLmFuaW1hdGlvbi5jdXJyZW50VGltZSA9IHRoaXMucHJvcHMub2Zmc2V0O1xuXHR9XG5cblx0c2F2ZVJlZihyZWYpIHtcblx0XHR0aGlzLnJlZiA9IHJlZjtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7cHJvcHN9ID0gdGhpcztcblx0XHRjb25zdCB0eXBlID0gcHJvcHMudHlwZSA9PT0gJ2hvcml6b250YWwnID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcblx0XHRjb25zdCBtYXJrZXJQb3NpdGlvblByb3BlcnR5ID0gcHJvcHMudHlwZSA9PT0gJ2hvcml6b250YWwnID8gJ2xlZnQnIDogJ3RvcCc7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2BwYXR0ZXJuLXJ1bGVyIHBhdHRlcm4tcnVsZXItLSR7dHlwZX1gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXR0ZXJuLXJ1bGVyX19zY2FsZVwiIHJlZj17dGhpcy5zYXZlUmVmfT5cblx0XHRcdFx0XHQ8UnVsZXJTdGVwcyB0eXBlPXtwcm9wcy50eXBlfSBsZW5ndGg9e3Byb3BzLmxlbmd0aH0gc3RlcD17cHJvcHMuc3RlcH0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3BzLm1hcmtlcnMubWFwKG1hcmtlciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9IHtbbWFya2VyUG9zaXRpb25Qcm9wZXJ0eV06IGAke21hcmtlcn1weGB9O1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGF0dGVybi1ydWxlcl9fbWFya2VyXCIga2V5PXttYXJrZXJ9IHN0eWxlPXtzdHlsZX0vPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblJ1bGVyLnByb3BUeXBlcyA9IHtcblx0bGVuZ3RoOiB0Lm51bWJlci5pc1JlcXVpcmVkLFxuXHRtYXJrZXJzOiB0LmFycmF5T2YodC5udW1iZXIpLmlzUmVxdWlyZWQsXG5cdG9mZnNldDogdC5udW1iZXIuaXNSZXF1aXJlZCxcblx0c3RlcDogdC5udW1iZXIuaXNSZXF1aXJlZCxcblx0dHlwZTogdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuUnVsZXIuZGVmYXVsdFByb3BzID0ge1xuXHRsZW5ndGg6IDBcbn07XG5cbkBwdXJlXG5jbGFzcyBSdWxlclN0ZXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXHRcdGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMocHJvcHMubGVuZ3RoLCBwcm9wcy5zdGVwKTtcblx0XHRjb25zdCBzcGFjZXJQcm9wZXJ0eSA9IHByb3BzLnR5cGUgPT09ICdob3Jpem9udGFsJyA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5Ub3AnO1xuXHRcdGNvbnN0IG9yZGVyUHJvcGVydHkgPSBwcm9wcy50eXBlID09PSAnaG9yaXpvbnRhbCcgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cdFx0Y29uc3Qgc2l6aW5nUHJvcGVydHkgPSBwcm9wcy50eXBlID09PSAnaG9yaXpvbnRhbCcgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cInBhdHRlcm4tcnVsZXJfX3N0ZXBzXCI+XG5cdFx0XHRcdHtzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgb3JkZXJEaW1lbnNpb24gPSBbJzE1cHgnLCAnMTBweCcsICc1cHgnXVtzdGVwLm9yZGVyIC0gMV07XG5cdFx0XHRcdFx0Y29uc3Qgc3BhY2VyID0gaW5kZXggPiAwID8gcHJvcHMuc3RlcCAtIDEgOiAwO1xuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BwYXR0ZXJuLXJ1bGVyX19zdGVwIHBhdHRlcm4tcnVsZXJfX3N0ZXAtLSR7c3RlcC5vcmRlcn1gfVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFtzcGFjZXJQcm9wZXJ0eV06IGAke3NwYWNlcn1weGAsXG5cdFx0XHRcdFx0XHRcdFx0W3NpemluZ1Byb3BlcnR5XTogJzFweCcsXG5cdFx0XHRcdFx0XHRcdFx0W29yZGVyUHJvcGVydHldOiBvcmRlckRpbWVuc2lvblxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlb2Ygc3RlcC5sYWJlbCAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBhdHRlcm4tcnVsZXJfX2xhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdGVwLmxhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC91bD5cblx0XHQpO1xuXHR9XG59XG5cblJ1bGVyU3RlcHMucHJvcFR5cGVzID0ge1xuXHRsZW5ndGg6IHQubnVtYmVyLmlzUmVxdWlyZWQsXG5cdHN0ZXA6IHQubnVtYmVyLmlzUmVxdWlyZWQsXG5cdHR5cGU6IHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmZ1bmN0aW9uIGdldFN0ZXBzKGxlbmd0aCwgc3RlcCkge1xuXHRyZXR1cm4gcmFuZ2UoTWF0aC5yb3VuZChsZW5ndGggLyBzdGVwKSlcblx0XHQubWFwKChfLCBpbmRleCkgPT4gaW5kZXgpXG5cdFx0Lm1hcChjb3VudCA9PiB7XG5cdFx0XHRjb25zdCBsYWJlbCA9IGNvdW50ICUgMTAgPT09IDAgPyBjb3VudCAqIHN0ZXAgOiBudWxsO1xuXHRcdFx0Y29uc3QgbWF0Y2hlcyA9IFsxMCwgNV07XG5cdFx0XHRjb25zdCBtYXRjaCA9IGZpbmQobWF0Y2hlcywgbiA9PiBjb3VudCAlIG4gPT09IDApO1xuXHRcdFx0Y29uc3Qgb3JkZXIgPSBtYXRjaCA/IG1hdGNoZXMuaW5kZXhPZihtYXRjaCkgKyAxIDogMztcblx0XHRcdHJldHVybiB7bGFiZWwsIG9yZGVyfTtcblx0XHR9KTtcbn1cbiJdfQ==