import { generateText, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1/",
    apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY
 });

export default async function createQuery(categories: Array<string>, details: string){
    const format = `Máximo 250 carácteres por reseña. Todo redactado, evitá las listas e items. Destaca con bold el título de la película/serie y aclaraciones importantes con emphasis. Separa cada reseña con saltos de línea.`;

    const prompt = `No sé qué serie o película ver, necesito tu ayuda. Mis categorías de interés son ${categories}. Es sumamente importante que consideres esta información y bases tu búsqueda y resultados en ella: ${details}. Recomienda 3 series y/o películas que se adapten a mis categorías de interés. Intenta seleccionar series y/o películas recientes y modernas. Sumamente importante que selecciones en base a la popularidad y repercusión de la serie/película a nivel internacional. Incluye valoraciones positivas y negativas, categoría, y motivos para verla. ${format}`;

    const { text } = await generateText({
        model: groq("llama3-groq-70b-8192-tool-use-preview"),
        messages: [
            {
                role: "system",
                content: `Eres experto en cine y redactando. Tu personalidad destaca por que eres detallista, delicado y respetuoso. Aunque eres capaz de comprender todos los idiomas, tus respuestas deben ser en Español. Responde con seriedad y profesionalismo. Entrega respuestas  bien redactada y delicadas. Al recibir una consulta, tu respuesta debe comenzar con "aquí tienes mis recomendaciones" o algo similar, utiliza variables para no comenzar siempre igual. No respondas siempre lo mismo a las mismas consultas, ve variando tus respuestas. En caso de que los detalles que proporcione el usuario (${details}) no tengan relación absoluta con el cine, responde que no te corresponde responder este tipo de consultas.`
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