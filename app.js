require('dotenv').config();
const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    port = process.env.PORT || 5000,
    dbConnect = require('./dbConnection'),
    homeRouter = require('./routes/homeRouter'),
    songsRouter = require('./routes/songRouter');

app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());

dbConnect();

app.use('/', homeRouter);
app.use('/songs', songsRouter);

app.listen(port, () => { console.log(`\nListening on port: ${port}`); });