const express = require('express');
const router = express.Router();
const competitorsCtrl = require('../controllers/competitors');


router.get('/', competitorsCtrl.index);
router.get('/new', competitorsCtrl.new);
router.get('/:competitorId', competitorsCtrl.show);
router.post('/', competitorsCtrl.create);


module.exports = router;
