//引入gulp，构建是基于gulp之上
import gulp from "gulp";
//引入gulpif，gulp语句中写if判断的
import gulpif from "gulp-if";
//语句拼接
import concat from "gulp-concat";
//打包是用webpack
import webpack from "webpack";
//gulp处理的是文件流，基于stream
import gulpWebpack from "webpack-stream";
//对文件命名
import named from "vinyl-named";
//浏览器自动刷新，热更新
import livereload from "gulp-livereload";
//用来处理文件信息流
import plumber from "gulp-plumber";
//对文件重命名
import rename from "gulp-rename";
//处理js和css压缩
import uglify from "gulp-uglify";
//在命令行中输出，log和色彩
import { log, colors } from "gulp-util";
//对命名行参数进行解析
import args from "./util/args";

gulp.task("scripts", () => {
  return gulp
    .src(["app/js/index.js"])
    .pipe(
      plumber({
        errorHandler: function() {}
      })
    )
    .pipe(named())
    .pipe(
      gulpWebpack({
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: "babel"
            }
          ]
        }
      }),
      null,
      (err, stats) => {
        log(
          `Finished '${colors.cyan("scripts")}'`,
          stats.toString({
            chunks: false
          })
        );
      }
    )
    .pipe(gulp.dest("server/public/js"))
    .pipe(
      rename({
        basename: "cp",
        extname: ".min.js"
      })
    )
    .pipe(
      uglify({ compress: { properties: false }, output: { quote_keys: true } })
    )
    .pipe(gulp.dest("server/public/js"))
    .pipe(gulpif(args.watch, livereload()));
});
