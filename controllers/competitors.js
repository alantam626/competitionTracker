const Match = require('../models/match');
const Competitor = require('../models/competitor');

module.exports = {
    index,
}

function index(req, res) {
    Competitor.find({}, function (err, competitors) {
        res.render('competitors/index', {
            title: 'All Competitors',
            competitors,
        });
    });
}