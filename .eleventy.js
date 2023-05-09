module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addWatchTarget("css");
};

