<script>
export default {
    name: 'AppFooter ',
}
</script>

<template>
    
    <footer class="container-fluid p-4" id="container-footer">
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
                <ul>
                    <li class="social"><a href=""><i class="fa-brands fa-square-facebook" style="font-size: 25px;"></i></a></li>
                    <li class="social"><a href=""><i class="fa-brands fa-twitter" style="font-size: 25px;"></i></a></li>
                    <li class="social"><a href=""><i class="fa-brands fa-instagram" style="font-size: 25px;"></i></a></li>
                    <li class="social"><a href=""><i class="fa-brands fa-linkedin" style="font-size: 25px;"></i></a></li>
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
    <div class="text-center mt-5 mb-5">
        
			<span>© 2020 Maxcoach. All Rights Reserved</span>
    </div>
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
    font-size: 14px;
}
a:hover{
    color: #ff6600;
    transition: 0.5s;
}
.social{
    display: inline-block;
    padding-left: 25px;
}
</style>
