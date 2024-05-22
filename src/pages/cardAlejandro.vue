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
                                    <img src="@/assets/images/Avatars/Alejandro.png"  class="rounded mx-auto d-block" alt="Mar">
                                </div>
                            </div>
                            <div class="col-md-6 information me-3">
                                <header>
                                    <h1 class="name">Alejandro Cantero Lopex</h1>
                                    <h2 class="role">Confundador y director ejecutivo</h2>
                                </header>
                                <div class="bio">
                                    <p>
                                        Actualmente estudiante de ingeniería informática en la Universidad de Barcelona. Desde pequeño
                                        interesado por casi cualquier rama de la ciencia e ingeniería.<br>Trato de descubrir y desarrollar
                                        nuevas tecnologías que puedan ser útiles en el mundo de la computación, generalmente ligados con el campo de
                                        la ciberseguridad en diferentes facetas, destacando en sistemas operativos o hacking ético entre otras. Siguiendo también la evolución de
                                        las inteligencias artificiales y sus ventajas y desventajas en el mundo de la ciberseguridad y la ciencia.
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
  name: 'cardAlejandro',
  components: {
    Header, 
  },
})
</script>



