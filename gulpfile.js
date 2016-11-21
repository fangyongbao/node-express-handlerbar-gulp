// 定义css目录路径
var cssUrl = "./client/css/";
// 定义sass目录路径
var sassUrl = "./client/sass/";

var gulp = require('gulp'),
    //sass编译
    sass = require('gulp-sass'),
    //控制task顺序
    gulpSequence = require('gulp-sequence');

//sass编译
gulp.task('sass', function() {
    return gulp.src(sassUrl + '*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(cssUrl))
});

//监控
gulp.task('watch', function() {
    gulp.watch(sassUrl + '**/*.scss', ['sass']);
});