import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import windicss from "vite-plugin-windicss";

export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: "gravity",
			formats: ["es", "umd", "cjs"],
		},
	},
	plugins: [preact(), windicss()],
});
