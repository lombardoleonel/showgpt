import { useGlobalStore } from "@/services/zustand";
import { categories } from "@/utils/categories";

import CapsuleButton from "../capsule-button";
import CategoryIcon from "../icons/category-icon";

export default function Categories(){
    const { selectedCategories, setSelectedCategories } = useGlobalStore();

    return <section className="flex flex-col gap-4">
        <div className="flex gap-2 justify-center items-center">
            <CategoryIcon className="w-6 h-6"/>
            <h2 className="text-xl font-semibold text-center">Seleccioná tus categorías de interés</h2>
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap min-w-[350px]">
            {   
                categories.map(category => <CapsuleButton
                    key={category}
                    onClick={() => setSelectedCategories(category)}
                    styledCondition={selectedCategories.includes(category)}
                >
                    {category}
                </CapsuleButton>)
            }
        </div>
    </section>
}