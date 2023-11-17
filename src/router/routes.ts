// import { RouteConfig } from "vue-router";
import RoutesAlias from './routesAlias';
import Dashboard from '../pages/Dashboard.vue';
import Login from '../pages/Login.vue';


export const routes = [
  {
    path: '/',
    name: RoutesAlias.home,
    component: () => Dashboard,
  },
  {
    path: '/login',
    name: RoutesAlias.login,
    component: () => Login
  }
];
