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
				background: "var(--background)",
				foreground: "var(--foreground)",
				"theme-purple-800": "var(--theme-purple-800)",
				"theme-purple-600": "var(--theme-purple-600)",
				"theme-purple-400": "var(--theme-purple-400)",
				"theme-primary": "var(--theme-primary)",
				highlight: "var(--highlight)",
				mint: "var(--mint)",
				yellow: "var(--yellow)",
				red: "var(--red)",
				blue: "var(--blue)",
				green: "var(--green)",
				neon: "var(--neon)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
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
