<script>
export default {
    name: 'AppHome',
    data() {
        return {
            // DATA LUCA
            // DATA CAROSELLO
            currentIndex: 0,
            testimonialCards: [
                {
                    title: "It's a choice of quality for people with special needs",
                    paragraph:
                        "I'm a very strict person so i require everithing to be organized and neat. Then, I.ll be able to make things right and shine. MaxCoach guys just got me.",
                    info: [
                        {
                            img: '../src/assets/images/artist-testimonial-avatar-02.jpg',
                            name: 'Florence Themes',
                            role: '/ Multimedia Admin',
                        },
                    ],
                },
                {
                    title: 'High level of efficiency and scientific teaching methods',
                    paragraph:
                        'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from syllabus. Great study portal for people like me.',
                    info: [
                        {
                            img: '../src/assets/images/artist-testimonial-avatar-04.jpg',
                            name: 'Mina Hollace',
                            role: '/ Freelancer',
                        },
                    ],
                },
                {
                    title: 'Professional team of specialists and passionate mentors at reach',
                    paragraph:
                        'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    info: [
                        {
                            img: '../src/assets/images/artist-testimonial-avatar-01.jpg',
                            name: 'Madley Pondor',
                            role: '/ IT Specialist',
                        },
                    ],
                },
                {
                    title: 'The MaxCoach team works really hard to ensure high quality',
                    paragraph:
                        'I am happy of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.',
                    info: [
                        {
                            img: '../src/assets/images/artist-testimonial-avatar-03.jpg',
                            name: 'Luvic Dubble',
                            role: '/ Private Tutor',
                        },
                    ],
                },
            ],
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

    computed: {
        // Metodo calcolato per definire lo stile del carosello in base all'indice corrente
        carouselStyle() {
            // Calcola la percentuale della dimensione di cui si deve spostare lo slide al cambio di card
            // Moltiplicalo per -1, per invertire la direzione della traslazione
            const percentualeTraslazione =
                -1 *
                (this.currentIndex *
                    (33.333 / (this.testimonialCards.length - 1)))
            // Restituzione di un oggetto con le proprietà di stile
            return {
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(${percentualeTraslazione}%)`,
            }
        },
    },
    methods: {
        // Metodo per passare a una determinata slide
        goToSlide(index) {
            // Imposta l'indice corrente al valore specificato
            this.currentIndex = index
        },
    },
}
</script>
<template>
    <!-- SEZIONI ALE -->
    <section
        class="presentation col-12 d-flex align-items-center justify-content-center"
    >
        <div class="DittoShape">
            <img
                class="MaledettoSvg"
                src="../assets/images/Orange-Ditto-Shape.svg"
                alt=""
            />
        </div>

        <div class="DittoShapeBlue">
            <img
                class="MaledettoSvgButInBlue"
                src="../assets/images/DittoShapeBlue.svg"
                alt=""
            />
        </div>

        <div class="PuntiniSpasticiLunghi">
            <img src="../assets/images/artist-shape-03.png" alt="" />
        </div>

        <div class="IHaveADream">
            <img
                src="../assets/images/artist-hero-image-03-204x300.png"
                alt=""
            />
        </div>

        <div class="ComeLeFoglie">
            <img src="../assets/images/artist-shape-04-127x300.png" alt="" />
        </div>

        <div class="ArtAttack">
            <img src="../assets/images/artist-shape-05-300x198.png" alt="" />
        </div>

        <div class="PuntiniSpastici">
            <img src="../assets/images/maxcoach-shape-12-150x150.png" alt="" />
        </div>

        <div class="YouStupidMonkey">
            <img src="../assets/images/artist-hero-image-01.jpg" alt="" />
        </div>

        <div class="container-fluid Martin">
            <img src="../assets/images/artist-hero-image-04.jpg" alt="" />
        </div>

        <div class="colorsImg">
            <img
                src="../assets/images/artist-hero-image-02-232x300.jpg"
                alt=""
            />
        </div>

        <div class="col-5 HelloImMartin">
            <h1 class="cursive fw-bold fs-1 text-center">Hello, I'm Martin</h1>
            <p class="fw-bolder text-center fw-bold fs-1">
                Artist Coaching And Mentoring <br />
                Might Be for You
            </p>
            <div class="d-flex justify-content-center">
                <button class="btn-orange fs-6">Get Started Today</button>
            </div>
        </div>
    </section>
    <section
        class="coaching bg-white col-12 d-flex p-5 my-5 justify-content-center"
    >
        <div class="col-5 HelloImMartin">
            <h1 class="cursive fs-2 fw-bold text-center">Artist coaching</h1>
            <p class="fw-bolder text-center fw-bold fs-2">
                I understand what it takes to create. <br />
                I can help you with
            </p>
            <div class="d-flex justify-content-center"></div>
        </div>
    </section>

    <!-- SEZIONI LUCA -->
    <!-- sezione get started -->
    <section class="section-margin">
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
                        <h4 class="cursive">Martin Garrix</h4>
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
    <section class="section-margin">
        <div class="container-fluid d-flex justify-content-center">
            <div class="row">
                <div class="col-4 pos-relative">
                    <div class="card">
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
        </div>
    </section>
    <!-- sezione slider -->
    <section class="section-margin slider-bg-color">
        <div class="container-fluid">
            <div class="row m-5">
                <div class="text-center">
                    <h2 class="cursive">Testimonials</h2>
                    <h3>Why do people love me?</h3>
                </div>
            </div>

            <div class="carousel-container">
                <div class="carousel" :style="carouselStyle">
                    <div
                        v-for="(card, index) in testimonialCards"
                        :key="index"
                        class="carousel-col d-flex justify-content-between p-4 mx-1"
                    >
                        <!-- Tuo contenuto del carousel qui -->
                        <div class="card carousel-card border-0 p-5">
                            <div class="text">
                                <h5 class="mb-4">{{ card.title }}</h5>
                                <p class="mt-3">{{ card.paragraph }}</p>
                                <div class="d-flex my-5">
                                    <div class="container-img">
                                        <img
                                            class="shrink"
                                            :src="card.info[0].img"
                                            alt=""
                                        />
                                    </div>
                                    <div class="info">
                                        <h6 class="ms-4">
                                            {{ card.info[0].name }}
                                        </h6>
                                        <span class="ms-4">{{
                                            card.info[0].role
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bullet navigation -->
                <div id="bullets" class="d-flex justify-content-center my-5">
                    <div
                        v-for="(card, index) in testimonialCards"
                        :key="index"
                        class="bullet"
                        @click="goToSlide(index)"
                    ></div>
                </div>
            </div>
        </div>
    </section>
    <!-- sezione card shop-->
    <section class="section-margin">
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
                    v-for="card in cardShop"
                >
                    <div
                        class="card mb-5 border-0"
                        style="width: 21rem; height: 30rem"
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
                    <button class="btn-light-orange mt-5">
                        View all Courses <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- SEZIONI DOME -->
    <section class="my-3" id="section1-dome">
        <div>
            <div class="text-center mt-5">
                <!-- La classe "text-center" allinea il testo al centro -->
                <h2 class="cursive">Article and Tips</h2>
                <h3>Latest From The Blog</h3>
            </div>
        </div>

        <div class="container-fluid" id="article-tips">
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
                <a href=""><span class="span-orange" style="font-weight: 700">View all posts <i class="fa-solid fa-arrow-right" style="color: #ff6600;"></i></span></a>
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
                                <img
                                    src="../assets/images/artist-event-04-250x300.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div class="col-md-8" id="descrizione-col8">
                                <div class="card-body">
                                    <p class="card-text">
                                        <small class="text-body-secondary"
                                            >APR 22,2021</small
                                        >
                                    </p>
                                    <h5 class="card-title">
                                        Storytelling Workshop
                                    </h5>
                                    <p class="card-text">
                                        <small class="text-body-secondary"
                                            ><i
                                                class="fa-solid fa-location-dot"
                                            ></i>
                                            Texas,US</small
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card border-0">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img
                                    src="../assets/images/artist-event-03-250x300.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div class="col-md-8" id="descrizione-col8">
                                <div class="card-body">
                                    <p class="card-text">
                                        <small class="text-body-secondary"
                                            >APR 22,2021</small
                                        >
                                    </p>
                                    <h5 class="card-title">
                                        Storytelling Workshop
                                    </h5>
                                    <p class="card-text">
                                        <small class="text-body-secondary"
                                            ><i
                                                class="fa-solid fa-location-dot"
                                            ></i>
                                            Texas,US</small
                                        >
                                    </p>
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
                                    <p class="card-text">
                                        <small class="text-body-secondary"
                                            >NOV 23,2020</small
                                        >
                                    </p>
                                    <h5 class="card-title">
                                        Interntional Art Fair 2020
                                    </h5>
                                    <p class="card-text">
                                        <small class="text-body-secondary"
                                            ><i
                                                class="fa-solid fa-location-dot"
                                            ></i>
                                            Hamburg, Germany</small
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img
                                    src="../assets/images/artist-event-02-250x300.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card border-0">
                        <div class="row no-gutters">
                            <div class="col-md-8" id="descrizione-col8">
                                <div class="card-body">
                                    <p class="card-text">
                                        <small class="text-body-secondary"
                                            >DEC 15,2020</small
                                        >
                                    </p>
                                    <h5 class="card-title">
                                        Street Perfomance: Call of Artist
                                    </h5>
                                    <p class="card-text">
                                        <small class="text-body-secondary"
                                            ><i
                                                class="fa-solid fa-location-dot"
                                            ></i>
                                            Illinois,US</small
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img
                                    src="../assets/images/artist-event-01-250x300.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container-fluid" id="container-newsletter">
            <div class="row" id="row-newsletter">
                <div class="col d-flex justify-content-between">
                    <img
                        src="../assets/images/artist-shape-color-paint-top-left.png"
                        alt=""
                    />

                    <div class="col-3" id="div-newsletter">
                        <p class="text-white" id="p-newsletter">
                            New Sletter To Get in Touch
                        </p>
                    </div>

                    <div class="col-6">
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Your e-mail"
                            
                        />
                    
                    </div>

                    <img
                        src="../assets/images/artist-shape-color-paint-bottom-right.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

// STILI ALE
.MaledettoSvg {
    height: 150px;
}

.MaledettoSvgButInBlue {
    height: 500px;
    width: 400px;
}

.DittoShapeBlue {
    position: absolute;
    z-index: 12;
    top: 30%;
    left: 0;
    transform: scaley(-1);
}

.PuntiniSpasticiLunghi {
    position: absolute;
    z-index: 12;
    top: 20%;
    left: 1%;
}
.IHaveADream {
    position: absolute;
    z-index: 12;
    top: 50%;
    left: 25%;
}

.ComeLeFoglie {
    position: absolute;
    z-index: 11;
    top: 10%;
    left: 80%;
}
.ArtAttack {
    position: absolute;
    z-index: 11;
    top: 71%;
    left: 70%;
}

.DittoShape {
    position: absolute;
    z-index: 12;
    top: 65%;
    left: 60%;
}
.PuntiniSpastici {
    position: absolute;
    z-index: 12;
    top: 75%;
    left: 65%;
}
.colorsImg {
    position: absolute;
    z-index: 12;
    top: 30%;
    left: 20%;
}

.YouStupidMonkey {
    position: absolute;
    z-index: 13;
    top: 50%;
    left: 10%;
}
.HelloImMartin {
    position: absolute;
    z-index: 15;
}
.Martin {
    position: absolute;
    z-index: 14;
    top: 25%;
    left: 65%;
}
.coaching {
    position: relative;
    height: 500px;
    background-color: #fbf9f6;
}
.presentation {
    position: relative;
    height: 700px;
    background-color: #fbf9f6;
}

// STILI LUCA

.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}

.section-margin {
    margin: 100px 0;
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

// SEZIONE CAROSELLO

.carousel-controls {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.slide-control {
    font-size: 24px;
}
.shrink {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.carousel-container {
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    position: relative;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-col {
    flex: 0 0 calc(100% / 3);
    height: 27rem;
}

.bullet {
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.slider-bg-color {
    background-color: #faf8f6;
}

// SEZIONE STILI SHOP

// STILI DOME
#section1-dome{
    background-color:#F5F7FA;
    padding-top:20px;
    padding-bottom:40px;
}
.container-fluid {
    width: 95%;
    margin-top: 35px;
}
#article-tips {
    background-image: url(../assets/images/maxcoach-shape-14-1536x343.png),
        url(../assets/images/maxcoach-shape-12.png);
    background-repeat: no-repeat;
    
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
    transition: 1.7s;
}

.span-orange {
    color: $tertiary-color;
    position: relative;
}

.span-orange:hover {
    border-bottom: 1px solid;
}

#descrizione-col8 {
    align-items: center;
    display: flex;
    padding-left: 50px;
}

#container-newsletter {
    background-color: #244186;
    width: 100%;
    position: relative;
}

#exampleFormControlInput1 {
    background-color: rgba(36, 65, 134, 0);
    border: none; /* Rimuovi i bordi */
    border-radius: 0;
    outline: none; /* Rimuovi l'outline al focus */
    box-shadow: none; /* Rimuovi l'ombra al focus */
    border-bottom: 2px solid rgba(255, 255, 255, 0.733);
    width: 45%;
    position: absolute;
    top: 40%;
    left: 40%;
    color: white;
}
.form-control::placeholder {
    color: white; /* Colore del testo del placeholder */
    font-size: 24px;
    font-weight: 300;
}

#div-newsletter {
    display: flex;
    align-items: center;
    text-align: right;
    position: absolute;
    top: 20%;
    left: 7%;
    font-size: 40px;
    font-family: 'Playfair Display', serif;
}
</style>
