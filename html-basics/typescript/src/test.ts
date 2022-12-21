// Build Server and create Routing with Express Library

import express from 'express';

const app = express()
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About US')
})
app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})