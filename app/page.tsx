"use client"

import Markdown from "markdown-to-jsx";

import { useGlobalStore} from "@/services/zustand";
import formatResponse from "@/utils/formatResponse";

import HomeForm from "@/components/home-form";

export default function Home() {
  const { showCategories } = useGlobalStore();
  const { response } = useGlobalStore();

  return <div className="flex flex-col gap-8 min-w-[250px] max-w-[800px] w-full">
      <section className="flex flex-col gap-4 w-full">
        {
          showCategories && <div className="flex flex-col gap-2">
            <h2 className="max-[400px]:text-5xl text-6xl sm:text-7xl text-center font-bold">ShowGPT</h2>
            <h4 className="text-xl sm:text-2xl text-center text-white text-opacity-75">¡Las mejores recomendaciones de series y películas!</h4>
          </div>
        }
        <section className="flex flex-col gap-4 w-full">
          { !showCategories && response && <Markdown>{formatResponse(response.result)}</Markdown> }
        </section>
        <HomeForm/>
      </section>
  </div>
}
