import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge'; // Use Edge Runtime for optimal infrastructure

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// POST localhost:3000/api/chat
export async function POST(request) {
    // Parse the incoming request body
    const { messages } = await request.json();

    console.log(messages); // Debugging: log incoming messages

    try {
        // Create chat completion with GPT-4
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                ...messages
            ]
        });

        // Create a stream of data from OpenAI
        const stream = await OpenAIStream(response);

        // Send the stream as a response to the client
        return new StreamingTextResponse(stream);
    } catch (error) {
        console.error("Error during OpenAI API call:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}