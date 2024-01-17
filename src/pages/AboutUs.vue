<script>
export default {
    name: 'AboutUs',
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
        <div class="container-fluid d-flex justify-content-center pos-relative">
            <div class="row">
                <div class="col pos-relative">
                    <div class="circle">
                        <div class="inner-circle"></div>
                    </div>
                    <div class="card">
                        <img
                            class="youtube-video"
                            src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/about-me-popup-video-poster-2.jpg"
                            alt="anteprima"
                        />
                        <div class="img-box-overlay">
                            <img
                                class="dittoBlue-section-youtube"
                                src="../assets/images/DittoShapeBlue.svg"
                                alt=""
                            />
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
                                <a
                                    href="https://www.youtube.com/watch?v=ElFJ1qc"
                                    alt="icon-youtube-play"
                                >
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
    <section id="carousel">ciao</section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

#about {
    background-color: #f6f6f6;
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
</style>
