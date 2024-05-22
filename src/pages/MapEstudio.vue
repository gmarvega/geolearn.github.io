<template>

    <Header></Header>

    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" @change:controls="controls"
        style="height: 800px">
        <ol-view ref="view" :center="center" :zoom="zoom" :projection="projection" />

        <ol-interaction-select @select="featureClicked" :condition="selectCondition2" :filter="selectInteactionFilter2">

            <ol-style :overrideStyleFunction="onClickStyle"></ol-style>
        </ol-interaction-select>

        <ol-vector-layer background="white" ref="vectorSourceRef">
            <ol-source-vector :url="url" :format="geoJson">
                <ol-style :overrideStyleFunction="baseStyle"></ol-style>
            </ol-source-vector>
        </ol-vector-layer>

    </ol-map>
</template>

<script setup lang="ts">
import Header from './HeaderApp.vue';

import { Feature } from "ol";
import { Fill, Stroke, Style, Text } from "ol/style";
import { ref, inject } from "vue";
import { defaults as defaultControls } from 'ol/control/defaults';

import { useTestState } from '@/stores/testState';
import { useModeState } from '@/stores/modeState';

const testStore = useTestState();
const modeStore = useModeState();

const getFilteredCountries = () => {
    const testStore = useTestState();
    const modeStore = useModeState();
    const countries = new Set();

    for (let i = 0; i < testStore.options.allCountries.length; i++) {
        const country = testStore.options.allCountries[i];
        if (country.continent == modeStore.options.continent) {
            countries.add(country.country);
        }
    }
    return countries;
}

let cent;
let zom;

if (modeStore.options.continent === "Asia") {
    cent = ref([100, 40]);
    zom = ref(3.8);
} else if (modeStore.options.continent === "Europa") {
    cent = ref([10, 52]);
    zom = ref(4.9);
} else if (modeStore.options.continent === "America") {
    cent = ref([-100, 10]);
    zom = ref(3.1);
} else if (modeStore.options.continent === "Oceania") {
    cent = ref([135, -20]);
    zom = ref(4);
} else if (modeStore.options.continent === "Africa") {
    cent = ref([15, 0]);
    zom = ref(3.85);
} else {
    cent = ref([10, 52]);
    zom = ref(4.9);
}

const center = cent; // Center of Europe
const projection = ref("EPSG:4326");
const zoom = zom;
const url = ref("./countries.json");
const format = inject("ol-format");
const geoJson = new format.GeoJSON();

//era per treure els controls de zoom pero no puc
const controls = ref(defaultControls({}));
var countriesSelected = new Set();

function baseStyle(feature: Feature) {

    var _color;
    const name = feature.get("name");
    var _text;

    // Si el continente es el elegido
    if (feature.get("continent") == modeStore.options.continent)
        if (countriesSelected.has(name)) {
            _text = name;
            _color = feature.get("COLOR_BIO") + 80;
        } else {
            _text = "";
            _color = feature.get("COLOR_BIO");
        }
    else { // Si no es el continente que estamos estudiando lo pitnamos de gris
        _color = '#c7c8cb'
    }
    return new Style({
        fill: new Fill({
            color: _color || "#eeeeee"
        }),
        stroke: new Stroke({
            color: "#FFFFFF"
        }),
        text: new Text({
            text: _text,
            font: "20px sans-serif"
        })
    });
}

function onClickStyle(feature: Feature) {

    const name: string = feature.get("name");
    var _text;
    var color;
    if (countriesSelected.has(name)) {
        countriesSelected.delete(name);
        _text = "";
        color = feature.get("COLOR_BIO");
    } else {
        countriesSelected.add(name);
        _text = name;
        color = feature.get("COLOR_BIO") + 80;
    }
    return new Style({
        fill: new Fill({
            color: color || "#eeeeee"
        }),
        stroke: new Stroke({
            color: "#FFFFFFFF"
        }),
        text: new Text({
            text: _text,//feature.get("COLOR_BIO") ? feature.get("name"): "",
            font: "20px sans-serif"
        })

    });
}

// NOTE: not working because of ol framework
function hoverStyle(feature: Feature) {

    const name = feature.get("name");

    if (countriesSelected.has(name)) {
        return;
    } else {
        return new Style({
            fill: new Fill({
                color: feature.get("COLOR_BIO") + 80 || "#eeeeee"
            }),
            stroke: new Stroke({
                color: "#FFFFFFF"
            }),
            text: new Text({
                text: "",
                font: "20px sans-serif"
            })
        });
    }
}

const featureClicked = (event) => {
};
const selectConditions2 = inject("ol-selectconditions");
const selectCondition2 = selectConditions2.click;
const selectInteactionFilter2 = (feature) => {
    return feature.values_.name != undefined && feature.values_.continent == modeStore.options.continent;
};

</script>