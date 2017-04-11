import Vue from 'vue';
import Head from 'vue-head';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Map from '@/components/Map';

Vue.use(Router);
Vue.use(Head);

export default new Router({
  routes: [
    {
      path: '/hello',
      component: Hello,
    },
    {
      path: '/map',
      component: Map,
    },
  ],
});
