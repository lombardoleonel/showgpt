import { useGlobalStore } from "@/services/zustand";

import PrimaryButton from "./primary-button";
import OutlineLikeIcon from "./icons/outline-like-icon";

export default function ShowSavedAnswersButton(){
    const { setShowSavedAnswers } = useGlobalStore();

    return <PrimaryButton type="button" onClick={() => setShowSavedAnswers(true)}>
        <OutlineLikeIcon/>
        <span className="text-nowrap">Respuestas guardadas</span>
    </PrimaryButton>
}