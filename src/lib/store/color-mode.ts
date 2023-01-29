import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

export default function useColorMode() {
	const { subscribe, set, update } = writable<Theme>();
	// INFO: get value from localStroage and init
	if (browser) {
		if (localStorage.colorMode) {
			if (localStorage.colorMode === 'dark') {
				document.documentElement.dataset.theme = 'dracula';
				set('dark');
				localStorage.colorMode = 'dark';
			} else {
				document.documentElement.dataset.theme = 'cupcake';
				set('light');
				localStorage.colorMode = 'light';
			}
		} else {
			if (window.matchMedia('(prefer-color-scheme: dark)')) {
				document.documentElement.dataset.theme = 'dracula';
				set('dark');
				localStorage.colorMode = 'dark';
			} else {
				document.documentElement.dataset.theme = 'cupcake';
				set('light');
				localStorage.colorMode = 'light';
			}
		}
	}

	function toggleColorMode() {
		// INFO: toggle the color mode
		update((prev) => {
			if (prev === 'dark') {
				localStorage.colorMode = 'light';
				document.documentElement.dataset.theme = 'cupcake';
				return 'light';
			} else {
				localStorage.colorMode = 'dark';
				document.documentElement.dataset.theme = 'dracula';
				return 'dark';
			}
		});
	}

	return {
		subscribe,
		set,
		toggleColorMode
	};
}
