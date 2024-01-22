<script>
export default {
    name: 'Shop',
    data() {
        return {
            // DATA LUCA
            // variabile chatbox
            visibility: false,
            // variabile per ritorno a inizio pagina
            isScrolled: false,

            // DATA SEZIONE SHOP
            cardShop: [
                {
                    img: 'src/assets/images/artist-course-08-480x480.jpg',
                    price: '$18.00',
                    title: 'The Acrylic Painting Accademy',
                    lessons: '4 Lessons',
                    student: '50 Students',
                },
                {
                    img: 'src/assets/images/artist-course-07-480x480.jpg',
                    price: '$21.00',
                    title: 'Drawing and Shading: Complete Course',
                    lessons: '14 Lessons',
                    student: '50 Students',
                },
                {
                    img: 'src/assets/images/artist-course-06-480x480.jpg',
                    price: '$19.00',
                    title: 'The Color Theory for Digital Artist',
                    lessons: '7 Lessons',
                    student: '50 Students',
                },
                {
                    img: 'src/assets/images/artist-course-05-480x480.jpg',
                    price: '$35.00',
                    title: 'Ultimate Guide to Digital Sketching for Beginner',
                    lessons: '14 Lessons',
                    student: '50 Students',
                },
                {
                    img: 'src/assets/images/artist-course-04-480x480.jpg',
                    price: '$19.00',
                    title: 'Portrait Drawing The Smart Way',
                    lessons: '2 Lessons',
                    student: '50 Students',
                },
                {
                    img: 'src/assets/images/artist-course-03-480x480.jpg',
                    price: '$19.00',
                    title: 'Mastering Watercolor Painting from Beginner',
                    lessons: '9 Lessons',
                    student: '50 Students',
                },
                {
                    img: 'src/assets/images/artist-course-02-480x480.jpg',
                    price: '$25.00',
                    title: 'The Art & Science of Drawing',
                    lessons: '4 Lessons',
                    student: '50 Students',
                },
                {
                    img: 'src/assets/images/artist-course-01-480x480.jpg',
                    price: '$22.00',
                    title: 'The Colored Pencil Drawing Course',
                    lessons: '6 Lessons',
                    student: '50 Students',
                },
            ],
        }
    },
}
</script>
<template>
    <section class="margin-b" id="shop">
        <img class="tears" src="../assets/images/artist-shape-01.png" alt="" />
        <div class="container-fluid pos-relative">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="cursive">Artist coaching</h2>
                    <h2 class="mb-4">Latest Online Courses</h2>
                </div>
            </div>
            <div class="row">
                <div
                    class="col-3 my-4 d-flex justify-content-center"
                    v-for="card in cardShop"
                >
                    <div
                        class="card border-0 rounded-0"
                        style="width: 21rem; height: 32rem"
                    >
                        <img
                            :src="card.img"
                            class="card-img-top mb-2 rounded-0"
                            alt="..."
                        />
                        <div class="card-body" style="width: 20rem">
                            <h5 class="card-title mb-3">
                                {{ card.price }}
                            </h5>

                            <h4 class="card-text mb-3">{{ card.title }}</h4>
                            <span class="card-link"
                                ><i class="fa-regular fa-file-lines"></i>
                                {{ card.lessons }}</span
                            >
                            <span class="card-link"
                                ><i class="fa-regular fa-user"></i>
                                {{ card.student }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <button class="btn-light-orange mt-3">
                        View all Courses
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

#shop {
    margin-bottom: 100px;
    position: relative;
    .container-fluid {
        width: 90%;
        .card {
            position: relative;
            overflow: hidden;
            width: 21rem;
            height: 32rem;

            h5 {
                color: #f07c44;
            }
        }
        .card-img-top {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
            z-index: 5;
        }

        .card:hover .card-img-top {
            transform: scale(1.1);
        }

        .card-body {
            transition: transform 0.5s ease;
            position: relative;
        }
        .col-3:hover .card-body {
            transform: translateY(-40px);
            transition: 0.8s;
            border: 2px solid #f07c44;
            background-color: #fff;
            z-index: 6;
        }

        span {
            color: #8e8e8e;
            font-size: 14px;
        }
    }
    .tears {
        width: 600px;

        position: absolute;
        bottom: 18%;
        left: -15%;
        z-index: 5;
    }
}

.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}
</style>
