const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//app.set('view engine', 'ejs');
//app.set('views', '././app/views')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

consign()
.include('app/routes')
.then('app/config/database.js')
.then('app/models')
.into(app);

module.exports = app;