<template>
  <div>
    <h2>Ajouter un Livre</h2>
    <form @submit.prevent="addBook">
      <label for="title">Titre :</label>
      <input v-model="title" id="title" required />
      
      <label for="author">Auteur :</label>
      <input v-model="author" id="author" required />
      
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { books } from './ListeVue.vue'; // Importez la liste des livres

const title = ref('');
const author = ref('');

const router = useRouter();

function addBook() {
  books.value.push({ title: title.value, author: author.value });
  router.push('/books'); // Redirection vers la liste des livres
}
</script>
