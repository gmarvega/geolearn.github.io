<template>
    <div>
        <!-- Y aquí está nuestro encabezado principal -->
        <Header @mode-updated="setMode" />

        <body>
            <main class="selectMode">

                <h1 class="display-6 fw-bold p-5 border"> {{ mostrarMode }}</h1> <!-- Bold text -->

                <div class="targetes row">
                    <div class="col-lg-4">
                        <div class="card">
                            <router-link  class="card-link" to="selectContinent" @click="setCategory('Capitales')">
                                <router-link class="nav-link" to="selectContinent">
                                    <img src="@/assets/images/Cards/capitals.png" class="card-img-top" alt="Capitales">
                                </router-link>
                                <div class="card-body border">
                                    <p class="card-text" style="font-size: 24px; font-weight: bold;">Capitales</p>
                                </div>
                            </router-link >
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <router-link  class="card-link" to="selectContinent" @click="setCategory('Paises')">
                                <router-link class="nav-link" to="selectContinent">
                                    <img src="@/assets/images/Cards/paisos.png" class="card-img-top" alt="Paises">
                                </router-link>
                                <div class="card-body border">
                                    <p class="card-text" style="font-size: 24px; font-weight: bold;">Paises</p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <router-link  class="card-link" to="selectContinent" @click="setCategory('Continentes y Oceános')">
                                <img src="@/assets/images/Cards/oceans.png" class="card-img-top" alt="Continentes y Oceános">
                                <div class="card-body border">
                                    <p class="card-text" style="font-size: 24px; font-weight: bold;">Continentes y Oceános</p>
                                </div>
                            </router-link >
                        </div>
                    </div>
                </div>
                
            </main>
            <!-- Y aquí está nuestro pie de página principal que se utiliza en todas las páginas de nuestro sitio web -->
            <footer>
                <p>Copyright &copy; FHiC 23-24 - GeoLearn</p>
            </footer>
        </body>
    </div>
</template>


<script>
import '../assets/fonts/selectStyle.css'
import { defineComponent } from 'vue'
import Header from './HeaderApp.vue';
import { useModeState } from '@/stores/modeState';

export default defineComponent({
  name: 'SelectMode',
  components: {
    Header, 
  },
  data() {
        return {
            mode: localStorage.getItem('mode') || '',
        };
    },
    methods: {
        setMode(title) {
            this.mode = title;
            localStorage.setItem('mode', title); // Guardar mode en localStorage
        },

        setCategory(category) {
            const state = useModeState();
            state.setCategory(category);
        }
    },
    computed: {
        mostrarMode() {
            return this.mode;
        }
    }

})
</script>