const Match = require('../models/match');
const Competitor = require('../models/competitor');

module.exports = {
    index,
    new: newCompetitor,
    create,
    show,
    delete: deleteCompetitor,
    update,
    edit,
    addMatch,
    
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
        res.redirect(`/competitors/${competitor._id}`)
    })
}

async function show(req, res) {
    Competitor.findById(req.params.competitorId)
    .populate('matchHistory').exec(function(err, competitor) {
        Match.find(
            {_id: {$nin: competitor.matchHistory}},
            function(err, matches) {
                res.render('competitors/show', {
                    title: 'Competitor Details',
                    competitor,
                    matches,
            }
        )
    })
    })
}

async function deleteCompetitor(req, res) {
    Competitor.findByIdAndRemove(req.params.competitorId)
        .then(() => res.redirect('/competitors'))
}

function edit(req, res) {
    Competitor.findById(req.params.competitorId, function (err, competitor) {
        res.render('competitors/edit',
            {
                title: 'Competitor Edit Page',
                competitor
            })
    })
}

function update(req, res) {
    Competitor.findByIdAndUpdate(req.params.competitorId, req.body, { returnNewDocument: true })
        .then((competitor) => res.redirect(`/competitors/${competitor._id}`))
}

function addMatch(req, res) {
    console.log(req.params)
    Competitor.findById(req.params.competitorId, function(err, competitor) {
        competitor.matchHistory.push(req.body.matchId);
        competitor.save(function(err) {
            res.redirect(`/competitors`)
        })
    })
}