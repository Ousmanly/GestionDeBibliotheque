# Gestion Bibliothéque App

## Description

Gestion de Bibliothéque App est une application web avec Vue.js 3 en utilisant la Composition API pour gérer les
livres, les membres, et les prêts d'une bibliothèque. Les données sont stockées
localement, sans backend.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- VueJS `npm create vite@latest`
- vue-router `npm install vue-router@next`
- Bootstrap `npm install bootstrap`
- PopperJS `npm install @poperjs/core`


## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/Ousmanly/GestionDeBibliotheque.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd .\vue-gestion-bibliotheque\ 
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm run dev
```
## Les fonctions

1. **Livres :** 
 - Fonction : afficherFormulaire (modeOperation(String), index(int))
    Cette fonction permet d'afficher le formulaire d'ajout ou modification en fonction modeOperation donné.
    
 - Fonction : ajouterLivre()
    Cette fonction permet d'ajouter et aussi modifier des livres.
 
 - Fonction : enregistrerModification()
    Cette fonction permet d'enregistrer les modifictaion.
    
 - Fonction : voirDetail()
    Cette fonction permet de voire les details.
 - Fonction : fermerDetail()
    Cette fonction permet de fermer les details.
 - Fonction : annulerAjout()
    Cette fonction permet d'annuler l'ajout d'un livre.
 - Fonction : supprimerLivre()
    Cette fonction permet supprimer d'un livre.

2. **Prets :**
- Fonction : afficherFormulaire (modeOperation(String), index(int))
    Cette fonction permet d'afficher le formulaire d'ajout ou modification en fonction modeOperation donné.
    
 - Fonction : ajouterPret()
    Cette fonction permet d'ajouter et aussi modifier des prets.
 
 - Fonction : enregistrerModification()
    Cette fonction permet d'enregistrer les modifictaion.
    
 - Fonction : voirDetail()
    Cette fonction permet de voire les details d'un pret.
 - Fonction : fermerDetail()
    Cette fonction permet de fermer les details d'un pret.
 - Fonction : annulerAjout()
    Cette fonction permet d'annuler l'ajout d'un pret.
 - Fonction : supprimerLivre()
    Cette fonction permet supprimer d'un prets.

3. **Membres :**
 - Fonction : afficherFormulaire (modeOperation(String), index(int))
    Cette fonction permet d'afficher le formulaire d'ajout ou modification en fonction modeOperation donné.
    
 - Fonction : ajouterPret()
    Cette fonction permet d'ajouter et aussi modifier des membres.
 
 - Fonction : enregistrerModification()
    Cette fonction permet d'enregistrer les membres.
    
 - Fonction : voirDetail()
    Cette fonction permet de voire les details d'un membre.
 - Fonction : fermerDetail()
    Cette fonction permet de fermer les details d'un membre.
 - Fonction : annulerAjout()
    Cette fonction permet d'annuler l'ajout d'un membre.
 - Fonction : supprimerLivre()
    Cette fonction permet supprimer d'un membre.


## Authors
 - Nom : [Ousmane Ibrahima Ly](https://github.com/Ousmanly)
 - Nom : [Mariem Boudallaye Dianifaba](https://github.com/mariem2012)
