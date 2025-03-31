"use server"

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
// Removed unused 'fs' import
import mime from "mime-types";
import { Buffer } from "buffer"; // Use the browser-compatible Buffer

const apiKey = "AIzaSyAdAkvU1kwA8H5IXjohmv3cNvdhc0KWa4w";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro-exp-03-25",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 4096,
    responseModalities: [],
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const candidates = result.response.candidates;
    for (let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
        for (let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
            const part = candidates[candidate_index].content.parts[part_index];
            if (part.inlineData) {
                try {
                    const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
                    const data = Buffer.from(part.inlineData.data, 'base64'); // Use the polyfilled Buffer
                    console.log(`Output data for: ${filename}`, data);
                } catch (error) {
                    console.error("Error:", error.message);
                    return "An error occurred while processing your request.";
                }
            }
        }
    }
    console.log(result.response.text());
    return result.response.text();
}

export default run;