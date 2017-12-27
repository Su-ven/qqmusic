import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'

Vue.use(Router)

const Recom = () => import('views/Recom')
const Toplist = () => import('views/Toplist')
const Search = () => import('views/Search')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recom'
    },
    {
    	path: '/recom',
    	name: "Recom",
    	component: Recom,
    },
    {
    	path: '/toplist',
    	name: "Toplist",
    	component: Toplist,
    },
    {
    	path: '/search',
    	name: "Search",
    	component: Search,
    },
  ]
})
