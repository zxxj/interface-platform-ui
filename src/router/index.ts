import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/layout',
    },
    {
      path: '/layout',
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('../views/home/index.vue'),
        },
        {
          path: '/interfaceDoc',
          component: () => import('../views/interfaceDoc/index.vue'),
        },
        {
          path: '/apply',
          component: () => import('../views/apply/index.vue'),
        },
      ],
    },
  ],
});

export default router;
