import {defineStore} from 'pinia';
export const useTestState = defineStore('test', {
    state: () => ({
        options: {
            guessedCountries: new Set(),
            allCountries: [],
            countrySelection: "",
            errors: 0,
        },
    }),
    actions: {
        async getAllCountries() {
            const response = await fetch("/countries.json");

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const countries = [];

            data.features.forEach(element => {
                countries[countries.length] = { "continent": element.properties.continent, "country": element.properties.name};
            });

            this.options.allCountries = countries;
        },
        setTestContinent(continent) {
            this.options.testContinent = continent;
        },
        setSelectedCountries(selectedCountries) {
            this.options.selectedCountries = selectedCountries;
        },
        setCountrySelection(countrySelection) {
            this.options.countrySelection = countrySelection;
        },
        reset(){
            this.options = {
                guessedCountries: new Set(),
                allCountries: [],
                countrySelection: "",
                errors: 0,
            }
        },
        getErrors(){
            return this.options.errors;
        },
        incrementErrors(){
            this.options.errors = 1;
        }
    },
    getters: {
        getGuessedCountries() {
            return this.options.guessedCountries
        },
    },
});
