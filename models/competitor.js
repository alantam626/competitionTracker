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
    matchHistory: [{type: Schema.Types.ObjectId, ref: 'Match'}]
})

module.exports = mongoose.model('Competitor', competitorSchema)