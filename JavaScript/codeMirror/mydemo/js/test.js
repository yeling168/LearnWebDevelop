//读取最大的文件

const fs = require("fs");

const path = require("path");

function findLargest(dir, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) return callback(err);
    //取出文件数量
    let count = files.length;
    let errored = false;
    let stats = [];
    files.forEach(file => {
      //文件状态
      fs.stat(path.join(dir, file), (err, stat) => {
        if (errored) return;
        if (err) {
          errored = true;
          return callback(err);
        }

        stats.push(stat);
        //每读完一个文件，数量就减1
        if (--count === 0) {
          let largest = stats
            .filter(function(stat) {
              return stat.isFile();
            })
            .reduce(function(prev, next) {
              if (prev.size > next.size) return prev;
              return next;
            });
          //第一个参数代表是否有错误，没有错误则是null
          callback(null, files[stats.indexOf(largest)]);
        }
      });
    });
  });
}


// findLargest("./path/to/dir", function(err, filename) {
//   if (err) return console.log(err);
//   console.log("largest file was", filename);
// });

findLargest("D:\LearnWebDevelop\LearnWebDevelop\JavaScript\codeMirror\mydemo\js", function(err, filename) {
    if (err) return console.log(err);
    console.log("largest file was", filename);
  });
