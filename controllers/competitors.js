const Match = require('../models/match');
const Competitor = require('../models/competitor');

module.exports = {
    index,
    new: newCompetitor,
    create,
    show,
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
    const competitor = new Competitor(req.body)
    competitor.save(function (err) {
        if (err) return res.render('competitors/new')
        res.redirect('/competitors')
    })
}

async function show(req, res) {
    let competitorDetail = await Competitor.findById(req.params.competitorId)
    console.log(req.params)
    res.render('competitors/show', {
        title: 'Competitor Details',
        competitorDetail

    })
}