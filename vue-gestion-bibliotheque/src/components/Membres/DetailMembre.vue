<template>
  <div class="mb-4">
    <h2>Détails du Membre</h2>
    <p><strong>Nom :</strong> {{ membreDetail.nom }}</p>
    <p><strong>Email :</strong> {{ membreDetail.email }}</p>
    <p><strong>Numéro de téléphone :</strong> {{ membreDetail.telephone }}</p>
    <button class="btn btn-secondary" @click="$emit('fermer')">Fermer</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  membreDetail: Object,
});
</script>
