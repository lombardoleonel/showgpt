import RefreshIcon from "@/components/icons/refresh-icon";
import { useGlobalStore } from "@/services/zustand"

export default function ResetFiltersButton(){
    const { setFilters } = useGlobalStore();

    const handleClick = () => setFilters([]);

    return <button type="button" onClick={handleClick} className="flex gap-2 items-center bg-black bg-opacity-30 py-1 px-2 rounded-lg border-2 border-zinc-800 border-opacity-50 text-xs font-semibold">
        <RefreshIcon className="w-3 h-3"/>
        <span className="text-nowrap">Reiniciar filtros</span>
    </button>
}