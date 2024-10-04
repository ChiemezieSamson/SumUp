/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'selector',
	corePlugins: {
		preflight: true,
	},
  theme: {
    extend: {},
  },
  plugins: [],
}
