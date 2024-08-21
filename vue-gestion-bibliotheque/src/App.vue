<template>
  <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container">
      <a class="navbar-brand fw-bold bib" >
        <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/books">Biblioteque</RouterLink>
      </a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">
              <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/books">Livre</RouterLink>
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link">
            <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="members">Membre</RouterLink>
          </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
            <RouterLink class="list text-decoration-none text-white fw-bold" to="loans">Prêts</RouterLink>
          </a> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
 </header>
</template>

<script setup>
</script>

<style scoped>
.bib{
  font-size: 30px;
}

.header {
  background-color: #062348;
}
</style>
