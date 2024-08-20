<!-- <template>
  <div class="container mt-5">
    <h1 class="mb-4">Liste des Prêts de Livres</h1>

    <button class="btn btn-primary mb-3" @click="afficherFormulaire('ajout')">Ajouter un Prêt</button>

    <div v-if="afficherFormulaireState" class="mb-4">
      <h2>{{ mode === 'ajout' ? 'Ajouter un Prêt' : 'Modifier le Prêt' }}</h2>
      <form @submit.prevent="mode === 'ajout' ? ajouterPret() : enregistrerModification()">
        <div class="mb-3">
          <label for="livre" class="form-label">Livre :</label>
          <select class="form-select" v-model="pretForm.livre" id="livre" required>
            <option v-for="livre in livres" :key="livre" :value="livre">{{ livre }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="membre" class="form-label">Membre :</label>
          <select class="form-select" v-model="pretForm.membre" id="membre" required>
            <option v-for="membre in membres" :key="membre" :value="membre">{{ membre }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="dateDebut" class="form-label">Date de Début :</label>
          <input type="date" class="form-control" v-model="pretForm.dateDebut" id="dateDebut" required />
        </div>
        <div class="mb-3">
          <label for="dateFin" class="form-label">Date de Fin :</label>
          <input type="date" class="form-control" v-model="pretForm.dateFin" id="dateFin" required />
        </div>
        <button type="submit" class="btn btn-success">{{ mode === 'ajout' ? 'Ajouter' : 'Enregistrer' }}</button>
        <button type="button" class="btn btn-secondary" @click="annulerAjout">Annuler</button>
      </form>
    </div>

    <div v-if="afficherDetail" class="mb-4">
      <h2>Détails du Prêt</h2>
      <p><strong>Livre :</strong> {{ pretDetail.livre }}</p>
      <p><strong>Membre :</strong> {{ pretDetail.membre }}</p>
      <p><strong>Date de Début :</strong> {{ pretDetail.dateDebut }}</p>
      <p><strong>Date de Fin :</strong> {{ pretDetail.dateFin }}</p>
      <button class="btn btn-secondary" @click="fermerDetail">Fermer</button>
    </div>

    <table v-if="!afficherFormulaireState && !afficherDetail" class="table table-striped">
      <thead>
        <tr>
          <th>Livre</th>
          <th>Membre</th>
          <th>Date de Début</th>
          <th>Date de Fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pret, index) in prets" :key="index">
          <td>{{ pret.livre }}</td>
          <td>{{ pret.membre }}</td>
          <td>{{ pret.dateDebut }}</td>
          <td>{{ pret.dateFin }}</td>
          <td>
            <button class="btn  btn-sm" @click="afficherFormulaire('modifier', index)">
              <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px;"></i>            </button>
            <button class="btn  btn-sm" @click="supprimerPret(index)">
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

const membres = ref([
  'Membre A',
  'Membre B',
  'Membre C'
]);
const livres = ref([
  'Livre A',
  'Livre B',
  'Livre C'
]);

const prets = ref([
  { livre: 'Livre A', membre: 'Membre A', dateDebut: '2024-01-01', dateFin: '2024-02-01' },
  { livre: 'Livre B', membre: 'Membre B', dateDebut: '2024-01-15', dateFin: '2024-02-15' },
]);

const afficherFormulaireState = ref(false);
const afficherDetail = ref(false);
const mode = ref('ajout');
const pretForm = ref({ livre: '', membre: '', dateDebut: '', dateFin: '' });
const pretDetail = ref({ livre: '', membre: '', dateDebut: '', dateFin: '' });
let indexPretAModifier = null;

const afficherFormulaire = (modeOperation, index = null) => {
  mode.value = modeOperation;
  afficherFormulaireState.value = true;
  afficherDetail.value = false;
  if (modeOperation === 'modifier' && index !== null) {
    indexPretAModifier = index;
    pretForm.value = { ...prets.value[index] };
  } else {
    pretForm.value = { livre: '', membre: '', dateDebut: '', dateFin: '' };
  }
};

const ajouterPret = () => {
  prets.value.push({ ...pretForm.value });
  annulerAjout();
};

const enregistrerModification = () => {
  if (indexPretAModifier !== null) {
    prets.value[indexPretAModifier] = { ...pretForm.value };
    annulerAjout();
  }
};

const voirDetail = (index) => {
  pretDetail.value = { ...prets.value[index] };
  afficherDetail.value = true;
  afficherFormulaireState.value = false;
};

const fermerDetail = () => {
  afficherDetail.value = false;
};

const annulerAjout = () => {
  pretForm.value = { livre: '', membre: '', dateDebut: '', dateFin: '' };
  afficherFormulaireState.value = false;
};

const supprimerPret = (index) => {
  prets.value.splice(index, 1);
};
</script>

<style scoped>
</style> -->
<template>
  <div class="container mt-5">
    <h1 class="mb-4">Liste des Prêts de Livres</h1>

    <button class="btn btn-primary mb-3" @click="afficherFormulaire('ajout')">Ajouter un Prêt</button>

    <!-- Formulaire d'ajout/modification de prêt -->
    <AjoutPretLivre
      v-if="afficherFormulaireState && mode === 'ajout'"
      :livres="livres"
      :membres="membres"
      @annuler="annulerAjout"
      @ajouter="ajouterPret"
    />
    
    <ModifiPretLivre
      v-if="afficherFormulaireState && mode === 'modifier'"
      :livres="livres"
      :membres="membres"
      :pret="pretForm"
      @annuler="annulerAjout"
      @enregistrer="enregistrerModification"
    />

    <!-- Détails du prêt -->
    <div v-if="afficherDetail" class="mb-4">
      <h2>Détails du Prêt</h2>
      <p><strong>Livre :</strong> {{ pretDetail.livre }}</p>
      <p><strong>Membre :</strong> {{ pretDetail.membre }}</p>
      <p><strong>Date de Début :</strong> {{ pretDetail.dateDebut }}</p>
      <p><strong>Date de Fin :</strong> {{ pretDetail.dateFin }}</p>
      <button class="btn btn-secondary" @click="fermerDetail">Fermer</button>
    </div>

    <!-- Liste des prêts -->
    <table v-if="!afficherFormulaireState && !afficherDetail" class="table table-striped">
      <thead>
        <tr>
          <th>Livre</th>
          <th>Membre</th>
          <th>Date de Début</th>
          <th>Date de Fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pret, index) in prets" :key="index">
          <td>{{ pret.livre }}</td>
          <td>{{ pret.membre }}</td>
          <td>{{ pret.dateDebut }}</td>
          <td>{{ pret.dateFin }}</td>
          <td>
            <button class="btn btn-sm" @click="afficherFormulaire('modifier', index)">
              <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px;"></i>
            </button>
            <button class="btn btn-sm" @click="supprimerPret(index)">
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
import AjoutPretLivre from '../Prets/AjoutPretLivre.vue';
import ModifiPretLivre from '../Prets/ModifiPretLivre.vue';

const membres = ref(['Membre A', 'Membre B', 'Membre C']);
const livres = ref(['Livre A', 'Livre B', 'Livre C']);
const prets = ref([
  { livre: 'Livre A', membre: 'Membre A', dateDebut: '2024-01-01', dateFin: '2024-02-01' },
  { livre: 'Livre B', membre: 'Membre B', dateDebut: '2024-01-15', dateFin: '2024-02-15' },
]);

const afficherFormulaireState = ref(false);
const afficherDetail = ref(false);
const mode = ref('ajout');
const pretForm = ref({ livre: '', membre: '', dateDebut: '', dateFin: '' });
const pretDetail = ref({ livre: '', membre: '', dateDebut: '', dateFin: '' });
let indexPretAModifier = null;

const afficherFormulaire = (modeOperation, index = null) => {
  mode.value = modeOperation;
  afficherFormulaireState.value = true;
  afficherDetail.value = false;
  if (modeOperation === 'modifier' && index !== null) {
    indexPretAModifier = index;
    pretForm.value = { ...prets.value[index] };
  } else {
    pretForm.value = { livre: '', membre: '', dateDebut: '', dateFin: '' };
  }
};

const ajouterPret = () => {
  prets.value.push({ ...pretForm.value });
  annulerAjout();
};

const enregistrerModification = () => {
  if (indexPretAModifier !== null) {
    prets.value[indexPretAModifier] = { ...pretForm.value };
    annulerAjout();
  }
};

const voirDetail = (index) => {
  pretDetail.value = { ...prets.value[index] };
  afficherDetail.value = true;
  afficherFormulaireState.value = false;
};

const fermerDetail = () => {
  afficherDetail.value = false;
};

const annulerAjout = () => {
  pretForm.value = { livre: '', membre: '', dateDebut: '', dateFin: '' };
  afficherFormulaireState.value = false;
};

const supprimerPret = (index) => {
  prets.value.splice(index, 1);
};
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés si nécessaire */
</style>
