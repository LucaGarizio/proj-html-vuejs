<script>
export default {
    name: 'MoveToTop',

    data() {
        return {
            // variabile per ritorno a inizio pagina
            isScrolled: false,
        }
    },
    methods: {
        handleScroll() {
            // Verifica se l'utente sta scorrendo la pagina
            this.isScrolled = window.scrollY > 0
        },
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>
<template>
    <div class="move-to-top" v-show="isScrolled">
        <a href="#top">
            <i class="fa-solid fa-arrow-up-long"></i>
        </a>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.move-to-top {
    background-color: #ef6f31;
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
    bottom: 10%;
    margin-bottom: 50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        cursor: pointer;
    }
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
</style>
