const gulp = require('gulp');
const webpack = require('gulp-webpack');
const rename = require("gulp-rename");

gulp.task('default', function() {
    // js
    gulp.src('./src/app.js')
    .pipe(webpack())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./dist/'))

    // css
    gulp.src('./node_modules/angular-material/angular-material.css')
    .pipe(gulp.dest('./dist/'))

    // index.html
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
});
