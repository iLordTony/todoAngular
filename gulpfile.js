var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('js', function () {
    return browserify({
        entries: './app/static/lib/app.js'
    })
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./app/static/public'));
});
