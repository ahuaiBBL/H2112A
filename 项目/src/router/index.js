import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import ('../views/home.vue')
      },
      {
        path:'/users',
        name:'users',
        component:()=>import ('../views/users.vue')
      },
      {
        path:'/cities',
        name:'cities',
        component:()=>import ('../views/cities.vue')
      },
      {
        path:'/foods',
        name:'foods',
        component:()=>import ('../views/foods.vue')
      },
      {
        path:'/orders',
        name:'orders',
        component:()=>import ('../views/orders.vue')
      },
      {
        path:'/all',
        name:'all',
        component:()=>import ('../views/all.vue')
      },
      {
        path:'/shop',
        name:'shop',
        component:()=>import ('../views/shop.vue')
      },
      {
        path:'/edit',
        name:'edit',
        component:()=>import ('../views/edit.vue')
      },
      {
        path:'/admin',
        name:'admin',
        component:()=>import ('../views/admin.vue')
      },
      {
        path:'/shoping',
        name:'shoping',
        component:()=>import ('../views/shoping.vue')
      },
      {
        path:'/echart',
        name:'echart',
        component:()=>import ('../views/echart.vue')
      },
      {
        path:'/explain',
        name:'explain',
        component:()=>import ('../views/explain.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router