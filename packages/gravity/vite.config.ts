import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import windicss from "vite-plugin-windicss";

export default defineConfig({
	plugins: [preact(), windicss()],
});
