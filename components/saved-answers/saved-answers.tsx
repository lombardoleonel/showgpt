import { useGlobalStore, usePersistStore } from "@/services/zustand";

import CategoryFilterSelect from "./filters/category-filter-select";
import PlatformFilterSelect from "./filters/platform-filter-select";
import AnswerCard from "./answer-card/answer-card";
import FirstSearchButton from "./first-search-button";
import GoHomeButton from "./go-home-button";
import ResetFiltersButton from "./filters/reset-filter-button";

export default function SavedAnswers(){
    const { savedAnswers } = usePersistStore();
    const { filters } = useGlobalStore();

    const category = filters.find(filter => filter.type === "category")?.value;
    const platform = filters.find(filter => filter.type === "platform")?.value;

    const filteredAnswers = savedAnswers.toReversed().filter(({ categories, platforms }) => {
        const categoryMatch = category ? categories.includes(category) : true;
        const platformMatch = platform ? platforms.includes(platform) : true;

        return categoryMatch && platformMatch;
    })

    return savedAnswers && savedAnswers.length
        ? <section className="flex flex-col items-center gap-8 max-w-[800px] w-full">
            <div className="flex flex-col items-end gap-2 w-full">
                <div className="flex gap-2 items-center">
                    <p className="text-xs font-semibold">Filtros</p>
                    <CategoryFilterSelect/>
                    <PlatformFilterSelect/>
                </div>
                <ResetFiltersButton/>
            </div>
            <div className="flex flex-col gap-4 w-full">
                { 
                    filteredAnswers.length
                        ? filteredAnswers.map(({ result, categories, platforms }, index) => <AnswerCard key={index} result={result} categories={categories} platforms={platforms}/>)
                        : <p className="font-semibold text-xl text-center w-full">No se encontró ningún resultado para la búsqueda filtrada</p>
                }
            </div>
            <GoHomeButton/>
        </section>
        : <div className="flex flex-col items-center gap-8 max-w-[500px] w-full">
            <p className="font-semibold text-xl text-center w-full">Aún no guardaste ninguna respuesta</p>
            <FirstSearchButton/>
        </div>
}