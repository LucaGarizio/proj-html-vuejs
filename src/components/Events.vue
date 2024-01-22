<script>
export default {
    name: 'Events',
}
</script>
<template>
    <section class="py-5">
        <div class="container">
            <div class="row justify-content-center pb-3 mb-5">
                <div class="col-8 text-center">
                    <h2 class="cursive">Upcoming Events</h2>
                    <h3>Let's Work Toghether</h3>
                </div>
            </div>
            <div class="row g-5 pb-5">
                <div class="col-6 d-flex align-items-center">
                    <div class="card-image me-5">
                        <img
                            src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/artist-event-04-250x300.jpg"
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <span>APR 22, 2021</span>
                        <h5 class="my-3">Storytelling Workshop</h5>
                        <span>Texas, US </span>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-center">
                    <div class="card-image me-5">
                        <img
                            src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/artist-event-03-250x300.jpg"
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <span>Oct 10, 2020</span>
                        <h5 class="my-3">Painting Art Contest 2020</h5>
                        <span>New York, US</span>
                    </div>
                </div>
                <div
                    class="col-6 d-flex justify-content-end align-items-center"
                >
                    <div class="text text-end">
                        <span>Nov 23, 2020</span>
                        <h5 class="my-3">International Art Fair 2020</h5>
                        <span>Hamburg, Germany</span>
                    </div>
                    <div class="card-image ms-5">
                        <img
                            src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/artist-event-02-250x300.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div
                    class="col-6 d-flex justify-content-end align-items-center"
                >
                    <div class="text text-end">
                        <span>Dec 15, 2020</span>
                        <h5 class="my-3">
                            Street Performance: Call for Artist
                        </h5>
                        <span> Illinois, US</span>
                    </div>
                    <div class="card-image ms-5">
                        <img
                            src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/artist-event-01-250x300.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="getintouch">
        <div class="container-fluid">
            <div class="row justify-content-between">
                <div
                    class="col-3 left text-white d-flex align-items-center text-end"
                >
                    <h2>Newsletter to get in touch</h2>
                </div>
                <div class="col-4 d-flex align-items-center">
                    <form action="">
                        <input type="email" placeholder="Your e-mail" />
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </form>
                </div>
                <div class="col-3 right"></div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}

.card-padding-top {
    padding-top: 100px;
}
.card-image {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    transition: transform 1s;
    &:hover {
        transform: scale(1.1);
    }
}

.col-6 {
    position: relative;
    overflow: hidden;
}

#getintouch {
    .row {
        height: 180px;
    }
    background-color: #244186;
    .left {
        background-image: url('https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/artist-shape-color-paint-top-left.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .right {
        background-image: url('https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/artist-shape-color-paint-bottom-right.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: 100%;
    }

    input {
        width: 650px;
        z-index: 2;
        border: none;
        background-color: #244186;
        color: #8898bd;
        border-bottom: 1px solid #909ec2;
        padding: 10px 0;
        font-size: 20px;
    }
    .fa-arrow-right-long {
        margin-top: 16px;
        position: absolute;
        right: 27%;
        font-size: 20px;
        color: white;
    }

    input:placeholder {
        font-size: 30px;
    }
    input:focus {
        outline: none;
    }

    input:focus {
        border-bottom: 2px solid white;
        color: white;
    }
}
</style>
