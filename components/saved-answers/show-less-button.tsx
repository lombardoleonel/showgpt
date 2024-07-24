import ChevronUpIcon from "../icons/chevron-up-icon";
import PrimaryButton from "../primary-button";

export default function ShowLessButton({ onClick }: { onClick: () => void }){
    return <PrimaryButton type="button" onClick={onClick}>
        <ChevronUpIcon/>
        <span>Ver menos</span>
    </PrimaryButton>
}