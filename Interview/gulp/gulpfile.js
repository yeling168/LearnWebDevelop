var gulp = require("gulp");

var $ = require("gulp-load-plugins")();

var open = require("open");

var app = {
  srcPath: "src",
  //生成环境
  devPath: "build/",
  //开发部署
  prdPath: "dist"
};

//定义lib任务,读取文件

gulp.task("lib", function() {
  //相对gulpfile的路径
  gulp
    .src("bower_components/**/*.js")
    //读了文件就拷贝,dest是写文件的API
    .pipe(gulp.dest(app.devPath + "vendor"))
    .pipe(gulp.dest(app.prdPath + "vendor"));
});

gulp.task("html", function() {
  gulp
    .src(app.srcPath + "/**/*.html")
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.prdPath));
});

//json用来mock数据
gulp.task("json", function() {
  gulp
    .src(app.srcPath + "data/**/*.json")
    .pipe(gulp.dest(app.devPath + "data"))
    .pipe(gulp.dest(app.prdPath + "data"));
});

//less

gulp.task("less", function() {
  gulp
    .src(app.srcPath + "style/index.less")
    .pipe($.less())
    .pipe(gulp.dest(app.devPath + "css"))
    .pipe($.cssmin())
    .pipe(gulp.dest(app.prdPath + "css"));
});

gulp.task("js", function() {
  gulp
    .src(app.srcPath + "script/**/*.js")
    //合并js
    .pipe($.concat("index.js"))
    .pipe(gulp.dest(app.devPath + "js"))
    //压缩js
    .pipe($.uglify())
    .pipe(gulp.dest(app.prdPath + "js"));
});

gulp.task("image", function() {
  gulp
    .src(app.srcPath + "image/**/*")
    .pipe(gulp.dest(app.devPath + "image"))
    //压缩
    .pipe($.imagemin())
    .pipe(gulp.dest(app.prdPath + "image"));
});

//清除之前文件

gulp.task("clean", function() {
  gulp.src([app.devPath, app.prdPath]).pipe($.clean());
});


//任务合并
gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json']);

gulp.task('serve', ['build'], function() {
    $.connect.server({
    //读取文件路径
      root: [app.devPath],
      //热更新
      livereload: true,
      port: 3000
    });
    //自动打开浏览器
    open('http://localhost:3000');
  
    gulp.watch('bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'image/**/*', ['image']);
  });
  
  gulp.task('default', ['serve']);