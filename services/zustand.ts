import { create }from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Response, GlobalStore, PersistStore, Filter } from "@/types";

export const useGlobalStore = create<GlobalStore>(set => ({
    loading: false,
    setLoading: (value: boolean) => set(state => ({ loading: value })),
    selectedCategories: [],
    setSelectedCategories: (category: string | string[]) => set(state =>
        Array.isArray(category)
            ? ({ selectedCategories: category })
            : state.selectedCategories.includes(category)
                ? ({ selectedCategories: state.selectedCategories.filter((cat: string) => category !== cat)})
                : ({ selectedCategories: [...state.selectedCategories, category] })
    ),
    selectedPlatforms: [],
    setSelectedPlatforms: (platform: string | string[]) => set(state =>
        Array.isArray(platform)
            ? ({ selectedPlatforms: platform })
            : state.selectedPlatforms.includes(platform)
                ? ({ selectedPlatforms: state.selectedPlatforms.filter((cat: string) => platform !== cat)})
                : ({ selectedPlatforms: [...state.selectedPlatforms, platform] })
    ),
    showCategories: true,
    setShowCategories: (value: boolean) => set(state => ({ showCategories: value })),
    answers: [],
    setAnswers: (answer: string) => set(state => ({ answers: [...state.answers, answer]})),
    showSavedAnswers: false,
    setShowSavedAnswers: (value: boolean) => set(state => ({ showSavedAnswers: value })),
    response: undefined,
    setResponse: (response: Response) => set(state => ({ response: response })),
    filters: [],
    setFilters: (filter: Filter | Filter[]) => set(state =>
        Array.isArray(filter)
            ? ({ filters: filter })
            : filter.type === "category"
                ? ({ filters: [...state.filters.filter(f => f.type !== "category"), filter]})
                : ({ filters: [...state.filters.filter(f => f.type !== "platform"), filter]})
    )
}))

export const usePersistStore = create<PersistStore>()(
    persist(
        (set, get) => ({
            savedAnswers: [],
            setSavedAnswers: (answer: Response | Response[]) => set(state => 
                Array.isArray(answer)
                    ? ({ savedAnswers: answer })
                    : state.savedAnswers.find(ans => ans.result === answer.result)
                        ? ({ savedAnswers: state.savedAnswers })
                        : ({ savedAnswers: [...state.savedAnswers, answer] })
            ),
            getAnswers: () => get().savedAnswers
        }),
        {
            name: "saved-answers",
            storage: createJSONStorage(() => localStorage)
        }
    )
)