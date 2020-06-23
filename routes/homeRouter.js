const express = require('express'),
    router = express.Router();

router.get('/home', (req, res) => {

    const songsLink = `http://localhost:${process.env.PORT}/songs`,
        albumsLink = '',
        artistsLink = '';

    res.render('home', {
        songs_link: songsLink,
        albums_link: albumsLink,
        artists_link: artistsLink
    });

});

module.exports = router;