<script>
import axios from 'axios';

export default {
    props: {
        dishe: Object
    },
    data() {
        return {

        }
    },
    methods: {
        async cookingDish(id) {
            let respone = await axios.post('/cooking/cook', {
                id: id
            });
        }
    }
}
</script>

<template>
    <div class="card card-main" style="width: 18rem;">
        <img :src="dishe.image" class="card-img-top" alt="...">
        <div class="card-body d-flex">
            <h5 class="card-title">{{ dishe.title }}</h5>
            <div class="collapse" :id="dishe.id">
                <div class="card card-body">
                    {{ dishe.preparation }}
                </div>
            </div>
            <div class="d-flex buttons">
                <form @submit.prevent="cookingDish(dishe.id)">
                    <button type="submit" class="btn btn-primary">Приготовить</button>
                </form>
                <a class="btn btn-primary" data-bs-toggle="collapse" :href="'#' + dishe.id" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                    Рецепт
                </a>
            </div>
        </div>
    </div>
</template>

<style>
    .card-main {
        min-height: 430px;
        margin-bottom: 20px;
    }

    .card-body {
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }

    .buttons {
        margin-top: 10px;
        gap: 10px;
        justify-content: space-around;
    }
</style>