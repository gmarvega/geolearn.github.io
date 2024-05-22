import { useModeState } from '@/stores/modeState';

import {ref} from "vue";

const EUROPE_CENTER = [10, 50];
const EUROPE_ZOOM = 4;
const OCEANIA_CENTER = [150, -30];
const OCEANIA_ZOOM = 4;
const ASIA_CENTER = [50, 35];
const ASIA_ZOOM = 3;
const AMERICA_CENTER = [-60, -15];
const AMERICA_ZOOM = 2;
const AFRICA_CENTER = [15, 0];
const AFRICA_ZOOM = 2.5;
const projection = ref("EPSG:4326");
const url = ref("/countries.json");
export const getMapConfig = () => {
    const store = useModeState()
    let zoom = ref(1);
    let center = ref([0, 0]);
    console.log(store.options.continent)
    switch (store.options.continent){
        case 'Europa':
            zoom = ref(EUROPE_ZOOM);
            center = ref(EUROPE_CENTER);
            break;

        case 'Asia':
            zoom = ref(ASIA_ZOOM);
            center = ref(ASIA_CENTER);
            break;

        case 'America':
            zoom = ref(AMERICA_ZOOM);
            center = ref(AMERICA_CENTER);
            break;

        case 'Africa':
            zoom = ref(AFRICA_ZOOM);
            center = ref(AFRICA_CENTER);
            break;

        case 'Oceania':
            zoom = ref(OCEANIA_ZOOM);
            center = ref(OCEANIA_CENTER);
            break;

    }
    console.log(center, zoom)

    return{center, projection, zoom, url}

}