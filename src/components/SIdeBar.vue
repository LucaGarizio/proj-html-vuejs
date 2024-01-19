<script>
export default {
    name: 'SideBar',
    data() {
        return
    },
}
</script>

<template>
    <div class="sidebar">
        <a href="#">
            <i class="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="#">
            <i class="fa-solid fa-life-ring"></i>
        </a>
        <a href="#">
            <i class="fa-solid fa-book"></i>
        </a>
        <a href="#">
            <i class="fa-solid fa-cart-shopping"></i>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    top: 30%;
    right: 0;
    z-index: 5;
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    a {
        padding: 8px 10px;
    }

    .fa-solid {
        color: #1f1f1f;
        font-size: 17px;
    }
}
</style>
