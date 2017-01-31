'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var routes = {
	path: ['application/routes', 'application/patternplate-client/routes'],
	enabled: {
		index: {
			enabled: true,
			path: '/tvg-ui/'
		},
		pattern: {
			enabled: true,
			path: '/tvg-ui/pattern/:path+'
		},
		demo: {
			enabled: true,
			path: '/tvg-ui/demo/:id+'
		},
		component: {
			enabled: true,
			path: '/tvg-ui/demo/:id+/component.js'
		},
		script: {
			enabled: true,
			path: '/tvg-ui/script/:path+'
		},
		style: {
			enabled: true,
			path: '/tvg-ui/style/:path+'
		},
		static: {
			enabled: true,
			path: '/tvg-ui/static/:path+'
		},
		zcatch: {
			enabled: true,
			path: '!(/tvg-ui/api/)(.*)'
		}
	}
};

exports.default = routes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jb25maWd1cmF0aW9uL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJwYXRoIiwiZW5hYmxlZCIsImluZGV4IiwicGF0dGVybiIsImRlbW8iLCJjb21wb25lbnQiLCJzY3JpcHQiLCJzdHlsZSIsInN0YXRpYyIsInpjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxTQUFTO0FBQ2RDLE9BQU0sQ0FDTCxvQkFESyxFQUVMLHdDQUZLLENBRFE7QUFLZEMsVUFBUztBQUNSQyxTQUFPO0FBQ05ELFlBQVMsSUFESDtBQUVORCxTQUFNO0FBRkEsR0FEQztBQUtSRyxXQUFTO0FBQ1JGLFlBQVMsSUFERDtBQUVSRCxTQUFNO0FBRkUsR0FMRDtBQVNSSSxRQUFNO0FBQ0xILFlBQVMsSUFESjtBQUVMRCxTQUFNO0FBRkQsR0FURTtBQWFSSyxhQUFXO0FBQ1ZKLFlBQVMsSUFEQztBQUVWRCxTQUFNO0FBRkksR0FiSDtBQWlCUk0sVUFBUTtBQUNQTCxZQUFTLElBREY7QUFFUEQsU0FBTTtBQUZDLEdBakJBO0FBcUJSTyxTQUFPO0FBQ05OLFlBQVMsSUFESDtBQUVORCxTQUFNO0FBRkEsR0FyQkM7QUF5QlJRLFVBQVE7QUFDUFAsWUFBUyxJQURGO0FBRVBELFNBQU07QUFGQyxHQXpCQTtBQTZCUlMsVUFBUTtBQUNQUixZQUFTLElBREY7QUFFUEQsU0FBTTtBQUZDO0FBN0JBO0FBTEssQ0FBZjs7a0JBeUNlRCxNIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHtcblx0cGF0aDogW1xuXHRcdCdhcHBsaWNhdGlvbi9yb3V0ZXMnLFxuXHRcdCdhcHBsaWNhdGlvbi9wYXR0ZXJucGxhdGUtY2xpZW50L3JvdXRlcydcblx0XSxcblx0ZW5hYmxlZDoge1xuXHRcdGluZGV4OiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJy90dmctdWkvJ1xuXHRcdH0sXG5cdFx0cGF0dGVybjoge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdHBhdGg6ICcvdHZnLXVpL3BhdHRlcm4vOnBhdGgrJ1xuXHRcdH0sXG5cdFx0ZGVtbzoge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdHBhdGg6ICcvdHZnLXVpL2RlbW8vOmlkKydcblx0XHR9LFxuXHRcdGNvbXBvbmVudDoge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdHBhdGg6ICcvdHZnLXVpL2RlbW8vOmlkKy9jb21wb25lbnQuanMnXG5cdFx0fSxcblx0XHRzY3JpcHQ6IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL3R2Zy11aS9zY3JpcHQvOnBhdGgrJ1xuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL3R2Zy11aS9zdHlsZS86cGF0aCsnXG5cdFx0fSxcblx0XHRzdGF0aWM6IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL3R2Zy11aS9zdGF0aWMvOnBhdGgrJ1xuXHRcdH0sXG5cdFx0emNhdGNoOiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJyEoL3R2Zy11aS9hcGkvKSguKiknXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iXX0=