import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/auth/Register'
import ArticleList from '@/views/index/Index'
import Login from '@/views/auth/Login'
import Detail from '@/views/article/Detail'
import CategoryArticle from '@/views/category/Articles'
import SearchArticle from '@/views/article/SearchArticle'

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'ArticleList',
    component: ArticleList,
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register
    // component: () => import('@/views/auth/Register')
  },

  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  // Content
  {
    path: '/article/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/category/article/:category_id',
    name: 'CategoryArticle',
    component: CategoryArticle
  },

  {
    path: '/article/search/:word',
    name: 'SearchArticle',
    component: SearchArticle
  },
  {
    path: '*',
    name: 'ArticleList',
    component: ArticleList,
  },
];

const router = new Router({
  mode: 'history',
  routes
});

export default router
