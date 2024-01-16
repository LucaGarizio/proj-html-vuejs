<script>
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'

export default {
    // data() {
    //     return {
    //         navbuttons: [
    //             {
    //                 :

    //             },
    //             {
    //                 img: 'src/assets/images/artist-course-07-480x480.jpg',
    //                 price: '$21.00',
    //                 title: 'Drawing and Shading: Complete Course',
    //                 lessons: '14 Lessons',
    //                 student: '50 Students',
    //             },
    //             {
    //                 img: 'src/assets/images/artist-course-06-480x480.jpg',
    //                 price: '$19.00',
    //                 title: 'The Color Theory for Digital Artist',
    //                 lessons: '7 Lessons',
    //                 student: '50 Students',
    //             },
    //             {
    //                 img: 'src/assets/images/artist-course-05-480x480.jpg',
    //                 price: '$35.00',
    //                 title: 'Ultimate Guide to Digital Sketching for Beginner',
    //                 lessons: '14 Lessons',
    //                 student: '50 Students',
    //             },
    //             {
    //                 img: 'src/assets/images/artist-course-04-480x480.jpg',
    //                 price: '$19.00',
    //                 title: 'Portrait Drawing The Smart Way',
    //                 lessons: '2 Lessons',
    //                 student: '50 Students',
    //             },
    //             {
    //                 img: 'src/assets/images/artist-course-03-480x480.jpg',
    //                 price: '$19.00',
    //                 title: 'Mastering Watercolor Painting from Beginner',
    //                 lessons: '9 Lessons',
    //                 student: '50 Students',
    //             },
    //             {
    //                 img: 'src/assets/images/artist-course-02-480x480.jpg',
    //                 price: '$25.00',
    //                 title: 'The Art & Science of Drawing',
    //                 lessons: '4 Lessons',
    //                 student: '50 Students',
    //             },
    //             {
    //                 img: 'src/assets/images/artist-course-01-480x480.jpg',
    //                 price: '$22.00',
    //                 title: 'The Colored Pencil Drawing Course',
    //                 lessons: '6 Lessons',
    //                 student: '50 Students',
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
        <div class="col-4">
            <img
                class="img-fluid max-logo"
                src="../assets/images/dark-logo.png"
                alt=""
            />
        </div>
        <div class="col-4">
            <div class="dropdown">
                <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <Router-Link class="dropdown-item" :to="{ name: 'home' }"
                        >Home</Router-Link
                    >
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                        <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#"
                            >Something else here</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="container col-4">
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

.max-logo {
    height: 25px;
    width: 150px;
}

ul {
    display: flex;
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
