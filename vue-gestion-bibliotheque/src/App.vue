<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- <template>
  <header>
   <div>
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
   </div>

  </header>

</template>

<style scoped>

</style> -->

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          <i class="bi bi-book-half"></i> Bibliothèque
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <RouterLink
              class="nav-link mx-2"
              :class="{ active: $route.path === '/books' }"
              to="/books"
            >
              <i class="bi bi-book"></i> Livres
            </RouterLink>
            <RouterLink
              class="nav-link mx-2"
              :class="{ active: $route.path === '/members' }"
              to="/members"
            >
              <i class="bi bi-people"></i> Membres
            </RouterLink>
            <RouterLink
              class="nav-link mx-2"
              :class="{ active: $route.path === '/loans' }"
              to="/loans"
            >
              <i class="bi bi-journal"></i> Prêts
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.navbar {
  background-color: #343a40; 
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.nav-link.active {
  color: #ffffff;
  background-color: #495057;
  border-radius: 5px;
}

.nav-link:hover {
  color: #ffffff;
  background-color: #6c757d;
  border-radius: 5px;
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-toggler-icon {
  filter: invert(1); 
}
</style>

