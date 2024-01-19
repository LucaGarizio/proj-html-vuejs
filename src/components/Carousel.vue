<script>
export default {
    name: 'Carousel',
    data() {
        return {
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
                {
                    title: "It's a choice of quality for people with special needs",
                    paragraph:
                        "I'm a very strict person so i require everything to be organized and neat. Then, I.ll be able to make things right and shine. MaxCoach guys just got me.",
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
            ],
        }
    },
    computed: {
        carouselStyle() {
            // Calcola la percentuale della dimensione di cui si deve spostare lo slide al cambio di card
            // Moltiplicalo per -1, per invertire la direzione della traslazione
            const translationPercentage =
                -1 *
                (this.currentIndex * (170 / (this.testimonialCards.length - 1)))
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
            // Imposta l'indice corrente al valore specificato
            this.currentIndex = index
        },
    },
}
</script>
<template>
    <section class="slider-bg-color" id="carousel">
        <div class="container-fluid my-0">
            <div class="row">
                <div class="text-center">
                    <h2 class="cursive">Testimonials</h2>
                    <h3 class="mb-4">Why do people love me?</h3>
                </div>
            </div>

            <div class="carousel-container">
                <div class="carousel" :style="carouselStyle">
                    <div
                        v-for="(card, index) in testimonialCards"
                        :key="index"
                        :class="{ 'active-slide': index === currentIndex }"
                        class="carousel-col d-flex justify-content-between p-4 mx-1"
                    >
                        <!-- Tuo contenuto del carousel qui -->
                        <div
                            class="card carousel-card border-0 p-5"
                            style="3rem"
                        >
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
                <div
                    id="bullets"
                    class="d-flex justify-content-center my-5"
                    style="height: 30px"
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
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
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
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;
}

.carousel-col.active-slide {
    opacity: 1;
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
</style>
