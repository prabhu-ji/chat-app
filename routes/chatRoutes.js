// routes/chatRoutes.js

const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getAllMessages);
router.post('/', chatController.sendMessage);

module.exports = router;
