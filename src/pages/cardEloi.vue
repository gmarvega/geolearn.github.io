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
                                    <img src="@/assets/images/Avatars/Eloi.png"  class="rounded mx-auto d-block" alt="Mar">
                                </div>
                            </div>
                            <div class="col-md-6 information me-3">
                                <header>
                                    <h1 class="name">Eloi Busquets García-González</h1>
                                    <h2 class="role">Confundador y director ejecutivo</h2>
                                </header>
                                <div class="bio">
                                    <p>
                                        Eloi, un joven de 20 años, nació y reside en Barcelona, España. Actualmente, se encuentra inmerso en sus 
                                        estudios de ingeniería informática en la Universidad de Barcelona (UB), donde muestra un gran entusiasmo por 
                                        el aprendizaje y la exploración de nuevas tecnologías. Sus intereses van más allá de las aulas universitarias, 
                                        ya que disfruta participando en proyectos de desarrollo de software en su tiempo libre. 
                                        Además, es un apasionado de la música y dedica parte de su tiempo libre a la producción musical, explorando 
                                        diferentes géneros y sonidos.
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
  name: 'cardEloi',
  components: {
    Header, 
  },
})
</script>



