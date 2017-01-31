const routes = {
	path: [
		'application/routes',
		'application/patternplate-client/routes'
	],
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

export default routes;
