const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitorSchema = new Schema({
    competitorName: String,
    teamName: String,
    win: {
        type: Number,
        min: 0,
    },
    lose: {
        type: Number,
        min: 0,
    },
})

module.exports = mongoose.model('Competitor', competitorSchema)