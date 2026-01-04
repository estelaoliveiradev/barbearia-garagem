
import { GoogleGenAI, Type } from "@google/genai";

export async function getStyleAdvice(vibe: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Você é um consultor de visagismo profissional de uma barbearia de luxo. 
  Um cliente está buscando um novo visual e descreveu sua "vibe" como: "${vibe}".
  
  Com base nisso, sugira 3 estilos de corte de cabelo ou barba. 
  Para cada estilo, explique por que combina com a vibe dele. 
  Seja encorajador e profissional.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        maxOutputTokens: 1000,
        thinkingConfig: { thinkingBudget: 0 }
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Desculpe, nosso consultor de IA está descansando agora. Tente novamente mais tarde!";
  }
}
