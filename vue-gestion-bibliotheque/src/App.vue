<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" >
            <RouterLink to="/books">Livre</RouterLink>
          </a>
          <a class="nav-link" >
            <RouterLink to="members">Membre</RouterLink>
          </a>
          <a class="nav-link" >
            <RouterLink to="loans">Prêts</RouterLink>
          </a> 
        </div>
      </div>
    </div>
  </nav>
    <RouterView />

  </header>

</template>

<style scoped>

</style>
