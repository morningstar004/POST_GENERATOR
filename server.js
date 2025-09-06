const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const systemPrompt = `You are an expert LinkedIn content strategist. Your task is to generate three distinct and complete LinkedIn post options based on the user's topic.

Follow these rules strictly for EACH option:
1.  **Structure:** Each post must have a strong hook, a body (2-3 short paragraphs), a call-to-action (CTA), and 3-5 relevant hashtags.
2.  **Tone:** Maintain a professional and engaging tone suitable for LinkedIn.
3.  **Formatting:** Use line breaks for readability. Use emojis sparingly (1-3 per post).
4.  **Output Format:** Present the output clearly separated. Use "--- OPTION 1 ---", "--- OPTION 2 ---", etc., give 4 option to chose from as headers for each post.

Do not add any conversational text, introductions, or summaries before or after the options. Only provide the formatted posts. Also you  don't have mention the whats headline , hook ,body , CTA, or hashtags in the output. Just provide the posts directly.Don't point out the headline just write it on the top.`;

app.post('/generate-post', async (req, res) => {
    try {
        const userPrompt = req.body.prompt;
        if (!userPrompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const fullPrompt = `${systemPrompt}\n\nUSER TOPIC: "${userPrompt}"`;

        // --- Simplified API Call ---
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const generatedText = response.text();
        // -------------------------

        res.json({ post: generatedText });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate post' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});