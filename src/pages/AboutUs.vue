<script>
import MoveToTop from '../components/MoveToTop.vue'
import ChatBox from '../components/ChatBox.vue'
export default {
    // DATA LUCA
    name: 'AboutUs',
    components: {
        MoveToTop,
        ChatBox,
    },
    data() {
        return {
            // variabile chatbox
            visibility: false,
            // VARIABILI PER CONTEGGIO NUMERI
            latestNumber: 0,
            latestNumberCol2: 0,
            latestNumberCol3: 0,
            latestNumberCol4: 0,
            // VARIABILE PER CAROSELLO
            currentIndex: 0,
            // VARIABILE MOVE TO THE TOP
            isScrolled: false,
            testimonialCards: [
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-02.jpg',

                    name: 'Mina Hollace',
                    role: '/ Freelancer',
                    paragraph:
                        'I am free to learn at my own pace, follow my own schedule & choose the subject I want to learn from the syllabus. Great study portal for people like me',
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-04.jpg',

                    name: ' Madley Pondor',
                    role: '/ IT Specialist',
                    paragraph:
                        'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students',
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-01.jpg',

                    name: 'Florence Themes',
                    role: '/ Multimedia Admin',
                    paragraph:
                        "I'm a very strict person so i require everithing to be organized and neat. Then, I.ll be able to make things right and shine. MaxCoach guys just got me",
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-03.jpg',

                    name: 'Luvic Dubble',
                    role: '/ Privare Tutor',
                    paragraph:
                        'I am happy of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels',
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-02.jpg',

                    name: 'Mina Hollace',
                    role: '/ Freelancer',
                    paragraph:
                        'I am free to learn at my own pace, follow my own schedule & choose the subject I want to learn from the syllabus. Great study portal for people like me',
                },
                {
                    img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/testimonial-avata-04.jpg',

                    name: ' Madley Pondor',
                    role: '/ IT Specialist',
                    paragraph:
                        'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students',
                },
            ],
        }
    },
    computed: {
        carouselStyle() {
            // Calcola la percentuale della dimensione di cui si deve spostare lo slide al cambio di card
            // Moltiplicalo per -1, per invertire la direzione della traslazione
            const translationPercentage =
                -1 *
                (this.currentIndex * (250 / (this.testimonialCards.length - 1)))
            // Restituzione di un oggetto con le proprietà di stile
            return {
                transition: 'transform 1s ease-in-out',
                transform: `translateX(${translationPercentage}%)`,
            }
        },
    },
    methods: {
        // Metodo per passare a una determinata slide
        goToSlide(index) {
            // Imposta l'indice corrente al valore indicato
            this.currentIndex = index
        },

        // Funzione per caricare numeri nella prima colonna
        loadNumberCol1() {
            for (let i = 0; i <= 1926; i++) {
                // Utilizza setTimeout per ritardare l'assegnazione del valore
                setTimeout(() => {
                    // Assegna il valore corrente a latestNumber
                    this.latestNumber = i

                    // console.log(i)
                }, i * 5) // Ritarda il calcolo dei numeri
            }
        },

        // carica numeri nella seconda colonna
        loadNumberCol2() {
            for (let i = 0; i <= 3092; i++) {
                setTimeout(() => {
                    this.latestNumberCol2 = i
                    // console.log(i)
                }, i * 3.15)
            }
        },

        // carica numeri nella terza colonna
        loadNumberCol3() {
            for (let i = 0; i <= 200; i++) {
                setTimeout(() => {
                    this.latestNumberCol3 = i
                    // console.log(i)
                }, i * 49)
            }
        },

        // carica i numeri nella quarta colonna
        loadNumberCol4() {
            for (let i = 0; i <= 100; i++) {
                setTimeout(() => {
                    this.latestNumberCol4 = i
                    // console.log(i)
                }, i * 100)
            }
        },
        handleScroll() {
            // Verifica se l'utente sta scorrendo la pagina
            this.isScrolled = window.scrollY > 0
        },
        toggleChatbox() {
            // Inverti lo stato di visibilità della chatbox
            this.visibility = !this.visibility
        },
    },

    mounted() {
        // richiama la funzione per far partire il conteggio
        this.loadNumberCol1()
        this.loadNumberCol2()
        this.loadNumberCol3()
        this.loadNumberCol4()
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>
<template>
    <ChatBox />
    <MoveToTop />
    <!-- SEZIONE ABOUT -->
    <section class="" id="about">
        <div class="container padding">
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
                <div class="col-3" id="card-learning">
                    <div class="card text-center" style="width: 18rem">
                        <i class="fa-regular fa-flag"></i>
                        <div class="card-body mt-3">
                            <h5 class="card-title">Life Mentoring</h5>
                            <p class="card-text pb-3">
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
                        <div class="card-body mt-3">
                            <h5 class="card-title">Self Development</h5>
                            <p class="card-text pb-3">
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
                        <div class="card-body mt-3">
                            <h5 class="card-title">Ask Consultancy</h5>
                            <p class="card-text pb-3">
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
                        <div class="card-body mt-3">
                            <h5 class="card-title">Remote Learning</h5>
                            <p class="card-text pb-3">
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
    <section class="pt-5 pb-1" id="youtube-section">
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
                            <a
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                            >
                                <img
                                    src="../assets/images/icon-youtube-play.png"
                                    alt="youtube icon play"
                                />
                            </a>
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
        <div class="container">
            <div class="row d-flex justify-content-center mb-5">
                <div class="col-5">
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
                        <div class="card carousel-card px-4 py-3">
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
                                <p class="mt-4">{{ card.paragraph }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bullet navigation -->
                <div
                    class="d-flex justify-content-center align-item-center my-5"
                    style="height: 20px"
                >
                    <div
                        v-for="(bullet, index) in 4"
                        :key="index"
                        :class="{ active: index === currentIndex }"
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
    <!-- SEZIONE NUMERI -->
    <section id="numbers" class="padding-y">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-3">
                    <h2>
                        {{ latestNumber }}
                    </h2>
                    <h6>finished sessions</h6>
                </div>
                <div class="col-3">
                    <h2>{{ latestNumberCol2 }} +</h2>
                    <h6>Online Enrollment</h6>
                </div>
                <div class="col-3">
                    <h2>{{ latestNumberCol3 }}</h2>
                    <h6>Subjects Taught</h6>
                </div>
                <div class="col-3">
                    <h2>{{ latestNumberCol4 }} %</h2>
                    <h6>Satisfaction Rate</h6>
                </div>
            </div>
        </div>
    </section>
    <!-- SEZIONE NEWSLETTERS -->
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
                <img
                    class="lines rotating-image-top-right"
                    src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/maxcoach-shape-02.png"
                    alt=""
                />

                <img
                    class="animated-bg-bottom-image rotating-image-left"
                    src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/maxcoach-shape-07.png"
                    alt=""
                />
                <div class="circle rotating-image-right">
                    <div class="inner-circle"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

// CHATBOX SECTION

.padding {
    padding-top: 90px;
}
// MOVE TO THE TOP SECTION
.move-to-top {
    background-color: #20ad96;
}

// COSTUMER SERVICE BUTTON

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
// SECTION ABOUT
#about {
    padding: 100px 0;
    background-color: #fbf2eb;
    .col-3 {
        .card {
            padding: 30px 0;
            border: none;
            background-color: #fbf2eb;
            &:hover {
                background-color: #fff;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                    0 6px 20px 0 rgba(0, 0, 0, 0.1);
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

// SEZIONE YOUTUBE VIDEO
#youtube-section {
    position: relative;
    background-image: url('../assets/images/waveabout.svg');
    background-position-y: 0;
    background-repeat: no-repeat;
}
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
        transform: translateX(100px) translateY(70px);
    }
    .col:hover .rotating-image-top-right {
        transform: translateX(40px) translateY(-50px);
    }
}

.card {
    position: relative;
    overflow: hidden;
    z-index: 10;
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

.pos-relative {
    position: relative;
}

.circle {
    position: absolute;
    top: 4%;
    left: 100%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 20;
    background-color: #ecc5ab;
    animation: circle 3s infinite ease-in-out;
    @keyframes circle {
        0%,
        100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(50px) translateX(30px);
        }
    }
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
    z-index: 11;
}

.animated-bg-top-image {
    animation: points 3s infinite ease-in-out;
    width: 180px;
    position: absolute;
    top: -8%;
    left: -5%;
    z-index: 0;
    @keyframes points {
        0%,
        100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-50px) translateX(-30px);
        }
    }
}

.animated-bg-bottom-image {
    width: 180px;
    position: absolute;
    bottom: -10%;
    right: -10%;
    z-index: -1;
    animation: square 4s infinite ease-in-out;
    @keyframes square {
        0%,
        100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(73px) translateX(-70px);
        }
    }
}
.dittoBlue-section-youtube {
    position: absolute;
    width: 250px;
    height: 250px;
    top: -13%;
    left: -17%;
    z-index: 0;
    animation: ditto 3s infinite ease-in-out;
    @keyframes ditto {
        0%,
        100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-73px) translateX(70px);
        }
    }
}

// SEZIONE CAROSELLO
#carousel {
    .carousel-controls {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 12px 0 rgba(0, 0, 0, 0.19);
    }

    .shrink {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .carousel-container {
        overflow: hidden;
        width: 100%;
        position: relative;
    }

    .carousel {
        display: flex;
    }

    .carousel-col {
        flex: 0 0 49%;

        padding: 10px;
    }

    .carousel-card {
        width: 95%;
        margin: 0 auto;
    }
}
.bullet {
    width: 10px;
    height: 10px;
    background-color: #dcdbe3;
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;
    &:hover {
        transition: 1s;
        width: 11px;
        height: 11px;
        background-color: #3f3a64;
    }
}
.active {
    background-color: #3f3a64;
    width: 11px;
    height: 11px;
}

.slider-bg-color {
    background-color: #faf8f6;
}

.fa-star-colored {
    color: #ffbb00;
}

// SEZIONE NUMERI
#numbers {
    background-color: #f5f7fa;
    h6 {
        text-transform: uppercase;
    }
    h2 {
        color: #20ad96;
    }
}

// SEZIONE NEWLETTERS
span {
    color: #20ad96;
    font-weight: lighter;
}

#newletters {
    .container-fluid {
        position: relative;

        .animated-bg-bottom-image {
            width: 150px;
            position: absolute;
            right: 24%;
            bottom: 30%;
            z-index: -1;
        }
        .circle {
            position: absolute;
            top: 50%;
            left: 25%;
            width: 60px;
            height: 60px;

            border-radius: 50%;
            background-color: #8fd6ca;
            .inner-circle {
                width: 55px;
                height: 40px;
                border-radius: 50%;
                background-color: white;
            }
        }
        .lines {
            position: absolute;
            width: 150px;
            bottom: 25%;
            right: 25%;
            z-index: -1;
            animation: lines 5s infinite ease-in-out;
            @keyframes lines {
                0%,
                100% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(0) translateX(0) rotate(180deg);
                }
            }
        }
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
}
</style>
