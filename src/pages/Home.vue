<template>
  <div>
    <Header />

    <body>
        <main class="homePage">
            <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0">
                <div id="scrollspyHeading1" class="container"> 
                    <div class="row align-items-center"> 
                        <div class="col-sm text-center"> 
                           <h4 class="bigger-text"> Bienvenido a GeoLearn </h4>
                           <p> Una plataforma para explorar el mundo, aprender, y divertirse </p>
                           <div class="wrap-buttons">
                                <router-link class="nav-link" to="Perfil">
                                    <button type="button" class="btn btn-primary btn-block me-3 btn-custom"> Empezar aventura </button>
                                </router-link>
                           </div>
                        </div> 
                        <div class="col-sm image-card">
                            <img src="@/assets/images/row-image.png" alt="">
                        </div> 
                    </div>
                </div>

                <div id="scrollspyHeading2" class="container"> 

                    <div class="row top-space">
                        <h4 class="text-fundadores"> Funcionalidades </h4>
                        <div class="row">

                            <div class="wrap-funcionalidades">
                                    <p class="post-description">
                                        Aprende de forma única. GeoLearn ofrece un acceso único a las funcionalidades más innovadoras y avanzadas para el aprendizaje geográfico. 
                                    </p>
                            </div>
                        </div>

                        <div class="row">
                            
                            
                            <div class="func-card col-sm-4">
                                <div class="func-card-img">
                                    <img src="@/assets/images/Functionalities/Estudiar.png" alt="Estudiar ordenador">
                                </div>
                                GeoLearn té permite aprender sobre geografía, específicamente países y capitales.
                            </div>
                        

                            <div class="func-card col-sm-4">
                                <div class="func-card-img">
                                    <img src="@/assets/images/Functionalities/Perfil.png" alt="Airbnb 2023: Lanzamiento de verano">
                                </div>
                                GeoLearn te permite realizar un seguimiento de tu progreso educativo en cada nivel.
                            </div>

                            <div class="func-card col-sm-4">
                                <div class="func-card-img">
                                    <img src="@/assets/images/Functionalities/Puntos.png" alt="Airbnb 2023: Lanzamiento de verano">
                                </div>
                                Con el sistema de puntos podrás medir tus conocimientos y desbloquear nuevos niveles.
                            </div>

                        </div>

                        <div class="row">
                            <div class="func-card col-sm-4">
                                <div class="func-card-img">
                                    <img src="@/assets/images/Functionalities/child computer.png" alt="Airbnb 2023: Lanzamiento de verano">
                                </div>
                                ¡Te lo ponemos fácil! Cualquier momento y lugar son buenos para continuar tu aprendizaje.
                            </div>

                            <div class="func-card col-sm-4">
                                <div class="func-card-img">
                                    <img src="@/assets/images/Functionalities/Privacidad.png" alt="Airbnb 2023: Lanzamiento de verano">
                                </div>
                              Privacidad sin preocupaciones en GeoLearn.
                            </div>

                            <div class="func-card col-sm-4">
                                <div class="func-card-img">
                                    <img src="@/assets/images/Functionalities/Brand.png" alt="Airbnb 2023: Lanzamiento de verano">
                                </div>
                                GeoLearn se enfoca en innovar para mejorar la experiencia de aprendizaje del usuario.
                            </div>
                        </div>
                    </div>
                </div>

        <div id="scrollspyHeading3" class="container top-space">
          <div class="row mb-4">
            <h4 class="text-fundadores">Fundadores</h4>
          </div>
          <div id="nav" class="row mb-4">
            <div v-for="founder in founders()" :key="founder.name" class="col-sm">
             <router-link :to=founder.link>
                <div class="personImg">
                  <img :src="founder.image" :alt="founder.name" class="image_person">
                </div>
                <h2 class="personName">{{ founder.name }}</h2>
              </router-link>
              <h3 class="personTitle">{{ founder.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <p>Copyright &copy; FHiC 23-24 - GeoLearn</p>
    </footer>
  </body>
  </div>
</template>

<script>
import '../assets/fonts/homeStyle.css'
import { defineComponent } from 'vue'
import founders from "../assets/data/founders.js";
import Header from './HeaderHome.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header, 
  },
  methods: {
    founders() {
      return founders
    }
  }
})
</script>
