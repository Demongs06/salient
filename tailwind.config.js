/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.js', './src/**/*.scss'],
	theme: {
		extend: {
			screens: {
				// 'xs': { 'max': '767px'},
			}
		},
	},
	plugins: [],
};
