import { useGlobalStore } from "@/services/zustand"
import { ReactNode } from "react";

export default function CategoryCapsuleButton({ children, category }: { children: ReactNode, category: string }){
    const { selectedCategories, setSelectedCategories } = useGlobalStore();

    return <button type="button" onClick={() => setSelectedCategories(category)} className={`text-xs sm:text-sm font-bold py-2 px-4 rounded-full border-2 transition-colors duration-300 ${selectedCategories.includes(category) ? "bg-white border-white text-black" : "border-white border-opacity-25 hover:border-opacity-100"}`}>
        { children }
    </button>
}