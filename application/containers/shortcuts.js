'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _shortcuts = require('../components/content/shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps)(_shortcuts2.default);


function mapProps(state) {
	return {
		base: state.base,
		location: state.routing.locationBeforeTransitions
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3Nob3J0Y3V0cy5qcyJdLCJuYW1lcyI6WyJtYXBQcm9wcyIsInN0YXRlIiwiYmFzZSIsImxvY2F0aW9uIiwicm91dGluZyIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOzs7Ozs7a0JBRWUseUJBQVFBLFFBQVIsc0I7OztBQUVmLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3hCLFFBQU87QUFDTkMsUUFBTUQsTUFBTUMsSUFETjtBQUVOQyxZQUFVRixNQUFNRyxPQUFOLENBQWNDO0FBRmxCLEVBQVA7QUFJQSIsImZpbGUiOiJzaG9ydGN1dHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFNob3J0Y3V0c0xpZ2h0Ym94IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9zaG9ydGN1dHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShTaG9ydGN1dHNMaWdodGJveCk7XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0YmFzZTogc3RhdGUuYmFzZSxcblx0XHRsb2NhdGlvbjogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zXG5cdH07XG59XG4iXX0=