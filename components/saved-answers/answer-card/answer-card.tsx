import { useState } from "react";
import Markdown from "markdown-to-jsx";

import formatResponse from "@/utils/formatResponse";

import ShowMoreButton from "../show-more-button";
import ShowLessButton from "../show-less-button";
import RemoveAnswerButton from "../remove-answer-button";
import CardCategories from "./card-categories";
import CardPlatforms from "./card-platforms";

export default function AnswerCard({ result, categories, platforms }: { result: string, categories: string | string[], platforms: string | string[] }){
    const [expand, setExpand] = useState<boolean>();

    return <div className="flex flex-col gap-4 w-full overflow-hidden bg-black bg-opacity-30 p-4 rounded-lg border-2 border-zinc-800 border-opacity-50">
        <section className="flex flex-col min-[800px]:flex-row min-[800px]:justify-between gap-2 min-[800px]:gap-8">
            <CardCategories categories={categories}/>
            <CardPlatforms platforms={platforms}/>
        </section>
        <Markdown className={`${!expand && "line-clamp-5"}`}>{formatResponse(result)}</Markdown>
        { 
            !expand
                ? <ShowMoreButton onClick={() => setExpand(true)}/>
                : <ShowLessButton onClick={() => setExpand(false)}/>
        }
        <RemoveAnswerButton result={result}/>
    </div>
}