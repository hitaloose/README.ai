import OpenAI from "openai";
import { type OptionValues } from "option-values";

export const outputProcessor = async (content: string, options: OptionValues) => {
  if (options.outputRawChat) {
    return content;
  }

  if (!options.openaiToken) {
    throw new Error("OpenAi token is not provided");
  }

  const client = new OpenAI({
    apiKey: options.openaiToken,
  });

  const aiResponse = await client.chat.completions.create({
    model: options.openaiModel,
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
  });

  const output = aiResponse.choices[0].message.content || "";

  return output.trim();
};
