# Starter

### An Starter base for Eleventy's projects

What Include?

1. css folter with basic css configuration
2. data folder with json file ready for complementation
3. images folder with favico example
4. include folder with main.liquid
5. Hidden .eleventy.js file with:
<code>
    module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addWatchTarget("css");
};
</code>

6. Hidden file .eleventyignore ignoring this README.md file
7. Hidden file .gitignore ignoring the Modules Nodes folder
8. File main.liquid in include folder with base html skeleton
9. File index.liquid with empty content
10. File data.json with project details for the html skeleton
11. File css with the root base configuration
12. File css for printing models

## How to Star

1. Mkdir of your project
2. Inside the directory install eleventy: npm install @11ty/eleventy --save-dev
3. Copy the all the files of this Starter project to your new project, meke sure to include the hidden files. You can install files directly from NPMJS: npm i starter-eleventy
4. Modify the data.json in data folder with your project information
5. Run the server to generate the files (npx @11/eleventy) after stop the server Ctl-c
6. Star your git: git init (make your first commit)
7. You are ready to begin your design!!!

## Important Considerations
1. When copying the project DO NOT INCLUDE the version control in the .git directory. Remember that your new project is going to have it own version control, not the template one!
2. Remember to keep the order and do the eleventy installation before of copying the template base files


