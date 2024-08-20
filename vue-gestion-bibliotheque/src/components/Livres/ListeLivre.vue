<!-- <template>
  <div class="container mt-5">
    <h1 class="mb-4">Liste des Livres</h1>

    <button class="btn btn-primary mb-3" @click="afficherFormulaire('ajout')">Ajouter un Livre</button>

    <div v-if="afficherFormulaireState" class="mb-4">
      <h2>{{ mode === 'ajout' ? 'Ajouter un Livre' : 'Modifier le Livre' }}</h2>
      <form @submit.prevent="mode === 'ajout' ? ajouterLivre() : enregistrerModification()">
        <div class="mb-3">
          <label for="titre" class="form-label">Titre :</label>
          <input type="text" class="form-control" v-model="livreForm.titre" id="titre" required />
        </div>
        <div class="mb-3">
          <label for="auteur" class="form-label">Auteur :</label>
          <input type="text" class="form-control" v-model="livreForm.auteur" id="auteur" required />
        </div>
        <button type="submit" class="btn btn-success me-3">{{ mode === 'ajout' ? 'Ajouter' : 'Enregistrer' }}</button>
        <button type="button" class="btn btn-secondary" @click="annulerAjout">Annuler</button>
      </form>
    </div>

    <div v-if="afficherDetail" class="mb-4">
      <h2>Détails du Livre</h2>
      <p><strong>Titre :</strong> {{ livreDetail.titre }}</p>
      <p><strong>Auteur :</strong> {{ livreDetail.auteur }}</p>
      <button class="btn btn-secondary" @click="fermerDetail">Fermer</button>
    </div>

    <table v-if="!afficherFormulaireState && !afficherDetail" class="table table-striped">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(livre, index) in livres" :key="index">
          <td>{{ livre.titre }}</td>
          <td>{{ livre.auteur }}</td>
          <td>
            <button class="btn  btn-sm" @click="afficherFormulaire('modifier', index)">
              <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px;"></i>
            </button>
            <button class="btn btn-sm" @click="supprimerLivre(index)">
              <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 25px;"></i>
            </button>
            <button class="btn  btn-sm" @click="voirDetail(index)">
              <i class="fa-solid fa-eye" style="color: #4596d3; font-size: 25px;"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const livres = ref([
  { titre: 'Livre A', auteur: 'Auteur A' },
  { titre: 'Livre B', auteur: 'Auteur B' },
]);

const afficherFormulaireState = ref(false);
const afficherDetail = ref(false);
const mode = ref('ajout');
const livreForm = ref({ titre: '', auteur: '' });
const livreDetail = ref({ titre: '', auteur: '' });
let indexLivreAModifier = null;

const afficherFormulaire = (modeOperation, index = null) => {
  mode.value = modeOperation;
  afficherFormulaireState.value = true;
  afficherDetail.value = false;
  if (modeOperation === 'modifier' && index !== null) {
    indexLivreAModifier = index;
    livreForm.value = { ...livres.value[index] };
  } else {
    livreForm.value = { titre: '', auteur: '' };
  }
};

const ajouterLivre = () => {
  livres.value.push({ ...livreForm.value });
  annulerAjout();
};

const enregistrerModification = () => {
  if (indexLivreAModifier !== null) {
    livres.value[indexLivreAModifier] = { ...livreForm.value };
    annulerAjout();
  }
};

const voirDetail = (index) => {
  livreDetail.value = { ...livres.value[index] };
  afficherDetail.value = true;
  afficherFormulaireState.value = false;
};

const fermerDetail = () => {
  afficherDetail.value = false;
};

const annulerAjout = () => {
  livreForm.value = { titre: '', auteur: '' };
  afficherFormulaireState.value = false;
};

const supprimerLivre = (index) => {
  livres.value.splice(index, 1);
};
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés si nécessaire */
</style> -->
<template>
  <div class="container mt-5">
    <h1 class="mb-4">Liste des Livres</h1>

    <button class="btn btn-primary mb-3" @click="afficherFormulaire('ajout')">Ajouter un Livre</button>

    <!-- Formulaire d'ajout/modification de livre -->
    <AjoutPretLivre
      v-if="afficherFormulaireState"
      :mode="mode"
      :livreForm="livreForm"
      @annuler="annulerAjout"
      @ajouter="ajouterLivre"
      @modifier="enregistrerModification"
    />

    <!-- Détails du livre -->
    <DetailPretLivre
      v-if="afficherDetail"
      :livreDetail="livreDetail"
      @fermer="fermerDetail"
    />

    <!-- Liste des livres -->
    <table v-if="!afficherFormulaireState && !afficherDetail" class="table table-striped">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(livre, index) in livres" :key="index">
          <td>{{ livre.titre }}</td>
          <td>{{ livre.auteur }}</td>
          <td>
            <button class="btn btn-sm" @click="afficherFormulaire('modifier', index)">
              <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px;"></i>
            </button>
            <button class="btn btn-sm" @click="supprimerLivre(index)">
              <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 25px;"></i>
            </button>
            <button class="btn btn-sm" @click="voirDetail(index)">
              <i class="fa-solid fa-eye" style="color: #4596d3; font-size: 25px;"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AjoutPretLivre from '../Livres/AjoutPretLivre.vue';
import DetailPretLivre from '../Livres/DetailPretLivre.vue';

const livres = ref([
  { titre: 'Livre A', auteur: 'Auteur A' },
  { titre: 'Livre B', auteur: 'Auteur B' },
]);

const afficherFormulaireState = ref(false);
const afficherDetail = ref(false);
const mode = ref('ajout');
const livreForm = ref({ titre: '', auteur: '' });
const livreDetail = ref({ titre: '', auteur: '' });
let indexLivreAModifier = null;

const afficherFormulaire = (modeOperation, index = null) => {
  mode.value = modeOperation;
  afficherFormulaireState.value = true;
  afficherDetail.value = false;
  if (modeOperation === 'modifier' && index !== null) {
    indexLivreAModifier = index;
    livreForm.value = { ...livres.value[index] };
  } else {
    livreForm.value = { titre: '', auteur: '' };
  }
};

const ajouterLivre = () => {
  livres.value.push({ ...livreForm.value });
  annulerAjout();
};

const enregistrerModification = () => {
  if (indexLivreAModifier !== null) {
    livres.value[indexLivreAModifier] = { ...livreForm.value };
    annulerAjout();
  }
};

const voirDetail = (index) => {
  livreDetail.value = { ...livres.value[index] };
  afficherDetail.value = true;
  afficherFormulaireState.value = false;
};

const fermerDetail = () => {
  afficherDetail.value = false;
};

const annulerAjout = () => {
  livreForm.value = { titre: '', auteur: '' };
  afficherFormulaireState.value = false;
};

const supprimerLivre = (index) => {
  livres.value.splice(index, 1);
};
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés si nécessaire */
</style>
