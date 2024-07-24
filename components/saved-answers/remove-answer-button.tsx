import { usePersistStore } from "@/services/zustand";

import PrimaryButton from "../primary-button";
import ThrashIcon from "../icons/thrash-icon";

export default function RemoveAnswerButton({ answer }: { answer: string }){
    const { savedAnswers, setSavedAnswers } = usePersistStore(); 

    const removeAnswer = () => {
        const filteredAnswers = savedAnswers.filter((ans: string) => ans !== answer);

        setSavedAnswers(filteredAnswers);
    }

    return <PrimaryButton type="button" onClick={removeAnswer}>
        <ThrashIcon className="w-4 h-4"/>
        <span>Eliminar</span>
    </PrimaryButton>
}