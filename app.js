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

const role = require('./middlewares/role.mid');

const accountRoutes = require('./routes/account.route');

app.use(bearerToken());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/account', accountRoutes);

module.exports = app;