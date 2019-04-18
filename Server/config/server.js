const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressValidator());

app.use(function(req, res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.then('config/connect.js')
	.into(app)

module.exports = app;
