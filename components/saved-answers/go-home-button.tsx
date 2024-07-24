import { useGlobalStore } from "@/services/zustand";

import PrimaryButton from "../primary-button";
import ArrowLeftIcon from "../icons/arrow-left-icon";

export default function GoHomeButton(){
    const { setShowSavedAnswers } = useGlobalStore();

    return <PrimaryButton type="button" onClick={() => setShowSavedAnswers(false)} className="max-w-[500px]">
        <ArrowLeftIcon/>
        <span>Volver al inicio</span>
    </PrimaryButton>
}