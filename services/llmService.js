// llmService.js

const { getLLMResponse } = require('../controllers/llmController'); // Adjust the path based on your project structure

const llmService = {
    generateResponse: async (prompt) => {
        try {
            const response = await getLLMResponse(prompt);
            return { response };
        } catch (error) {
            throw new Error('Error generating response');
        }
    }
};

module.exports = llmService;
