const path = require("path");
const { src, dest } = require("gulp");
const cleanCss = require("gulp-clean-css");
const sass = require("gulp-sass");

gulp.task("build_sass", () => {
  return src(path.resolve(__dirname, "./src/**/*.scss"))
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(dest("dist/css"));
});
