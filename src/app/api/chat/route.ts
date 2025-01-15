import OpenAI from 'openai';

export const runtime = 'edge'; // Use Edge Runtime for optimal infrastructure

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Your API key
});

// POST localhost:3000/api/chat
export async function POST(request) {
  try {
    // Parse the incoming request body
    const { messages } = await request.json();

    console.log(messages); // Debugging: log incoming messages

    // Create a chat completion using GPT-4
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo', // Adjust model as necessary
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        ...messages,
      ],
    });

    // Send the response back to the client
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error during OpenAI API call:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
