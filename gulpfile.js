var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concatJS = require("gulp-concat"),
    uglify = require('gulp-uglify'),
    imgOptimize = require('gulp-imagemin');
// jpegOptimize = require('imagemin-jpegoptim');


sass.compiler = require('node-sass');

gulp.task('sassToCSS', function () {
    return gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles'));
});

gulp.task('concatMinifyCssTask', function () {
    return gulp.src([
        'styles/plugin.css',
        'styles/main.css'
    ])
        .pipe(concatCss("styles/bundle.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'})) //перенесли из таска minify
        .pipe(gulp.dest('dist/'));
});
/*gulp.task('minifyCSSTask', function ()
     {
    return gulp.src('./dist/styles/bundle.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});*/
gulp.task('concatMinifyJS', function () {
    return gulp.src(['./js/jquery-3.3.1.js','./js/popper.min.js','./js/bootstrap.js', './js/main.js'])
        .pipe(concatJS('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'))
});
gulp.task('img', function () {
        gulp.src('src/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/images'))
    }
);
gulp.task('default', gulp.series('sassToCSS', 'concatMinifyCssTask'));