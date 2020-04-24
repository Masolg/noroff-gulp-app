const gulp = require('gulp');
const { src, dest } = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function css() {
    return src('less/**/*.less')
    .pipe(less())
    .pipe(dest('css'))
    .pipe(browserSync.stream())
}

function image() {
    return src('src/images/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
    .pipe(browserSync.stream())
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
  gulp.watch('./src/images/*', image);
  gulp.watch('./less/**/*.less', css);
  gulp.watch('./*.html').on('change', browserSync.reload)
}


exports.watch = watch;
