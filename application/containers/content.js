'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _content = require('../components/content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(_content2.default);


function mapState(state) {
	var base = state.base,
	    config = state.config,
	    hide = state.hide,
	    navigation = state.navigation,
	    pattern = state.pattern,
	    messages = state.messages,
	    time = state.time;

	return { base: base, config: config, hide: hide, navigation: navigation, pattern: pattern, messages: messages, time: time };
}

function mapDispatch(dispatch) {
	return (0, _redux.bindActionCreators)({
		onDismiss: _actions.dismissMessage,
		onLoad: _actions.loadPattern,
		onRetry: _actions.loadPattern
	}, dispatch);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2NvbnRlbnQuanMiXSwibmFtZXMiOlsibWFwU3RhdGUiLCJtYXBEaXNwYXRjaCIsInN0YXRlIiwiYmFzZSIsImNvbmZpZyIsImhpZGUiLCJuYXZpZ2F0aW9uIiwicGF0dGVybiIsIm1lc3NhZ2VzIiwidGltZSIsImRpc3BhdGNoIiwib25EaXNtaXNzIiwib25Mb2FkIiwib25SZXRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztrQkFFZSx5QkFBUUEsUUFBUixFQUFrQkMsV0FBbEIsb0I7OztBQUVmLFNBQVNELFFBQVQsQ0FBa0JFLEtBQWxCLEVBQXlCO0FBQUEsS0FDakJDLElBRGlCLEdBQzBDRCxLQUQxQyxDQUNqQkMsSUFEaUI7QUFBQSxLQUNYQyxNQURXLEdBQzBDRixLQUQxQyxDQUNYRSxNQURXO0FBQUEsS0FDSEMsSUFERyxHQUMwQ0gsS0FEMUMsQ0FDSEcsSUFERztBQUFBLEtBQ0dDLFVBREgsR0FDMENKLEtBRDFDLENBQ0dJLFVBREg7QUFBQSxLQUNlQyxPQURmLEdBQzBDTCxLQUQxQyxDQUNlSyxPQURmO0FBQUEsS0FDd0JDLFFBRHhCLEdBQzBDTixLQUQxQyxDQUN3Qk0sUUFEeEI7QUFBQSxLQUNrQ0MsSUFEbEMsR0FDMENQLEtBRDFDLENBQ2tDTyxJQURsQzs7QUFFeEIsUUFBTyxFQUFDTixVQUFELEVBQU9DLGNBQVAsRUFBZUMsVUFBZixFQUFxQkMsc0JBQXJCLEVBQWlDQyxnQkFBakMsRUFBMENDLGtCQUExQyxFQUFvREMsVUFBcEQsRUFBUDtBQUNBOztBQUVELFNBQVNSLFdBQVQsQ0FBcUJTLFFBQXJCLEVBQStCO0FBQzlCLFFBQU8sK0JBQW1CO0FBQ3pCQyxvQ0FEeUI7QUFFekJDLDhCQUZ5QjtBQUd6QkM7QUFIeUIsRUFBbkIsRUFJSkgsUUFKSSxDQUFQO0FBS0EiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7ZGlzbWlzc01lc3NhZ2UsIGxvYWRQYXR0ZXJufSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDb250ZW50KTtcblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0Y29uc3Qge2Jhc2UsIGNvbmZpZywgaGlkZSwgbmF2aWdhdGlvbiwgcGF0dGVybiwgbWVzc2FnZXMsIHRpbWV9ID0gc3RhdGU7XG5cdHJldHVybiB7YmFzZSwgY29uZmlnLCBoaWRlLCBuYXZpZ2F0aW9uLCBwYXR0ZXJuLCBtZXNzYWdlcywgdGltZX07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuXHRcdG9uRGlzbWlzczogZGlzbWlzc01lc3NhZ2UsXG5cdFx0b25Mb2FkOiBsb2FkUGF0dGVybixcblx0XHRvblJldHJ5OiBsb2FkUGF0dGVyblxuXHR9LCBkaXNwYXRjaCk7XG59XG4iXX0=