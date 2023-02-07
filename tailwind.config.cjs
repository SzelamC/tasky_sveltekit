/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				unbounded: ['Unbounded'],
				mplus: ["'M PLUS Rounded 1c'"],
				major: ["'Major Mono Display'"]
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['cupcake', 'night']
	}
};
