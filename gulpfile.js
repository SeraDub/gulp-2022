//основной модуль 
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";
//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";
//передаем значения в глобальную переменную
global.app = {
	path:path,
	gulp:gulp,
	plugins:plugins
}

//импорт задач
import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js;"

//наблюдатель за изминениями в файлах
function watcher(){
	gulp.watch(path.watch.files,copy)
}
const mainTasks = gulp.parallel(copy, html);
//построения сценария виполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel (watcher, server));
//виполнения сценария по умолчанию
gulp.task('default',dev);
