const express = require('express');
const app = express();
const db = require('./db');
const menu = require('./model/menu');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send('Welcome to restraunt wesite')
})

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes)

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes)
 
app.listen(PORT);