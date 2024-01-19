<script>
import Hello from '../components/Hello.vue'
import ArtistCoaching from '../components/ArtistCoaching.vue'
import GetStarted from '../components/GetStarted.vue'
import YouTube from '../components/YouTube.vue'
import Carousel from '../components/Carousel.vue'
import Shop from '../components/Shop.vue'
import MoveToTop from '../components/MoveToTop.vue'
import ChatBox from '../components/ChatBox.vue'
export default {
    name: 'AppHome',
    components: {
        ArtistCoaching,
        Hello,
        GetStarted,
        YouTube,
        Carousel,
        Shop,
        MoveToTop,
        ChatBox,
    },
    data() {
        return {
            // DATA LUCA
            // variabile chatbox
            visibility: false,

            // DATA SEZIONE SHOP
        }
    },
}
</script>
<template>
    <!-- SEZIONI ALE -->
    <Hello />
    <ArtistCoaching />

    <!-- SEZIONI LUCA -->
    <GetStarted />
    <!-- sezione video youtube -->
    <YouTube />
    <!-- sezione Carousel -->
    <Carousel />
    <!-- sezione card shop-->
    <Shop />
    <!-- compoenent per riportare la pagina all'inizio -->
    <MoveToTop />
    <!-- componente costumer service -->
    <ChatBox />

    <!-- SEZIONI DOME -->
    <section class="my-3" id="article-and-tips">
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-5">
                    <div class="text-center">
                        <!-- La classe "text-center" allinea il testo al centro -->
                        <h2 class="cursive">Article and Tips</h2>
                        <h3>Latest From The Blog</h3>
                    </div>
                </div>
            </div>

            <div class="dittoBlue-section-cards rotating-image-left">
                <img
                    src="../assets/images/maxcoach-shape-12-orange.png"
                    alt=""
                />
            </div>

            <div class="rotating-image-right dittoShape-section-cards">
                <img src="../assets/images/DittoShapeBlue.svg" alt="" />
            </div>

            <div>
                <img src="../" alt="" />
            </div>

            <div class="row justify-content-around">
                <div class="col-3 col-img1">
                    <div class="card border-0" id="card">
                        <img
                            src="../assets/images/artist-blog-03-480x356.jpeg"
                            class="card-img-top"
                            alt="Immagine 1"
                        />
                        <div class="card-body">
                            <p class="card-text">ARTIST</p>
                            <h4 class="h4-artist">
                                Brush Strokes Energize Trees in Paintings
                            </h4>
                            <p class="text-body-secondary">
                                <i
                                    class="fa-regular fa-calendar"
                                    style="color: #969696"
                                ></i>
                                May 15, 2020
                            </p>
                            <p class="text-body-secondary">
                                <i
                                    class="fa-solid fa-eye"
                                    style="color: #969696"
                                ></i>
                                2,157 Views
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-5 pos-relative">
                    <div class="card border-0" id="card">
                        <img
                            src="../assets/images/artist-blog-02-500x680.jpg"
                            class="card-img-top"
                            alt="Immagine 2"
                        />
                        <div class="card-body-centrale">
                            <p class="card-text">Artist</p>
                            <h4 class="title-center">
                                Connection Between Self-Portraits and Idantity
                            </h4>

                            <span
                                ><i
                                    class="fa-regular fa-calendar"
                                    style="color: #ffffff"
                                ></i>
                                May 15, 2020</span
                            >
                            <span
                                ><i
                                    class="fa-solid fa-eye"
                                    style="color: #ffffff"
                                ></i>
                                2,167 Views</span
                            >
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <div class="card border-0" id="card">
                        <img
                            src="../assets/images/artist-blog-01-480x356.jpg"
                            class="card-img-top"
                            alt="Immagine 3"
                        />
                        <div class="card-body">
                            <p class="card-text">ARTIST</p>
                            <h4 class="h4-artist">
                                Pocket-Sized Notebooks Hold Minature Paintings
                            </h4>
                            <p class="text-body-secondary">
                                <i
                                    class="fa-regular fa-calendar"
                                    style="color: #969696"
                                ></i>
                                May 15, 2020
                            </p>
                            <p class="text-body-secondary">
                                <i
                                    class="fa-solid fa-eye"
                                    style="color: #969696"
                                ></i>
                                2,020 Views
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5 mb-5">
                <!-- La classe "text-center" allinea il testo al centro -->
                <span>Get into details now? </span>
                <a href=""
                    ><span class="span-orange" style="font-weight: 700"
                        >View all posts
                        <i
                            class="fa-solid fa-arrow-right"
                            style="color: #ff6600"
                        ></i></span
                ></a>
            </div>
        </div>
    </section>

    <section class="pb-5">
        <div class="container" id="section-upcoming">
            <div>
                <img
                    src="../assets/images/maxcoach-shape-13.png"
                    class="maxcoach-section-upcoming"
                    alt=""
                />
                <img
                    src="../assets/images/maxcoach-shape-05-150x150.png"
                    class="maxcoach-shape-section-upcoming"
                    alt=""
                />
            </div>
            <div class="text-center mt-5">
                <!-- La classe "text-center" allinea il testo al centro -->
                <h2 class="cursive">Upcoming Event</h2>
                <h3>Let's Work Together</h3>
            </div>

            <div class="row mt-5">
                <!-- Card 1 -->
                <div class="col-6">
                    <div class="card border-0">
                        <div class="row">
                            <div class="col-4">
                                <img
                                    src="../assets/images/artist-event-04-250x300.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div class="col-8" id="descrizione-col8">
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

                <div class="col-6">
                    <div class="card border-0">
                        <div class="row">
                            <div class="col-4">
                                <img
                                    src="../assets/images/artist-event-03-250x300.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div class="col-8" id="descrizione-col8">
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
                <div class="col-6">
                    <div class="card border-0">
                        <div class="row">
                            <div class="col-8" id="descrizione-col8">
                                <div
                                    class="card-body"
                                    style="text-align: right"
                                >
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
                            <div class="col-4">
                                <img
                                    src="../assets/images/artist-event-02-250x300.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card border-0">
                        <div class="row">
                            <div class="col-8" id="descrizione-col8">
                                <div
                                    class="card-body"
                                    style="text-align: right"
                                >
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
                            <div class="col-4">
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
                            Newsletter To Get in Touch
                        </p>
                    </div>

                    <div class="">
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

    <div class="row">
        <div class="col" id="colSidebar">
            <div class="w3-sidebar w3-bar-block w3-black w3-xxlarge">
                <a href="#" class="w3-bar-item w3-button"></a>
                <a href="#" class="w3-bar-item w3-button"
                    ><i class="fa fa-search" style="color: #424242"></i
                ></a>
                <a href="#" class="w3-bar-item w3-button"
                    ><i class="fa-solid fa-life-ring" style="color: #424242"></i
                ></a>
                <a href="#" class="w3-bar-item w3-button"
                    ><i class="fa-solid fa-book" style="color: #424242"></i
                ></a>
                <a href="#" class="w3-bar-item w3-button"
                    ><i
                        class="fa-solid fa-cart-shopping"
                        style="color: #424242"
                    ></i
                ></a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

// STILI ALE

.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}

// .section-margin {
//     margin: 100px 0 0;
// }

// .margin-top {
//     margin-top: 150px;
// }
// .margin-bottom {
//     margin-bottom: 150px;
// }

#article-and-tips {
    background-color: #f5f7fa;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;

    .container {
        position: relative;
        overflow: hidden;

        .rotating-image-left,
        .rotating-image-right,
        .rotating-image-top-right {
            transition: transform 1s ease;
        }

        &:hover .rotating-image-left {
            transform: translateX(-40px) translateY(-30px);
        }

        &:hover .rotating-image-right {
            transform: translateX(40px) translateY(10px);
        }

        // &:hover .rotating-image-top-right {
        //     transform: translateX(40px) translateY(-50px);
        // }

        .dittoBlue-section-cards {
            position: absolute;
            width: 200px;
            height: 200px;
            top: 15%;
            left: 19%;
        }

        .dittoShape-section-cards {
            position: absolute;
            top: 70%;
            right: 20%;
            img {
                width: 300px;
            }
        }
    }
}
.col-img1 {
    display: flex;
    align-items: center;
}

#card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    overflow: hidden;
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

.h4-artist {
    cursor: pointer;
}

.h4-artist:hover {
    color: #ff6600;
    transition: 1s;
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
// sezione UpComing
.container {
    position: relative;
}

.maxcoach-section-upcoming {
    position: absolute;
    top: 35%;
    left: 87%;
    z-index: 2;

    transition: transform 1s;
}
.maxcoach-shape-section-upcoming {
    position: absolute;
    top: 0%;
    right: 92%;

    transition: transform 1s;
}
.container:hover {
    .maxcoach-section-upcoming {
        transform: translateX(40px) translateY(-40px);
    }

    .maxcoach-shape-section-upcoming {
        transform: translateX(40px) translateY(-40px);
    }
}

#descrizione-col8 {
    align-items: center;
    display: flex;
    padding-left: 50px;
}

.card-title {
    cursor: pointer;
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
    // display: flex;
    // align-items: center;
    text-align: right;
    position: absolute;
    top: 20%;
    left: 7%;
    font-size: 40px;
    font-family: 'Playfair Display', serif;
}

.w3-sidebar {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 100;
    top: 30%;
    right: 0;
    background-color: white;
    border-radius: 4px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#colSidebar {
    display: flex;
    justify-content: flex-end;
}

.w3-bar-item {
    font-size: 20px;
    padding-right: 10px;
    padding-bottom: 2px;
}
</style>
