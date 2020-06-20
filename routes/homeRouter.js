const express = require('express'),
    router = express.Router(),
    Song = require('../models/Song');

router.get('/', async(req, res) => {

    const allSongs = await Song.find({});

    res.render('home', { all_songs: allSongs });

});

module.exports = router;