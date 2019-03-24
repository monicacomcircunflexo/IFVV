const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());


consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.then('config/connect.js')
	.into(app)


module.exports = app;