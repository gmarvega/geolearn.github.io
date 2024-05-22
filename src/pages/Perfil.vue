<template>
    <div>

    <!-- Y aquí está nuestro encabezado principal -->
    <Header  @mode-updated="setMode"/>


    <body>
        <main>
            <div class="container-fluid">
                <div class="row">
                    <div class="me-5" style="flex: 1;">
                        <div class="row title">
                            <h3>Mi cuenta</h3>
                        </div>

                        <div class="space-align">
                                <div class="about-wrapper">
                                    <div class="about">
                                        <div class="about-info">
                                                <div class="about-me">
                                                    <h3>Sobre mí</h3>
                                                </div>
                                                <div class="about-image" @click="isEditable = !isEditable">
                                                    <div v-if="!getIsEditable">
                                                        <img src="@/assets/images/Icons/edit.png" alt="Edit Icon">
                                                    </div>
                                                    <div v-else>
                                                        <img src="@/assets/images/Icons/cancel.png" alt="Edit Icon">
                                                    </div>
                                                </div>
                                        </div>
                                        <div class="name-picture">
                                            <div class="text-center">
                                                <h3> {{user.name}}</h3>
                                            </div>
                                            <div class="text-center">
                                                <div class="picture-wrapper">
                                                    <img src="@/assets/images/Icons/profile.png" class="img-fluid" alt="Picture Icon">
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div class="form-wrap">
                                        <form>
                                            <div class="form-components">
                                                <div class="user-info">
                                                    <label>Nombre de usuario</label>
                                                    <input :class="{ 'greyText': !isEditable }"  ref="username" name="username" type="text" :value="user.name" :readonly="!isEditable">
                                                </div>
                                                <div class="mail-info">
                                                    <label>Correo electronico</label>
                                                    <input :class="{ 'greyText': !isEditable }"  ref="mail" name="mail" type="text" :value="user.mail" :readonly="!isEditable">
                                                </div>
                                                <div v-if=getIsEditable class="password-info">
                                                    <label>Contraseña actual</label>
                                                    <input :class="{ 'greyText': !isEditable }"  ref="password" name="password" type="password" :value="user.password" :readonly="!isEditable">
                                                </div>
                                                <div v-if=getIsEditable class="newpassword-info">
                                                    <label>Nueva contraseña</label>
                                                    <input :class="{ 'greyText': !isEditable }"  ref="newpassword" name="newpassword" type="password" :value="user.newpassword" :readonly="!isEditable">
                                                </div>
                                                <div v-if=getIsEditable>
                                                    <button type="button" @click="guardarCambios" class="btn btn-primary btn-block me-3 btn-save"> Guardar </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>
                    </div>

                    <div style="flex: 3;">
                        <div class="row title">
                            <h3>Información de nivel</h3>
                            <div>
                                <div class="filter-option">
                                    <div class="only-estudi" :class="{ 'activateEstudi': showStudyTask }" @click="setShowStudyTask(true)">Estudio</div>
                                    <div class="only-test" :class="{ 'activateTest': !showStudyTask }" @click="setShowStudyTask(false)">Test</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div v-for="task in filteredTasks" class="col-md card-content">
                                <a href="#/selectMode" @click="navigateToMode(task)">
                                    <div class="card-content-resume">
                                        <div class="color-card">
                                            <div class="color-card-content"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm">
                                                <div class="info-card">
                                                    <h1 class="info-card-name">{{ task.name }}</h1>
                                                    <h2 class="info-card-description">{{ task.description }}</h2>
                                                    <div class="info-card-time">
                                                        <div class="info-card-time-inici">
                                                            <h2 class="info-card-time-title">Fecha de inicio</h2>
                                                            <h1 class="info-card-time-description">{{ task.startDate }}</h1>
                                                        </div>
                                                        <div class="info-card-time-spent">
                                                            <h2 class="info-card-time-title">Tiemplo empleado</h2>
                                                            <h1 class="info-card-time-description">{{ task.timeSpent }}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                    <div class="score-card">
                                                        <div class="average-score">
                                                            <h1 class="info-card-time-title">Puntuación media</h1>
                                                            <div class="percentage">
                                                                <span v-bind:class="getColor(task.averageScore)">{{ task.averageScore }}%</span>
                                                            </div>
                                                        </div>
                                                        <div class="progress-score">
                                                            <h1 class="info-card-time-title">Progreso</h1>
                                                            <div class="percentage">
                                                                <span v-bind:class="getColor(task.progress)">{{ task.progress }}%</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>


                        </div>

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
import '../assets/fonts/perfilStyle.css'
import { defineComponent } from 'vue'
import Header from './HeaderApp.vue';
import tasks from "../assets/data/tasks.js";
import user from "../assets/data/user.js";

export default defineComponent({
  name: 'UserProfile',
  components: {
    Header,
  },
  data() {
    return {
      tasks: tasks,
      user: user,
      showStudyTask: JSON.parse(localStorage.getItem('showStudyTask')) ?? true,
      isEditable: false,
      mode: localStorage.getItem('mode') || '',
    };
  },
  methods: {
    setShowStudyTask(study) {
      this.showStudyTask = study;
      localStorage.setItem('showStudyTask', JSON.stringify(study)); // Guardar showStudyTask en localStorage
    },
    getColor(num) {
      if (num >= 80) {
        return 'green';
      } else if (num >= 50) {
        return 'yellow';
      } else {
        return 'red';
      }
    },
    guardarCambios() {
        let changed = false;
        let different_password = false;

        // Obtén los valores de las contraseñas y elimina los espacios en blanco
        let password = this.$refs.password.value.trim();
        let newpassword = this.$refs.newpassword.value.trim();

        // Actualiza los datos del usuario con los valores de los inputs
        if (this.user.name != this.$refs.username.value) {
            changed = true;
        }
        if (this.user.mail != this.$refs.mail.value) {
            changed = true;
        }

        if (password != "") {
            changed = true;
        }

        // Comprueba si las contraseñas son diferentes
        if (password != newpassword) {
            different_password = true;
        }

        // Si se han realizado cambios y las contraseñas son iguales, guarda los cambios
        if (changed && !different_password) {
            this.user.name = this.$refs.username.value;
            this.user.mail = this.$refs.mail.value;
            this.isEditable = false;
            alert('Los cambios se han guardado correctamente.');
        } else {
            if (different_password) {
                // Si las contraseñas son diferentes, muestra un mensaje de alerta
                alert('Las contraseñas no coinciden.');
            } else {
                // Si no se han realizado cambios, muestra un mensaje indicando que no se ha modificado ningún dato
                alert('No se han modificado datos.');
            }
        }
    },
    setMode(title) {
      this.mode = title;
      localStorage.setItem('mode', title); // Guardar mode en localStorage
    },
    navigateToMode(task) {
      const mode = task.type.toLowerCase() === 'estudio' ? 'Estudio' : 'Test';
      this.setMode(mode);
      this.$router.push({ path: '/selectMode' });
    }
  },
  computed: {
    filteredTasks() {
      if(this.showStudyTask){
        return this.tasks.filter(item =>
          item.type.toLowerCase().indexOf("estudio") > -1,
        );
      }else{
        return this.tasks.filter(item =>
          item.type.toLowerCase().indexOf("test") > -1,
        );
      }
    },
    getIsEditable() {
        return this.isEditable;
    }
  }
})
</script>