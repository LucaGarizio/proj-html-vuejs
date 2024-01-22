<script>
import Artist from '../pages/Artist.vue'
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
    <header id="Jumbotron About info">
        <div class="container">
            <div class="row row-nav">
                <div class="col-2 logo">
                    <a href="#">
                        <img
                            src="https://maxcoach.thememove.com/main/wp-content/themes/maxcoach/assets/images/logo/dark-logo.png"
                            alt=""
                        />
                    </a>
                </div>
                <div class="col-8">
                    <ul class="d-flex">
                        <li @click="toggleDropdown('home')">
                            <span class="animated-border">Home</span>
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content-home dropdown-content"
                                v-show="dropdowns.home"
                            >
                                <div class="row">
                                    <div class="col-2 m-4">
                                        <li>
                                            <a href="#">MaxCoach Education</a>
                                        </li>
                                        <li>
                                            <a href="#">Course Portal</a>
                                        </li>
                                        <li>
                                            <a href="#">Distant Learning</a>
                                        </li>
                                        <li>
                                            <a href="#">Multimedia Pedagogy</a>
                                        </li>
                                        <li>
                                            <a href="#">Modern Schooling</a>
                                        </li>
                                        <li>
                                            <a href="#">Remote Training</a>
                                        </li>
                                        <li>
                                            <a href="#">Health Coaching</a>
                                        </li>
                                        <li>
                                            <a href="#">Gym Coaching</a>
                                        </li>
                                        <li>
                                            <a href="#">Business</a>
                                        </li>
                                        <li>
                                            <router-link to="/artist"
                                                >Artist</router-link
                                            >
                                        </li>
                                    </div>
                                    <div class="col-3 my-4">
                                        <li>
                                            <a href="#">Kitchen Coach</a>
                                        </li>
                                        <li>
                                            <a href="#">Motivation</a>
                                        </li>
                                        <li>
                                            <a href="#">Dancing</a>
                                        </li>
                                        <li>
                                            <a href="#">Guitar</a>
                                        </li>
                                        <li>
                                            <a href="#">Yoga</a>
                                        </li>
                                        <li>
                                            <a href="#">Photography</a>
                                        </li>
                                        <li>
                                            <a href="#">Personal Finance</a>
                                        </li>
                                        <li>
                                            <a href="#">Sales Coaching</a>
                                        </li>
                                        <li>
                                            <a href="#">Mental Therapy</a>
                                        </li>
                                    </div>
                                    <div class="col-6">
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
                                <li>
                                    <a href="">Start Here</a>
                                </li>
                                <li>
                                    <a href="">Success Story</a>
                                </li>
                                <li>
                                    <router-link to="/about-us"
                                        >About Me</router-link
                                    >
                                </li>
                                <li>
                                    <a href="">Contact Me</a>
                                </li>
                                <li>
                                    <router-link to="/contact"
                                        >Contact Us</router-link
                                    >
                                </li>
                                <li>
                                    <a href="">Purchase Guide</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="">Term Of Service</a>
                                </li>
                            </ul>
                        </li>
                        <li @click="toggleDropdown('courses')">
                            Courses
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content dropdown-content-courses py-3"
                                v-show="dropdowns.courses"
                            >
                                <li><a href="#">Courses Grid 01</a></li>
                                <li><a href="#">Courses Grid 02</a></li>
                                <li><a href="#">Courses Grid 03</a></li>
                                <li><a href="#">Membership Level</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li @click="showContainer">
                                    <a href="#"
                                        >Single Layout
                                        <i class="fa-solid fa-chevron-right"></i
                                    ></a>
                                </li>
                                <div
                                    class="drop-down-below"
                                    v-show="visibility"
                                >
                                    <ul>
                                        <li class="pt-4">Free Courses</li>
                                        <li>Sticky Features Bar</li>
                                        <li>Standard Sidebar</li>
                                        <li>No Sidebar</li>
                                    </ul>
                                </div>
                            </ul>
                        </li>
                        <li @click="toggleDropdown('features')">
                            Features
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content dropdown-content-features py-3"
                                v-show="dropdowns.features"
                            >
                                <li>
                                    <a href="#">Events</a>
                                </li>

                                <li>
                                    <a href="#">Zoom Meeting</a>
                                </li>
                            </ul>
                        </li>

                        <li @click="toggleDropdown('blog')">
                            Blog
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content dropdown-content-blog py-3"
                                v-show="dropdowns.blog"
                            >
                                <li><a href="#">Blog Grid</a></li>
                                <li><a href="#">Blog Masorny</a></li>
                                <li><a href="#">Blog Classic</a></li>
                                <li><a href="#">Blog List</a></li>
                            </ul>
                        </li>
                        <li @click="toggleDropdown('shop')">
                            Shop
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul
                                class="dropdown-content dropdown-content-shop py-3"
                                v-show="dropdowns.shop"
                            >
                                <li><a href="#">Shop Left Sidebar</a></li>
                                <li><a href="#">Shop Right Sidebar</a></li>
                                <li><a href="#">Cart</a></li>
                                <li><a href="#">Wish List</a></li>
                                <li><a href="#">Single Product </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- colonna icone -->
                <div class="col-2 icon">
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
        </div>
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

.col-8 {
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
        cursor: pointer;
    }

    .fa-solid {
        margin-left: 10px;
        font-size: 10px;
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
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 500;
    transition: 1s;
    border-bottom: 5px solid black;
    font-size: 15px;

    li {
        border-radius: 6px;
        color: #333;
        padding: 10px 30px;
    }
    a:hover {
        color: black;
        transition: 0.3s;
        cursor: pointer;
    }
}
.dropdown-content-home {
    width: 95%;
    left: 0;
    right: 0;
}

.dropdown-content-pages {
    width: 15%;
    right: 50%;
}

.dropdown-content-courses {
    width: 15%;
    right: 43%;
    .fa-solid,
    .fa-chevron-right {
        margin-left: 70px;
    }
    .drop-down-below {
        width: 200px;
        display: block;
        border: 1px solid black;
        position: absolute;
        left: 100%;
        top: 80%;
        background-color: white;
        z-index: 300;
        border-bottom: 5px solid black;
    }
}

.dropdown-content-features {
    width: 15%;
    right: 34%;
}

.dropdown-content-blog {
    width: 15%;
    right: 25%;
}

.dropdown-content-shop {
    width: 15%;
    right: 18%;
}

// COLONNA ICONE
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
        display: none;
    }
    @media all and (max-width: 968px) {
        .hidden {
            display: flex;
        }
    }
}
</style>
