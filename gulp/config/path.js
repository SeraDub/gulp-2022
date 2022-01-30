import  *as nodePart from 'path';
const rootFolder = nodePart.basename(nodePart.resolve());

const buildFolder =`./dist`;
const srcFolder =`./src`;

export const path = {
	build:{
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`
	},
	src:{
		html: `${srcFolder}/*.html`,
		files : `${srcFolder}/files/**/*.*`,

	},
	watch:{
		html: `${srcFolder}/**/*.html`,
		files : `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder:buildFolder,
	srcFolder:srcFolder,
	rootFolder:rootFolder,
	ftp:``
}