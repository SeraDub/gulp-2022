//основной модуль 
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";
//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";
//передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path:path,
	gulp:gulp,
	plugins:plugins
}

//импорт задач
import {copy} from "./gulp/task/copy.js";
import {reset} from "./gulp/task/reset.js";
import {html} from "./gulp/task/html.js";
import { server } from "./gulp/task/server.js";
import { scss } from "./gulp/task/scss.js";
import { js } from "./gulp/task/js.js";
import { images } from "./gulp/task/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/task/fonts.js";
import { svgSprive } from "./gulp/task/svgSprive.js";
import { zip } from "./gulp/task/zip.js";


//наблюдатель за изминениями в файлах
function watcher(){
	gulp.watch(path.watch.files,copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

export {svgSprive}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle );
//основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel( copy, html, scss, js, images));

// экспорт сценариев
export { dev }
export { build }
export { deployZIP }

//построения сценария виполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel (watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
//виполнения сценария по умолчанию
gulp.task('default', dev);
