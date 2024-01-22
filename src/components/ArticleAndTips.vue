<script>
export default {
    name: 'ArticleAndTips',
}
</script>

<template>
    <section id="articleandtips">
        <div class="circles">
            <div class="inner-circles"></div>
        </div>

        <img
            class="ditto-blue-img"
            src="../assets/images/DittoShapeBlue.svg"
            alt=""
        />
        <img
            class="points-img"
            src="../assets/images/maxcoach-shape-12-100x100.png"
            alt=""
        />
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8 text-center">
                    <h2 class="cursive">Articles and Tips</h2>
                    <h3>Latest From The Blog</h3>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 d-flex justify-content-evenly">
                    <div class="col-3 left-col">
                        <div class="card">
                            <img
                                src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/artist-blog-03-480x356.jpeg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <span class="card-text"> Artist </span>
                                <h5 class="card-title mt-3">
                                    Brush Strokes Energize Trees in Painting
                                </h5>
                            </div>
                            <ul class="list-group-flush px-3">
                                <li class="">May 15, 2020</li>
                                <li class="">2.168 views</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-5 d-flex justify-content-center">
                        <div class="card pos-rel">
                            <img
                                src="../assets/images/artist-blog-02-500x680.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <p>Artist</p>
                            <h2>
                                Connection Between Self- Portraits and Identity
                            </h2>
                            <span class="date">May, 15, 2020</span>
                            <span class="views">2,176 views</span>
                        </div>
                    </div>

                    <div class="col-3 right-col">
                        <div class="card">
                            <img
                                src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/05/artist-blog-03-480x356.jpeg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <span class="card-text"> Artist </span>
                                <h5 class="card-title mt-3">
                                    Brush Strokes Energize Trees in Painting
                                </h5>
                            </div>
                            <ul class="list-group-flush px-3">
                                <li class="">May 15, 2020</li>
                                <li class="">2.168 views</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row end justify-content-center">
                <div class="col-8 text-center">
                    <p>
                        Get into details now?
                        <span class="color"
                            >View all posts<i
                                class="fa-solid fa-arrow-right-long ms-2"
                            ></i
                        ></span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
#articleandtips {
    background-color: #f5f7fa;
    padding: 100px 0 70px;
    position: relative;
    background-image: url('../assets/images/maxcoach-shape-14.png');
    background-repeat: no-repeat;
    background-size: cover;

    .cursive {
        font-family: $secondary-font;
        color: $secondary-text-color;
        font-size: 40px;
    }
    .col-8 {
        margin: 70px 0 0;
        p {
            color: #8c89a2;
        }
        span {
            color: #ef6f31;
        }
    }

    .ditto-blue-img {
        position: absolute;
        width: 500px;
        height: 250px;
        bottom: 5%;
        left: 50%;
        z-index: 0;
        animation: ditto 3s infinite ease-in-out;
        @keyframes ditto {
            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-70px) translateX(70px);
            }
        }
    }
    .circles {
        position: absolute;
        top: 20%;
        left: 10%;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #ecc5ab;
        animation: circles 3s infinite ease-in-out;
        @keyframes circles {
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(50px) translateX(-100px);
            }
        }
        .inner-circles {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            background-color: white;
        }
    }
    .points-img {
        width: 180px;
        position: absolute;
        top: 30%;
        left: 25%;
        z-index: 0;
        animation: points 3s infinite ease-in-out;
        @keyframes points {
            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-50px) translateX(-30px);
            }
        }
    }
}

.left-col {
    padding-top: 150px;
}

.right-col {
    padding-top: 60px;
}

.card {
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
}

.pos-rel {
    position: relative;
    p {
        position: absolute;
        bottom: 29%;
        margin: 0 auto;
        padding: 0 30px;
        color: white;
        text-transform: uppercase;
    }
    h2 {
        position: absolute;
        bottom: 15%;
        margin: 0 auto;
        padding: 0 30px;
        color: white;
        line-height: 45px;
    }

    .date {
        position: absolute;
        bottom: 10%;
        margin: 0 auto;
        padding: 0 30px;
        color: white;
        font-size: 14px;
        font-weight: normal;
    }
    .views {
        position: absolute;
        bottom: 10%;
        left: 30%;
        margin: 0 auto;
        padding: 0 30px;
        color: white;
        font-size: 14px;
        font-weight: normal;
    }
}
.card {
    overflow: hidden;
    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 1s;
        &:hover {
            transform: scale(1.1);
        }
    }
    li {
        color: #b9b9b9;
        padding-bottom: 10px;
    }
    span {
        color: #b9b9b9;
        text-transform: uppercase;
    }

    .col-3,
    .col-5 {
        position: relative;
        overflow: hidden;
    }

    .end {
        margin-top: 100px;
    }
    .color {
        color: #ef6f31;
    }
}
</style>
