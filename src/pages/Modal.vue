<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content">
      <div class="modal-body">
        <div v-if="getPercentage(getErrors()) < 50">
          <div class="row">
            <p class="bigger-text text-center">NO SUPERADO</p>
          </div>
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6">
              <img src="@/assets/images/Icons/cross.png" alt="Cross Icon" class="img-fluid" />
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row">
            <p class="bigger-text text-center">SUPERADO</p>
          </div>
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6">
              <img src="@/assets/images/Icons/tick.png" alt="Tick Icon" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex flex-column align-items-center">
            <p class="label">Errores</p>
            <p>{{ getErrors() }}</p>
          </div>
          <div class="col-md-6 d-flex flex-column align-items-center">
            <p class="label">Puntuación</p>
            <span v-bind:class="getColor(getPercentage(getErrors()))">{{ getPercentage(getErrors()) }}%</span>
          </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-save" @click="handleClose">Finalizar Test</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTestState } from '@/stores/testState';
export default {
  props: {
    isOpen: Boolean,
  },
  methods: {
    handleClose() {
      window.location.href = '#/selectMode';
    },
    getErrors() {
      const store = useTestState();
      return store.getErrors();
    },
    getPercentage(errors) {
      const punctuation = 100-errors
      return punctuation < 0? 0: punctuation;
    },
    getColor(percentage) {
      if (percentage >= 80) {
        return 'green';
      } else if (percentage >= 50) {
        return 'yellow';
      } else {
        return 'red';
      }
    },
  },
};
</script>

<style scoped>
.img-container {
  display: flex;
  padding-top: 10px;
  max-height: 50px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-body {
  color: black; /* Or any desired text color */
}

.modal-content {
  background-color: white;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.btn-save {
  background: linear-gradient(90deg, #56c6e2 1.83%, #34c1e4 50.07%, #019fc6 96.34%);
  border-color: #56c6e2;
  width: 100%;
}
.bigger-text {
  font-size: 2rem;
}
.label {
  padding-top: 10px;
  font-size: 0.75em;
  color: rgb(102, 102, 102);
}

.green {
  display: inline-flex;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  padding: 2px;
  font-size: 0.938em;
  min-width: 38px;
  justify-content: center;
  background-color: rgb(73, 128, 8);
}
.yellow {
  display: inline-flex;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  padding: 2px;
  font-size: 0.938rem;
  min-width: 38px;
  justify-content: center;
  background-color: rgb(128, 120, 8);
}
.red {
  display: inline-flex;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  padding: 2px;
  font-size: 0.938em;
  min-width: 38px;
  justify-content: center;
  background-color: rgb(154, 38, 68);
}
</style>