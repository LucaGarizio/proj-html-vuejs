<script>
export default {
    name: 'AppFooter ',
}
</script>

<template>
    <footer class="pad-y">
        <div class="container ms-5">
            <div class="row ms-5 px-3 justify-content-center gx-0">
                <div class="col-5">
                    <ul>
                        <li class="pb-3"><h5>Address</h5></li>
                        <li>
                            <span
                                >382 NE 191st St # 87394 Miami, FL
                                33179-3899</span
                            >
                        </li>
                        <li class="py-3">
                            <span
                                >+1 (305) 547-9909 (9am - 5pm EST, Monday -
                                Friday)</span
                            >
                        </li>
                        <li>
                            <a href="">support@maxcoach.com</a>
                        </li>
                    </ul>
                    <div class="icons"></div>
                </div>
                <div class="col-2">
                    <ul>
                        <li class="pb-3"><h5>Explore</h5></li>
                        <li><a href="#"></a>Start here</li>
                        <li class="py-3"><a href="#"></a>Success story</li>
                        <li><a href="#"></a>Blog</li>
                        <li class="py-3"><a href="#"></a>Courses</li>
                        <li><a href="#"></a>Contact us</li>
                    </ul>
                </div>
                <div class="col-2">
                    <ul>
                        <li class="pb-3"><h5>Information</h5></li>
                        <li><a href="#"></a>Membership</li>
                        <li class="py-3"><a href="#"></a>Purchase guide</li>
                        <li><a href="#"></a>Privacy policy</li>
                        <li class="pt-3"><a href="#"></a>Terms of services</li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li class="d-flex justify-content-center">
                            <h5>Instagram<span> @maxcoach</span></h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container mt-5 pt-5">
            <div class="row justify-content-center">
                <div class="col-8 text-center">
                    <span>© 2020 Maxcoach. All Rights Reserved </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.pad-y {
    padding: 100px 0 50px;
}
li {
    font-size: 15px;
    color: #9f9f9f;
    &:hover {
        color: #f1844f;
        transition: 1s;
        cursor: pointer;
    }
    a {
        color: #9f9f9f;
        &:hover {
            color: #f1844f;
            transition: 1s;
            cursor: pointer;
        }
    }
}

h5 {
    font-size: 18px;
    color: black;
    span {
        color: #f1844f;
        font-size: 15px;
    }
}

span {
    color: #9f9f9f;
    font-size: 15px;
}
</style>
