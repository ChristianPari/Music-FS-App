const express = require('express'),
    router = express.Router(),
    Song = require('../models/Song'),
    adminAuth = require('../middleware/adminAuth');

router.get('/:user_key', adminAuth, (req, res) => {

    res.render('admin');

});

router.post('/:user_key/post', adminAuth, async(req, res) => {

    try {

        const newSong = new Song(req.body);

        await Song.create(newSong);

        return res.status(201).json({

            status: 201,
            message: "Successful Creation of New Song",
            new_song: newSong

        })

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        })

    };

});

module.exports = router;