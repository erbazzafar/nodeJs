// //fs is a file system

// const fs = require("fs") //this is a built-in module, i have not given a path in this require

// //Sync...
// // fs.writeFileSync('./test.txt', "Hey there") //(filePath, fileData) it will overwrite the previous data in the given file
// const result = fs.readFileSync('./test.txt', "utf-8");
// console.log(result);
// fs.appendFileSync('./test.txt', `\n ${Math.floor(Math.random()*100)} `)

// //Async...
// fs.writeFile('./test2.txt', "hello ASYNC file...", (err)=>{}) //syntax ==> (filePath, fileData, callBackFunction)
// fs.readFile('./test2.txt', "utf-8", (err, result2) => {
//     if(!err){
//         console.log('Result: ', result2);
//     }else{
//         console.log('Error', err);
//     }
// }); //this doesnot return the result, you have to use a callback(arrow function) to get the result(to readfile)

// console.log(fs.statSync('./test.txt').isFile());

const os = require("os");

console.log(os.cpus().length);
console.log("hostname: ", os.hostname());
console.log("type: ", os.type());
console.log("load average: ", os.loadavg());
console.log("release: ", os.release());
console.log("network Interfaces: ", os.networkInterfaces());
console.log("total memory: ", os.totalmem());
console.log("free memory: " ,os.freemem());
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("temporary files: " + os.tmpdir());