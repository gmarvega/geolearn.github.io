<template>
  <div>
    <header>
      <nav id="navbar" class="navbar navbar-light bg-light px-3 navbar-floating">
        <div class="right-side">
          <div class="d-flex align-items-center">
            <router-link to="/" class="nav-link">
              <img src="@/assets/images/Icons/GeoLearn.png" alt="GeoLearn Logo" style="max-height: 2.188em;" class="me-1">
              <a class="navbar-brand fw-bold" href="/">GeoLearn</a>
            </router-link>
          </div>
          <div class="nav nav-pills">
            <li class="nav-item">
              <router-link class="nav-link" to="selectMode">
                <a class="nav-link" href="#" @click="setMode('Estudio')">Estudio</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="selectMode">
                <a class="nav-link" href="#" @click="setMode('Test')">Test</a>
              </router-link>
            </li>
          </div>
        </div>
        <ul class="nav nav-pills center">
          <li class="nav-item center">
            <router-link to="/Perfil" class="nav-link without-decoration">
              <div class="profile-container">
                <div class="circular-progress">
                  <svg width="50" height="50" viewBox="0 0 50 50">
                    <circle class="bg" cx="25" cy="25" r="20"></circle>
                    <circle class="fg" cx="25" cy="25" r="20" :style="progressStyle"></circle>
                  </svg>
                  <img src="@/assets/images/Icons/profile.png" alt="Profile icon" class="profile-icon">
                </div>
                <div class="profile-info">
                  <span class="user-name">{{ user.name }}</span>
                  <span class="user-mail">Progreso: {{progress}}% </span>
                </div>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="contact" class="nav-link">
              <img src="@/assets/images/Icons/question-mark.png" alt="Question mark icon" class="question-mark-icon">
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import '../assets/fonts/globalStyle.css'
import '../assets/fonts/headerAppStyle.css'
import user from "../assets/data/user.js";
import tasks from "../assets/data/tasks.js";

export default {
  name: 'HeaderApp',
  data() {
    return {
      mode: localStorage.getItem('mode') || '',
      user: user,
      tasks: tasks,
      progress: 0
    };
  },
  computed: {
    progressStyle() {
      const circumference = 2 * Math.PI * 20;
      const dashArray = `${(this.progress / 100) * circumference} ${circumference}`;
      return {
        strokeDasharray: dashArray
      };
    },
    totalProgress() {
      if (this.tasks.length === 0) return 0;
      const total = this.tasks.reduce((acc, task) => acc + parseInt(task.progress), 0);
      return Math.round(total / this.tasks.length);
    }
  },
  methods: {
    setMode(title) {
      this.mode = title;
      localStorage.setItem('mode', title); // Guardar mode en localStorage
      this.$emit('modeUpdated', title);
    }
  },
  created() {
    this.progress = this.totalProgress;
  }
}
</script>

