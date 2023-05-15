module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addWatchTarget("css");
};

