<script>
import OurPetsNavbar from "../components/OurPetsNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
    components: {
        OurPetsNavbar,
        TheFooter,
    },
    data() {
        return {};
    },
};</script>

<template>
    <our-pets-navbar></our-pets-navbar>
    <main>
        <div class="background-section">
            <section class="pets container">
                <div class="pets-carousel">
                    <h2 class="pets-title">
                        Our friends who <br />are looking for a house
                    </h2>
                    <ul class="pets-list">
                        <li class="pets-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/pets/pets-katrine-2.png"
                                width="270"
                                height="270"
                                alt="Katrine"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Katrine</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                        <li class="pets-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/pets/pets-jennifer.png"
                                width="270"
                                height="270"
                                alt="Katrine"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Jennifer</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                        <li class="pets-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/pets/pets-woody.png"
                                width="270"
                                height="270"
                                alt="Katrine"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Woody</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                        <li class="pets-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/pets/pets-katrine-1.png"
                                width="270"
                                height="270"
                                alt="Katrine"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Sophia</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                        <li class="pets-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/pets/pets-timmy.png"
                                width="270"
                                height="270"
                                alt="Katrine"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Timmy</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                        <li class="pets-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/pets/pets-charly.png"
                                width="270"
                                height="270"
                                alt="Katrine"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Charly</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                        <li class="pets-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/pets/pets-scarlet.png"
                                width="270"
                                height="270"
                                alt="Katrine"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Scarlett</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                        <li class="pets-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/pets/pets-katrine.png"
                                width="270"
                                height="270"
                                alt="Katrine"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Freddie</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                    </ul>
                    <div class="carousel-controls">
                        <button
                            class="friends-slider-controls btn is-inactive new"
                        >
                            &lt;&lt;
                        </button>
                        <button
                            class="friends-slider-controls btn is-inactive new"
                        >
                            &lt;
                        </button>
                        <button class="friends-slider-controls btn new">
                            1
                        </button>
                        <button class="friends-slider-controls btn new">
                            &gt;
                        </button>
                        <button class="friends-slider-controls btn new">
                            &gt;&gt;
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <the-footer></the-footer>
</template>

<style></style>
