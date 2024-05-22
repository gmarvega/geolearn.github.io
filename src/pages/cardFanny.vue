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
                                    <img src="@/assets/images/Avatars/Fanny.png"  class="rounded mx-auto d-block" alt="Fanny">
                                </div>
                            </div>
                            <div class="col-md-6 information me-3">
                                <header>
                                    <h1 class="name">Fanny Maria Aranda</h1>
                                    <h2 class="role">Confundador y directora ejecutiva</h2>
                                </header>
                                <div class="bio">
                                    <p>
                                        He nacido y resido en Barcelona, tengo 20 años y actualmente estoy estudiando ingeniería informática en
                                        la UB. Mis intereses en los estudios que estoy cursando se centran en el diseño e implementación de
                                        algoritmos, especialmente en el desarrollo de backend. En el ámbito personal soy una persona muy activa y
                                        una de mis actividades favoritas es pasar tiempo con mis amigos. En mi tiempo libre me gusta practicar
                                        deportes artísticos como el baile o el patinaje artístico sobre hielo.
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
  name: 'cardFanny',
  components: {
    Header, 
  },
})
</script>
