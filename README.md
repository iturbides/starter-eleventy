# Starter Eleventy Skeleton with beCSS stylesheet

### An Starter base for Eleventy's projects

## Please note that this project does not include the eleventy installation!
I prepared this structure because I had to do this repetitive work every time I started a project.


What Include?

1. css folder with basic css configuration / Also include becss www.becss.dev
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
11. File style.css with the root base configuration
12. File print.css for printing models

## How to Star

1. Mkdir of your project
2. Inside the directory install eleventy: npm install @11ty/eleventy --save-dev
3. Copy the all the files of this Starter project to your new project, meke sure to include the hidden files. You can install files directly from NPMJS: ( npm i starter-eleventy ) or you can also down load the repo from Github
4. Modify the data.json in data folder with your project information
5. Run the server to generate the files (npx @11ty/eleventy) after stop the server Ctl-c
6. Star your git: git init (make your first commit)
7. You are ready to begin your design!!!

## Installation
Just download from Github
https://github.com/iturbides/starter-eleventy

Or you can installed by terminal directly from NPM with the following command:
npm i starter-eleventy

## Important Considerations
1. When copying the project DO NOT INCLUDE the version control in the .git directory. Remember that your new project is going to have it own version control, not the template one!
2. Remember to keep the order and do the eleventy installation before of copying the template base files
3. Please note that when installing from NPM maybe the .gitignore hidden file is bypassed. so you have to created and add node_modules folder before your git init.



