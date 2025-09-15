// app.js
const express = require('express');
const app = express();
const port = 3000;

//membuat route ke halaman home dengan method get
app.get('/', (req, res) => {
    res.send('Hello, ini halaman HOME dengan method GET');
});

// membuat middleware untuk menerima request body dari json
app.use(express.json());

// membuat route ke halaman submit dengan method POST
app.post('/submit', (req, res) => {
    const {name, npm, jeniskelamin} = req.body;
    res.send(`Hallo, ${name} dengan NPM ${npm}. apakah kamu ${jeniskelamin}?`);
});

//serving static file
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
