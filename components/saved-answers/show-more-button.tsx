import ChevronDownIcon from "../icons/chevron-down-icon";
import PrimaryButton from "../primary-button";

export default function ShowMoreButton({ onClick }: { onClick: () => void }){
    return <PrimaryButton type="button" onClick={onClick}>
        <ChevronDownIcon/>
        <span>Expandir</span>
    </PrimaryButton>
}