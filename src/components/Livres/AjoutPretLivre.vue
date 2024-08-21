<template>
  <div>
    <form @submit.prevent="handleSubmit" class="form mb-6">
      <div class="mb-3">
        <label for="titre" class="form-label">Titre :</label>
        <input
          type="text"
          class="form-control"
          v-model="livreForm.titre"
          id="titre"
          required
        />
      </div>
      <div class="mb-3">
        <label for="auteur" class="form-label">Auteur :</label>
        <input
          type="text"
          class="form-control"
          v-model="livreForm.auteur"
          id="auteur"
          required
        />
      </div>
      <button type="submit" class="btn btn-success me-3">
        {{ mode === "ajout" ? "Ajouter" : "Enregistrer" }}
      </button>
      <button type="button" class="btn btn-secondary" @click="$emit('annuler')">
        Annuler
      </button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  mode: String,
  livreForm: Object,
});

const emit = defineEmits(["annuler", "ajouter", "modifier"]);

const handleSubmit = () => {
  if (props.mode === "ajout") {
    emit("ajouter");
  } else {
    emit("modifier");
  }
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
.form-control:active {
  border-color:none;
  outline: none;
}
</style>
