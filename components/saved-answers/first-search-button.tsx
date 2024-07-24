import { useGlobalStore } from "@/services/zustand";

import PrimaryButton from "../primary-button";
import SearchIcon from "../icons/search-icon";

export default function FirstSearchButton(){
    const { setShowSavedAnswers } = useGlobalStore();

    return <PrimaryButton type="button" onClick={() => setShowSavedAnswers(false)}>
        <SearchIcon className="w-4 h-4"/>
        <span>Realizar una búsqueda</span>
    </PrimaryButton>
}