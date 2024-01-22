<script>
import MoveToTop from '../components/MoveToTop.vue'
import ChatBox from '../components/ChatBox.vue'
export default {
    name: 'Contact',
    components: {
        MoveToTop,
        ChatBox,
    },
}
</script>
<template>
    <section id="info" class="padding-top">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-7">
                    <h2 class="mb-4 text-center">
                        For more information about our courses, get in touch
                        with MaxCoach via contacts
                    </h2>
                </div>
            </div>
        </div>
        <div class="container-fluid my-5">
            <div class="row justify-content-center">
                <div class="col-3 mx-4 d-flex">
                    <i class="fa-solid fa-location-dot fs-2 mt-1"></i>
                    <div class="text ms-4">
                        <h5 class="mb-4">Address</h5>
                        <h6>1800 About kinney Blvd. Unit D & E Venice</h6>
                    </div>
                </div>
                <div class="col-3 mx-4 d-flex">
                    <i class="fa-solid fa-phone-flip fs-2 mt-1"></i>
                    <div class="text ms-4">
                        <h5 class="mb-4">Contact</h5>
                        <h6>Mobile: <strong>(+88) - 1990 - 6886</strong></h6>
                        <h6>Hotline: <strong>1800 - 1102</strong></h6>
                        <h6>Mail: contact@maxcoach.com</h6>
                    </div>
                </div>
                <div class="col-3 mx-4 d-flex">
                    <i class="fa-regular fa-clock fs-2 mt-1"></i>
                    <div class="text ms-4">
                        <h5 class="mb-4">Hour of operation</h5>
                        <h6>Monday-Friday: 09:00 - 20.00</h6>
                        <h6>Saturday & Sunday: 10:30 - 22:00</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="my-5 text-center" id="map">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d974768.5695959488!2d9.42675443174256!3d45.19422154018226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1705498385319!5m2!1sen!2sit"
                        width="90%"
                        height="500"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>

    <section id="form">
        <div class="container mb-5">
            <div class="row justify-content-center mb-5">
                <div class="col-5">
                    <h2 class="text-center">
                        Fill out this form for booking a consultan advising
                        session.
                    </h2>
                </div>
            </div>
            <form class="row g-2 d-flex justify-content-center">
                <div class="col-4">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Name *"
                        aria-label="First name"
                    />
                </div>

                <div class="col-4">
                    <input
                        type="email"
                        class="form-control"
                        id="inputEmail3"
                        placeholder="Email *"
                    />
                </div>

                <div class="col-8">
                    <label for="inputAddress" class="form-label"></label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="Subject *"
                    />
                </div>
                <div class="col-8">
                    <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                    ></label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="7"
                        placeholder="Message"
                    ></textarea>
                </div>

                <div class="col-10 text-center mt-4">
                    <button type="submit" class="btn btn-success">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </section>

    <ChatBox />
    <MoveToTop />
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.move-to-top {
    background-color: #20ad96;
}

#info {
    h6 {
        font-weight: normal;
    }
}
.padding-top {
    padding-top: 150px;
}
#form {
    input,
    textarea {
        background-color: #f5f5f5;
        padding: 10px;
    }
    input::placeholder,
    textarea::placeholder {
        color: #959595;
    }

    .btn {
        padding: 17px 70px;
        background-color: #20ad96;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #3f3a64;
            transition: 0.5s;
        }
    }
}
</style>
