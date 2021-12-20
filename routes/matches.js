const express = require('express');
const router = express.Router();
const matchesCtrl = require('../controllers/matches');

router.get('/', matchesCtrl.index);
router.get('/new', matchesCtrl.new);
router.get('/:matchId', matchesCtrl.show);
router.post('/', matchesCtrl.create);

module.exports = router;
