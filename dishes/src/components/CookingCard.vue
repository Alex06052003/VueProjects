<script>
import axios from 'axios';

export default {
    props: {
        cooking: Object
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="card card-main" style="width: 18rem;">
        <img :src="cooking.image" class="card-img-top" alt="...">
        <div class="card-body d-flex">
            <h5 class="card-title">{{ cooking.title }}</h5>
            <span class="badge text-bg-success" v-if="cooking.isCooked">Готово</span>
            <p>Осталось времени: {{ cooking.preparingTime }}/{{ cooking.timeToCook }}мин.</p>
        </div>
    </div>
</template>

<style scoped>
    .card-main {
        min-height: 450px;
        margin-bottom: 50px;
    }

    .card-body {
        flex-direction: column;
        justify-content: space-between;
    }

    .text-bg-success {
        font-size: 16px;
    }
</style>