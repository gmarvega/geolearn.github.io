import{q as n}from"./index-CDl4_P6P.js";const i=n("test",{state:()=>({options:{guessedCountries:new Set,allCountries:[],countrySelection:"",errors:0}}),actions:{async getAllCountries(){const t=await fetch("/countries.json");if(!t.ok)throw new Error("Network response was not ok");const o=await t.json(),e=[];o.features.forEach(s=>{e[e.length]={continent:s.properties.continent,country:s.properties.name}}),this.options.allCountries=e},setTestContinent(t){this.options.testContinent=t},setSelectedCountries(t){this.options.selectedCountries=t},setCountrySelection(t){this.options.countrySelection=t},reset(){this.options={guessedCountries:new Set,allCountries:[],countrySelection:"",errors:0}},getErrors(){return this.options.errors},incrementErrors(){this.options.errors=1}},getters:{getGuessedCountries(){return this.options.guessedCountries}}});export{i as u};