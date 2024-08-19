<template>
  <div>
    <h2>Modifier le Livre</h2>
    <form @submit.prevent="updateBook">
      <label for="title">Titre :</label>
      <input v-model="title" id="title" required />
      
      <label for="author">Auteur :</label>
      <input v-model="author" id="author" required />
      
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { books } from './ListeVue.vue'; // Importez la liste des livres

const router = useRouter();
const route = useRoute();

const index = route.params.index;
const title = ref(books.value[index].title);
const author = ref(books.value[index].author);

function updateBook() {
  books.value[index] = { title: title.value, author: author.value };
  router.push('/books'); // Redirection vers la liste des livres
}
</script>
