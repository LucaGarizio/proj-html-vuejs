<script>
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'

export default {
    name: 'AppHeader ',
    components: {
        Home,
        AboutUs,
        Contact,
    },
}
</script>

<template>
    <!-- ale -->
    <header>
        CIAONE PROVA PUSH
        <button class="btn-orange">Get Ticket</button>
        <button class="btn-light-orange">Get Ticket</button>
        <button class="btn-green">Get Ticket</button>
        
        <ul>
            <li>
                <Router-Link :to="{ name: 'home' }">Home</Router-Link>
            </li>
            <li>
                <Router-Link :to="{ name: 'about-us' }">About Us</Router-Link>
            </li>
            <li>
                <Router-Link :to="{ name: 'contact' }">Contact</Router-Link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

ul {
    display: flex;
}
</style>
