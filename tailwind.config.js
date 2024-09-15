/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'main-color': 'var(--main-color)',
				'second-color': 'var(--second-color)',
				'alert-color': 'var(--alert-color)',
				'hover-main-color': 'var(--hover-main-color)',
				'bg-action': 'var(--bg-action)',
				'hover-bg-action': 'var(--hover-bg-action)'
			}
		}
	},
	plugins: []
};
