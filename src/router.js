// importa router e cronologia
import { createRouter, createWebHistory } from 'vue-router'
// importa componenti pagine single page application
import Artist from './pages/Artist.vue'

import AboutUs from './pages/AboutUs.vue'

import Contact from './pages/Contact.vue'

// utilizzo funzione router
const router = createRouter({
    history: createWebHistory(),
    // defizione path pages
    routes: [
        {
            path: '/',
            name: 'artist',
            component: Artist,
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {},
    ],
})
export { router }
