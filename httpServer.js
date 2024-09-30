const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res) => {
    if (req.url === "/fevicon.ico") return res.end();
    const log = `${Date.now()} : ${req.url} | mehtod ==> ( ${req.method} ) \n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    
    fs.appendFile('httpUrl.txt', log , (err) => {
        switch(myUrl.pathname){
            case '/':
                res.end("welcome to my HomePage");
                break;
            case '/about':
                const queryParameter = myUrl.query.name;
                res.end(`welcome, ${queryParameter}`);
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