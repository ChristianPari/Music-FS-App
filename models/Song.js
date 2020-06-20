const mongoose = require('mongoose'),
    Song_Schema = mongoose.Schema({
        track_id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        release: {
            type: Number,
            required: true
        },
        artists: {
            type: [Array],
            required: true
        },
        lyrics: {
            type: String,
            required: true
        },
        album: {
            type: String,
            required: true
        },
        preview: {
            type: String,
            required: true
        }
    }),
    Model = mongoose.model('Song', Song_Schema);

module.exports = Model;