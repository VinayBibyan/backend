// console.log("stupefy")
const express = require('express');
const app = express();
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const form = require('./models/form');

app.get('/', function (req, res) {
    res.send('Welcome! please submit your form')
})

app.post('/form', async(req, res)=>{
    try {
        const data = req.body;
        const newFormData = new form(data);
        const saveFormData = await newFormData.save();
        console.log('data saved');
        res.status(200).json(saveFormData);
    } catch (error) {
        console.log(error)
        res.status(500)  
    }
})
app.get('/form', async(req, res)=>{
    try {
        const data = await form.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json(data);
    }
})

app.listen(3000)