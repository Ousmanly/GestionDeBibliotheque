<template>
  <div>
    <h2>Ajouter un Prêt</h2>
    <form @submit.prevent="ajouter">
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
      <button type="submit" class="btn btn-success me-5 mb-5">Ajouter</button>
      <button type="button" class="btn btn-secondary mb-5" @click="$emit('annuler')">Annuler</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  livres: Array,
  membres: Array
});
const emit = defineEmits(['annuler', 'ajouter']);

const pretForm = ref({ livre: '', membre: '', dateDebut: '', dateFin: '' });

const ajouter = () => {
  emit('ajouter', { ...pretForm.value });
};
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés si nécessaire */
</style>
