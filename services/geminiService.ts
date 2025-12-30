
import { GoogleGenAI, Type } from "@google/genai";

export async function generateProjectBrief(projectName: string, industry: string) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "API Key not found.";

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, professional graphic design project brief for a project named "${projectName}" in the "${industry}" industry. Include a primary design objective, target audience, and a suggested visual style (2-3 sentences max).`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });

    return response.text || "Failed to generate brief.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating content. Please try again.";
  }
}
