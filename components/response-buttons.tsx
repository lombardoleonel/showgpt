import { toast } from "sonner";

import { useGlobalStore, usePersistStore } from "@/services/zustand";

import PrimaryButton from "./primary-button";
import OutlineLikeIcon from "./icons/outline-like-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";

export default function ResponseButtons(){
    const { setSavedAnswers } = usePersistStore();
    const { response } = useGlobalStore();
    const { setShowCategories } = useGlobalStore();

    const saveAnswer = () => {
        setSavedAnswers(response);

        toast.success("Respuesta guardada.");
    }

    return <section className="flex flex-col sm:flex-row gap-4 w-full">
        <PrimaryButton type="button" onClick={saveAnswer}>
            <OutlineLikeIcon className="w-4 h-4"/>
            <span className="text-nowrap">Guardar respuesta</span>
        </PrimaryButton>
        <PrimaryButton type="button" onClick={() => setShowCategories(true)}>
            <ArrowRightIcon/>
            <span className="text-nowrap">Preguntar una vez más</span>
        </PrimaryButton>
    </section>
}