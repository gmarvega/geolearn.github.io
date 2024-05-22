import { createApp } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import 'vue3-openlayers/dist/vue3-openlayers.css';

import OpenLayersMap from 'vue3-openlayers';
import router from './router/index.ts'
import { createPinia } from 'pinia'
import App from './App.vue';


const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(OpenLayersMap);
app.use(router);
app.mount('#app');
