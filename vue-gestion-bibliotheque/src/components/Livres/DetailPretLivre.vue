<template>
    <div>
      <h2>Détails du Livre</h2>
      <p><strong>Titre :</strong> {{ livreDetail.titre }}</p>
      <p><strong>Auteur :</strong> {{ livreDetail.auteur }}</p>
      <button class="btn btn-secondary" @click="$emit('fermer')">Fermer</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    livreDetail: Object
  });
  
  const emit = defineEmits(['fermer']);
  </script>
  
  <style scoped>
  </style>
  