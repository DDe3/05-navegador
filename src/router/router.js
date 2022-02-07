// Configuracion general
import { createRouter, createWebHashHistory } from 'vue-router'

// Configuracion de cada pagina
import AboutPage from '@/pages/AboutPage'
import HelpPage from '@/pages/HelpPage'
import PokemonPage from '@/pages/PokemonPage'

const routes = [
    {path:'/about', component: AboutPage},
    {path:'/help', component: HelpPage},
    {path:'/pokemon', component: PokemonPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router