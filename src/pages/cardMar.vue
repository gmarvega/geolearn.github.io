<template>
  <div>
    <!-- Y aquí está nuestro encabezado principal -->
    <Header />


    <body>
            <div class="wrap" role="document">
                <main class="mainCard">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5 order-md-last">
                                <div class="imageBio">
                                    <img src="@/assets/images/Avatars/Mar.png"  class="rounded mx-auto d-block" alt="Mar">
                                </div>
                            </div>
                            <div class="col-md-6 information me-3">
                                <header>
                                    <h1 class="name">Mar Vega Garcia</h1>
                                    <h2 class="role">Confundador y directora ejecutiva</h2>
                                </header>
                                <div class="bio">
                                    <p>
                                        Soy una estudiante de 20 años de ingeniería informática en la Universidad de Barcelona. Mientras que
                                        estudio en Barcelona me críe en un pequeño pueblo en la montaña donde pude tener la oportunidad de crecer rodeada de 
                                        vegetación y lejos de la contaminación de las grandes ciudades. Acabé estudiando informática de pura casualidad debido 
                                        a que mis previos intereses estaban centrados más en la ciencia que en la tecnología, pero, por cosas de la vida acabé 
                                        en este grado donde he decidido quedarme.
                                    </p>
                                </div>
                            </div> 
                        </div>

                    </div>

                </main>

            </div>
           
        <!-- Y aquí está nuestro pie de página principal que se utiliza en todas las páginas de nuestro sitio web -->
        <footer>
            <p>Copyright &copy; FHiC 23-24 - GeoLearn</p>
        </footer>
    </body>
    </div>
</template>


<script>
import '../assets/fonts/cardStyle.css'
import { defineComponent } from 'vue'
import Header from './HeaderHome.vue';

export default defineComponent({
  name: 'cardMar',
  components: {
    Header, 
  },
})
</script>
