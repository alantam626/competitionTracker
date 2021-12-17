const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitorSchema = new Schema({
    competitorName: {
        Type: String,
    },
    teamName: {
        Type: String,
    },
    win: {
        Type: Number,
        min: 0,
    },
    lose: {
        Type: Number,
        min: 0,
    },
})

module.exports = mongoose.model('Competitor', competitorSchema)