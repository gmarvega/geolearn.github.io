<template>
    <div>
        <!-- Y aquí está nuestro encabezado principal -->
        <Header/>
        
        <body>
            <main class="selectContinent">

                <h1 class="display-6 fw-bold p-5"> {{mostrarMode}} {{ mostrarCategoria }}</h1> <!-- Bold text -->

                <div class="targetes row">
                    <div class="col-lg-4">
                        <router-link :to="mostrarMode" class="nav-link">
                            <a class="card-link" href="#" @click="handlerClick('Africa')">
                                <div class="card card-cont text-center">
                                
                                    <img src="@/assets/images/Maps/africa-mapa.png" class="card-img-back" alt="África Mapa">
                                    <img src="@/assets/images/WorldInImages/leon.png" class="card-img" alt="África">
                                
                                    <div class="card-body">
                                        <h5 class="card-title font-size">África</h5>
                                    </div>
                                
                                </div>
                            </a>
                        </router-link>
                        
                    </div>
                    <div class="col-lg-4">
                        <router-link :to="mostrarMode" class="nav-link">
                            <a class="card-link" href="#" @click="handlerClick('America')">
                                <div class="card card-cont text-center">

                                    <img src="@/assets/images/Maps/america-mapa.png" class="card-img-back" alt="América Mapa">
                                    <img src="@/assets/images/WorldInImages/cap-america.png" class="card-img" alt="América">
                                    
                                        <div class="card-body">
                                            <h5 class="card-title">América</h5>
                                        </div>
                                </div>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-lg-4">
                        <router-link :to="mostrarMode" class="nav-link">
                            <a class="card-link" href="#" @click="handlerClick('Asia')">
                                <div class="card card-cont text-center">

                                    <img src="@/assets/images/Maps/asia-mapa.png" class="card-img-back" alt="Ásia Mapa">
                                    <img src="@/assets/images/WorldInImages/asia.jpeg" class="card-img" alt="Ásia">

                                        <div class="card-body">                    
                                            <h5 class="card-title">Ásia</h5>
                                        </div>
                                </div>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-lg-4">
                        <router-link :to="mostrarMode" class="nav-link">
                            <a class="card-link" href="#" @click="handlerClick('Europa')">
                                <div class="card card-cont text-center">

                                    <img src="@/assets/images/Maps/europa-mapa.png" class="card-img-back" alt="Europa Mapa">
                                    <img src="@/assets/images/WorldInImages/euro.png" class="card-img" alt="Europa">

                                        <div class="card-body">
                                            <h5 class="card-title">Europa</h5>
                                        </div>
                                </div>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-lg-4">
                        <router-link :to="mostrarMode" class="nav-link">
                            <a class="card-link" href="#" @click="handlerClick('Oceania')">
                                <div class="card card-cont text-center">

                                    <img src="@/assets/images/Maps/oceania_mapa.jpeg" class="card-img-back" alt="Oceania Mapa">
                                    <img src="@/assets/images/WorldInImages/koala.jpeg" class="card-img" alt="Oceania">
                                    
                                        <div class="card-body">
                                            <h5 class="card-title">Oceanía</h5>
                                        </div>
                                </div>
                            </a>
                        </router-link>
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
  name: 'SelectContinent',
  components: {
    Header, 
  },
  data() {
        return {
            option: localStorage.getItem('option') || '',
            mode: localStorage.getItem('mode') || '',
        };
    },
    methods: {
        goToLink() {
            if (this.mode === 'Test') {
                return { name: 'MapTest' };
            }
        },

        handlerClick(continent) {
            const state = useModeState();
            state.setContinent(continent);

            this.option = continent;
            localStorage.setItem('option', continent);
        }
    },
    computed: {
        mostrarMode() {
            return this.mode;
        },

        mostrarCategoria() {
            const state = useModeState();
            return state.options.category;
        }
    }

})
</script>