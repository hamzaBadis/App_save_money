import { createRouter, createWebHashHistory } from 'vue-router'
import store from './store';
import Home from './components/Home.vue';
import List from './components/List.vue';
import Add from './components/Add.vue';
import Login from './components/Login.vue'
import Register from './components/Register'
import Edit from './components/Edit.vue'
import ChartView from './components/ChartView'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta :{
            requiredAuth : true
        }
    },
    {
        path : '/chartview',
        name : 'chart',
        component : ChartView,
        meta : {
            requiredAuth : true
        }
    },
    {
        path: '/list/:showList',
        name: 'list',
        component: List,
        props: true,
        meta :{
            requiredAuth : true
        }
    },
    {
        path: '/edit/:itemData',
        name: 'edit',
        component: Edit,
        props: true,
        meta :{
            requiredAuth : true
        }
    },
    {
        path: '/add/:addFct',
        name: 'add',
        component: Add,
        props: true,
        meta :{
            requiredAuth : true
        }
    },
    {
        path:'/login',
        name : 'login',
        component : Login,
        meta :{
            requiredAuth : false
        }
    },
    {
        path:'/register',
        name : 'register',
        component : Register,
        meta :{
            requiredAuth : false
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
router.beforeEach((to, from)=>{
    if(to.meta.requiredAuth === true && !store.getters.getAuth)   
        return {
            path :'/login'
        }
})

export default router;


