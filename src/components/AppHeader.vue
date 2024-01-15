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
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

ul {
    display: flex;
}
</style>
