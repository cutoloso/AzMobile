var gulp = require('gulp');
var sass = require('gulp-sass'); //compiles scss to css
var browserSync = require('browser-sync'); //browser autoreload
var postcss = require('gulp-postcss'); //filter css
var autoprefixer = require('autoprefixer'); //plugins of postcss
var cssnano = require('cssnano'); //plugins of postcss (minify file css)
var uglify = require('gulp-uglify-es').default; //minify file js
var concat = require('gulp-concat'); //concatenates multiple files into one file
var sourcemaps = require('gulp-sourcemaps'); //maps the CSS styles back to the original SCSS file in your browser dev tools
var purgecss = require('gulp-purgecss') //filter, outputs the source CSS with unused selectors removed

// --------Task gulp-------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

// Sass task compiles the style.scss file into style.css
gulp.task('scssTask', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(postcss([ autoprefixer('last 2 versions'), cssnano() ])) // PostCSS plugins
    .pipe(gulp.dest('app/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// css task
gulp.task('cssTask', function() {
  return gulp.src('app/css/*.css')
    .pipe(sourcemaps.init())
      .pipe(concat('all.min.css'))
      .pipe(postcss([ autoprefixer('last 2 versions'), cssnano() ])) // PostCSS plugins
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

// js task
gulp.task('jsTask', function() {
  return gulp.src('app/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// purgecss task
gulp.task('purgecss', () => {
    return gulp.src('dist/css/all.min.css')
      .pipe(purgecss({
          content: ['app/*.html','app/js/*.js']
      }))
      .pipe(gulp.dest('dist/css'))
})

//build task
gulp.task('build',
  gulp.series(
    gulp.parallel('cssTask', 'jsTask'),
    'purgecss'
  )
);

// Watchers
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.series('scssTask'));
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

// Default task
gulp.task('default',
  gulp.parallel(gulp.series('scssTask', 'browserSync'), 'watch')
  );