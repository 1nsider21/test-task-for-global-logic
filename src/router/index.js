import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import MovieDetails from '../views/MovieDetails';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
