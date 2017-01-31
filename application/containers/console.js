'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _console = require('../components/content/console');

var _console2 = _interopRequireDefault(_console);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_console2.default);


function mapProps(state) {
	return {
		base: state.base,
		location: state.routing.locationBeforeTransitions,
		state: (0, _stringify2.default)(state, null, '  '),
		theme: state.theme
	};
}

function mapDispatch(dispatch) {
	return (0, _redux.bindActionCreators)({
		onApplyState: _actions.applyState,
		onClose: function onClose() {
			return (0, _actions.toggleConsole)(false);
		}
	}, dispatch);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2NvbnNvbGUuanMiXSwibmFtZXMiOlsibWFwUHJvcHMiLCJtYXBEaXNwYXRjaCIsInN0YXRlIiwiYmFzZSIsImxvY2F0aW9uIiwicm91dGluZyIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJ0aGVtZSIsImRpc3BhdGNoIiwib25BcHBseVN0YXRlIiwib25DbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7a0JBRWUseUJBQVFBLFFBQVIsRUFBa0JDLFdBQWxCLG9COzs7QUFFZixTQUFTRCxRQUFULENBQWtCRSxLQUFsQixFQUF5QjtBQUN4QixRQUFPO0FBQ05DLFFBQU1ELE1BQU1DLElBRE47QUFFTkMsWUFBVUYsTUFBTUcsT0FBTixDQUFjQyx5QkFGbEI7QUFHTkosU0FBTyx5QkFBZUEsS0FBZixFQUFzQixJQUF0QixFQUE0QixJQUE1QixDQUhEO0FBSU5LLFNBQU9MLE1BQU1LO0FBSlAsRUFBUDtBQU1BOztBQUVELFNBQVNOLFdBQVQsQ0FBcUJPLFFBQXJCLEVBQStCO0FBQzlCLFFBQU8sK0JBQW1CO0FBQ3pCQyxtQ0FEeUI7QUFFekJDLFdBQVM7QUFBQSxVQUFNLDRCQUFjLEtBQWQsQ0FBTjtBQUFBO0FBRmdCLEVBQW5CLEVBR0pGLFFBSEksQ0FBUDtBQUlBIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBDb25zb2xlTGlnaHRib3ggZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZW50L2NvbnNvbGUnO1xuaW1wb3J0IHthcHBseVN0YXRlLCB0b2dnbGVDb25zb2xlfSBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBQcm9wcywgbWFwRGlzcGF0Y2gpKENvbnNvbGVMaWdodGJveCk7XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0YmFzZTogc3RhdGUuYmFzZSxcblx0XHRsb2NhdGlvbjogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLFxuXHRcdHN0YXRlOiBKU09OLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgJyAgJyksXG5cdFx0dGhlbWU6IHN0YXRlLnRoZW1lXG5cdH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuXHRcdG9uQXBwbHlTdGF0ZTogYXBwbHlTdGF0ZSxcblx0XHRvbkNsb3NlOiAoKSA9PiB0b2dnbGVDb25zb2xlKGZhbHNlKVxuXHR9LCBkaXNwYXRjaCk7XG59XG4iXX0=