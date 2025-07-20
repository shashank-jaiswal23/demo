/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/shashank-ui-kit/dist/**/*.{js,ts,jsx,tsx}"
  ],
	theme: {
		extend: {
			height: {
				"120p": "120%",
			},
			width: {
				"120p": "120%",
				"mediKit": "56rem"
			},
			colors: {
				body: "#6C6E70",
				'lightest-grey': '#CACCCE',
				'light-grey': "#F2F2F2",
				'dark-grey': "#2D2E2F",
				'near-black': "#111",
				'black': '#000',
				'black-transparent': 'rgba(0,0,0,0.4)',
				'dark-border': "#2D2E2F"
			},
			scale: {
				"lg": "scale(3,5)"
			},
			maxWidth: {
				// sm: "38rem",
				sm: "608px",
				md: "78rem",
				lg: "100rem",
				titles: "48rem",
				'1/4': "24%",
				'2/4': "50%"
			},
			screens: {
				'xl': '1320px',
			}
		},

	},
	variants: {
		extend: {},
	},
  plugins: [],
}
