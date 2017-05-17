var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole:true,
            outputStyle:'expanded'}))
        .pipe(autoprefixer({browsers: ['last 2 versions','> 1%', 'ie 8']}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
});

gulp.task('default',function() {
    gulp.start('sass');
    gulp.watch('scss/*.scss',['sass']);
});