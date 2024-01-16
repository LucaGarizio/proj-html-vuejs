<script>
export default {
    name: 'AppHome',
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
                        <h4>Martin Garrix</h4>
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
                    <button>Get started today</button>
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
    <section class="my-3"></section>

    <!-- dome -->
    <section></section>
    <section></section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

// STILI ALE

// STILI LUCA

section {
    margin: 50px 0;
}
.l,
.col-4 {
    border: 1px solid black;
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
