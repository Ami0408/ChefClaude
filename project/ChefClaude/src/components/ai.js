// ai.js
import { InferenceClient } from "@huggingface/inference";

// Ensure you have your API key stored securely (e.g., environment variable)
const HUGGINGFACE_API_KEY = import.meta.env.VITE_API;

export async function getRecipeFromHuggingFace(ingredients) {
  if (!HUGGINGFACE_API_KEY) {
    console.error("Hugging Face API key is missing in ai.js.");
    return "Error: API key not configured.";
  }

  const client = new InferenceClient(HUGGINGFACE_API_KEY);

  try {
    const prompt = `Generate a recipe using the following ingredients: ${ingredients.join(', ')} in  markdown format When generating the recipe, please omit any text that describes your thought process or internal reasoning. Just provide the final recipe.`;
    const chatCompletion = await client.chatCompletion({
      provider: "together",
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching recipe from Hugging Face in ai.js:", error);
    return "Failed to generate recipe.";
  }
}
