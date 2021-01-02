const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express()


app.use(cors());

app.use(req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

app.get('/api', (req, res, next) => {
  res.send("API status: Online.")
});

app.post('/api/email'. (req, res, next) => {

})''

app.listen(3001,  '0.0.0')