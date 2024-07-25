export type Response = {
    result: string,
    categories: string | string[],
    platforms: string | string[]
}

export type Filter = {
    type: "category" | "platform",
    value: string
}

export type GlobalStore = {
    loading: boolean,
    setLoading: (state: boolean) => void,
    selectedCategories: string[],
    setSelectedCategories: (category: string | string[]) => void,
    selectedPlatforms: string[],
    setSelectedPlatforms: (platform: string | string[]) => void,
    showCategories: boolean,
    setShowCategories: (state: boolean) => void,
    answers: string[],
    setAnswers: (answer: string) => void,
    showSavedAnswers: boolean,
    setShowSavedAnswers: (state: boolean) => void,
    response: Response | undefined,
    setResponse: (response: Response) => void,
    filters: Filter[],
    setFilters: (filter: Filter | Filter[]) => void
}

export type PersistStore = {
    savedAnswers: Response[],
    setSavedAnswers: (answer: Response | Response[]) => void,
    getAnswers: () => Response[]
}