//основной модуль 
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";
//передаем значения в глобальную переменную
global.app = {
	path:path,
	gulp:gulp
}

//импорт задач
import {copy} from "./gulp/task/copy.js";
import {reset} from "./gulp/task/reset.js";

//наблюдатель за изминениями в файлах
function watcher(){
	gulp.watch(path.watch.files,copy)
}
//построения сценария виполнения задач
const dev = gulp.series(reset, copy, watcher);

//виполнения сценария по умолчанию
gulp.task('default',dev);
