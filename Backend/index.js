const express = require('express');
const cors = require('cors');
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
app.use(cors());
app.use(express.json());
app.use(userRouter);

app.get('/test', (req, res) => {
    res.send('Testing Only')
})

app.get('/', (req, res) => {
    res.json({ success: true, message: 'Welcome to the backend' });
});

app.listen(port, () => {
    console.log('Port is listening.')
})

