"use server"

import createQuery from "@/services/groq";
import { revalidatePath } from "next/cache";

export default async function createQueryRequest(categories: Array<string>, details?: string){
    try{
        return await createQuery(categories, details || "");
    }catch(error: any){
        throw new Error(error.message);
    }finally{
        revalidatePath("/");
    }
}