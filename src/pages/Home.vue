<script>
export default {
    name: 'AppHome',
    data() {
        return {}
    },
}
</script>
<template>
    <!-- ale -->
    <section></section>
    <section></section>

    <!-- luca -->
    <!-- sezione get started -->
    <section class="border">
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
    <section class="border">
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
    <section class="border">
        <div class="container-fluid">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="cursive">Testimonial</h2>
                    <h3>Why do people love me?</h3>
                </div>
            </div>
        </div>
    </section>
    <!-- sezione card shop-->
    <section class="border"></section>

    <!-- dome -->
    <section>
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <h2 class="cursive">Artist coaching</h2>
                    <h3>Latest Online Courses</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="card" style="width: 18rem">
                        <img
                            src="../assets/images/artist-hero-image-02.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" class="card-link"
                                ><i class="fa-regular fa-file-lines"></i> 4
                                Lessons</a
                            >
                            <a href="#" class="card-link"
                                ><i class="fa-regular fa-user"></i> 50
                                Students</a
                            >
                        </div>
                    </div>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-3"></div>
            </div>
        </div>
    </section>
    <section></section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

// STILI ALE

// STILI LUCA
section {
    margin: 100px 0;
}

.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
}

// sezione youtube video

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

// STILI DOME
</style>
