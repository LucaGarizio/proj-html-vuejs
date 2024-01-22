<script>
import Hello from '../components/Hello.vue'
import ArtistCoaching from '../components/ArtistCoaching.vue'
import GetStarted from '../components/GetStarted.vue'
import YouTube from '../components/YouTube.vue'
import Carousel from '../components/Carousel.vue'
import Shop from '../components/Shop.vue'
import ArticleAndTips from '../components/ArticleAndTips.vue'
import Events from '../components/Events.vue'
import MoveToTop from '../components/MoveToTop.vue'
import ChatBox from '../components/ChatBox.vue'
import SideBar from '../components/SideBar.vue'
export default {
    name: 'Artist',
    components: {
        ArtistCoaching,
        Hello,
        GetStarted,
        YouTube,
        Carousel,
        Shop,
        ArticleAndTips,
        Events,
        MoveToTop,
        ChatBox,
        SideBar,
    },
}
</script>
<template>
    <!-- JUMBOTRON -->
    <Hello />
    <!-- ARTIST AND COACHING -->
    <ArtistCoaching />
    <!-- GET STARTED -->
    <GetStarted />
    <!-- YOUTUBE -->
    <YouTube />
    <!-- CAROOUSEL -->
    <Carousel />
    <!-- CARD SHOP-->
    <Shop />
    <!-- ARTICLE & TIPS -->
    <ArticleAndTips />
    <!-- EVENT -->
    <Events />
    <!-- SIDEBAR COMPONENT-->
    <SideBar />
    <!-- MOVE TO TOP COMPONENT -->
    <MoveToTop />
    <!-- CHATBOX -->
    <ChatBox />
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}
</style>
