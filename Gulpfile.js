const gulp = require('gulp');
const rename = require("gulp-rename");

gulp.task('default', function() {
    // css
    gulp.src('./node_modules/angular-material/angular-material.css')
    .pipe(gulp.dest('./dist/'))

    // index.html
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
});
