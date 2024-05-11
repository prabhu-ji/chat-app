// controllers/llmController.js

const { getLLMResponse } = require('../services/llmService');

const llmController = {
    generateResponse: async (req, res) => {
        try {
            async function getLLMResponse(prompt) { return new Promise((resolve) => {
                const timeout = Math.random() * (15000 - 5000) + 5000;
                setTimeout(() => {
                resolve('This is a mock response from the LLM based on user input');
                }, timeout); });
                };
            const { prompt } = req.body;
            const response = await getLLMResponse(prompt);
            res.status(200).json({ response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = llmController;
