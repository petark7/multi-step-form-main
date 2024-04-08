/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				marineBlue: '#053b2d',
				purplishBlue: '#8a55e4',
				pastelBlue: '#d4ecfc',
				lightBlue: '#daf1fc',
				strawberryRed: '#d44255',
				coolGray: '#aaaaaa',
				lightGray: '#dddddd',
				magnolia: '#fdf8f9',
				alabaster: '#fefefe',
				white: '#ffffff',
			},
		},
	},
	plugins: [],
};

