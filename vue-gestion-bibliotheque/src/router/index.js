// import { createRouter, createWebHistory } from 'vue-router';

// import BooksView from '@/views/BooksView.vue';
// import MembersView from '@/views/MembersView.vue';
// import LoansView from '@/views/LoansView.vue';
// import ListeLivre from '@/components/ListeLivre.vue';
// import AjoutLivre from '@/components/AjoutLivre.vue';
// import ModifierLivre from '@/components/ModifierLivre.vue';
// // import AjoutVue from '@/components/AjoutVue.vue';
// const routes = [
//   { path: '/' },
//   // , redirect: '/books'
//   { path: '/books', component: BooksView },
//   { path: '/members', component: MembersView },
//   { path: '/loans', component: LoansView },
//   { path: '/listlivre', component: ListeLivre },
//   { path: '/ajooutlivre', component: AjoutLivre },
//   { path: '/modifierlivre', component: ModifierLivre  },
//   // { path: '/books/add', component: AjoutVue },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
import { createRouter, createWebHistory } from 'vue-router';

import BooksView from '@/views/BooksView.vue';
import MembersView from '@/views/MembersView.vue';
import LoansView from '@/views/LoansView.vue';
import ListeLivre from '@/components/Livres/ListeLivre.vue';
import ListePretLivre from '@/components/Prets/ListePretLivre.vue';

// import AjoutLivre from '@/components/AjoutLivre.vue';
// import ModifierLivre from '@/components/ModifierLivre.vue';

const routes = [
  { path: '/', redirect: '/books' },
  { path: '/books', component: BooksView },
  { path: '/members', component: MembersView },
  { path: '/loans', component: LoansView },
  { path: '/listlivre', component: ListeLivre },
  { path: '/listpretlivre', component: ListePretLivre },
  // { path: '/ajoutlivre', component: AjoutLivre },
  // { path: '/modifierlivre/:index', component: ModifierLivre },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
