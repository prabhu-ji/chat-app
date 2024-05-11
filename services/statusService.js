// services/statusService.js

const User = require('../models/User');

const statusService = {
    getUserStatus: async (userId) => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }
            return { status: user.status };
        } catch (error) {
            throw new Error('Error getting user status');
        }
    },
    updateUserStatus: async (userId, newStatus) => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }
            user.status = newStatus;
            await user.save();
            return { message: 'User status updated successfully' };
        } catch (error) {
            throw new Error('Error updating user status');
        }
    }
};

module.exports = statusService;
