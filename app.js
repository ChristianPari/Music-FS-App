require('dotenv').config();
const express = require('express'),
    fetch = require('node-fetch'),
    morgan = require('morgan'),
    app = express(),
    port = process.env.PORT || 4000,
    dbConnect = require('./dbConnection'),
    Song = require('./models/Song');

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(express.json());

dbConnect();

app.listen(port, () => { console.log(`\nListening on port: ${port}`); });