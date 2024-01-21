<script>
import Artist from '../pages/artist.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'
import BurgerMenu from '../components/BurgerMenu.vue'

export default {
    name: 'AppHeader ',
    components: {
        BurgerMenu,
        Artist,
        AboutUs,
        Contact,
    },
    data() {
        return {
            dropdowns: {
                home: false,
                pages: false,
                courses: false,
                features: false,
                blog: false,
                shop: false,
            },
        }
    },
    methods: {
        toggleDropdown(dropdownName) {
            this.dropdowns[dropdownName] = !this.dropdowns[dropdownName]
            for (let name in this.dropdowns) {
                if (name !== dropdownName) {
                    this.dropdowns[name] = false
                }
            }
        },
    },
}
</script>

<template>
    <header>
        <nav>
            <div class="row row-nav">
                <div class="col-3 logo">
                    <a href="#">
                        <img
                            src="https://maxcoach.thememove.com/main/wp-content/themes/maxcoach/assets/images/logo/dark-logo.png"
                            alt=""
                        />
                    </a>
                </div>
                <div class="col-6">
                    <ul class="d-flex">
                        <li @click="toggleDropdown('home')">
                            Home
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content-home dropdown-content py-3"
                                v-show="dropdowns.home"
                            >
                                <div class="row">
                                    <div class="col-3 mb-3">
                                        <li class="py-1">
                                            <a href="#">MaxCoach Education</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Course Portal</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Distant Learning</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Multimedia Pedagogy</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Modern Schooling</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Remote Training</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Health Coaching</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Gym Coaching</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Business</a>
                                        </li>
                                        <li class="py-1">
                                            <router-link to="/artist"
                                                >Artist</router-link
                                            >
                                        </li>
                                    </div>
                                    <div class="col-2 mb-3">
                                        <li class="py-1">
                                            <a href="#">MaxCoach Education</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Course Portal</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Distant Learning</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Multimedia Pedagogy</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Modern Schooling</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Remote Training</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Health Coaching</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Gym Coaching</a>
                                        </li>
                                        <li class="py-1">
                                            <a href="#">Business</a>
                                        </li>
                                        <li class="py-1">
                                            <router-link to="/artist"
                                                >Artist</router-link
                                            >
                                        </li>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <li class="img-drop">
                                            <a href="#"
                                                ><img
                                                    class="img-drop"
                                                    src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/homepages-mega-menu-image-alt.jpg"
                                                    alt=""
                                            /></a>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li @click="toggleDropdown('pages')">
                            Pages
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content-pages dropdown-content py-3"
                                v-show="dropdowns.pages"
                            >
                                <li class="py-1">
                                    <a href="">Start Here</a>
                                </li>
                                <li class="py-1">
                                    <a href="">Success Story</a>
                                </li>
                                <li class="py-1">
                                    <router-link to="/about-us"
                                        >About Me</router-link
                                    >
                                </li>
                                <li class="py-1">
                                    <a href="">Contact Me</a>
                                </li>
                                <li class="py-1">
                                    <router-link to="/contact"
                                        >Contact Us</router-link
                                    >
                                </li>
                                <li class="py-1">
                                    <a href="">Purchase Guide</a>
                                </li>
                                <li class="py-1">
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li class="py-1">
                                    <a href="">Term Of Service</a>
                                </li>
                            </ul>
                        </li>
                        <li @click="toggleDropdown('courses')">
                            Courses
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content dropdown-content-courses"
                                v-show="dropdowns.courses"
                            >
                                <li><a href="#">Submenu Item 1</a></li>
                                <li><a href="#">Submenu Item 2</a></li>
                                <li><a href="#">Submenu Item 3</a></li>
                            </ul>
                        </li>
                        <li @click="toggleDropdown('features')">
                            Features
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content dropdown-content-features"
                                v-show="dropdowns.features"
                            >
                                <div class="row">
                                    <div class="col-3">
                                        <li>
                                            <a href="#">Submenu Item 1</a>
                                        </li>
                                    </div>

                                    <li><a href="#">Submenu Item 2</a></li>
                                    <li><a href="#">Submenu Item 3</a></li>
                                </div>
                            </ul>
                        </li>

                        <li @click="toggleDropdown('blog')">
                            Blog
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content dropdown-content-blog"
                                v-show="dropdowns.blog"
                            >
                                <li><a href="#">Submenu Item 1</a></li>
                                <li><a href="#">Submenu Item 2</a></li>
                                <li><a href="#">Submenu Item 3</a></li>
                            </ul>
                        </li>
                        <li @click="toggleDropdown('shop')">
                            Shop
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content dropdown-content-shop"
                                v-show="dropdowns.shop"
                            >
                                <li><a href="#">Submenu Item 1</a></li>
                                <li><a href="#">Submenu Item 2</a></li>
                                <li><a href="#">Submenu Item 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- colonna icone -->
                <div class="col-3 icon">
                    <ul>
                        <li>
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href=""
                                ><i class="fa-brands fa-instagram"></i
                            ></a>
                        </li>
                        <li>
                            <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <BurgerMenu />
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

// NAVBAR

header {
    position: fixed;
    width: 100%;
    z-index: 500;
    background-color: white;
}
.row-nav {
    display: flex;
    height: 70px;
    margin: 0 auto;
}
.row-nav {
    display: flex;
    height: 70px;
    margin: 0 auto;
}

.col-6 {
    display: flex;
    align-items: center;

    ul {
        margin: 0 auto;
        padding: 0;
    }
    @media all and (max-width: 968px) {
        display: none;
    }

    li {
        padding: 0 25px;
    }
}

.logo {
    display: flex;
    align-items: center;
    justify-content: start;
    img {
        width: 200px;
    }
}
// DROP DOWN MENUS
.dropdown-content {
    position: absolute;
    top: 100%;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 500;
    transition: 1s;
    border-bottom: 5px solid black;
    a {
        padding: 5px;
        border-radius: 6px;
        color: #333;
    }
    a:hover {
        color: #black;
        transition: 0.3s;
    }
}
.dropdown-content-home {
    width: 95%;
    left: 0;
    right: 0;
    .col-6 {
        margin: 0 auto;
    }
}

.dropdown-content-home {
    width: 95%;
    left: 0;
    right: 0;
    .col-6 {
        margin: 0 auto;
    }
}

.dropdown-content-home {
    width: 95%;
    left: 0;
    right: 0;
}

.dropdown-content-home {
    width: 95%;
    left: 0;
    right: 0;
}

.dropdown-content-home {
    width: 95%;
    left: 0;
    right: 0;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 20px;

    ul {
        display: flex;
        margin: 0;
    }

    li {
        padding: 0 10px;
    }
    .fa-brands {
        color: #696969;
    }
    .hidden {
        // display: none;
    }
    @media all and (max-width: 968px) {
        .hidden {
            display: flex;
        }
    }
}
</style>
