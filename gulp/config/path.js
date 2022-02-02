import  *as nodePart from 'path';
const rootFolder = nodePart.basename(nodePart.resolve());

const buildFolder =`./dist`;
const srcFolder =`./src`;

export const path = {
	build:{
		js: `${buildFolder}/js/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
		images: `${buildFolder}/img/`,
		css: `${buildFolder}/css/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src:{
		js: `${srcFolder}/js/app.js`,
		scss:`${srcFolder}/scss/style.scss`,
		images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		html: `${srcFolder}/*.html`,
		files : `${srcFolder}/files/**/*.*`,
		fonts: `${srcFolder}/fonts/`,
		svgicons: `${srcFolder}/svgicons/*.svg`,

	},
	watch:{
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		files : `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder:buildFolder,
	srcFolder:srcFolder,
	rootFolder:rootFolder,
	ftp:``
}