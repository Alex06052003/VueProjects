<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";
export default {
    props: {
        id: { type: Number, required: true },
    },
    components: {
        ExperienceCard,
        GoBack
    },
    computed: {
        destination() {
            return sourceData.destinations.find(
                (destination) => destination.id === this.id
            );
        },
    },
};
</script>

<template>
    <section class="destination">
        <h1>{{ destination.name }}</h1>
        <go-back/>
        <div class="destination-details">
            <img
                :src="`/images/${destination.image}`"
                :alt="destination.name"
            />
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top Experiences in {{ destination.name }}</h2>
        <div class="cards">
            <router-link
                v-for="experience in destination.experiences"
                :key="experience.slug"
                :to="{
                    name: 'experience.show',
                    params: { experienceSlug: experience.slug },
                }"
            >
                <experience-card :experience="experience" />
            </router-link>
        </div>
        <router-view />
    </section>
</template>

<style scoped></style>
