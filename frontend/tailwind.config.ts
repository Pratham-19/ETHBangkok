import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				rainbow:
					"linear-gradient(90deg, #A9FF84 0%, #7FFFE1 33%, #F98CFF 66%, #FFEB89 100%)",
			},
			colors: {
				"purple-800": "#1a011a",
				"purple-600": "#290329",
				rainbow: "#a9ff84",
				"purple-400": "#480646",
				primary: "#ffc9f3",
				highlight: "#b205ad",
				gray: {
					"100": "rgba(26, 1, 26, 0.6)",
					"200": "rgba(26, 1, 26, 0.3)",
				},
				mediumseagreen: "#08a660",
				neon: "#00ff8e",
				yellow: "#ffd400",
				mint: "#cbffe8",
				thistle: "rgba(255, 201, 243, 0.5)",
				white: "#f7f7f7",
			},
			fontFamily: {
				h3: ["Host Grotesk", "sans-serif"],
				sans: ["Host Grotesk", "system-ui", "sans-serif"],
			},
			borderRadius: {
				"81xl": "100px",
				"13xl": "32px",
				"481xl": "500px",
			},
		},
		fontSize: {
			xs: "0.75rem",
			"5xl": "1.5rem",
			"13xl": "2rem",
			base: "1rem",
			xl: "1.25rem",
			inherit: "inherit",
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function ({ addBase, theme }: any) {
			addBase({
				h1: { fontSize: theme("fontSize.2xl") },
				h2: { fontSize: theme("fontSize.xl") },
				h3: { fontSize: theme("fontSize.lg") },
			});
		}),
	],
} satisfies Config;
