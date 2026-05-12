const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const nunjucks = require("gulp-nunjucks-html");

function compileSass() {
  return gulp
    .src("scss/style.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("css"));
}

function html() {
  return gulp
    .src("src/*.njk")
    .pipe(
      nunjucks({
        searchPaths: ["src"],
        ext: ".html"
      })
    )
    .pipe(gulp.dest("dist"));
}

function watchFiles() {
  gulp.watch("scss/**/*.scss", compileSass);
  gulp.watch("src/**/*.njk", html);
}

exports.sass = compileSass;
exports.html = html;
exports.default = gulp.series(
  gulp.parallel(compileSass, html),
  watchFiles
);