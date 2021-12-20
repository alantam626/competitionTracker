const Match = require('../models/match');
const Competitor = require('../models/competitor');

module.exports = {
    index,
    show,
    create,
    new: newMatch,
}

function index (req, res) {
    Match.find({}, function(err, matches) {
        res.render('matches/index', {
            title: 'All Matches',
            matches,
        })
    })
}

function newMatch (req, res) {
    res.render('matches/new', {
        title: 'Add Matches'
    }
    )}

function show (req, res) {
    Match.findById(req.params.matchId, function(err, match) {
        res.render('matches/show', {
            title: 'Match Detail',
            match,
        })
    })
}

function create (req, res) {
    const match = new Match(req.body)
    match.save(function (err) {
        if (err) return res.render('matches/new')
        res.redirect('/matches')
    })
}