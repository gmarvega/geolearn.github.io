import {defineStore} from 'pinia';
export const useModeState = defineStore('mode', {
    state: () => ({
        options: {
            continent: 'Asia',
            mode: 'Test',
            category: 'Paises'
        },
    }),
    actions: {
        setContinent(continent) {
            this.options.continent = continent;
        },
        setMode(selectedMode) {
            this.options.mode = selectedMode;
        },
        setCategory(categorySelection) {
            this.options.category = categorySelection;
        },
    },
    getters: {
        
    },
});