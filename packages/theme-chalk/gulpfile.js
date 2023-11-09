const path = require("path");
const gulp = require("gulp");
const cleanCss = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));

gulp.task("buildCss", () => {
  return gulp
    .src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest(path.resolve(__dirname, "../../dist/css")));
});

// function buildCss(params) {
//   return gulp
//     .src(path.resolve(__dirname, "./src/*.scss"))
//     .pipe(sass())
//     .pipe(cleanCss())
//     .pipe(gulp.dest(path.resolve(__dirname, "../../dist/css")));
// }

// module.exports = {
//   buildCss,
// };
