import { create, StateCreator }from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type GlobalStore = {
    selectedCategories: string[],
    setSelectedCategories: (category: string | string[]) => void,
    showCategories: boolean,
    setShowCategories: (state: boolean) => void,
    answers: string[],
    setAnswers: (answer: string) => void,
    savedAnswers: string[],
    setSavedAnswers: (answer: string | string[]) => void,
    showSavedAnswers: boolean,
    setShowSavedAnswers: (state: boolean) => void,
    response: string,
    setResponse: (response: string) => void
}

export const useGlobalStore = create<GlobalStore>(set => ({
    selectedCategories: [],
    setSelectedCategories: (category: string | string[]) => set(state =>
        Array.isArray(category)
            ? ({ selectedCategories: category })
            : state.selectedCategories.includes(category)
                ? ({ selectedCategories: state.selectedCategories.filter((cat: string) => category !== cat)})
                : ({ selectedCategories: [...state.selectedCategories, category] })
    ),
    showCategories: true,
    setShowCategories: (value: boolean) => set(state => ({ showCategories: value })),
    answers: [],
    setAnswers: (answer: string) => set(state => ({ answers: [...state.answers, answer]})),
    savedAnswers: [],
    setSavedAnswers: (answer: string | string[]) => set(state => 
        Array.isArray(answer)
            ? ({ savedAnswers: answer })
            : state.savedAnswers.find(ans => ans === answer)
                ? ({ savedAnswers: state.savedAnswers })
                : ({ savedAnswers: [...state.savedAnswers, answer] })
    ),
    showSavedAnswers: false,
    setShowSavedAnswers: (value: boolean) => set(state => ({ showSavedAnswers: value })),
    response: "",
    setResponse: (response: string) => set(state => ({ response: response }))
}))

type PersistStore = {
    savedAnswers: string[],
    setSavedAnswers: (answer: string | string[]) => void,
    getAnswers: () => string[]
}

export const usePersistStore = create<PersistStore>()(
    persist(
        (set, get) => ({
            savedAnswers: [],
            setSavedAnswers: (answer: string | string[]) => set(state => 
                Array.isArray(answer)
                    ? ({ savedAnswers: answer })
                    : state.savedAnswers.find(ans => ans === answer)
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