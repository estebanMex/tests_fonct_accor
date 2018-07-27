var gulp = require('gulp');
var phantomcss = require('gulp-phantomcss');


gulp.task('default', function() {
  gulp.src('./get-hp-prod.js')
    .pipe(phantomcss({
      screenshots: 'desktop',
      viewportSize: [1000, 1100]
    }));
});
