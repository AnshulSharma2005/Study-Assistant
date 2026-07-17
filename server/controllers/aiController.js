const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({

    model: "gemini-2.5-flash"

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

Return ONLY JSON.

Format:

[
 {
   "question":"",
   "answer":""
 }
]

No markdown.

No explanation.

Notes:

${notes}

`;

        const result = await model.generateContent(prompt);

        const text = result.response.text();

        const clean = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const flashcards = JSON.parse(clean);

        res.json(flashcards);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            error: "Unable to generate flashcards."

        });

    }

}

module.exports = {

    generateFlashcards

};