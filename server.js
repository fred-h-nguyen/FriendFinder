//require packages
var express = require('express');
var path = require('path');
var html = require('./app/routing/htmlRoutes')

// express setup

var app = express();
var PORT = process.env.PORT || 3000;

// setup so that app can use dataparsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function(){
    console.log(`App listening on PORT${PORT}`)
})
html(app,path);