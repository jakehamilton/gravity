import * as path from "path";
import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import defaultTheme from "windicss/defaultTheme";

console.log(defaultTheme.dropShadow);

export default defineConfig({
	extract: {
		include: ["src/**/*.tsx"],
		exclude:
			process.env.BUILD_ENV === "storybook" ? [] : ["src/**/*.stories.tsx"],
	},
	attributify: {
		prefix: "w:",
		separator: "_",
	},
	darkMode: "class",
	safelist: [
		// Array.from({ length: 10 }, (_, i) => `px-${i}`),
		// Array.from({ length: 10 }, (_, i) => `py-${i}`),
	],
	theme: {
		extend: {
			colors: {
				primary: colors.purple,
				secondary: colors.orange,
			},
			fontFamily: {
				title: "Staatliches",
				sans: "Inter",
			},
			dropShadow: {
				DEFAULT: [
					"0 1px 3px rgba(0, 0, 0, 0.1)",
					"0 1px 2px rgba(0, 0, 0, 0.06)",
				],
				sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
				md: ["0 4px 6px rgba(0, 0, 0, 0.15)"],
				lg: [
					"0 10px 15px rgba(0, 0, 0, 0.33)",
					"0 4px 6px rgba(0, 0, 0, 0.05)",
				],
				xl: [
					"0 12px 25px rgba(0, 0, 0, 0.55)",
					"0 10px 10px rgba(0, 0, 0, 0.04)",
				],
				"2xl": "0 15px 30px rgba(0, 0, 0, 0.85)",
			},
			boxShadow: {
				DEFAULT:
					"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
				sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
				md: "0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				lg: "0 10px 15px -3px rgba(0, 0, 0, 0.33), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
				xl: "0 12px 25px -5px rgba(0, 0, 0, 0.55), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
				"2xl": "0 15px 50px -12px rgba(0, 0, 0, 0.85)",
				inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
				none: "none",
			},
		},
	},
});
