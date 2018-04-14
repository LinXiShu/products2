/* 
* @Author: Marte
* @Date:   2018-04-04 16:24:48
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-10 21:38:55
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');



gulp.task('compileSass',function(){

    gulp.src('./src/sass/*.scss')

    .pipe(sass())

    .pipe(gulp.dest('./src/css'))
    
});



gulp.task('DKsb',function(){
    browserSync({
        port:1001,
        proxy:'http://localhost:1000',

        files:['./src/**/*.html','./src/css/*.css','./src/js/*.js','./src/img/*.jpg','./src/css/img/*.png']
    });
    
    gulp.watch('./src/sass/*.scss',['compileSass'])
});




