const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

require('dotenv').config();

const {GoogleGenerativeAI} = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

app.post('/gemini', async (req, res) => {
    try {

        let msg = req.body.message;
        console.log(msg);
        
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(msg);
        
        let text = await result.response.text();
        console.log(text);
        res.send({ text });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating message');
    }
});

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
