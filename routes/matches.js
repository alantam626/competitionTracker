const express = require('express');
const router = express.Router();
const matchesCtrl = require('../controllers/matches');

router.get('/', matchesCtrl.index);

module.exports = router;
