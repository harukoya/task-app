import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Task from './views/Task.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/tasks',
    component: Task,
    name: 'Task'
  },
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
