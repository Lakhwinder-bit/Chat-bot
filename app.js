import readline from 'node:readline/promises'
import Groq from "groq-sdk";
import "dotenv/config";
import { tavily } from "@tavily/core";

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

const gorq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function main() {

  const rl = new readline.Interface({input: process.stdin, output: process.stdout})

  const message = [
    {
      role: "system",
      content: `You are Sheru, a friendly study assistant for college students.
    Rules:
        - Explain in simple English.
        - Keep answers under 120 words.
        - If you don't know, say "I'm not sure".
        - Use webSearch when the user needs current information.
        - Otherwise, answer normally.
        current date and Time: ${new Date().toUTCString()}
`,
    },
    // { role: "user", content: "what is delhi weather" },
  ];

while(true){

  const question = await rl.question('You: ')

  if(question === "bye"){
    break;
  }

  message.push({
    role:'user',
    content:question
  })
    while (true) {
    const res = await gorq.chat.completions.create({
      temperature: 0,
      model: "openai/gpt-oss-20b",
      messages: message,

      tools: [
        {
          type: "function",
          function: {
            name: "webSearch",
            description:
              "Search the latest infomation and realtime data on the internet",
            parameters: {
              type: "object",
              properties: {
                query: {
                  type: "string",
                  description: "The Search query to perform search on.",
                },
              },
              required: ["query"],
            },
          },
        },
      ],

      tool_choice: "auto",
    });

    message.push(res.choices[0].message);

    const toolCalls = res.choices[0].message.tool_calls;
    if (!toolCalls) {
      console.log(`Assistant: ${res.choices[0].message.content}`);
      break;
    }

    for (const tool of toolCalls) {
      const functionName = tool.function.name;
      const functionParams = tool.function.arguments;

      if (functionName === "webSearch") {
        const toolResult = await webSearch(JSON.parse(functionParams));
        message.push({
          tool_call_id: tool.id,
          role: "tool",
          name: functionName,
          content: toolResult,
        });
      }
    }
  }
}
rl.close();
}

main().catch(console.error);

async function webSearch({ query }) {
  console.log("calling web tool...")
  const response = await tvly.search(query, { maxResults: 1 });
  const finalREsult = response.results
    .map((result) => result.content)
    .join("\n\n");

  return finalREsult;
}
