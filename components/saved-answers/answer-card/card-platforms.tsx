import DeviceLaptopIcon from "@/components/icons/device-laptop-icon";
import CardLabel from "./card-label";

export default function CardPlatforms({ platforms }: { platforms: string | string[] }){
    return <div className="flex items-center gap-2">
        <DeviceLaptopIcon className="w-3 h-3"/>
        <div className="flex items-center gap-2">
            {
                Array.isArray(platforms) && platforms.length
                    ? platforms.map(platform => <CardLabel>{platform}</CardLabel>)
                    : <span>{platforms}</span>
            }
        </div>
    </div>
}