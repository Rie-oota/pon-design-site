const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("default", function () {
  return gulp.watch("scss/**/*.scss", function () {
    return gulp.src("scss/style.scss")
      .pipe(
        sass({
          outputStyle: "expanded"
        }).on("error", sass.logError)
      )
      .pipe(gulp.dest("css"));
  });
});

const nunjucks = require("gulp-nunjucks-html");

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
  gulp.watch("src/**/*.njk", html);
}

exports.html = html;
exports.default = gulp.series(html, watchFiles);