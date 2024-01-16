<script>
export default {
    name: 'AppHome',
}
</script>
<template>
    <!-- ale -->
    <section></section>
    <section></section>

    <!-- luca -->

    <section class="my-3">
        <div class="my container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="l col-4 px-5 text-center">
                    <h2 class="fs-1 mb-3">
                        I coach and mentor visual artists, like you, to Create
                        Like you Mean It

                        <h4>Martin Garrix</h4>
                    </h2>
                </div>
                <div class="l col-5 offset-1">
                    <p>
                        As a coach and mentor, my ultimate goal is to motivate
                        visual artists toward inspired action. I help you get
                        you back on track to being the productive, creative,
                        meaningful and authentic artist you truly want to be.I
                        support artists in crafting and living a creative life
                        as well as feeling good about themselves and their art.
                        <br />
                        <br />
                        As an artist and an educator for nearly 30 years, I
                        understand what it takes to create.
                    </p>
                    <button>Get started today</button>
                </div>
            </div>
        </div>
    </section>
    <section class="my-3"></section>
    <section class="my-3"></section>
    <section class="my-3"></section>

    <!-- dome -->
    <section class="my-3">
        <div>
    
            <div class="text-center mt-5">
                <!-- La classe "text-center" allinea il testo al centro -->
                <h2>Article and Tips</h2>
                <h3>Latest From The Blog</h3>
            </div>

        </div>

        <div class="container">
  

            <div class="row">
            <!-- Utilizza una row Bootstrap per organizzare le card -->

                <div class="col-md-4">
                <!-- La classe "col-md-4" indica che la colonna occupa 4 unità su 12 su schermi di dimensioni medie e superiori -->
                    <div class="card">
                        <!-- Aggiungi la classe "card" per creare una card Bootstrap -->

                        <img src="" class="card-img-top" alt="Immagine 1">
                        <!-- La classe "card-img-top" allinea l'immagine nella parte superiore della card -->

                        <div class="card-body">
                        <!-- Aggiungi la classe "card-body" per il corpo della card -->

                        <p class="card-text">Contenuto Card 1</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                <!-- La classe "col-md-8" indica che la colonna occupa 8 unità su 12 su schermi di dimensioni medie e superiori -->
                    <div class="card">
                        <!-- Aggiungi la classe "card" per creare una card Bootstrap -->

                        <img src="" class="card-img-top" alt="Immagine 2">
                        <!-- La classe "card-img-top" allinea l'immagine nella parte superiore della card -->

                        <div class="card-body">
                        <!-- Aggiungi la classe "card-body" per il corpo della card -->

                        <p class="card-text">Contenuto Card Centrale</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                <!-- La classe "col-md-4" indica che la colonna occupa 4 unità su 12 su schermi di dimensioni medie e superiori -->
                    <div class="card">
                        <!-- Aggiungi la classe "card" per creare una card Bootstrap -->

                        <img src="" class="card-img-top" alt="Immagine 3">
                        <!-- La classe "card-img-top" allinea l'immagine nella parte superiore della card -->

                        <div class="card-body">
                        <!-- Aggiungi la classe "card-body" per il corpo della card -->

                        <p class="card-text">Contenuto Card 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section></section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

// STILI ALE

// STILI LUCA
.my,
.container {
    border: 1px solid black;
}

.l,
.col-4 {
    border: 1px solid black;
}

// STILI DOME

</style>
