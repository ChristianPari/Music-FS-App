const express = require('express'),
    router = express.Router(),
    Song = require('../models/Song'),
    adminAuth = require('../middleware/adminAuth');

router.get('/:user_key', adminAuth, (req, res) => {

    res.render('admin');

});

router.post('/:user_key/newSong', adminAuth, async(req, res) => {

    try {

        const newSong = new Song(req.body);

        await Song.create(newSong);

        return res.status(201).json({

            status: 201,
            message: "Successful Creation of New Song",
            new_song: newSong

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        });

    };

});

router.delete('/:user_key/deleteSong/:id', adminAuth, async(req, res) => {

    try {

        const songID = req.params.id,
            removedSong = await Song.findOne({ '_id': songID });

        await Song.findOneAndDelete({ '_id': songID });

        return res.status(200).json({

            status: 200,
            message: "Successful Song Deletion",
            deleted_song: removedSong

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        });

    };

});

router.patch('/:user_key/updateSong/:id', adminAuth, async(req, res) => {

    try {

        const songID = req.params.id,
            oldSong = await Song.findById(songID),
            newData = req.body;

        const newSong = await Song.findOneAndUpdate({ '_id': songID }, newData);

        return res.status(200).json({

            status: 200,
            message: "Successful Song Update",
            new_song: newSong,
            old_song: oldSong

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        });

    };

});

module.exports = router;