<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            currentIndex: 0,
            testimonialCards: [
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-02.jpg',

                    name: 'Mina Hollace',
                    role: '/ Freelancer',
                    paragraph:
                        'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-04.jpg',

                    name: ' Madley Pondor',
                    role: '/ IT Specialist',
                    paragraph:
                        'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-01.jpg',

                    name: 'Florence Themes',
                    role: '/ Multimedia Admin',
                    paragraph:
                        "I'm a very strict person so i require everithing to be organized and neat. Then, I.ll be able to make things right and shine. MaxCoach guys just got me.",
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-03.jpg',

                    name: 'Luvic Dubble',
                    role: '/ Privare Tutor',
                    paragraph:
                        'I am happy of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.',
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-02.jpg',

                    name: 'Mina Hollace',
                    role: '/ Freelancer',
                    paragraph:
                        'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-04.jpg',

                    name: ' Madley Pondor',
                    role: '/ IT Specialist',
                    paragraph:
                        'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                },
            ],
        }
    },
    computed: {
        // Metodo calcolato per definire lo stile del carosello in base all'indice corrente
        carouselStyle() {
            // Calcola la percentuale della dimensione di cui si deve spostare lo slide al cambio di card
            // Moltiplicalo per -1, per invertire la direzione della traslazione
            const translationPercentage =
                -1 *
                (this.currentIndex * (250 / (this.testimonialCards.length - 1)))
            // Restituzione di un oggetto con le proprietà di stile
            return {
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(${translationPercentage}%)`,
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
    <section class="padding-y" id="about">
        <div class="container">
            <div class="row d-flex justify-content-center mb-5">
                <div class="col-7">
                    <h6 class="text-center">education for everyone</h6>
                    <h2 class="mb-4 text-center">
                        Online <span>Coaching Lessons</span> For Remote
                        Learning.
                    </h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card text-center" style="width: 18rem">
                        <i class="fa-regular fa-flag"></i>
                        <div class="card-body">
                            <h5 class="card-title">Life Mentoring</h5>
                            <p class="card-text">
                                Get some soul healing and guidance for your
                                feature career and vocational directions
                            </p>
                            <a href="#"
                                >Start here
                                <i class="fa-solid fa-arrow-right"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card text-center" style="width: 18rem">
                        <i class="fa-solid fa-gear"></i>
                        <div class="card-body">
                            <h5 class="card-title">Self Development</h5>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#"
                                >Discover now
                                <i class="fa-solid fa-arrow-right"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card text-center" style="width: 18rem">
                        <i class="fa-regular fa-life-ring"></i>
                        <div class="card-body">
                            <h5 class="card-title">Ask Consultancy</h5>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#"
                                >Get Free Quote
                                <i class="fa-solid fa-arrow-right"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card text-center" style="width: 18rem">
                        <i class="fa-solid fa-display"></i>
                        <div class="card-body">
                            <h5 class="card-title">Remote Learning</h5>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#"
                                >Start now
                                <i class="fa-solid fa-arrow-right"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- sezione video youtube -->
    <section class="margin-top" id="youtube-section">
        <div class="container-fluid d-flex justify-content-center">
            <div class="row">
                <div class="col pos-relative">
                    <div class="img-box-overlay">
                        <img
                            class="dittoBlue-section-youtube rotating-image-top-right"
                            src="../assets/images/Orange-Ditto-Shape.svg"
                            alt=""
                        />
                        <img
                            class="animated-bg-top-image rotating-image-left"
                            src="../assets/images/maxcoach-shape-12-100x100.png"
                            alt=""
                        />
                        <img
                            class="animated-bg-bottom-image rotating-image-left"
                            src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/maxcoach-shape-07.png"
                            alt=""
                        />
                        <div class="overlay">
                            <img
                                src="../assets/images/icon-youtube-play.png"
                                alt="youtube icon play"
                            />
                        </div>
                    </div>
                    <div class="circle rotating-image-right">
                        <div class="inner-circle"></div>
                    </div>
                    <div class="card border-0">
                        <img
                            class="youtube-video"
                            src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/about-me-popup-video-poster-2.jpg"
                            alt="anteprima"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="margin-top pt-5" id="carousel">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center mb-5">
                <div class="col-4">
                    <h6 class="text-center">
                        equip yourself with the power of education
                    </h6>
                    <h2 class="mb-4 text-center">
                        Learn the secrets to <span>Life Success</span> , these
                        people have got the key.
                    </h2>
                </div>
            </div>

            <div class="carousel-container">
                <div class="carousel" :style="carouselStyle">
                    <div
                        v-for="card in testimonialCards"
                        :key="card.name"
                        class="carousel-col mx-2"
                    >
                        <div class="card carousel-card border p-4">
                            <div class="info d-flex align-items-center">
                                <img
                                    class="shrink me-3"
                                    :src="card.img"
                                    alt=""
                                />
                                <div class="me-1" v-for="star in 5">
                                    <i
                                        :class="[
                                            'fa-solid',
                                            'fa-star',

                                            star ? 'fa-star-colored' : '',
                                        ]"
                                    ></i>
                                </div>
                                <h5 class="p-2 mt-2">{{ card.name }}</h5>
                                <span>{{ card.role }}</span>
                            </div>
                            <div class="text">
                                <p class="mt-3">{{ card.paragraph }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bullet navigation -->
                <div id="bullets" class="d-flex justify-content-center my-5">
                    <div
                        v-for="(bullet, index) in 4"
                        :key="index"
                        class="bullet"
                        @click="goToSlide(index)"
                    ></div>
                </div>
            </div>
        </div>
    </section>
    <section id="sponsor" class="my-5">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col">
                    <img
                        src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/client-logo-01.png"
                        alt=""
                    />
                </div>
                <div class="col">
                    <img
                        src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/client-logo-02.png"
                        alt=""
                    />
                </div>
                <div class="col">
                    <img
                        src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/client-logo-03.png"
                        alt=""
                    />
                </div>
                <div class="col">
                    <img
                        src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/client-logo-04.png"
                        alt=""
                    />
                </div>
                <div class="col">
                    <img
                        src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/client-logo-05.png"
                        alt=""
                    />
                </div>
                <div class="col">
                    <img
                        src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/client-logo-06.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>

    <section id="numbers" class="padding-y">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-3">
                    <h2>1.926</h2>
                    <h6>finished sessions</h6>
                </div>
                <div class="col-3">
                    <h2>3.092 +</h2>
                    <h6>Online Enrollment</h6>
                </div>
                <div class="col-3">
                    <h2>200</h2>
                    <h6>Subjects Taught</h6>
                </div>
                <div class="col-3">
                    <h2>100%</h2>
                    <h6>Satisfaction Rate</h6>
                </div>
            </div>
        </div>
    </section>
    <section id="newletters">
        <div class="container-fluid">
            <div class="row padding-y justify-content-center">
                <div class="col-4 text-center">
                    <h2 class="mb-4">
                        Sign up for our <span>Newsletters</span>
                    </h2>
                    <p>
                        Enter your email address to register to our newsletter
                        subscription delivered on a regular basis!
                    </p>
                </div>
                <div id="form" class="d-flex justify-content-center mt-5">
                    <div class="col-4 d-flex">
                        <input
                            type="email"
                            class="form-control"
                            id="inputEmail3"
                            placeholder="Email *"
                        />

                        <button type="submit" class="btn-green">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

h6 {
    color: #b1afc0;
    text-transform: uppercase;
}

h2 {
    color: #3f3a64;
    span {
        color: #20ad96;
    }
}
#about {
    background-color: #f6f6f6;

    .col-3 {
        .card {
            padding: 30px 0;
            border: none;
            background-color: #f6f6f6;
            &:hover {
                background-color: #fff;
            }
        }

        a {
            color: #878ba1;
        }
    }
}
.padding-y {
    padding: 100px 0 100px;
}

.margin-top {
    margin-top: 100px !important;
}

.margin-bottom {
    padding-bottom: 100px;
}

.padding-y {
    padding: 100px 0;
}

.fa-flag,
.fa-display,
.fa-life-ring,
.fa-gear {
    font-size: 50px;
}
.fa-arrow-right {
    margin-left: 10px;
    color: #878ba1;
}

// sezione youtube
// SEZIONE YOUTUBE VIDEO

#youtube-section {
    .container-fluid {
        .rotating-image-left,
        .rotating-image-right,
        .rotating-image-top-right {
            transition: transform 1s ease;
        }

        .col:hover .rotating-image-left {
            transform: translateX(-40px) translateY(-30px);
        }
        .col:hover .rotating-image-right {
            transform: translateX(40px) translateY(10px);
        }
        .col:hover .rotating-image-top-right {
            transform: translateX(40px) translateY(-50px);
        }
    }

    .card {
        position: relative;
        overflow: hidden;
    }
    .youtube-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .card:hover .youtube-video {
        transform: scale(1.1);
    }
}
.pos-relative {
    position: relative;
}
.youtube-video {
    z-index: 1;
}
.circle {
    position: absolute;
    top: 10%;
    left: 105%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ecc5ab;
    .inner-circle {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background-color: white;
    }
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
}

.animated-bg-top-image {
    width: 180px;
    position: absolute;
    top: -5%;
    left: -6%;
    z-index: -1;
}

.animated-bg-bottom-image {
    width: 180px;
    position: absolute;
    bottom: -10%;
    right: -7%;
    z-index: -1;
}
.dittoBlue-section-youtube {
    position: absolute;
    width: 250px;
    height: 250px;
    top: -13%;
    left: -10%;
    z-index: -2;
}

// SEZIONE CAROSELLO
#carousel {
}
.carousel-controls {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.slide-control {
    font-size: 24px;
}
.shrink {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.carousel-container {
    overflow: hidden;
    width: 90%; /* Aggiorna la larghezza a 100% */
    margin: 0 auto;
    position: relative;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-col {
    flex: 0 0 49%; /* Ora ogni colonna avrà il 50% della larghezza */
}

.carousel-card {
    width: 95%;
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

.fa-star-colored {
    color: #ffbb00;
}

// sezione number
#numbers {
    background-color: #f5f7fa;
    h6 {
        text-transform: uppercase;
    }
    h2 {
        color: #20ad96;
    }
}

// sezione newletter
span {
    color: #20ad96;
    font-weight: lighter;
}

#newletters {
    input {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        background-color: #f5f5f5;
    }
    .btn-green {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }
}
</style>
