import { usePersistStore } from "@/services/zustand";
import { Response } from "@/types";

import PrimaryButton from "../primary-button";
import ThrashIcon from "../icons/thrash-icon";

export default function RemoveAnswerButton({ result }: { result: string }){
    const { savedAnswers, setSavedAnswers } = usePersistStore(); 

    const removeAnswer = () => {
        const filteredAnswers = savedAnswers.filter((answer: Response) => answer.result !== result);

        setSavedAnswers(filteredAnswers);
    }

    return <PrimaryButton type="button" onClick={removeAnswer}>
        <ThrashIcon className="w-4 h-4"/>
        <span>Eliminar</span>
    </PrimaryButton>
}