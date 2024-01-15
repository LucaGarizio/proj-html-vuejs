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
    <section class="my-3"></section>
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
.my,
.container {
    border: 1px solid black;
}

.l,
.col-4 {
    border: 1px solid black;
}

// STILI DOME
</style>
