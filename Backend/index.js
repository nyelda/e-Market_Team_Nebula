const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/Login');
const app = express();
const port = 8000;

/*
app.use((req , res, next) => {
    req.on('data', (chunk) => {
        const data = (JSON.parse(chunk));
        req.body = data;
        next();
    })
    next();
})
*/

app.use(express.json());
app.use(userRouter);

app.get('/test', (req, res) => {
    res.send('Testing Only')
})

app.get('/', (req, res) => {
    res.send('In progress.')
});

app.listen(port, () => {
    console.log('Port is listening.')
})

