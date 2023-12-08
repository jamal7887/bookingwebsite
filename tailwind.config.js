/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				default: '#EEEEEE',
				active: '#292929',
				softGrey: '#F9F9F9',
				secondaryGrey: '#444444',
				brandOrange: '#FF8515'
			}
		}
	},
	plugins: []
};
