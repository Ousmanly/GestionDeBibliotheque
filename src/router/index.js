
import { createRouter, createWebHistory } from 'vue-router';

import BooksView from '@/views/BooksView.vue';
import MembersView from '@/views/MembersView.vue';
import LoansView from '@/views/LoansView.vue';
import ListeLivre from '@/components/Livres/ListeLivre.vue';
import ListePretLivre from '@/components/Prets/ListePretLivre.vue';
import ListeMembre from '@/components/Membres/ListeMembre.vue';



const routes = [
  { path: '/', redirect: '/books' },
  { path: '/books', component: BooksView },
  { path: '/members', component: MembersView },
  { path: '/loans', component: LoansView },
  { path: '/listlivre', component: ListeLivre },
  { path: '/listpretlivre', component: ListePretLivre },
  { path: '/listmembre', component: ListeMembre },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
