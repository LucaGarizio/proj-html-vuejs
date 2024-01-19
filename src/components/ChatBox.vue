<script>
export default {
    name: 'ChatBox',
    data() {
        return {
            // variabile chatbox
            visibility: false,
        }
    },
    methods: {
        toggleChatbox() {
            // Inverti lo stato di visibilità della chatbox
            this.visibility = !this.visibility
        },
    },
}
</script>
<template>
    <div class="container chatbox text-white" v-show="visibility">
        <div class="row border top">
            <div class="col-4 bg text-center">
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

    <div class="costumer-service" @click="toggleChatbox">
        <i class="fa-solid fa-message"></i>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
.chatbox {
    height: 40rem;
    width: 300px !important;
    position: fixed;
    z-index: 500;
    right: 2%;
    bottom: 13%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
</style>
