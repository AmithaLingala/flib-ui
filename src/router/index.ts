import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
}
,
{
  path: '/signup',
  name: 'Signup',
  component: () => import(/* webpackChunkName: "Signup" */ '../views/Signup.vue')
}
,
{
  path: '/read',
  name: 'Read',
  component: () => import(/* webpackChunkName: "Read" */ '../views/Read.vue')
},
{
  path: '/write',
  name: 'Write',
  component: () => import(/* webpackChunkName: "Write" */ '../views/Write.vue')
}
,
{
  path: '/profile',
  name: 'Profile',
  component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
},
{
  path: '/editbook',
  name: 'EditBook',
  component: () => import(/* webpackChunkName: "EditBook" */ '../views/EditBook.vue')
},
{
  path: '/book',
  name: 'Book',
  component: () => import(/* webpackChunkName: "Book" */ '../views/Book.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
