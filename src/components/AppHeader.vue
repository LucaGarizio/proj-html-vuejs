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
    <header class="container-fluid d-flex justify-content-between p-3">
        <img
            class="img-fluid max-logo"
            src="../assets/images/dark-logo.png"
            alt=""
        />
        <div class="btn-group">
            <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Action
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
            </div>
        </div>
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

.max-logo {
    height: 25px;
    width: 150px;
}

ul {
    display: flex;
}
</style>
