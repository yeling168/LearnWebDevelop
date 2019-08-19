const fs=require('./FileSystem');

fs.readFile('./README.md','utf-8').then(content=>{
    console.log(content);
})