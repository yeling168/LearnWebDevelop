var gulp=require('gulp');

var $=require('gulp-load-plugins');

var open=require('open');

var app={
    srcPath:'src',
    //生成环境
    devPath:'build/',
    //开发部署
    prdPath:'dist'
}

//定义lib任务,读取文件

gulp.task('lib',function(){
    //相对gulpfile的路径
    gulp.src('bower_components/**/*.js')
    //读了文件就拷贝,dest是写文件的API
    .pipe(gulp.dest(app.devPath+'vendor'))
    .pipe(gulp.dest(app.prdPath+'vendor'))
})