// controllers/statusController.js

const User = require('../models/User');

const statusController = {
    getUserStatus: async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json({ status: user.status });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateUserStatus: async (req, res) => {
        try {
            const userId = req.params.userId;
            const { status } = req.body;
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            user.status = status;
            await user.save();

            res.status(200).json({ message: 'User status updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = statusController;
