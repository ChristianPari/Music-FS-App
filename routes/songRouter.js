const express = require('express'),
    router = express.Router(),
    Song = require('../models/Song');

router.get('/', async(req, res) => {

    const allSongs = await Song.find({});

    res.render('songs', { all_songs: allSongs });

});

module.exports = router;