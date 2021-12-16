const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    matchName: {
        type: String,
    },
    location: {
        type: String,
    },
    date: {
        type: Date,
    }
})

module.exports = mongoose.model('Match', matchSchema)