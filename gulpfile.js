/* 
* @Author: Marte
* @Date:   2018-04-04 16:24:48
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-06 09:19:06
*/
var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('compileSass',function(){

    gulp.src('./src/sass/*.scss')

    .pipe(sass())

    .pipe(gulp.dest('./src/css'))
    
});

gulp.task('DKsb',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
});

