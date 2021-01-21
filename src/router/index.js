import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/**1. 配置页面的映射*/
import SelectBook from "../views/SelectBook";
import AddBook from "../views/AddBook";
import BookUpdate from "../views/BookUpdate";
import PageFour from "../views/PageFour";
import App from "../App";
import Index from "../views/Index";

Vue.use(VueRouter)

/**通过vue router去自动生成我们的菜单结构*/
const routes = [
/*  {
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
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
    /**2.页面配置路由*/
  {
    path: "/",
    name: "图书管理",
    component: Index,   /*指定到app    index页面*/   /*这个是访问8080时候的页面*/
    show:true,
    redirect: "/SelectBook",
    /**动态读取route里面的配置，需要加一个childen，因为是我的子节点*/
    children:[
      {
        path: "/SelectBook",
        name: "查询图书",
        component: SelectBook
      }
      ,
      {
        path: "/AddBook",
        name: "添加图书",
        component: AddBook
      }
    ]
  }
  ,   /*加了一个对象   会多一个菜单*/
  {
    path:"navigation",
    name: "修改-删除",
    show:true,
    component:Index,
    children:[
      {
        path: "/BookUpdate",
        name: "修改图书信息",
        component: BookUpdate
      }
      ,
      {
        path: "/PageFour",
        name: "We  加油",
        component: PageFour
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
