<script>
export default {
    // DATA LUCA
    name: 'AboutUs',
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
    <!-- SEZIONE LUCA -->
    <!-- CHATBOX -->
    <div class="container-fluid chatbox text-white" v-show="visibility">
        <div class="row top">
            <div class="col-12 bg text-center">
                <button>
                    <i class="fa-regular fa-comments"></i
                    ><span class="ms-2">Chat</span>
                </button>
                <div class="logo">
                    <img
                        class="m-2"
                        src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2Ffdb6b692b0ed5000%2Flogothememoveblack_1cwmqwn.png&width=240&height=240&1629251277523"
                        alt=""
                    />
                    <img
                        src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2Ffdb6b692b0ed5000%2Flogothememoveblack_1cwmqwn.png&width=240&height=240&1629251277523"
                        alt=""
                    />
                    <h6>Questions? Chat with us</h6>
                    <span>Was last active 11/10/2023</span>
                </div>
            </div>
            <div class="row medium">
                <div class="col-12">
                    <div class="chat-display"></div>
                </div>
            </div>
            <div class="row bottom">
                <div class="col-12">
                    <div class="chatkeyboard d-flex justify-content-center">
                        <input type="text" placeholder="Compose your text" />
                    </div>
                </div>
            </div>
            <div class="row under-bottom">
                <div class="col-12 d-flex">
                    <div class="icon-left">
                        <i class="fa-regular fa-face-smile"></i>
                        <i class="fa-solid fa-paperclip"></i>
                        <i class="fa-solid fa-bars-staggered"></i>
                    </div>
                    <div class="icon-right">
                        <a
                            href="https://crisp.chat/en/livechat/?ref=chatbox&domain=maxcoach.thememove.com&name=MaxCoach"
                        >
                            <i class="fa-regular fa-message"
                                ><span>crisp</span></i
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="costumer-service" @click="toggleChatbox">
        <i class="fa-solid fa-message"></i>
    </div>
    <div class="move-to-top" v-show="isScrolled">
        <a href="#about">
            <i class="fa-solid fa-arrow-up-long"></i>
        </a>
    </div>
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
    <section class="py-5" id="youtube-section">
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
.chatbox {
    width: 22rem;
    height: 32rem;
    position: fixed;

    z-index: 500;
    right: 2%;
    bottom: 13%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .top {
        height: 3rem;
    }
    .medium {
        height: calc(32rem - 15rem);
    }
    .bottom {
        display: flex;
        margin: unset;

        height: 2rem;
        input {
            width: 100%;
            padding: 3px;
            &::placeholder {
                color: #b1c1d2;
            }
        }
    }
    .under-bottom {
        .col-12 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            font-size: 14px;
        }

        margin-left: unset;
    }
    .icon-left {
        .fa-face-smile,
        .fa-paperclip,
        .fa-bars-staggered {
            color: #a8bacd;
            margin: 0 10px;
        }
    }
    .icon-right {
        .fa-message {
            color: #a8bacd;
            margin-right: 5px;
        }
        span {
            margin-left: 10px;
            font-size: 10px;
        }
    }
    .bg {
        background-color: #1766dc;
        padding: 10px 0;
        button {
            border: none;
            border-radius: 30px;
            background-color: #0051c8;
            color: white;
            width: 100px;
            padding: 5px 0;
        }
        .logo {
            span {
                font-size: 13px;
                color: #c5dafa;
            }
        }

        img {
            width: 40px;
            border-radius: 50%;
        }
    }
}
// MOVE TO THE TOP SECTION
.move-to-top {
    display: none;
    background-color: #20ad96;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 30px;
    position: fixed;
    z-index: 10;
    right: 2%;
    bottom: 14%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        cursor: pointer;
    }

    a {
        scroll-behavior: smooth;
    }
}
.fa-arrow-up-long {
    padding: 20px;
    font-size: 25px;
    color: white;
    &:hover {
        animation: reset 1.5s linear;
    }

    @keyframes reset {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
}
// COSTUMER SERVICE BUTTON
.costumer-service {
    background-color: #1972f5;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 30px;
    position: fixed;
    z-index: 10;
    right: 2%;
    bottom: 4%;
    &:hover {
        cursor: pointer;
    }

    .fa-message {
        color: white;
        font-size: 25px;
        padding: 20px;
        transform: rotate(-17deg);
    }
}
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
    width: 180px;
    position: absolute;
    top: -5%;
    left: -6%;
    z-index: 0;
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
    z-index: 0;
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
        flex: 0 0 49%; /* Ora ogni colonna avrà il 50% della larghezza */
    }

    .carousel-card {
        width: 96%;
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
        .rotating-image-top-right {
            transition: transform 1s ease;
        }

        .row:hover .rotating-image-left {
            transform: translateX(100px) translateY(-30px) rotate(-100deg);

            transition: 1s;
        }

        .row:hover .rotating-image-right {
            transform: translateX(-100px) translateY(-80px);
        }
        .row:hover .rotating-image-top-right {
            transform: translateX(200px) translateY(100px);
        }
        .animated-bg-bottom-image {
            width: 150px;
            position: absolute;
            right: 24%;
            bottom: 30%;
            z-index: -1;
            transform: rotate(50deg);
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
            bottom: 30%;
            right: 24%;
            z-index: 0;
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
