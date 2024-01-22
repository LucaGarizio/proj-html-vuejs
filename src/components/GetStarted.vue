<script>
export default {
    name: 'GetStarted',
}
</script>
<template>
    <section class="marginy-150">
        <div class="my container-fluid pt-4">
            <div class="row d-flex justify-content-evenly">
                <div class="col-lg-4 col-md-11 text-center">
                    <img
                        class="mb-2"
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
                <div
                    class="l col-lg-4 col-sm-9 pt-5 text-lg-start text-sm-center"
                >
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
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.marginy-150 {
    padding: 150px 0 200px;
}

.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}
</style>
