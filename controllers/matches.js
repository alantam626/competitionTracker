const Match = require('../models/match');
const Competitor = require('../models/competitor');

module.exports = {
    index,
}

function index (req, res) {
    Match.find({}, function(err, matches) {
        res.render('matches/index', {
            title: 'All Matches',
            matches,
        })
    })
}