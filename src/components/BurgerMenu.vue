<script>
export default {
    name: 'BurgerMenu',
    data() {
        return {
            visibility: false,
        }
    },
    methods: {
        dropBurger() {
            this.visibility = !this.visibility
        },
    },
}
</script>
<template>
    <li class="hidden" @click="dropBurger">
        <i class="fa-solid fa-grip-lines"></i>

        <div class="hamburger-div" v-show="visibility">
            <div
                class="hamburger-logo d-flex justify-content-between align-items-center mx-4"
            >
                <img
                    src="https://maxcoach.thememove.com/main/wp-content/themes/maxcoach/assets/images/logo/dark-logo.png"
                    alt=""
                />
                <span class="me-4">X</span>
            </div>
            <div class="hamburger-dropdown">
                <div>
                    <ul class="m-0 py-2 px-4">
                        <li class="px-0">
                            <span>Home</span
                            ><i class="fa-solid fa-chevron-down"></i>
                        </li>

                        <li class="">
                            <span>Pages</span
                            ><i class="fa-solid fa-chevron-down"></i>
                        </li>

                        <li class="">
                            Courses<i class="fa-solid fa-chevron-down"></i>
                        </li>
                        <li class="">
                            Features<i class="fa-solid fa-chevron-down"></i>
                        </li>
                        <li class="">
                            Blog<i class="fa-solid fa-chevron-down"></i>
                        </li>
                        <li class="">
                            Shop<i class="fa-solid fa-chevron-down"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </li>
</template>
<style lang="scss" scoped>
.hamburger-div {
    width: 400px;
    display: block;
    position: absolute;
    background-color: white;
    border: 1px solid black;

    top: 100%;
    right: 0;
    z-index: 300;
    .hamburger-logo {
        padding: 10px 0;
        background-color: white;
        span {
            font-size: 30px;
        }
    }
    img {
        width: 150px;
    }
    .hamburger-dropdown {
        background-color: #4c486f;
        height: calc(600px - 150px);
        color: white;
        overflow-y: auto;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid grey;

            margin: 20px 0;
            padding: 10px 0;
            font-size: 17px;
            span {
                font-size: 15px;
                font-weight: normal;
            }
        }

        .fa-solid {
            margin-right: 30px;
            font-size: 15px;
        }
    }
}
</style>
