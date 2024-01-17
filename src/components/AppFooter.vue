<script>
export default {
    name: 'AppFooter ',
}
</script>

<template>
    <!-- dome -->
    <!-- <div class="container-footer"></div> -->
    <footer class="container-fluid" id="container-footer">
        <div class="row">
            <div class="col-4 p-0">
                <ul>
                    <li><h5>Address</h5></li>
                    <li>
                        <span>392 NE 191st St #87934 Miami, FL 33179-3899</span>
                    </li>
                    <li>
                        <span
                            >+1 (305) 547-9909 (9am - 5pm EST,Monday -
                            Friday)</span
                        >
                    </li>
                    <li><a href="">support@maxcoach.com</a></li>
                </ul>
            </div>
            <div class="col-2">
                <ul>
                    <li><h5>Explore</h5></li>

                    <li><a href="">Start here</a></li>
                    <li><a href="">Success story</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
            <div class="col-2">
                <ul>
                    <li><h5>Information</h5></li>
                    <li><a href="">Success story</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
            <div class="col-3 p-0">
                <ul>
                    <li>
                        <h5>
                            Instragram
                            <span class="span-orange">@maxcoach</span>
                        </h5>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

#container-footer {
    // min-height: 350px;
    align-items: center;
    li {
        margin: 15px 0;
    }
}
.span-orange {
    color: #ff6600;
}

a,
span {
    color: #6f6f6f;
}
</style>
