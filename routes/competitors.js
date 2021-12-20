const express = require('express');
const router = express.Router();
const competitorsCtrl = require('../controllers/competitors');
const competitor = require('../models/competitor');


router.get('/', competitorsCtrl.index);
router.get('/new', competitorsCtrl.new);
router.get('/:competitorId', competitorsCtrl.show);
router.post('/', competitorsCtrl.create);
router.delete('/:competitorId', competitorsCtrl.delete);
// router.update('/:competitorId', competitorsCtrl.update);

module.exports = router;
