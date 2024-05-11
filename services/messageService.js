// services/messageService.js

const Message = require('../models/Message');

const messageService = {
    getAllMessages: async () => {
        try {
            const messages = await Message.find().populate('sender', 'email').populate('recipient', 'email').exec();
            return messages;
        } catch (error) {
            throw new Error('Error retrieving messages');
        }
    },
    sendMessage: async (senderId, recipientId, content) => {
        try {
            const newMessage = new Message({ sender: senderId, recipient: recipientId, content });
            await newMessage.save();
            return { message: 'Message sent successfully' };
        } catch (error) {
            throw new Error('Error sending message');
        }
    }
};

module.exports = messageService;
