import { toast } from "sonner";

import { useGlobalStore } from "@/services/zustand";
import createQueryRequest from "@/utils/createQueryRequest";

import SavedAnswers from "./saved-answers/saved-answers";
import HomeMainForm from "./home-main-form";
import ResponseButtons from "./response-buttons";

export default function HomeForm(){
    const { showCategories, setShowCategories } = useGlobalStore();
    const { selectedCategories, setSelectedCategories } = useGlobalStore();
    const { showSavedAnswers } = useGlobalStore();
    const { setResponse } = useGlobalStore();
    const { setLoading } = useGlobalStore();

    return <form action={async (formData: FormData) => {
        if(!selectedCategories.length) return toast.error("Debes seleccionar al menos una categoría.");

        setLoading(true);

        const details = formData.get("details") as string;

        try{
            const response = await createQueryRequest(selectedCategories, details);

            setResponse(response);
        }catch(error: any){
            toast.error(error.message);
        }finally{
            setSelectedCategories([]);
            setShowCategories(false);
            setLoading(false)
        }
      }} className="flex flex-col items-center gap-4">
        {
          showCategories
            ? showSavedAnswers
                ? <SavedAnswers/>
                : <HomeMainForm/>
            : <ResponseButtons/>
        }
    </form>
}