import Vue from 'vue';
import Router from 'vue-router';
import KbnHome from './components/templates/KbnHome.vue';
import KbnLogin from './components/templates/KbnLogin.vue';
import KbnTask from './components/templates/KbnTask.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: KbnHome,
    name: 'KbnHome'
  },
  {
    path: '/login',
    component: KbnLogin,
    name: 'KbnLogin'
  },
  {
    path: '/tasks',
    component: KbnTask,
    name: 'KbnTask'
  },
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
