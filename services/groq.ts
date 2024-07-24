import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1/",
    apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY
 });

export default async function createQuery(categories: Array<string>, details: string){
    const prompt = `No sé qué serie o película ver, necesito tu ayuda. Mis categorías de interés son ${categories}. ${details}. Recomienda 3 (en total) series y/o películas que se adapten a mis categorías de interés. Incluye valoraciones positivas y negativas, categoría, y motivos para verla. Redactado, evitá las listas e items. Destaca con bold el título de la película/serie y aclaraciones importantes con emphasis. Evita colocar saltos de línea al final de tu respuesta.`;

    const { text } = await generateText({
        model: groq("gemma2-9b-it"),
        messages: [
            {
                role: "system",
                content: `Eres experto en cine y redactando. Tu personalidad destaca por que eres detallista, delicado y respetuoso. Aunque eres capaz de comprender todos los idiomas, tus respuestas deben ser en Español. Responde con seriedad y profesionalismo, no amigablemente. No des respuestas pobres, sé detallista cuando debas, entrega una respuesta bien redactada y delicada. En caso de que "${details}" no esté relacionado al cine responde que no puedes responderlo o ignorálo completamente.`
            },
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.75,
        frequencyPenalty: 2
    })

    return text;
}