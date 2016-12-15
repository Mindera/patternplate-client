import platform from 'platform';
import {merge} from 'lodash';

import './polyfills';
import router from '../../application/react-routes/client';
import * as actions from '../../application/actions';

const {document, location} = global;

main();

function main() {
	const vault = document.query('[data-application-state]');
	const slot = document.query('[data-application]');
	const data = getData(vault);

	// For static builds, purge the app mount point before
	// attaching to avoid react warning
	if (data.startPathname !== location.pathname) {
		empty(slot);
	}

	bind(router(data, slot));
}

function bind(app) {
	const {store: {dispatch}} = app;

	global.addEventListener('keydown', e => {
		const ctrl = e.ctrlKey;
		const code = e.data ? e.data.keyCode : e.keyCode;

		if (ctrl && code === 67) { // ctrl+c
			dispatch(actions.toggleConsole());
		}

		if (ctrl && code === 68) { // ctrl+d
			dispatch(actions.openDocumentation());
		}

		if (ctrl && code === 69) { // ctrl+e
			dispatch(actions.toggleExpandMenu());
		}

		if (ctrl && code === 70) { // ctrl+f
			dispatch(actions.openFullscreen());
		}

		if (ctrl && code === 72) { // ctrl+h
			dispatch(actions.toggleHide());
		}

		if (ctrl && code === 73) { // ctrl+i
			dispatch(actions.toggleIssue());
		}

		if (ctrl && code === 79) { // ctrl+o
			dispatch(actions.toggleOpacity());
		}

		if (ctrl && code === 75) { // ctrl+k
			dispatch(actions.toggleKeyboardShortcuts());
		}

		if (ctrl && code === 76) { // ctrl+l
			dispatch(actions.toggleRulers());
		}

		if (ctrl && code === 82) { // ctrl+r
			dispatch(actions.loadPattern());
		}

		if (ctrl && code === 32) { // ctrl+space
			dispatch(actions.toggleSearchFocus());
		}

		if (ctrl && code === 84) { // ctrl+t
			dispatch(actions.toggleTheme());
		}

		if (code === 27) { // esc
			dispatch(actions.closeAllTheThings());
		}
	});
}

function getData(vault) {
	const platformData = getPlatformData();
	const windowData = getWindowData();
	const vaultData = JSON.parse(vault.textContent);
	return merge({}, vaultData, windowData, {schema: platformData});
}

function getPlatformData() {
	return {
		clientRuntimeName: platform.name,
		clientRuntimeVersion: platform.version,
		clientOsName: platform.os.name,
		clientOsVersion: platform.os.version
	};
}

function getWindowData() {
	return {
		window: {
			width: global.innerWidth,
			height: global.innerHeight
		}
	};
}

function empty(el) {
	while (el.lastChild) {
		el.lastChild.remove();
	}
}
