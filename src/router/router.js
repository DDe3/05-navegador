// Configuracion general
import { createRouter, createWebHashHistory } from 'vue-router'

// Configuracion de cada pagina
//import AboutPage from '@/pages/AboutPage'
//import HelpPage from '@/pages/HelpPage'          Carga perezosa
//import PokemonPage from '@/pages/PokemonPage'
//import NotFound from '@/pages/NotFound'

const routes = [
    // Carga normal
    //{ path: '/', component: AboutPage },
    //{ path: '/pokemon', component: PokemonPage },
    //{ path: '/:pathMatch(.*)*', component: NotFound },
    //{ path: '/help', component: HelpPage },
    // Carga perazosa
    { path: '/:idPokemon', component: () => import(/* webpackChunkName: "inicio"*/ '@/pages/AboutPage') },  // <= se le hace un lambda con el import
    { path: '/help', component: () => import(/* webpackChunkName: "help"*/ '@/pages/HelpPage') },    
    { path: '/pokemon', component: () => import(/* webpackChunkName: "pokemon"*/ '@/pages/PokemonPage') },
    { path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "error"*/ '@/pages/NotFound') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router