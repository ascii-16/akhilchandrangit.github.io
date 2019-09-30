// Imports
let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let livereload = require('gulp-livereload');
let cleancss = require('gulp-clean-css');
let notify = require('gulp-notify');
let uglify = require("gulp-uglify");
let concat = require("gulp-concat");
let del = require("del");

// Local variables
let scssPath = 'src/scss/**/*.scss';
let jsPath = 'src/js/**/*.js';
let fontPath = 'src/fonts/**/*.{ttf,woff,woff2,eot,svg}';
let imagePath = 'src/images/*.{png,jpg,jpeg,gif,svg}';
let scssDest = 'dist/styles';
let jsDest = 'dist/scripts';
let fontDest = 'dist/fonts';
let imageDest = 'dist/images';

// Compile sass into css
gulp.task('styles', () => {
  return gulp.src(scssPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(scssDest))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleancss())
    .pipe(gulp.dest(scssDest))
    .pipe(livereload({
      start: false
    }));
});

// Minify and concat js files
gulp.task('scripts', () => {
  return gulp.src(jsPath)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(livereload({
      start: false
    }));
  // .pipe(notify({ message: 'Task: scripts completed' }));
})

// Copy fonts
gulp.task('fonts', () => {
  return gulp.src(fontPath)
    .pipe(gulp.dest(fontDest))
    .pipe(livereload({
      start: false
    }));
})

// Copy images
gulp.task('images', () => {
  return gulp.src(imagePath)
    .pipe(gulp.dest(imageDest))
    .pipe(livereload({
      start: false
    }));
})

// Watch directory for js and scss changes
gulp.task('watch', () => {

  gulp.parallel('build');

  // scss
  gulp.watch(scssPath).on('change', gulp.series('styles'));

  // js
  gulp.watch(jsPath).on('change', gulp.series('scripts'));

  // fonts
  gulp.watch(fontPath).on('change', gulp.series('fonts'));

  // images
  gulp.watch(imagePath).on('change', gulp.series('images'));

});

// Clean
gulp.task('clean', () => {
  return del([scssDest, jsDest, fontDest, imageDest]);
});

// Clean and run all tasks
gulp.task('build', gulp.parallel('clean', 'fonts', 'styles', 'scripts', 'fonts', 'images'))
