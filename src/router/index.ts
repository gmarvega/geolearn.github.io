import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue'),
    },
    {
        path: '/test',
        name: 'MapTest',
        component: () => import('../pages/MapTest.vue'),
    },
    {
      path: '/Estudio',
      name: 'MapEstudio',
      component: () => import('../pages/MapEstudio.vue'),
    },
    {
      path: '/cardAlejandro',
      name: 'cardAlejandro',
      component: () => import('../pages/cardAlejandro.vue'),
    },
    {
      path: '/cardEloi',
      name: 'cardEloi',
      component: () => import('../pages/cardEloi.vue'),
    },
    {
      path: '/cardMar',
      name: 'cardMar',
      component: () => import('../pages/cardMar.vue'),
    },
    {
      path: '/cardFanny',
      name: 'cardFanny',
      component: () => import('../pages/cardFanny.vue'),
    },
    ,
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/contact.vue'),
    },
    {
      path: '/Perfil',
      name: 'UserProfile',
      component: () => import('../pages/Perfil.vue'),
    },

    {
      path: '/selectMode',
      name: 'SelectMode',
      component: () => import('../pages/selectMode.vue'),
    },
    {
      path: '/selectContinent',
      name: 'SelectContinent',
      component: () => import('../pages/selectContinent.vue'),
    },

    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth'
          }
        }
      }
})

export default router