import * as path from "path";
import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
	extract: {
		include: ["src/**/*.tsx"],
	},
	attributify: {
		prefix: "w:",
	},
});
