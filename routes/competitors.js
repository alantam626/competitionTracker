const express = require('express');
const router = express.Router();
const competitorsCtrl = require('../controllers/competitors');


router.get('/', competitorsCtrl.index);
router.get('/new', competitorsCtrl.new);
router.get('/:competitorId', competitorsCtrl.show);
router.post('/', competitorsCtrl.create);
router.delete('/:competitorId', competitorsCtrl.delete);
router.get('/:competitorId/edit', competitorsCtrl.edit);
router.put('/:competitorId', competitorsCtrl.update);
router.post('/:competitorId/matches', competitorsCtrl.addMatch);

module.exports = router;
