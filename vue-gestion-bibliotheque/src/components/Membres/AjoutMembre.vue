<template>
  <div class="mb-4">
    <h2>{{ mode === 'ajout' ? 'Ajouter un Membre' : 'Modifier le Membre' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom :</label>
        <input type="text" class="form-control" v-model="membreForm.nom" id="nom" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email :</label>
        <input type="email" class="form-control" v-model="membreForm.email" id="email" required />
      </div>
      <div class="mb-3">
        <label for="telephone" class="form-label">Numéro de téléphone :</label>
        <input type="text" class="form-control" v-model="membreForm.telephone" id="telephone" required />
      </div>
      <button type="submit" class="btn btn-success me-3">{{ mode === 'ajout' ? 'Ajouter' : 'Enregistrer' }}</button>
      <button type="button" class="btn btn-secondary" @click="$emit('annuler')">Annuler</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  mode: String,
  membreForm: Object,
});

const emit = defineEmits(['ajouter', 'modifier', 'annuler']);

const handleSubmit = () => {
  if (props.mode === 'ajout') {
    emit('ajouter');
  } else {
    emit('modifier');
  }
};
</script>
