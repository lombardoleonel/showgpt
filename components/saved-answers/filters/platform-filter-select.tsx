import { ChangeEvent } from "react";

import { useGlobalStore } from "@/services/zustand";
import { Filter } from "@/types";
import { platforms } from "@/utils/platforms";

export default function PlatformFilterSelect(){
    const { setFilters } = useGlobalStore();

    const handleChange = (event: ChangeEvent) => {
        const inputTarget = event.target as HTMLSelectElement;
        const filter: Filter = { type: "platform", value: inputTarget.value };
        
        setFilters(filter);        
    }

    return <div className="flex flex-col gap-2">
        <select onChange={handleChange} id="category-filter" className="bg-black bg-opacity-30 py-1 px-2 rounded-lg border-2 border-zinc-800 border-opacity-50 text-xs font-semibold">
            <option selected disabled>Seleccioná una plataforma</option>
            {
                platforms.map(platform => <option key={platform} className="bg-black">{platform}</option>)
            }
        </select>
    </div>
}