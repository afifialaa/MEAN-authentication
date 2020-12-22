const express = require('express');
const app = express();
const path = require('path');

// Access auth token
const bearerToken = require('express-bearer-token');

const ejs = require('ejs');

// Database connection
const dbConf = require('./database/dbConf');

const bodyParser = require('body-parser');

const cors = require('cors');

const userRoutes = require('./routes/user.route');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(bearerToken());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', userRoutes);

module.exports = app;