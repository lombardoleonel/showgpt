"use server"

import createQuery from "@/services/groq";
import { revalidatePath } from "next/cache";

export default async function createQueryRequest(categories: Array<string>, platforms: Array<string>, details?: string){
    try{
        const response = await createQuery(categories, platforms, details || "");

        return { result: response, categories: categories, platforms: platforms };
    }catch(error: any){
        throw new Error(error.message);
    }finally{
        revalidatePath("/");
    }
}