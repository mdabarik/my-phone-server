const express = require('express')
const app = express();
const port = 6500;

app.get('/', (req, res) => {
    res.send('My first server ever created!')
})

app.get('/data', (req, res) => {
    res.send('More data comming soooooon...')
})

app.listen(port, () => {
    console.log(`my first server is running on port: ${port}`);
})