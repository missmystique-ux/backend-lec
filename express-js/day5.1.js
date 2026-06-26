const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World2!');
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.get('/contact', (req, res) => {
    res.send('Hello contact me.');
});

app.get('/blog', (req, res) => {
    res.send('Hello blog');
});

app.get('/blog/:slug', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`Hello ${req.params.slug}`);
});

// app.get('/blog/:slug/:second', (req, res) => {
//     res.send(`Hello ${req.params.slug} and ${req.params.second}`);
// });

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello intro-to-js');
// });

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Hello intro-to-python');
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});