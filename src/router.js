
// importa router e cronologia 
import { createRouter, createWebHistory } from 'vue-router';
// importa componenti pagine single page application
import Home from './pages/Home.vue';

import AboutUs from './pages/AboutUs.vue';

import Contact from './pages/Contact.vue';

// utilizzo funzione router
const router = createRouter({
history: createWebHistory(),
// defizione path pages
routes: [
{
path: '/',
name: 'home',
component: Home
},
{
path: '/about-us',
name: 'about-us',
component: AboutUs
},
{
path: '/contact',
name: 'contact',
component: Contact 
},
{

},
]
});
export { router };