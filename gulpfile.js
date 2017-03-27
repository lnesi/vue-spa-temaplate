var gulp = require('gulp');
var webserver = require('gulp-webserver');
var htmlmin = require('gulp-htmlmin');
var webpack = require('gulp-webpack');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('webpack', function() {
  return gulp.src('src/js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});



gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html',
      directoryListing: false,
      open: true
   }));
});


gulp.task('watch', function() {
  gulp.watch("src/js/**/*", ['webpack']);
  gulp.watch("src/scss/**/*", ['sass']);
  gulp.watch("src/index.html", ['minify']);
});



gulp.task('default',['minify','webpack','sass','watch'])