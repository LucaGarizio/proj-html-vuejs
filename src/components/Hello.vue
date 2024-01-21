<script>
export default {
    name: 'Hello', // Nome del componente vue
}
</script>

<template>
    <section id="jumbotron">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div
                    class="col-12 d-flex justify-content-center align-item-center"
                >
                    <div class="DittoShape">
                        <img
                            class="MaledettoSvg"
                            src="../assets/images/Orange-Ditto-Shape.svg"
                            alt=""
                        />
                    </div>

                    <div class="DittoShapeBlue">
                        <img
                            class="MaledettoSvgButInBlue"
                            src="../assets/images/DittoShapeBlue.svg"
                            alt=""
                        />
                    </div>

                    <div class="PuntiniSpasticiLunghi">
                        <img
                            src="../assets/images/artist-shape-03.png"
                            alt=""
                        />
                    </div>

                    <div class="IHaveADream">
                        <img
                            src="../assets/images/artist-hero-image-03-204x300.png"
                            alt=""
                        />
                    </div>

                    <div class="ComeLeFoglie">
                        <img
                            src="../assets/images/artist-shape-04-127x300.png"
                            alt=""
                        />
                    </div>

                    <div class="ArtAttack">
                        <img
                            src="../assets/images/artist-shape-05-300x198.png"
                            alt=""
                        />
                    </div>

                    <div class="PuntiniSpastici">
                        <img
                            src="../assets/images/maxcoach-shape-12-150x150.png"
                            alt=""
                        />
                    </div>

                    <div class="YouStupidMonkey rotating-image-left">
                        <img
                            src="../assets/images/artist-hero-image-01.jpg"
                            alt=""
                        />
                    </div>

                    <div class="Martin rotating-image-right">
                        <img
                            src="../assets/images/artist-hero-image-04.jpg"
                            alt=""
                        />
                    </div>

                    <div class="colorsImg rotating-image-top-right">
                        <img
                            src="../assets/images/artist-hero-image-02.jpg"
                            alt=""
                        />
                    </div>
                    <img
                        class="ArtistShape1"
                        src="../assets/images/artist-shape-01-600x577.png"
                        alt=""
                    />

                    <div class="HelloImMartin">
                        <h1 class="cursive fw-bold fs-1 text-center">
                            Hello, I'm Martin
                        </h1>
                        <h2 class="fw-bolder text-center fw-bold fs-1">
                            Artist Coaching And Mentoring <br />
                            Might Be for You
                        </h2>
                        <div class="d-flex justify-content-center pt-3">
                            <button class="btn-orange fs-6">
                                Get Started Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
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
            transition: transform 2s linear;
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
    transform: scaley(-1);
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
</style>
