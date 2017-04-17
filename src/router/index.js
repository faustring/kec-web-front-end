import Vue from 'vue';
import Head from 'vue-head';
import Router from 'vue-router';
import Map from '@/components/Map';

Vue.use(Router);
Vue.use(Head);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Map,
    },
    {
      path: '/rank',
      component: Map,
    },
    {
      path: '/list',
      component: Map,
    },
    {
      path: '/login',
      component: Map,
    },
  ],
});
