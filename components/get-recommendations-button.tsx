import { useGlobalStore } from "@/services/zustand";

import PrimaryButton from "./primary-button";
import LoaderIcon from "./icons/loader-icon";
import CornerDownRightArrowIcon from "./icons/corner-down-right-arrow-icon";

export default function GetRecommendationsButton(){
    const { loading } = useGlobalStore();

    return loading
        ? <PrimaryButton type="submit">
            <LoaderIcon className="animate-spin"/>
            <span className="text-nowrap">Generando respuesta</span>
        </PrimaryButton>
        : <PrimaryButton type="submit">
            <CornerDownRightArrowIcon/>
            <span className="text-nowrap">Recibir recomendaciones</span>
        </PrimaryButton>
}