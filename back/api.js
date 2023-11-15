const express = require ("express");
const {json} = require("express");

const app = express.Router();

app.get('/articles', (req,res) =>{
    res.json([{
        id: 1,
        name: 'tournevis',
        prix: 2.99,
        quantite: 3
    }]);
});

module.exports = app;