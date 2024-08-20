<template>
  <div class="mb-4">
    <h2>{{ mode === 'ajout' ? 'Ajouter un Prêt' : 'Modifier le Prêt' }}</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="livre" class="form-label">Livre :</label>
        <select class="form-select" v-model="pretForm.livre" id="livre" required>
          <option v-for="livre in livres" :key="livre" :value="livre">{{ livre }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="membre" class="form-label">Membre :</label>
        <select class="form-select" v-model="pretForm.membre" id="membre" required>
          <option v-for="membre in membres" :key="membre" :value="membre">{{ membre }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="dateDebut" class="form-label">Date de Début :</label>
        <input type="date" class="form-control" v-model="pretForm.dateDebut" id="dateDebut" required />
      </div>
      <div class="mb-3">
        <label for="dateFin" class="form-label">Date de Fin :</label>
        <input type="date" class="form-control" v-model="pretForm.dateFin" id="dateFin" required />
      </div>
      <button type="submit" class="btn btn-success me-3">{{ mode === 'ajout' ? 'Ajouter' : 'Enregistrer' }}</button>
      <button type="button" class="btn btn-secondary" @click="annuler">Annuler</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  livres: Array,
  membres: Array,
  mode: String,
  pretForm: Object
});

const emit = defineEmits(['annuler', 'ajouter', 'modifier']);

const submitForm = () => {
  if (props.mode === 'ajout') {
    emit('ajouter');
  } else {
    emit('modifier');
  }
};

const annuler = () => {
  emit('annuler');
};
</script>

<style scoped>
  form {
  width: 60%;
  border-radius: 20px;
  padding: 20px;
}

.form-control {
  border: 1px solid #6f7f8f;
  border-radius: 10px;
}

.form-select {
  border: 1px solid #6f7f8f;
  border-radius: 10px;
}
</style>
