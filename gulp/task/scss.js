import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; //Сжатия CSS
import webpcss from 'gulp-webpcss';//Вивод WEBPизображений
import autoprefixer from 'gulp-autoprefixer'; //добавления вендорних префиксов
import gulpCssMediaQueries from 'gulp-group-css-media-queries';//Групировка медиа запросов
import gulpGroupCssMediaQueries from 'gulp-group-css-media-queries';

const sass= gulpSass (dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: true })
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "SCSS",
			message: "Error: <%=error.message %"
		})
	))
	.pipe(app.plugins.replace(/@img\//g, '../img/'))
	.pipe(sass({
		outputStyle: 'expanded'
	}))
	.pipe(gulpGroupCssMediaQueries())
	.pipe(webpcss(
		{
			webpClass: ".webp",
			nowebpClass: "no-webp"
		}
	))
	.pipe(autoprefixer({
		grid: true,
		overrideBrowserslist:["last 3 versions"],
		cascade: true
	}))
	//Рекомендовать если нужен не сжатый дубль файла стилей
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(cleanCss())
	.pipe(rename({
		extname: ".min.css"
	}))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(app.plugins.browsersync.stream());
}