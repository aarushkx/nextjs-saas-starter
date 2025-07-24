import { GoogleGenerativeAI } from "@google/generative-ai";

const GOOGLE_GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 100,
    responseMimeType: "text/json",
};

export const chatSession = model.startChat({ generationConfig });
