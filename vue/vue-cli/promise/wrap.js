const fs=require('./FileSystem');

fs.readFile('./REMDME.md','utf-8').then(content=>{
    console.log(content);
})