import { createRouter, createWebHistory } from 'vue-router';
import BooksView from '../views/BooksView.vue';
import MembersView from '../views/MembersView.vue';
import LoansView from '../views/LoansView.vue';

const routes = [
  { path: '/', redirect: '/books' },
  { path: '/books', component: BooksView },
  { path: '/members', component: MembersView },
  { path: '/loans', component: LoansView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
