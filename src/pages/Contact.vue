<script>
export default {
    name: 'Contact',
    data() {
        return {
            isScrolled: false,
            // variabile chatbox
            visibility: false,
        }
    },
    methods: {
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
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>
<template>
    <!-- LUCA -->
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
    <!-- SEZIONE INFO -->
    <div class="move-to-top" v-show="isScrolled">
        <a href="#info">
            <i class="fa-solid fa-arrow-up-long"></i>
        </a>
    </div>
    <div class="costumer-service" @click="toggleChatbox">
        <i class="fa-solid fa-message"></i>
    </div>
    <section id="info">
        <div class="container my-5">
            <div class="row d-flex justify-content-center">
                <div class="col-7">
                    <h2 class="mb-4 text-center">
                        For more information about our courses, get in touch
                        with MaxCoach via contacs
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
                        width="1200"
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
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.chatbox {
    width: 22rem;
    height: 32rem;
    position: fixed;
    z-index: 500;
    right: 2%;
    bottom: 13%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        cursor: pointer;
    }

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
section {
    margin: 100px;
}
#info {
    h6 {
        font-weight: normal;
    }
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
