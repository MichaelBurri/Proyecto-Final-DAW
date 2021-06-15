import Vue from 'vue';
import Router from 'vue-router';
import coHome from '@/components/coHome.vue';
import misPaginas from '@/components/misPaginas.vue';
import coContact from '@/components/coContact.vue';
import coPlanes from '@/components/coPlanes.vue';
import coPlanBasico from '@/components/coPlanBasico.vue';
import coPlanAvanzado from '@/components/coPlanAvanzado.vue';
import coUnderConstruction from '@/components/coUnderConstruction.vue';
import coLogin from '@/components/coLogin.vue';
import coBuilder from '@/components/coBuilder.vue';

Vue.use(Router)

export default new Router({
 mode: 'history',
 routes: [
    {
        path:'/home',
        name:'home',
        component: coHome
    },
    {
        path:'/planes',
        name:'planes',
        component: coPlanes
    },
    {
        path:'/basico',
        name:'basico',
        component: coPlanBasico
    },
    {
        path:'/avanzado',
        name:'avanzado',
        component: coPlanAvanzado
    },
    {
        path:'/oops',
        name:'oops',
        component: coUnderConstruction
    },
    {
        path:'/login',
        name:'login',
        component: coLogin
    },
    {
        path:'/contacto',
        name:'contacto',
        component: coContact
    },
    {
        path:'/misPaginas',
        name:'misPaginas',
        component: misPaginas
    },
    {
        path:'/builder',
        name:'builder',
        component: coBuilder
    },
    {
        path:'*',
        redirect:{
            name:'home'
        }
    }
]
})