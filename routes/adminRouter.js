const express = require('express'),
    router = express.Router(),
    Song = require('../models/Song');

router.get('/', (req, res) => {

    res.render('admin');

});

/*

    To add a song means then that the song must be added to an album and to an artist
    To add an album means then that the album must be added to an artist
    

*/

module.exports = router;