const express = require('express');
const routesSetup = require('./routes');

const app = express();
routesSetup(app);

module.exports = app;
