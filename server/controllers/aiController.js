const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});

const generateFlashcards = async (req, res) => {

    try {

        const {
            notes,
            flashcardCount,
            difficulty
        } = req.body;

        const prompt = `
You are an educational assistant.

Generate exactly ${flashcardCount} flashcards.

Difficulty: ${difficulty}

Return ONLY valid JSON.

Do not write markdown.
Do not use \`\`\`json.

Return exactly like this:

[
  {
    "question":"...",
    "answer":"..."
  }
]

Notes:

${notes}
`;

        const completion = await client.chat.completions.create({

    model: "deepseek/deepseek-chat-v3-0324",

    messages: [

        {
            role: "system",
            content:
                "You are a flashcard generator. Return ONLY a valid JSON array. No explanation. No markdown."
        },

        {
            role: "user",
            content: prompt
        }

    ],

    temperature: 0.2,

    max_tokens: 500

});

        const text = completion.choices[0].message.content;

        const clean = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

console.log("========== AI RESPONSE ==========");
console.log(clean);

// Extract ONLY the JSON array
const start = clean.indexOf("[");
const end = clean.lastIndexOf("]");

if (start === -1 || end === -1) {
    throw new Error("No JSON array found in AI response.");
}

const jsonString = clean.substring(start, end + 1);

console.log("========== EXTRACTED JSON ==========");
console.log(jsonString);

const flashcards = JSON.parse(jsonString);

res.json(flashcards);

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            error: err.message

        });

    }

}

module.exports = {

    generateFlashcards

};