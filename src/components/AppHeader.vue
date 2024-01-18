<script>
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'
export default {
    // data() {
    //     return {
    //         navbuttons: [
    //             {
    //                 textmenu: ,
    //             },
    //         ],
    //     }
    // },
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
        <div class="col-3">
            <img
                class="img-fluid max-logo"
                src="../assets/images/dark-logo.png"
                alt=""
            />
        </div>
        <div class="col-6 d-flex justify-content-between">
            <div class="dropdown">
                <button
                    class="btn dropdown-toggle no-border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Home
                </button>
                <ul class="dropdown-menu large-menu">
                    <div class="row p-4">
                        <div class="col-3">
                            <li>
                                <a class="dropdown-item" href="#"
                                    >MaxCoach Education</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Course Portal</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Multimedia</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >MaxCoach Education</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Course Portal</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Multimedia</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >MaxCoach Education</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Course Portal</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Multimedia</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Multimedia</a>
                            </li>
                        </div>
                        <div class="col-3">
                            <li>
                                <a class="dropdown-item" href="#"
                                    >MaxCoach Education</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Course Portal</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Multimedia</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >MaxCoach Education</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Course Portal</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Multimedia</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >MaxCoach Education</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Course Portal</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Multimedia</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Multimedia</a>
                            </li>
                        </div>
                        <div class="col-6">
                            <img
                                class="img-fluid"
                                src="../assets/images/DropDownHomeImg.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </ul>
            </div>

            <!-- PAGES  -->
            <div class="dropdown">
                <button
                    class="btn dropdown-toggle no-border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Pages
                </button>
                <ul class="dropdown-menu">
                    <div class="col-2">
                        <li>
                            <Router-Link
                                class="dropdown-item"
                                :to="{ name: 'home' }"
                                >Home</Router-Link
                            >
                        </li>
                        <li>
                            <Router-Link
                                class="dropdown-item"
                                :to="{ name: 'about-us' }"
                                >About Us</Router-Link
                            >
                        </li>
                        <li>
                            <Router-Link
                                class="dropdown-item"
                                :to="{ name: 'contact' }"
                                >Contact</Router-Link
                            >
                        </li>
                    </div>
                </ul>
            </div>
            <!-- Courses -->
            <div class="dropdown">
                <button
                    class="btn dropdown-toggle no-border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Courses
                </button>
                <ul class="dropdown-menu large-menu">
                    <div class="col-2">
                        <li>
                            <a class="dropdown-item" href="#"
                                >MaxCoach Education</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Course Portal</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Multimedia</a>
                        </li>
                    </div>
                </ul>
            </div>
            <!-- features  -->
            <div class="dropdown">
                <button
                    class="btn dropdown-toggle no-border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Features
                </button>
                <ul class="dropdown-menu">
                    <div class="col-2">
                        <li>
                            <a class="dropdown-item" href="#"
                                >MaxCoach Education</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Course Portal</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Multimedia</a>
                        </li>
                    </div>
                </ul>
            </div>

            <div class="dropdown">
                <button
                    class="btn dropdown-toggle no-border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Blog
                </button>
                <ul class="dropdown-menu">
                    <div class="col-2">
                        <li>
                            <a class="dropdown-item" href="#"
                                >MaxCoach Education</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Course Portal</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Multimedia</a>
                        </li>
                    </div>
                </ul>
            </div>

            <div class="dropdown">
                <button
                    class="btn dropdown-toggle no-border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Shop
                </button>
                <ul class="dropdown-menu">
                    <div class="col-2">
                        <li>
                            <a class="dropdown-item" href="#"
                                >MaxCoach Education</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Course Portal</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Multimedia</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
        <div class="container col-3">
            <div class="container fluid d-flex justify-content-end">
                <a href="#">
                    <i class="fa-brands fa-twitter p-2" style="color: #696969">
                    </i
                ></a>
                <a href="#">
                    <i
                        class="fa-brands fa-facebook-f p-2"
                        style="color: #696969"
                    ></i
                ></a>
                <a href="#">
                    <i
                        class="fa-brands fa-instagram p-2"
                        style="color: #696969"
                    ></i>
                    <i
                        class="fa-brands fa-linkedin p-2"
                        style="color: #696969"
                    ></i
                ></a>
                <!--RIMASTO A SETTARE I LINK DELLE ICONE. CONTINUA A SETTARE I DROPDOWN  -->
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.dropdown-menu {
    border: 0px;
    border-radius: 0px;
    border-bottom: 5px solid orange;
}
.large-menu {
    width: 80vw;
}
.max-logo {
    height: 25px;
    width: 150px;
}

.no-border {
    border: 0 !important;
    box-shadow: none;
}
</style>

<!-- <Router-Link class="dropdown-item" :to="{ name: 'home' }"
>Home</Router-Link
>
</button>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<Router-Link class="dropdown-item" :to="{ name: 'about-us' }"
>About Us</Router-Link
>
<Router-Link class="dropdown-item" :to="{ name: 'contact' }"
>Contact</Router-Link
> -->
