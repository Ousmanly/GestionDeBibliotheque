<template>
    <div>
      <h2>Liste des Livres</h2>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>
              <button @click="editBook(index)">Modifier</button>
              <button @click="deleteBook(index)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/books/add">Ajouter un Livre</router-link>
      <!-- <AjoutVue/> -->
    </div>

  </template>
  
  <script setup>
//   import AjoutVue from '@/components/AjoutVue.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const books = ref([
    { title: 'Livre 1', author: 'Auteur 1' },
    { title: 'Livre 2', author: 'Auteur 2' },
  ]);
  
  const router = useRouter();
  
  function deleteBook(index) {
    books.value.splice(index, 1);
  }
  
  function editBook(index) {
    router.push({ name: 'edit-book', params: { index } });
  }
  </script>
  