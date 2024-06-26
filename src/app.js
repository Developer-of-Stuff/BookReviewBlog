const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/', (req, res) => {
    console.log(req);
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
})

app.get('/listings', (req, res) => {
    res.sendFile(path.join(__dirname, '/listings.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})