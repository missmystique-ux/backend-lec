const express = require('express');
const app = express();
const port = 3000;
const blog = require('./routers/blog');

const fs = require("fs")

// app.use(express.static("public"))
// ...
app.use('/blog', blog);

//middleware 1 - logging our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.pashma = "I am a pashma sister";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n` )
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send('hacked by middleware 1')
    next();
})

//middleware 2
app.use((req, res, next) => {
    console.log('m2');
     req.pashma = "I am a saman sister";
    next();
})

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

app.get('/', (req, res) => {
    res.send('Hello World in express middleware!');
});

app.get('/about', (req, res) => {
    res.send('Hello about!');
});

app.get('/contact', (req, res) => {
    res.send('Hello contact!' + req.pashma);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});