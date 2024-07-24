import { useState } from "react";
import Markdown from "markdown-to-jsx";

import formatResponse from "@/utils/formatResponse";

import ShowMoreButton from "./show-more-button";
import ShowLessButton from "./show-less-button";
import RemoveAnswerButton from "./remove-answer-button";

export default function AnswerCard({ answer }: { answer: string }){
    const [expand, setExpand] = useState<boolean>();

    return <div className="flex flex-col gap-4 w-full overflow-hidden bg-black bg-opacity-30 p-4 rounded-lg border-2 border-zinc-800 border-opacity-50">
        <Markdown className={`${!expand && "line-clamp-5"}`}>{formatResponse(answer)}</Markdown>
        { 
            !expand
                ? <ShowMoreButton onClick={() => setExpand(true)}/>
                : <ShowLessButton onClick={() => setExpand(false)}/>
        }
        <RemoveAnswerButton answer={answer}/>
    </div>
}