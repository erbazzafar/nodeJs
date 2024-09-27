const http = require("http")
const fs = require("fs")
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} \n`;
    fs.appendFile('httpUrl.txt', log , (err) => {
        switch(req.url){
            case '/':
                res.end("welcome to my HomePage");
                break;
            case '/about':
                res.end("welcome to my About Page");
                break;
            case '/contact':
                res.end("welcome to my Contact Page");
                break;
            default:
                res.end("404 not found")
        }

        if(err){console.log("Error: ", err);}
        
        
    })
    // console.log(req.client)
    
});

myServer.listen(8080, () => {console.log("server started");
})