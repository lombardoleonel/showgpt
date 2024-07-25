import { usePersistStore } from "@/services/zustand";

import AnswerCard from "./answer-card";
import GoHomeButton from "./go-home-button";
import FirstSearchButton from "./first-search-button";

export default function SavedAnswers(){
    const { savedAnswers } = usePersistStore();
    
    return savedAnswers && savedAnswers.length
        ? <section className="flex flex-col items-center gap-8 max-w-[800px] w-full">
            <div className="flex flex-col gap-4 w-full">
                { savedAnswers.toReversed().map((answer, index) => <AnswerCard key={index} answer={answer}/>) }
            </div>
            <GoHomeButton/>
        </section>
        : <div className="flex flex-col items-center gap-8 max-w-[500px] w-full">
            <p className="font-semibold text-xl text-center w-full">Aún no guardaste ninguna respuesta</p>
            <FirstSearchButton/>
        </div>
}