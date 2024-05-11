// services/chatService.js

const Message = require('../models/Message');

const chatService = {
    getAllMessages: async () => {
        try {
            const messages = await Message.find();
            return messages;
        } catch (error) {
            throw new Error('Error retrieving messages');
        }
    },
    sendMessage: async (sender, recipient, content) => {
        try {
            const newMessage = new Message({ sender, recipient, content });
            await newMessage.save();
            return { message: 'Message sent successfully' };
        } catch (error) {
            throw new Error('Error sending message');
        }
    }
};

module.exports = chatService;
