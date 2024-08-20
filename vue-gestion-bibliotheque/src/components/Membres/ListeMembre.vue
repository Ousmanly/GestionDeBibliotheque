<template>
  <div class="container mt-5">
    <!-- <h1 class="mb-4">Liste des Membres</h1> -->

    <button class="btn btn-primary mb-3" @click="afficherFormulaire('ajout')">Ajouter un Membre</button>

    <!-- Liste des membres -->
    <table v-if="!afficherFormulaireState && !afficherDetail" class="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Numéro de téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(membre, index) in membres" :key="index">
          <td>{{ membre.nom }}</td>
          <td>{{ membre.email }}</td>
          <td>{{ membre.telephone }}</td>
          <td>
            <button class="btn btn-sm" @click="afficherFormulaire('modifier', index)">
              <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px;"></i>
            </button>
            <button class="btn btn-sm" @click="supprimerMembre(index)">
              <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 25px;"></i>
            </button>
            <button class="btn btn-sm" @click="voirDetail(index)">
              <i class="fa-solid fa-eye" style="color: #4596d3; font-size: 25px;"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Composants enfants -->
    <AjoutMembre
      v-if="afficherFormulaireState"
      :mode="mode"
      :membreForm="membreForm"
      @annuler="annulerAjout"
      @ajouter="ajouterMembre"
      @modifier="enregistrerModification"
    />
    
    <DetailMembre
      v-if="afficherDetail"
      :membreDetail="membreDetail"
      @fermer="fermerDetail"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AjoutMembre from '../Membres/AjoutMembre.vue';
import DetailMembre from '../Membres/DetailMembre.vue';

const membres = ref([
  { nom: 'Ousmane Ly', email: 'ousmane.ly@example.com', telephone: '0612345678' },
  { nom: 'Mariem Diani', email: 'mariem.diani@example.com', telephone: '0612345679' },
]);

const afficherFormulaireState = ref(false);
const afficherDetail = ref(false);
const mode = ref('ajout');
const membreForm = ref({ nom: '', email: '', telephone: '' });
const membreDetail = ref({ nom: '', email: '', telephone: '' });
let indexMembreAModifier = null;

const afficherFormulaire = (modeOperation, index = null) => {
  mode.value = modeOperation;
  afficherFormulaireState.value = true;
  afficherDetail.value = false;
  if (modeOperation === 'modifier' && index !== null) {
    indexMembreAModifier = index;
    membreForm.value = { ...membres.value[index] };
  } else {
    membreForm.value = { nom: '', email: '', telephone: '' };
  }
};

const ajouterMembre = () => {
  membres.value.push({ ...membreForm.value });
  annulerAjout();
};

const enregistrerModification = () => {
  if (indexMembreAModifier !== null) {
    membres.value[indexMembreAModifier] = { ...membreForm.value };
    annulerAjout();
  }
};

const voirDetail = (index) => {
  membreDetail.value = { ...membres.value[index] };
  afficherDetail.value = true;
  afficherFormulaireState.value = false;
};

const fermerDetail = () => {
  afficherDetail.value = false;
};

const annulerAjout = () => {
  membreForm.value = { nom: '', email: '', telephone: '' };
  afficherFormulaireState.value = false;
};

const supprimerMembre = (index) => {
  membres.value.splice(index, 1);
};
</script>

