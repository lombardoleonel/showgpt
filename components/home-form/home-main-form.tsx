import Categories from "./categories";
import Platforms from "./platforms";

import GetRecommendationsButton from "../get-recommendations-button";
import ShowSavedAnswersButton from "../show-saved-answers-button";
import SearchIcon from "../icons/search-icon";

export default function HomeMainForm(){
    return <section className="flex flex-col items-center gap-8">
        <Categories/>
        <Platforms/>
        <div className="flex flex-col gap-4 max-w-[500px] w-full">
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 justify-center items-center">
                    <SearchIcon/>
                    <label htmlFor="details" className="text-xl font-semibold text-center">Información adicional</label>
                </div>
                <input type="text" name="details" id="details" placeholder="Películas animadas al estilo Pixar." className="py-2 px-4 w-full bg-black bg-opacity-30 rounded-lg border-2 border-zinc-800 border-opacity-50 hover:border-white focus:border-white transition-colors duration-500"/>
            </div>
            <GetRecommendationsButton/>
            <ShowSavedAnswersButton/>
        </div>
    </section>
}