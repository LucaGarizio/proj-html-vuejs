<script>
export default {
    name: 'ArtistCoaching', // Nome del componente vue
}
</script>

<!-- <template>
    <section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 positioningClass d-flex">
                    <div class="wrapperPos">
                        <div
                            class="coaching col-12 d-flex p-5 justify-content-center"
                        >
                            <div class="col-6">
                                <h2 class="cursive fw-bold text-center cursive">
                                    Artist coaching
                                </h2>
                                <h3 class="fw-bolder text-center fw-bold">
                                    I understand what it takes to create. <br />
                                    I can help you with
                                </h3>
                            </div>
                        </div>
                        <div class="d-flex col-12 justify-content-between">
                            <div class="col-3 p-3">
                                <div class="container">
                                    <img
                                        class="resizeImg"
                                        src="../assets/images/artist-box-image-01.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5>On time</h5>
                                    <p class="fs-6">
                                        Punctuality is our top priority because
                                        it's an essential criteria to assess a
                                        program quality.
                                    </p>
                                </div>
                            </div>
                            <div class="col-3 p-5">
                                <div class="container">
                                    <img
                                        class="resizeImg"
                                        src="../assets/images/artist-box-image-02.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5>On time</h5>
                                    <p class="fs-6">
                                        Punctuality is our top priority because
                                        it's an essential criteria to assess a
                                        program quality.
                                    </p>
                                </div>
                            </div>
                            <div class="col-3 p-3">
                                <div class="container">
                                    <img
                                        class="resizeImg"
                                        src="../assets/images/artist-box-image-03.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5>On time</h5>
                                    <p class="fs-6">
                                        Punctuality is our top priority because
                                        it's an essential criteria to assess a
                                        program quality.
                                    </p>
                                </div>
                            </div>
                            <div class="col-3 p-5">
                                <div class="container">
                                    <img
                                        class="resizeImg"
                                        src="../assets/images/artist-box-image-04.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5>On time</h5>
                                    <p class="fs-6">
                                        Punctuality is our top priority because
                                        it's an essential criteria to assess a
                                        program quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="DittoShapeOG">
                        <img
                            class="MaledettoSvgParte3"
                            src="../assets/images/DittoShapeOG.svg"
                            alt=""
                        />
                    </div>
                    <img
                        class="ArtistShape"
                        src="../assets/images/artist-shape-01-600x577.png"
                        alt=""
                    />
                    <img
                        class="cerchioRigato"
                        src="../assets/images/maxcoach-shape-13.png"
                        alt=""
                    />
                    <img
                        class="LineRider"
                        src="../assets/images/maxcoach-shape-14.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
</template> -->

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

#jumbotron {
    background-color: #fbf9f6;
    padding-top: 40px;
    .container-fluid {
        margin-top: 0;
        position: relative;
        height: 700px;
        .rotating-image-left,
        .rotating-image-right,
        .rotating-image-top-right {
            transition: transform 1s ease;
        }

        .col-12:hover .rotating-image-left {
            transform: translateX(-40px) translateY(-30px);
        }
        .col-12:hover .rotating-image-right {
            transform: translateX(40px) translateY(10px);
        }
        .col-12:hover .rotating-image-top-right {
            transform: translateX(40px) translateY(-50px);
        }
    }
}
.ArtistShape1 {
    position: absolute;
    height: 600px;
    left: 55%;
    top: 5%;
    z-index: 13;
}
.LineRider {
    position: absolute;
    height: 400px;
    width: 95%;
    left: 0;
    top: 15%;
    z-index: 4;
}
.cerchioRigato {
    position: absolute;
    height: 200px;
    right: -10%;
    top: 35%;
    z-index: 3;
    transform: scaley(-1);
}
.ArtistShape {
    position: absolute;
    height: 550px;
    left: -12%;
    top: 17%;
    z-index: 2;
    // transform: scaley(-1);
}
.wrapperPos {
    position: absolute;
    z-index: 400;
}
.positioningClass {
    position: relative;
    height: 500px;
}
.MaledettoSvgParte3 {
    height: 350px;
}
.DittoShapeOG {
    position: absolute;
    z-index: 3;
    top: 35%;
    left: 65%;
}

.MaledettoSvg {
    height: 150px;
}

.MaledettoSvgButInBlue {
    height: 500px;
    width: 400px;
}

.DittoShapeBlue {
    position: absolute;
    z-index: 12;
    top: 29%;
    left: -10%;
    transform: scaley(-1);
}

.PuntiniSpasticiLunghi {
    position: absolute;
    z-index: 12;
    top: 20%;
    left: 1%;
}
.IHaveADream {
    position: absolute;
    z-index: 12;
    top: 50%;
    left: 25%;
}

.ComeLeFoglie {
    position: absolute;
    z-index: 11;
    top: 10%;
    left: 80%;
}
.ArtAttack {
    position: absolute;
    z-index: 11;
    top: 71%;
    left: 70%;
}

.DittoShape {
    position: absolute;
    z-index: 12;
    top: 65%;
    left: 60%;
}
.PuntiniSpastici {
    position: absolute;
    z-index: 12;
    top: 75%;
    left: 65%;
}
.colorsImg {
    position: absolute;
    z-index: 12;
    top: 30%;
    left: 9%;
}

.YouStupidMonkey {
    position: absolute;
    z-index: 13;
    top: 50%;
    left: 10%;
}
.HelloImMartin {
    position: absolute;
    top: 30%;
    z-index: 15;
}
.Martin {
    position: absolute;
    z-index: 14;
    top: 25%;
    left: 65%;
}

.rotating-image-left,
.rotating-image-right,
.rotating-image-top-right {
    transition: transform 1s ease;
}

.presentation:hover .rotating-image-left {
    transform: translateX(-40px) translateY(-30px);
}
.presentation:hover .rotating-image-right {
    transform: translateX(40px) translateY(10px);
}
.presentation:hover .rotating-image-top-right {
    transform: translateX(40px) translateY(-50px);
}

.resizeImg {
    padding: 10px;
}
.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}
</style>
