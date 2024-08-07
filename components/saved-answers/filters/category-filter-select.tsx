import { ChangeEvent } from "react";

import { useGlobalStore } from "@/services/zustand";
import { Filter } from "@/types";
import { categories } from "@/utils/categories";

export default function CategoryFilterSelect(){
    const { filters, setFilters } = useGlobalStore();

    const category = filters.find(filter => filter.type === "category");

    const handleChange = (event: ChangeEvent) => {
        const inputTarget = event.target as HTMLSelectElement;
        const filter: Filter = { type: "category", value: inputTarget.value };

        setFilters(filter)        
    }

    return <div className="flex flex-col gap-2">
        <select onChange={handleChange} id="category-filter" className="bg-black bg-opacity-30 py-1 px-2 rounded-lg border-2 border-zinc-800 border-opacity-50 text-xs font-semibold">
            <option selected={category ? false : true} disabled>Seleccioná una categoría</option>
            {
                categories.map(cat => <option key={cat} className="bg-black">{cat}</option>)
            }
        </select>
    </div>
}