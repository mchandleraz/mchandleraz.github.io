var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
  gulp.src('./src/footer.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./dest'));
});