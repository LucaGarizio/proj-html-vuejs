<script>
export default {
    name: 'AppHome',
    data() {
        return {
            // data sezione shop
            cards: [
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
    <!-- ale -->
    <section></section>
    <section></section>

    <!-- luca -->
    <!-- sezione get started -->
    <section class="my-3">
        <div class="my container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="l col-4 text-center">
                    <img
                        class="pb-2"
                        src="../assets/images/artist-quote-icon.png"
                        alt=""
                    />
                    <h2 class="fs-1 line-height pb-3">
                        I coach and mentor <br />
                        visual artists,like <br />
                        you, to Create Like <br />
                        you Mean It
                        <h4 class="cursiv">Martin Garrix</h4>
                    </h2>
                </div>
                <div class="l col-4 offset-2 pt-5">
                    <p class="">
                        As a coach and mentor, my ultimate goal is to motivate
                        visual artists toward inspired action. I help you get
                        you back on track to being the productive, creative,
                        meaningful and authentic artist you truly want to be.I
                        support artists in crafting and living a creative life
                        as well as feeling good about themselves and their art.
                        <br />
                        <br />
                        As an artist and an educator for nearly 30 years, I
                        understand what it takes to create.
                    </p>
                    <button class="btn-light-orange">Get started today</button>
                </div>
            </div>
        </div>
    </section>
    <!-- sezione video youtube -->
    <section class="">
        <div class="container-fluid d-flex justify-content-center">
            <div class="row">
                <div class="col pos-relative">
                    <img
                        class="youtube-video"
                        src="../assets/images/artist-video-poster.jpg"
                        alt="anteprima"
                    />
                    <div class="img-box-overlay">
                        <img
                            class="animated-bg-top-image"
                            src="../assets/images/maxcoach-shape-12-100x100.png"
                            alt=""
                        />
                        <img
                            class="animated-bg-bottom-image"
                            src="../assets/images/maxcoach-shape-12-100x100.png"
                            alt=""
                        />
                        <div class="overlay">
                            <a href="#">
                                <img
                                    src="../assets/images/icon-youtube-play.png"
                                    alt="youtube icon play"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- sezione slider -->
    <section class="my-3"></section>
    <!-- sezione card shop-->
    <section>
        <div class="container-fluid">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="cursive">Artist coaching</h2>
                    <h3>Latest Online Courses</h3>
                </div>
            </div>
            <div class="row">
                <div
                    class="col-3 my-3 d-flex justify-content-center"
                    v-for="card in cards"
                >
                    <div
                        class="card mb-5 border-0"
                        style="width: 21rem; height: 30rem; max-width: 100%"
                    >
                        <img
                            :src="card.img"
                            class="card-img-top mb-2 rounded-0"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title mb-3">{{ card.price }}</h5>

                            <h4 class="card-text mb-3">
                                {{ card.title }}
                            </h4>
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
                    <button class="btn-light-orange">
                        View all Courses <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- dome -->
    <section class="my-3">
        <div>
            <div class="text-center mt-5">
                <!-- La classe "text-center" allinea il testo al centro -->
                <h2 class="cursive">Article and Tips</h2>
                <h3>Latest From The Blog</h3>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="row justify-content-around">
                        <div class="col-md-3">
                            <div class="card border-0">
                                <img
                                    src="../assets/images/artist-blog-03-480x356.jpeg"
                                    class="card-img-top"
                                    alt="Immagine 1"
                                />
                                <div class="card-body">
                                    <p class="card-text">ARTIST</p>
                                    <h4>
                                        Brush Strokes Energize Trees in
                                        Paintings
                                    </h4>
                                    <p>May 15, 2020</p>
                                    <p>2,157 Views</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="card border-0">
                                <img
                                    src="../assets/images/artist-blog-02-500x680.jpg"
                                    class="card-img-top"
                                    alt="Immagine 2"
                                />
                                <div class="card-body-centrale">
                                    <p class="card-text">Artist</p>
                                    <h4 class="title-center">
                                        Connection Between Self-Portraits and
                                        Idantity
                                    </h4>
                                    <p>May 15, 2020</p>
                                    <p>2,167 Views</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card border-0">
                                <img
                                    src="../assets/images/artist-blog-01-480x356.jpg"
                                    class="card-img-top"
                                    alt="Immagine 3"
                                />
                                <div class="card-body">
                                    <p class="card-text">ARTIST</p>
                                    <h4>
                                        Pocket-Sized Notebooks Hold Minature
                                        Paintings
                                    </h4>
                                    <p>May 15, 2020</p>
                                    <p>2,020 Views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="text-center mt-5">
                <!-- La classe "text-center" allinea il testo al centro -->
                <span>Get into details now? </span>
                <a href=""><span class="span-orange">View all posts</span></a>
            </div>
        </div>

    </section>


    <section>
        <div>
            <div class="text-center mt-5">
                <!-- La classe "text-center" allinea il testo al centro -->
                <h2 class="cursive">Upcoming Event</h2>
                <h3>Let's Work Together</h3>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-5">
                    <!-- Card 1 -->
                <div class="col-md-6">
                    <div class="card border-0">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="../assets/images/artist-event-04-250x300.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="col-md-8" id="descrizione-col8">
                                <div class="card-body">
                                    <p class="card-text"><small class="text-body-secondary">APR 22,2021</small></p>
                                    <h5 class="card-title">Storytelling Workshop</h5>
                                    <p class="card-text"><small class="text-body-secondary">Texas,US</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card border-0">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="../assets/images/artist-event-03-250x300.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="col-md-8" id="descrizione-col8">
                                <div class="card-body">
                                    <p class="card-text"><small class="text-body-secondary">APR 22,2021</small></p>
                                    <h5 class="card-title">Storytelling Workshop</h5>
                                    <p class="card-text"><small class="text-body-secondary">Texas,US</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="row mt-5">
                <div class="col-md-6">
                    <div class="card border-0">
                        <div class="row no-gutters">
                            <div class="col-md-8" id="descrizione-col8">
                                <div class="card-body">
                                    <p class="card-text"><small class="text-body-secondary">NOV 23,2020</small></p>
                                    <h5 class="card-title">Interntional Art Fair 2020</h5>
                                    <p class="card-text"><small class="text-body-secondary">Hamburg, Germany</small></p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src="../assets/images/artist-event-02-250x300.jpg" class="card-img-top" alt="...">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card border-0">
                        <div class="row no-gutters">
                            <div class="col-md-8" id="descrizione-col8">
                                <div class="card-body">
                                    <p class="card-text"><small class="text-body-secondary">DEC 15,2020</small></p>
                                    <h5 class="card-title">Street Perfomance: Call of Artist</h5>
                                    <p class="card-text"><small class="text-body-secondary">Illinois,US</small></p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src="../assets/images/artist-event-01-250x300.jpg" class="card-img-top" alt="...">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </section>

    <section>

        <div class="container-fluid" id="container-newsletter">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <img src="../assets/images/artist-shape-color-paint-top-left.png" alt="">
                                    <!-- Spazio vuoto -->
                    <div style="width: 20px;"></div>
                    <img src="../assets/images/artist-shape-color-paint-bottom-right.png" alt="">
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

// STILI ALE

// STILI LUCA

.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}

section {
    margin: 50px 0;
}
.l,
.col-4 {
    border: 1px solid black;
}

// SEZIONE YOUTUBE VIDEO

.pos-relative {
    position: relative;
    width: 100%;
    .youtube-video {
        z-index: 1;
    }
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.animated-bg-top-image {
    position: absolute;
    top: 0%;
    left: -4%;
    z-index: -1;
}

.animated-bg-bottom-image {
    position: absolute;
    bottom: -5%;
    right: -4%;
    z-index: -1;
}
// SEZIONE SHOP

// STILI DOME

.container-fluid{
    width: 95%;
}
.card-body-centrale {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
}
.title-center {
    font-size: 40px;
}

.card-img-top:hover {
    transform: scale(1.1);
    transition: 1.5s;
}

.span-orange{
    color: $tertiary-color;
     position: relative;
}

.span-orange:hover {
    border-bottom: 1px solid;
    
}

#descrizione-col8{
    align-items: center;
    display: flex;
    padding-left: 50px;
}

#container-newsletter {
    background-color: #244186;
    width:100%;
}
</style>
