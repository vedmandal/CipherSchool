import dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import buildPrompt from "../utils/buildPrompt.js";

export const getHint = async (req, res) => {
  const { question, schema, userQuery } = req.body || {};

  if (!question || !schema || !userQuery) {
    return res.status(400).json({
      error: "Missing required fields"
    });
  }

  try {
    const prompt = buildPrompt(question, schema, userQuery);

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              { text: prompt }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const hint =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No hint generated.";

    res.json({ hint });

  } catch (err) {
    console.error("GEMINI ERROR:", err.response?.data || err.message);

    res.status(500).json({
      error: err.response?.data || err.message
    });
  }
};