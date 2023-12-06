const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/Login');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors({
    origin: '*', // Replace with another frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
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

