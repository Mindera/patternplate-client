'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _getError = require('./get-error');

var _getError2 = _interopRequireDefault(_getError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _lodash.memoize)(function () {
	var onLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash.noop;
	var onError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _lodash.noop;

	return function (e) {
		var document = e.target.contentWindow.document;
		var body = document.body;

		var first = body.firstChild;

		if (!first || !first.innerText) {
			return onLoad(e);
		}

		var lines = first.innerText.split('\n');

		if ((0, _lodash.startsWith)(lines[0], 'Message: Error in')) {
			var error = (0, _getError2.default)(lines);
			return onError(error);
		}

		return onLoad(e);
	};
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9mcmFtZS9yZWxheS5qcyJdLCJuYW1lcyI6WyJvbkxvYWQiLCJvbkVycm9yIiwiZG9jdW1lbnQiLCJlIiwidGFyZ2V0IiwiY29udGVudFdpbmRvdyIsImJvZHkiLCJmaXJzdCIsImZpcnN0Q2hpbGQiLCJpbm5lclRleHQiLCJsaW5lcyIsInNwbGl0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7a0JBRWUscUJBQVEsWUFBbUM7QUFBQSxLQUFsQ0EsTUFBa0M7QUFBQSxLQUFuQkMsT0FBbUI7O0FBQ3pELFFBQU8sYUFBSztBQUNYLE1BQU1DLFdBQVdDLEVBQUVDLE1BQUYsQ0FBU0MsYUFBVCxDQUF1QkgsUUFBeEM7QUFEVyxNQUVKSSxJQUZJLEdBRUlKLFFBRkosQ0FFSkksSUFGSTs7QUFHWCxNQUFNQyxRQUFRRCxLQUFLRSxVQUFuQjs7QUFFQSxNQUFJLENBQUNELEtBQUQsSUFBVSxDQUFDQSxNQUFNRSxTQUFyQixFQUFnQztBQUMvQixVQUFPVCxPQUFPRyxDQUFQLENBQVA7QUFDQTs7QUFFRCxNQUFNTyxRQUFRSCxNQUFNRSxTQUFOLENBQWdCRSxLQUFoQixDQUFzQixJQUF0QixDQUFkOztBQUVBLE1BQUksd0JBQVdELE1BQU0sQ0FBTixDQUFYLEVBQXFCLG1CQUFyQixDQUFKLEVBQStDO0FBQzlDLE9BQU1FLFFBQVEsd0JBQVNGLEtBQVQsQ0FBZDtBQUNBLFVBQU9ULFFBQVFXLEtBQVIsQ0FBUDtBQUNBOztBQUVELFNBQU9aLE9BQU9HLENBQVAsQ0FBUDtBQUNBLEVBakJEO0FBa0JBLENBbkJjLEMiLCJmaWxlIjoicmVsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lbW9pemUsIG5vb3AsIHN0YXJ0c1dpdGh9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2V0RXJyb3IgZnJvbSAnLi9nZXQtZXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplKChvbkxvYWQgPSBub29wLCBvbkVycm9yID0gbm9vcCkgPT4ge1xuXHRyZXR1cm4gZSA9PiB7XG5cdFx0Y29uc3QgZG9jdW1lbnQgPSBlLnRhcmdldC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdGNvbnN0IHtib2R5fSA9IGRvY3VtZW50O1xuXHRcdGNvbnN0IGZpcnN0ID0gYm9keS5maXJzdENoaWxkO1xuXG5cdFx0aWYgKCFmaXJzdCB8fCAhZmlyc3QuaW5uZXJUZXh0KSB7XG5cdFx0XHRyZXR1cm4gb25Mb2FkKGUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxpbmVzID0gZmlyc3QuaW5uZXJUZXh0LnNwbGl0KCdcXG4nKTtcblxuXHRcdGlmIChzdGFydHNXaXRoKGxpbmVzWzBdLCAnTWVzc2FnZTogRXJyb3IgaW4nKSkge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBnZXRFcnJvcihsaW5lcyk7XG5cdFx0XHRyZXR1cm4gb25FcnJvcihlcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9uTG9hZChlKTtcblx0fTtcbn0pO1xuIl19