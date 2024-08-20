<template>
    <div class="container mt-5">
      <h1 class="mb-4">Liste des Membres</h1>
  
      <button class="btn btn-primary mb-3" @click="afficherFormulaire('ajout')">Ajouter un Membre</button>
  
      <!-- Formulaire d'ajout/modification de membre -->
      <div v-if="afficherFormulaireState" class="mb-4">
        <h2>{{ mode === 'ajout' ? 'Ajouter un Membre' : 'Modifier le Membre' }}</h2>
        <form @submit.prevent="mode === 'ajout' ? ajouterMembre() : enregistrerModification()">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom :</label>
            <input type="text" class="form-control" v-model="membreForm.nom" id="nom" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email :</label>
            <input type="email" class="form-control" v-model="membreForm.email" id="email" required />
          </div>
          <div class="mb-3">
            <label for="telephone" class="form-label">Numéro de téléphone :</label>
            <input type="text" class="form-control" v-model="membreForm.telephone" id="telephone" required />
          </div>
          <button type="submit" class="btn btn-success">{{ mode === 'ajout' ? 'Ajouter' : 'Enregistrer' }}</button>
          <button type="button" class="btn btn-secondary" @click="annulerAjout">Annuler</button>
        </form>
      </div>
  
      <!-- Détails du membre -->
      <div v-if="afficherDetail" class="mb-4">
        <h2>Détails du Membre</h2>
        <p><strong>Nom :</strong> {{ membreDetail.nom }}</p>
        <p><strong>Email :</strong> {{ membreDetail.email }}</p>
        <p><strong>Numéro de téléphone :</strong> {{ membreDetail.telephone }}</p>
        <button class="btn btn-secondary" @click="fermerDetail">Fermer</button>
      </div>
  
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
              <button class="btn btn-warning btn-sm" @click="afficherFormulaire('modifier', index)">Modifier</button>
              <button class="btn btn-danger btn-sm" @click="supprimerMembre(index)">Supprimer</button>
              <button class="btn btn-info btn-sm" @click="voirDetail(index)">Détails</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const membres = ref([
    { nom: 'Ousmane Ly', email: 'ousmane.ly@example.com', telephone: '0612345678' },
    { nom: 'Mariem Diani', email: 'mariem.diani@example.com', telephone: '612345679' },
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
  
  <style scoped>
    .membre-form-container {
  max-width: 600px;
  margin: 2rem auto;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.membre-form-container .card-header {
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  text-align: center;
  padding: 1.5rem;
  color: white;
}

.membre-form-container .card-header h2 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 500;
}

.membre-form-container .card-body {
  padding: 2rem;
  background-color: #f9f9f9;
}

.membre-form-container .form-label {
  font-weight: 500;
  color: #333;
}

.membre-form-container .form-control-lg {
  font-size: 1.1rem;
  border-radius: 8px;
}

.membre-form-container .form-control::placeholder {
  color: #999;
}

.membre-form-container .btn-lg {
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
}

.membre-form-container .btn-success {
  background-color: #28a745;
  border: none;
}

.membre-form-container .btn-secondary {
  background-color: #6c757d;
  border: none;
}

.membre-form-container .btn-success:hover,
.membre-form-container .btn-secondary:hover {
  opacity: 0.9;
}

  </style>
  