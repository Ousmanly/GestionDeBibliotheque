<script setup>
</script>

<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#"><router-link to="/books">Livres</router-link></a>
              <a class="nav-link" href="#"><router-link to="/members">Membres</router-link></a>
              <a class="nav-link" href="#"><router-link to="/loans">Prêts</router-link></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<style scoped>

</style>
