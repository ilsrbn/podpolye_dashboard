import {createRouter, createWebHistory, RouteLocationNormalized} from "vue-router";
import {canAccess} from "@/router/guard";
import {useMenu} from "@/store/menu";

export const routes = [{
  path: '/login',
  name: 'login',
  component: () => import('@/pages/login.page.vue'),
  beforeEnter: async(to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    localStorage.clear()
  },
},
  {
    path: '/',
    component: () => import('@/components/base.layout.vue'),
    beforeEnter: async(to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      useMenu().closeMenu()
      const allowed = await canAccess()
      if (!allowed) return { name: 'login' }
    },
    children: [
      {
        path: '',
        redirect: { name: 'posts' }
      },
      {
        name: 'posts',
        path: 'posts',
        component: () => import('@/pages/all-posts.page.vue')
      },
      {
        name: 'post',
        path: 'posts/:id',
        component: () => import('@/pages/edit-post.page.vue')
      }
    ]
  }]

const router = createRouter({
  history: createWebHistory('.'),
  routes
})

export default router