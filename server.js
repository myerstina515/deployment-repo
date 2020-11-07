'use strict';

const { response } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/test', (request, response) => {
    response.send('hello!');
});
app.use(express.static('./public'));
app.get('/cool/route/test', (request, response) => {
    response.json({ msg: 'data you asked for'});
});
app.get('/', (request, response) => {
    response.sendFile('./public/index.html');
});

app.listen(PORT, () => {
    console.log('server up on port 3000');
});

