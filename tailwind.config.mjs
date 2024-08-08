
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Crimson Pro Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'athomik-pink': '#EFAFC0',
				'athomik-white': '#F6F6F6',
				'athomik-brown': '#E1DED5',
				'athomik-black': '#1b2021',
			},
		},
	},
	plugins: [],
}
