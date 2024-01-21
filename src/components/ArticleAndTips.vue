<script>
export default {
    name: 'ArticleAndTips',
}
</script>

<template>
    <section>
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
                                style="width: 500px"
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
section {
    background-color: #f5f7fa;
    padding: 100px 0;
    margin-bottom: 100px;
}
.cursive {
    font-family: $secondary-font;
    color: $secondary-text-color;
    font-size: 40px;
}

.left-col {
    padding-top: 150px;
}

.right-col {
    padding-top: 60px;
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

.end {
    margin-top: 100px;
}
.color {
    color: #ef6f31;
}
</style>
