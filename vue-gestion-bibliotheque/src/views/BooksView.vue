<template>
  <div class="container mt-5 ">
    <h1 class="mb-5">Gestion des Livres</h1>
    <!-- <RouterLink class="text-decoration-none text-white bg-success py-2 px-3 fw-bold rounded" to="/listlivre">Ajouter des livres</RouterLink> -->
     <ListeLivre/>
  </div>
</template>

<script setup>
import ListeLivre from '@/components/Livres/ListeLivre.vue';
</script>
<style scoped>

</style>