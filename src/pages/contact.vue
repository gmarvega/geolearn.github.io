<template>
    <div>

    <!-- Y aquí está nuestro encabezado principal -->
    <Header/>


    <body>
       
         <!-- Aquí está el contenido principal de nuestra página -->
        <main class = "contacto">
            <h1>¡Danos tu opinión!</h1>
            <h2>Nos encantaría saber qué opinas sobre nuestra web.</h2>
            <div class="contact-page-container">
            <div class="form-wrapper">
                <label class="input" for="nombre">Nombre:</label><br>
                <input type="text" id="nombre" ></input><br>
                <label class="input" for="apellidos">Apellidos:</label><br>
                <input type="text" id="apellidos" ></input><br>
                <label class="input" for="email">Email:</label><br>
                <input type="email" id="email"></input><br>
                <label class="input" for="mensaje">Mensaje:</label><br>
                <textarea id="mensaje" rows="6" cols="40"></textarea><br><br>
                <label class="input">Nivel de satisfacción:</label><br>
                <div class="rating">
                <input type="radio" id="5" name="rating">
                <label for="5"></label>
                <input type="radio" id="4" name="rating">
                <label for="4"></label>
                <input type="radio" id="3" name="rating">
                <label for="3"></label>
                <input type="radio" id="2" name="rating">
                <label for="2"></label>
                <input type="radio" id="1" name="rating">
                <label for="1"></label>
                </div>

                <div class="button-container">
                <button>Enviar Formulario</button>
                </div>

            </div>
            <div class="contacto-column">
                <p>A continuación, se listan los principios de diseño usados para el formulario de contacto:</p>
                <ul>
                <li>Preguntar únicamente lo necesario.</li>
                <li>Hacer las preguntas en un orden lógico.</li>
                <li>Incluir como máximo 1 campo para rellenar por línea.</li>
                <li>No establecer valores por defecto en los campos.</li>
                <li>Utilizar títulos cortos y descriptivos, evitando el uso excesivo de mayúsculas.</li>
                <li>Emplear el estilo de capitalización de título (Title Case) solo cuando sea necesario.</li>
                <li>Colocar los títulos encima de sus campos correspondientes (top aligned).</li>
                <li>Utilizar un nombre específico ("Enviar Formulario") en lugar de uno genérico en el botón de enviar.</li>
                </ul>
            </div>
            </div>
        </main>

    </body>
    </div>
</template>
    
    
    
<script>
import '../assets/fonts/contactStyle.css'
import { defineComponent } from 'vue'
import Header from './HeaderHome.vue';

export default defineComponent({
  name: 'contact',
  components: {
    Header, 
  },
})
</script>


