<script>
import MainNavbar from "../components/MainNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
    components: {
        MainNavbar,
        TheFooter,
    },
    data() {
        return {};
    },
};
</script>

<template>
    <main-navbar></main-navbar>
    <main>
        <div class="background-house">
            <section class="house container">
                <div class="house-body">
                    <h2 class="house-body-title">
                        Not only people<br />need a house
                    </h2>
                    <p class="house-body-text">
                        We offer to give a chance to a little and nice puppy
                        with an extremely wide and open heart. He or she will
                        love you more than anybody else in the world, you will
                        see!
                    </p>
                    <a href="#friends" class="house-body-btn btn">
                        Make a friend
                    </a>
                </div>
                <img
                    src="../assets/images/start/puppy.png"
                    width="698"
                    height="728"
                    alt="dog"
                    loading="lazy"
                />
            </section>
        </div>
        <section class="about container">
            <img
                class="about-image"
                src="../assets/images/about/pets.png"
                width="300"
                height="408"
                alt="pets"
                loading="lazy"
            />
            <div class="about-body">
                <h2 class="about-title">
                    About the shelter <br />
                    “Cozy House”
                </h2>
                <p class="about-text">
                    Currently we have 121 dogs and 342 cats on our hands and
                    statistics show that only 20% of them will find a family.
                    The others will continue to live with us and will be waiting
                    for a lucky chance to become dearly loved.
                </p>
                <p class="about-text">
                    We feed our wards with the best food and make sure that they
                    do not get sick, feel comfortable (including
                    psychologically) and well. We are supported by 87 volunteers
                    and 28 employees of various skill levels. About 12% of the
                    animals are taken by the shelter staff. Taking care of the
                    animals, they become attached to the pets and would hardly
                    ever leave them alone.
                </p>
            </div>
        </section>
        <div class="background-section">
            <section class="friends container">
                <h2 id="friends" class="friends-title">
                    Our friends who <br />
                    are looking for a house
                </h2>
                <div class="friends-slider">
                    <button class="friends-slider-controls btn"></button>
                    <ul class="friends-list">
                        <li class="friends-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/slider/katrine.png"
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
                        <li class="friends-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/slider/jennifer.png"
                                width="270"
                                height="270"
                                alt="Jennifer"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Jennifer</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                        <li class="friends-item">
                            <img
                                class="friends-card-image"
                                src="../assets/images/slider/woody.png"
                                width="270"
                                height="270"
                                alt="Woody"
                                loading="lazy"
                            />
                            <h3 class="friends-card-title">Woody</h3>
                            <button class="friends-card-btn btn">
                                Learn more
                            </button>
                        </li>
                    </ul>
                    <button class="friends-slider-controls btn"></button>
                </div>
                <router-link to="pets" class="friends-btn btn">
                    Get to know the rest
                </router-link>
            </section>
        </div>
        <section id="help" class="help container">
            <h2 class="help-title">
                How you can help <br />
                our shelter
            </h2>
            <ul class="help-list">
                <li class="help-item">
                    <img
                        src="../assets/images/help/food.svg"
                        width="48"
                        height="60"
                        alt="pet food"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Pet food</h3>
                </li>
                <li class="help-item">
                    <img
                        src="../assets/images/help/transportation.svg"
                        width="61"
                        height="60"
                        alt="transportation"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Transportation</h3>
                </li>
                <li class="help-item">
                    <img
                        src="../assets/images/help/toys.svg"
                        width="60"
                        height="60"
                        alt="toys"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Toys</h3>
                </li>
                <li class="help-item">
                    <img
                        src="../assets/images/help/bowls-and-cups.svg"
                        width="60"
                        height="57"
                        alt="bowls and cups"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Bowls and cups</h3>
                </li>
                <li class="help-item">
                    <img
                        src="../assets/images/help/shampoos.svg"
                        width="32"
                        height="60"
                        alt="shampoos"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Shampoos</h3>
                </li>
                <li class="help-item">
                    <img
                        src="../assets/images/help/vitamins.svg"
                        width="60"
                        height="55"
                        alt="vitamins"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Vitamins</h3>
                </li>
                <li class="help-item">
                    <img
                        src="../assets/images/help/medicines.svg"
                        width="60"
                        height="60"
                        alt="medicines"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Medicines</h3>
                </li>
                <li class="help-item">
                    <img
                        src="../assets/images/help/collars-or-leashes.svg"
                        width="60"
                        height="53"
                        alt="collars or leashes"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Collars / leashes</h3>
                </li>
                <li class="help-item">
                    <img
                        src="../assets/images/help/sleeping-area.svg"
                        width="57"
                        height="60"
                        alt="pet food"
                        loading="lazy"
                    />
                    <h3 class="help-item-title">Sleeping areas</h3>
                </li>
            </ul>
        </section>
        <div class="background-section">
            <section class="donation container">
                <img
                    src="../assets/images/donation/donation-dog.png"
                    alt="dog"
                />
                <div class="donation-body">
                    <h2 class="donation-body-title">
                        You can also<br />make a donation
                    </h2>
                    <p class="donation-body-text">
                        Name of the bank&nbsp;/&nbsp;Type of bank account
                    </p>
                    <div class="donation-body-card">
                        <a href="#" class="donation-link"
                            >8380 2880 8028 8791 7435</a
                        >
                    </div>
                    <p class="donation-body-info">
                        Legal information and lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Maecenas a ipsum at libero
                        sagittis dignissim sed ac diam. Praesent ultrices
                        maximus tortor et vulputate. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus.
                    </p>
                </div>
            </section>
        </div>
    </main>
    <the-footer></the-footer>
</template>

<style></style>
