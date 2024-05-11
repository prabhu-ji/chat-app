// services/authService.js

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authService = {
    register: async (email, password) => {
        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                throw new Error('User already exists');
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ email, password: hashedPassword });
            await newUser.save();

            return { message: 'User registered successfully' };
        } catch (error) {
            throw new Error(error.message);
        }
    },
    login: async (email, password) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('User not found');
            }

            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                throw new Error('Invalid password');
            }

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            return { token };
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = authService;
