const dotenv = require('dotenv');
dotenv.config();
require( './dataBase' );
const express = require("express");
const app = express();
const user = require( './user' );

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use( '/', user );

app.listen( process.env.PORT, () => {
    console.log( 'App server is Runing on port', process.env.PORT );
} );