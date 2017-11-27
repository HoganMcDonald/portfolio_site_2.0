//required
const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  htmlmin = require('gulp-htmlmin'),
  sass = require('gulp-sass');

//tasks
gulp.task('styles', () => {
  console.log('styles ran');
  gulp.src(['public/styles/sass/main.sass', 'public/styles/sass/blog.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: '*'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('minify', function() {
  return gulp.src('public/views/src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('public/views'));
});

//watch tasks
gulp.task('watch:styles', () => {
  gulp.watch('public/styles/sass/*.sass', ['styles']);
});

//default tasks
gulp.task('default', ['watch:styles']);
