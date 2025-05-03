const express = require('express');
const app = express();
const fs = require('fs');
const request = require('request');
const config = require('./config.js');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/ticker=:id', (req,res)=>{
    const ticker = req.params.id
    const url= `https://api.petfinder.com/v2/animals`
    
})

console.log(config.PORT);