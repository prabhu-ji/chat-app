// routes/statusRoutes.js

const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router.get('/:userId', statusController.getUserStatus);
router.put('/:userId', statusController.updateUserStatus);

module.exports = router;
