<template>
  <Header></Header>
  <Modal :is-open="isOpen"></Modal>
  <div id="list" class="container-fluid full-height">
    <div class="row full-height">
      <div class="col-md-3" id="list">
        <select class="clickable-list full-height"  style="overflow-y: auto" multiple>
          <option
            v-for="country in filteredCountries"
            :key="country"
            @click="handleClick(country)"
            :class="{ 'special-style': isInSelectedList(country), 'clickable-list': !isInSelectedList(country) }"
          >
            {{ country }}
          </option>
        </select>
      </div>
      <div class="col full-height" id="map">
        <ol-map
          :loadTilesWhileAnimating="true"
          :loadTilesWhileInteracting="true"
          class="full-height"
        >
          <ol-view ref="view" :center="center" :zoom="zoom" :projection="projection" />

          <ol-vector-layer background="white" ref="vectorSourceRef">
            <ol-source-vector :url="url" :format="geoJson">
              <ol-style :overrideStyleFunction="baseStyle"></ol-style>
            </ol-source-vector>
          </ol-vector-layer>

          <ol-interaction-select @select="featureSelected" :condition="b" :filter="clickableFilter">
            <ol-style :overrideStyleFunction="baseStyle"></ol-style>
          </ol-interaction-select>
        </ol-map>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import type { Feature } from "ol";
import {Fill, Stroke, Style, Text} from "ol/style";
import { ref, inject } from "vue";
import { defaults as defaultControls } from 'ol/control/defaults';
import {getMapConfig} from "@/functions/getMapConfig";
import { useTestState } from '@/stores/testState';
import { useModeState } from '@/stores/modeState';
import Header from './HeaderApp.vue';
import Modal from '@/pages/Modal.vue';

const {center, projection, zoom, url} = getMapConfig()
const format = inject("ol-format");
const geoJson = new format.GeoJSON();
const testStore = useTestState();
const modeStore = useModeState();
const a = inject("ol-selectconditions");
const b = a.click;
let isOpen = false;
const controls = ref(defaultControls({}));

function baseStyle(feature: Feature) {
  const isInContinent = feature.values_.continent == modeStore.options.continent;
  const isSelecetd = testStore.getGuessedCountries.has(feature.values_.name);
  return new Style({
    fill: new Fill({
      color: isSelecetd? feature.get("COLOR_BIO") : isInContinent? '#79828d' : '#c7c8cb'
    }),
    stroke: new Stroke({
      color: "#FFFFFF"
    }),
    text: new Text({
      text: isSelecetd? feature.get("name"): ""
    })
  });
}
const getFilteredCountries =() => {
  const testStore = useTestState();
  const countries = [];

  for (let i = 0; i < testStore.options.allCountries.length; i++) {
    const country = testStore.options.allCountries[i];
    if (country.continent == modeStore.options.continent) {
      countries.push(country.country);
    }
  }
  return countries;
}

const featureSelected = (feature) => {
  testStore.options.guessedCountries = testStore.options.guessedCountries.add(feature.selected[0].values_.name);
  if (testStore.options.guessedCountries.size === getFilteredCountries().length){
    isOpen = true;
    testStore.reset(); 
  }
};
const clickableFilter = (feature) => {
  if (feature.values_.name == undefined || testStore.options.guessedCountries.has(feature.values_.name)){
    return false;
  }

  if (feature.values_.name != testStore.options.countrySelection){
    testStore.incrementErrors();
    if(feature.values_.continent == modeStore.options.continent){
      alert('Selección incorrecta!');
    }
    return false;
  }else{
    return true;
  }
};

const handleClick = (country) => {
  testStore.setCountrySelection(country);
}

</script>
<script lang="ts">
import { defineComponent } from 'vue'
import { useTestState } from '@/stores/testState';
import { useModeState } from '@/stores/modeState';

const getFilteredCountries =() => {
  const testStore = useTestState();
  const modeStore = useModeState();
  const countries = [];

  for (let i = 0; i < testStore.options.allCountries.length; i++) {
    const country = testStore.options.allCountries[i];
    if (country.continent == modeStore.options.continent) {
      countries.push(country.country);
    }
  }
  return countries;
}

export default defineComponent({
  data() {
    return {
      filteredCountries: [],
    };
  },
  name: 'MapTest',
  methods:{
    isInSelectedList(country) {
      const testStore = useTestState();
      return testStore.getGuessedCountries.has(country);
    },
  },
  mounted() {
    const testStore = useTestState();
    testStore.reset();
    testStore.getAllCountries().then(() => (
      this.filteredCountries = getFilteredCountries()
    ));
  }
})

</script>

<style>
.clickable-list {
  /* Base styles for the select element */
  width: 100%; /* Ensure it fills the container */
  padding: 5px; 
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #fff; /* Background color for non-selected options */
  color: #333; /* Text color for non-selected options */
}

.clickable-list option {
  /* Base styles for options */
  padding: 5px 10px;
  cursor: pointer;
}

.clickable-list option:hover {
  /* Style for hovering over an option */
  background-color: #eee;
}

.clickable-list option::selection {
  /* Style for selected options */
  background-color: #ddd;
  color: #000; /* Text color for selected options */
}

.special-style {
  /* Styles for list items in the special list */
  background-color: #7ED348;
  font-weight: bold;
  /* Add other styles as needed */
}
.special-style option:hover {
  /* Styles for list items in the special list */
  background-color: #7ED348;
  font-weight: bold;
  /* Add other styles as needed */
}

</style>