const express = require('express');
const router = express.Router();
const competitorsCtrl = require('../controllers/competitors');

router.get('/', competitorsCtrl.index);

module.exports = router;
