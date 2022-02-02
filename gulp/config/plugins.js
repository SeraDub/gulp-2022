import replace from "gulp-replace"; // поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщени(подсказки)
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновлений 
import ifPlugins from "gulp-if"; //условное ветвления 


//Экспорт обьектов
export const plugins = {
	replace:replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugins,
}