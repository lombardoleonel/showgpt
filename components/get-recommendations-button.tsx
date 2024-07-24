import PrimaryButton from "./primary-button";
import CornerDownRightArrowIcon from "./icons/corner-down-right-arrow-icon";

export default function GetRecommendationsButton(){
    return <PrimaryButton type="submit">
        <CornerDownRightArrowIcon/>
        <span className="text-nowrap">Recibir recomendaciones</span>
    </PrimaryButton>
}