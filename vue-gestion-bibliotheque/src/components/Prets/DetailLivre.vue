<template>
  <div class="mb-4">
    <h2>Détails du Prêt</h2>
    <p><strong>Livre :</strong> {{ pretDetail.livre }}</p>
    <p><strong>Membre :</strong> {{ pretDetail.membre }}</p>
    <p><strong>Date de Début :</strong> {{ pretDetail.dateDebut }}</p>
    <p><strong>Date de Fin :</strong> {{ pretDetail.dateFin }}</p>
    <button class="btn btn-secondary" @click="fermer">Fermer</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  pretDetail: Object
});

const emit = defineEmits(['fermer']);

const fermer = () => {
  emit('fermer');
};
</script>

<style scoped>
</style>
