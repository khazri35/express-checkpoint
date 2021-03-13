const express= require('express');
const app = express();
const path = require('path'); 
const logger = require('./Middelware/logger');
app.use(logger);
app.use(express.static('public'));

app.get('/contact', (req, res) => {
// console.log(__dirname)
    res.sendFile(path.join(__dirname, "/public/contact.html")); 
}) 
app.get('/', (req, res)=> {
    // console.log(__dirname)
        res.sendFile(path.join(__dirname, "/public/home.html")); 
    }) 

    app.get('/services', (req, res)=> {
        // console.log(__dirname)
            res.sendFile(path.join(__dirname, "/public/services.html")); 
        }) 
    
const PORT = process.env.PORT || 5000;

app.listen(PORT, (error)=>
{ 
    error ? console.log(error)
    :
    console.log(`server started on port${PORT}...`)
}
 
);