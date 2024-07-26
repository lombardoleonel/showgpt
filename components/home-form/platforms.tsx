import { useGlobalStore } from "@/services/zustand";
import { platforms } from "@/utils/platforms";

import CapsuleButton from "../capsule-button";
import DeviceLaptopIcon from "../icons/device-laptop-icon";

export default function Platforms(){
    const { selectedPlatforms, setSelectedPlatforms } = useGlobalStore();

    return <section className="flex flex-col gap-4">
        <div className="flex gap-2 justify-center items-center">
            <DeviceLaptopIcon className="w-6 h-6"/>
            <h2 className="text-xl font-semibold text-center text-nowrap">Plataformas de preferencia</h2>
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap min-w-[350px]">
            {   
                platforms.map(platform => <CapsuleButton
                    key={platform}
                    onClick={() => setSelectedPlatforms(platform)}
                    styledCondition={selectedPlatforms.includes(platform)}
                >
                    {platform}
                </CapsuleButton>)
            }
        </div>
    </section>
}