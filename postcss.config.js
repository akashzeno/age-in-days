module.exports = {
	plugins: [
        require("postcss-import"),
		require("autoprefixer"),
		require("rucksack-css"),
		require("precss"),
		require("postcss-clamp"),
		require("postcss-pxtorem"),
		// require("tailwindcss/nesting"),// It's blocking the pxtorem plugin from working
		require("tailwindcss"),
        // require("cssnano"),
	],
};
