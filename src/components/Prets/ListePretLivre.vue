<template>
  <div class="container mt-5">
    <button class="btn btn-primary mb-3" @click="afficherFormulaire('ajout')">Ajouter un Prêt</button>

    <AjoutLivre
      v-if="afficherFormulaireState"
      :livres="livres"
      :membres="membres"
      :mode="mode"
      :pretForm="pretForm"
      @annuler="annulerAjout"
      @ajouter="ajouterPret"
      @modifier="enregistrerModification"
    />

    <ModifiLivre
      v-if="afficherDetail"
      :pretDetail="pretDetail"
      @fermer="fermerDetail"
    />

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
import AjoutLivre from './AjoutPretLivre.vue';
import ModifiLivre from './DetailLivre.vue';

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
</style>

