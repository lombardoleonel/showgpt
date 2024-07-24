import { useGlobalStore, usePersistStore } from "@/services/zustand";

import AnswerCard from "./answer-card";
import PrimaryButton from "../primary-button";
import ArrowLeftIcon from "../icons/arrow-left-icon";

export default function SavedAnswers(){
    const { setShowSavedAnswers } = useGlobalStore();
    const { savedAnswers } = usePersistStore();
    
    return <section className="flex flex-col items-center gap-8 max-w-[1000px] w-full">
        { savedAnswers && savedAnswers.length
            ? <div className="flex flex-col gap-4 w-full">
                { savedAnswers.toReversed().map((answer, index) => <AnswerCard key={index} answer={answer}/>) }
            </div>
            : <p className="font-semibold text-xl text-center w-full">Aún no guardaste ninguna respuesta</p>
        }
        <PrimaryButton type="button" onClick={() => setShowSavedAnswers(false)}>
            <ArrowLeftIcon/>
            <span>Volver al inicio</span>
        </PrimaryButton>
    </section>
}