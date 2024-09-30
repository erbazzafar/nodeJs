//express js is used to overcome the problems faced by using node js, 
// that was code ugliness, code readability, 
// we donot need to use hhtp, url anymore, because express handles these functionalites
// by himself and provide us a more compact and scaleable code

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    return res.send('hello from the home page !!')
}); 
app.get('/about', (req, res) => {
    return res.send('hello from the About page !!')
});

app.get('/signup', (req, res) => {
    return res.send("this is a POST method for a form")
})


app.listen(8080, () => {console.log("server started");
})