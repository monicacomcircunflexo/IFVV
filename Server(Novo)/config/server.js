const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const app = express();

const unburden = require('../Routes/unburden');
const system = require('../Routes/system');
const user =  require('../Routes/user');
const comment = require('../Routes/comments');
const unburdens =  require('../Routes/unburdens');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressValidator());

app.use((req, res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/user', user);
app.use('/system', system);
app.use('/unburden', unburden);
app.use('/comment', comment);
app.use('/unburdens', unburdens);


module.exports = app;