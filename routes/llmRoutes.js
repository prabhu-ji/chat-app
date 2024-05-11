// routes/llmRoutes.js

const express = require('express');
const router = express.Router();
const llmController = require('../controllers/llmController');

router.post('/generateResponse', llmController.generateResponse);

module.exports = router;
