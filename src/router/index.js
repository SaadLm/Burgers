import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import menuData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/menu-mc-burger',
    //   name: 'bk',
    //   // component: McdoView
    //   component: () => import('../views/McdoView.vue')
    // },
    // {
    //   path: '/menu-kfc-burger',
    //   name: 'kfc',
    //   // component: Kfc
    //   component: () => import('../views/KfcView.vue')
    // },
    // {
    //   path: '/menu-bk-burger',
    //   name: 'burger',
    //   component:()=>import('../views/BurgerKingView.vue')
    //   // component: BurgerKingView
    // },
    {
      path: '/menu/:id/:slug',
      name: 'menu.show',
      component:()=>import('../views/MenuView.vue'),
      props:(route)=>({id:parseInt(route.params.id)}),
      beforeEnter: (to, from) => {
        // ...
        const urlExist = menuData.menus.find(menu => menu.id===parseInt(to.params.id) )
        if(!urlExist){
          return {redirect:{name:'home'}}
          // return { name: 'home' }
        }
      }
    },
    {
      path: '/ingredient/:id/:slug',
      name: 'ingredient.show',
      component:()=>import('../views/IngredientView.vue'),
      props:
        (route)=>(
            {id:parseInt(route.params.id),slug:(route.params.slug)}
          ),

    },
    {
      path:"/:catchAll(.*)",
      component:()=>import("../views/NotFoundView.vue")
    }
    ,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ],
  linkActiveClass:"linkActive"
})

export default router
