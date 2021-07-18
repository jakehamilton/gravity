const preact = require("@preact/preset-vite").default;
const windicss = require("vite-plugin-windicss").default;

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
	core: {
		builder: "storybook-builder-vite",
	},
	async viteFinal(config) {
		config.plugins.push(preact(), windicss());

		return config;
	},
};
