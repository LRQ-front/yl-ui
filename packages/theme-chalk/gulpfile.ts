const path = require("path");
const gulp = require("gulp");
const { series } = require("gulp");
const cleanCss = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));

function buildCss() {
  return gulp
    .src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest(path.resolve(__dirname, "../../dist/css")));
}

function copyFont() {
  return (
    gulp
      .src(path.resolve(__dirname, "./src/fonts/**"))
      // .pipe(cleanCss())
      .pipe(gulp.dest(path.resolve(__dirname, "../../dist/css/fonts")))
  );
}

exports.default = series(buildCss, copyFont);
