import path, *as nodePart from 'path';
const rootFolder = nodePart.basename(nodePart.resolve());

const buildFolder =`./dist`;
const srcFolder =`./src`;

export const path = {
	build:{
		files: `${buildFolder}/files/`
	},
	src:{
		files : `${srcFolder}/files/**/*.*`,

	},
	watch:{},
	clean: buildFolder,
	srcFolder:srcFolder,
	rootFolder:rootFolder,
	ftp:``
}