const express = require('express');
const app = express();
const fs = require('fs');
const request = require('request');
const config = require('./config.js');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/scrapping/movie/:id', (req,res)=>{
    const movie = req.params.id
    const url= `https://api.themoviedb.org/3/movie/${movie}`
      
    request.get({
        url: url,
        headers: {
            accept: 'application/json',
          Authorization: `Bearer ${config.API_KEY}`
        }
    }, (err, response, data) => {
        if (err){
            console.log("Erreur:", err);
        }else if(response.statusCode !== 200){
            console.log('Status:', response.statusCode);
        }else{
            fs.writeFile(`data/${movie}.json`, data, (err) => {
                if (err) {
                    return res.status(500).send('Erreur lors de la sauvegarde du fichier.');
                }
                res.send('Fichier sauvegardé !');
            });
        }
})
})

const PORT = config.PORT
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})