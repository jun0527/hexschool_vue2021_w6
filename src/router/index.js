import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/front/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('@/views/front/Product.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'cart',
        component: () => import('@/views/front/Cart.vue'),
      },
      {
        path: 'customerForm',
        component: () => import('@/views/front/CustomerForm.vue'),
      },
      {
        path: 'signIn',
        component: () => import('@/views/SignIn.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/front/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'linkActive',
});

export default router;
