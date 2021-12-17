const Match = require('../models/match');
const Competitor = require('../models/competitor');

module.exports = {
    index,
    new: newCompetitor,
    create,
}

function index(req, res) {
    Competitor.find({}, function (err, competitors) {
        res.render('competitors/index', {
            title: 'All Competitors',
            competitors,
        });
    });
}

function newCompetitor(req, res) {
    res.render('competitors/new', {
        title: 'Add Competitor', 
    })
}

function create(req, res) {
    console.log(req.body)
    Competitor.create(req.body, function(err, newCompetitor) {
        if (err) return res.render('competitors/new')
        res.redirect('/competitors')
    })

    // const competitor = new Competitor(req.body)
    // console.log(competitor)
    // competitor.save(function (err) {
    //     if (err) return res.render('competitors/new')
    //     res.redirect('/competitors')
    // })
}