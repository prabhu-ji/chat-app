// controllers/messageController.js

const Message = require('../models/Message');

const messageController = {
    getAllMessages: async (req, res) => {
        try {
            const messages = await Message.find();
            res.status(200).json(messages);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    sendMessage: async (req, res) => {
        try {
            const { sender, recipient, content } = req.body;
            const newMessage = new Message({ sender, recipient, content });
            await newMessage.save();
            res.status(201).json({ message: 'Message sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = messageController;
