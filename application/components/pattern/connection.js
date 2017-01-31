"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Connection;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PointShape = _react.PropTypes.shape({
	x: _react.PropTypes.number.isRequired,
	y: _react.PropTypes.number.isRequired
});

function spline(a, b) {
	var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;

	return "M" + a.x + "," + a.y + " C" + (a.x + n) + "," + a.y + " " + (b.x - n) + "," + b.y + " " + b.x + "," + b.y;
}

function Connection(_ref) {
	var from = _ref.from,
	    to = _ref.to,
	    n = _ref.n;

	var d = spline(from, to, n);
	return _react2.default.createElement(
		"g",
		{ className: "connection-group" },
		_react2.default.createElement("circle", { className: "connector", cx: from.x, cy: from.y, r: 0.7 }),
		_react2.default.createElement("path", { className: "connection", d: d }),
		_react2.default.createElement("circle", { className: "connector", cx: to.x, cy: to.y, r: 0.7 })
	);
}

Connection.propTypes = {
	from: PointShape,
	to: PointShape,
	n: _react.PropTypes.number
};

function Label(props) {
	if (!props.text) {
		return null;
	}

	var align = props.align,
	    height = props.height,
	    text = props.text,
	    y = props.y;

	var width = text.length * 0.7;
	var x = align === 'left' ? props.x : props.x - width;

	return _react2.default.createElement(
		"g",
		{ className: "label" },
		_react2.default.createElement("rect", { className: "label__container", x: x, y: y - height / 2, height: height, width: width }),
		_react2.default.createElement(
			"text",
			{ className: "label__text", x: x + width / 2, y: y },
			text
		)
	);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3BhdHRlcm4vY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6WyJDb25uZWN0aW9uIiwiUG9pbnRTaGFwZSIsInNoYXBlIiwieCIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJ5Iiwic3BsaW5lIiwiYSIsImIiLCJuIiwiZnJvbSIsInRvIiwiZCIsInByb3BUeXBlcyIsIkxhYmVsIiwicHJvcHMiLCJ0ZXh0IiwiYWxpZ24iLCJoZWlnaHQiLCJ3aWR0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBV3dCQSxVOztBQVh4Qjs7Ozs7O0FBRUEsSUFBTUMsYUFBYSxpQkFBRUMsS0FBRixDQUFRO0FBQzFCQyxJQUFHLGlCQUFFQyxNQUFGLENBQVNDLFVBRGM7QUFFMUJDLElBQUcsaUJBQUVGLE1BQUYsQ0FBU0M7QUFGYyxDQUFSLENBQW5COztBQUtBLFNBQVNFLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUE4QjtBQUFBLEtBQVJDLENBQVEsdUVBQUosRUFBSTs7QUFDN0IsY0FBV0YsRUFBRUwsQ0FBYixTQUFrQkssRUFBRUYsQ0FBcEIsV0FBMEJFLEVBQUVMLENBQUYsR0FBTU8sQ0FBaEMsVUFBcUNGLEVBQUVGLENBQXZDLFVBQTRDRyxFQUFFTixDQUFGLEdBQU1PLENBQWxELFVBQXVERCxFQUFFSCxDQUF6RCxTQUE4REcsRUFBRU4sQ0FBaEUsU0FBcUVNLEVBQUVILENBQXZFO0FBQ0E7O0FBRWMsU0FBU04sVUFBVCxPQUFtQztBQUFBLEtBQWRXLElBQWMsUUFBZEEsSUFBYztBQUFBLEtBQVJDLEVBQVEsUUFBUkEsRUFBUTtBQUFBLEtBQUpGLENBQUksUUFBSkEsQ0FBSTs7QUFDakQsS0FBTUcsSUFBSU4sT0FBT0ksSUFBUCxFQUFhQyxFQUFiLEVBQWlCRixDQUFqQixDQUFWO0FBQ0EsUUFDQztBQUFBO0FBQUEsSUFBRyxXQUFVLGtCQUFiO0FBQ0MsNENBQVEsV0FBVSxXQUFsQixFQUE4QixJQUFJQyxLQUFLUixDQUF2QyxFQUEwQyxJQUFJUSxLQUFLTCxDQUFuRCxFQUFzRCxHQUFHLEdBQXpELEdBREQ7QUFFQywwQ0FBTSxXQUFVLFlBQWhCLEVBQTZCLEdBQUdPLENBQWhDLEdBRkQ7QUFHQyw0Q0FBUSxXQUFVLFdBQWxCLEVBQThCLElBQUlELEdBQUdULENBQXJDLEVBQXdDLElBQUlTLEdBQUdOLENBQS9DLEVBQWtELEdBQUcsR0FBckQ7QUFIRCxFQUREO0FBT0E7O0FBRUROLFdBQVdjLFNBQVgsR0FBdUI7QUFDdEJILE9BQU1WLFVBRGdCO0FBRXRCVyxLQUFJWCxVQUZrQjtBQUd0QlMsSUFBRyxpQkFBRU47QUFIaUIsQ0FBdkI7O0FBTUEsU0FBU1csS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLEtBQUksQ0FBQ0EsTUFBTUMsSUFBWCxFQUFpQjtBQUNoQixTQUFPLElBQVA7QUFDQTs7QUFIb0IsS0FLZEMsS0FMYyxHQUtZRixLQUxaLENBS2RFLEtBTGM7QUFBQSxLQUtQQyxNQUxPLEdBS1lILEtBTFosQ0FLUEcsTUFMTztBQUFBLEtBS0NGLElBTEQsR0FLWUQsS0FMWixDQUtDQyxJQUxEO0FBQUEsS0FLT1gsQ0FMUCxHQUtZVSxLQUxaLENBS09WLENBTFA7O0FBTXJCLEtBQU1jLFFBQVFILEtBQUtJLE1BQUwsR0FBYyxHQUE1QjtBQUNBLEtBQU1sQixJQUFJZSxVQUFVLE1BQVYsR0FBbUJGLE1BQU1iLENBQXpCLEdBQTZCYSxNQUFNYixDQUFOLEdBQVVpQixLQUFqRDs7QUFFQSxRQUNDO0FBQUE7QUFBQSxJQUFHLFdBQVUsT0FBYjtBQUNDLDBDQUFNLFdBQVUsa0JBQWhCLEVBQW1DLEdBQUdqQixDQUF0QyxFQUF5QyxHQUFHRyxJQUFJYSxTQUFTLENBQXpELEVBQTRELFFBQVFBLE1BQXBFLEVBQTRFLE9BQU9DLEtBQW5GLEdBREQ7QUFFQztBQUFBO0FBQUEsS0FBTSxXQUFVLGFBQWhCLEVBQThCLEdBQUdqQixJQUFJaUIsUUFBUSxDQUE3QyxFQUFnRCxHQUFHZCxDQUFuRDtBQUF1RFc7QUFBdkQ7QUFGRCxFQUREO0FBTUEiLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBvaW50U2hhcGUgPSB0LnNoYXBlKHtcblx0eDogdC5udW1iZXIuaXNSZXF1aXJlZCxcblx0eTogdC5udW1iZXIuaXNSZXF1aXJlZFxufSk7XG5cbmZ1bmN0aW9uIHNwbGluZShhLCBiLCBuID0gMjUpIHtcblx0cmV0dXJuIGBNJHthLnh9LCR7YS55fSBDJHthLnggKyBufSwke2EueX0gJHtiLnggLSBufSwke2IueX0gJHtiLnh9LCR7Yi55fWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbm5lY3Rpb24oe2Zyb20sIHRvLCBufSkge1xuXHRjb25zdCBkID0gc3BsaW5lKGZyb20sIHRvLCBuKTtcblx0cmV0dXJuIChcblx0XHQ8ZyBjbGFzc05hbWU9XCJjb25uZWN0aW9uLWdyb3VwXCI+XG5cdFx0XHQ8Y2lyY2xlIGNsYXNzTmFtZT1cImNvbm5lY3RvclwiIGN4PXtmcm9tLnh9IGN5PXtmcm9tLnl9IHI9ezAuN30vPlxuXHRcdFx0PHBhdGggY2xhc3NOYW1lPVwiY29ubmVjdGlvblwiIGQ9e2R9Lz5cblx0XHRcdDxjaXJjbGUgY2xhc3NOYW1lPVwiY29ubmVjdG9yXCIgY3g9e3RvLnh9IGN5PXt0by55fSByPXswLjd9Lz5cblx0XHQ8L2c+XG5cdCk7XG59XG5cbkNvbm5lY3Rpb24ucHJvcFR5cGVzID0ge1xuXHRmcm9tOiBQb2ludFNoYXBlLFxuXHR0bzogUG9pbnRTaGFwZSxcblx0bjogdC5udW1iZXJcbn07XG5cbmZ1bmN0aW9uIExhYmVsKHByb3BzKSB7XG5cdGlmICghcHJvcHMudGV4dCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3Qge2FsaWduLCBoZWlnaHQsIHRleHQsIHl9ID0gcHJvcHM7XG5cdGNvbnN0IHdpZHRoID0gdGV4dC5sZW5ndGggKiAwLjc7XG5cdGNvbnN0IHggPSBhbGlnbiA9PT0gJ2xlZnQnID8gcHJvcHMueCA6IHByb3BzLnggLSB3aWR0aDtcblxuXHRyZXR1cm4gKFxuXHRcdDxnIGNsYXNzTmFtZT1cImxhYmVsXCI+XG5cdFx0XHQ8cmVjdCBjbGFzc05hbWU9XCJsYWJlbF9fY29udGFpbmVyXCIgeD17eH0geT17eSAtIGhlaWdodCAvIDJ9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9Lz5cblx0XHRcdDx0ZXh0IGNsYXNzTmFtZT1cImxhYmVsX190ZXh0XCIgeD17eCArIHdpZHRoIC8gMn0geT17eX0+e3RleHR9PC90ZXh0PlxuXHRcdDwvZz5cblx0KTtcbn1cbiJdfQ==