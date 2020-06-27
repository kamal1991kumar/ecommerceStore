const dotenv = require('dotenv');
dotenv.config();
require('./dataBase');
const express = require("express");
const app = express();
const router = require('./models/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD" );
  next();
});

app.use('/users', router.user );
app.use('/products', router.product);

app.get('/', (req, res) => {
  res.send('hellow');
});

app.listen(process.env.PORT, () => {
  console.log('App server is Runing on port', process.env.PORT);
});