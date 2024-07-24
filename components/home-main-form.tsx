import { categories } from "@/utils/categories";

import CategoryCapsuleButton from "./category-capsule-button";
import ShowSavedAnswersButton from "./show-saved-answers-button";
import GetRecommendationsButton from "./get-recommendations-button";

export default function HomeMainForm(){
    return <section className="flex flex-col items-center gap-8">
        <div className="flex justify-center items-center gap-2 flex-wrap min-w-[350px]">
            { categories.map(category => <CategoryCapsuleButton key={category} category={category}>{category}</CategoryCapsuleButton>) }
        </div>
        <div className="flex flex-col gap-4 max-w-[500px] w-full">
            <input type="text" name="details" placeholder="Me gustan películas animadas al estilo Pixar." className="py-2 px-4 w-full bg-black bg-opacity-30 rounded-lg border-2 border-zinc-800 border-opacity-50 hover:border-white focus:border-white transition-colors duration-500"/>
            <GetRecommendationsButton/>
            <ShowSavedAnswersButton/>
        </div>
    </section>
}