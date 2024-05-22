<template>
  <header class="navbar-floating">
    <nav id="navbar" class="navbar navbar-light bg-light px-3 navbar-floating">
      <div class="d-flex align-items-center">
        <a href="#">
          <img src="@/assets/images/Icons/GeoLearn.png" alt="GeoLearn Logo" style="max-height: 40px;" class="me-3">
          <a class="navbar-brand fw-bold" href="#">GeoLearn</a>
        </a>
      </div>
      <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home', hash: '#scrollspyHeading2' }">Funciones</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home', hash: '#scrollspyHeading3' }">Sobre nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link to="contact" class="nav-link">Contacta</router-link>
          </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import '../assets/fonts/globalStyle.css'
import '../assets/fonts/headerHomeStyle.css'

export default {
  name: 'Header',
}
</script>
