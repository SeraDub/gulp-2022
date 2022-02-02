import del from "del";
import zipPlugin from "gulp-zip";
export const zip = () => {
	del(`./${app.path.roofFolder}.zip`);

	return app.gulp.src(`${app.path.buildFolder}/**/*.*`,{})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "ZIP",
				message: "Error: <%=error.message  %>"
			})
		))
		.pipe(zipPlugin(`${app.path.roofFolder}.zip`))
		.pipe(app.gulp.dest('./'));

}