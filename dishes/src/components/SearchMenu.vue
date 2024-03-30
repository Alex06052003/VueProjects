<script>
import axios from 'axios';

export default {
    props: {
        dishes: Array
    },
    data() {
        return {
            title: ``,
            preparation: ``,
            image: ``,
            timeToCook: 0,
            search: ``,
            requests: []
        }
    },
    mounted() {

    },
    methods: {
        searchDish() {
            for (let i = 0; i < this.dishes.length; i++) {
                if (this.dishes[i].title.includes(this.search)) {
                    this.requests.push(this.dishes[i]);
                }
            }
        },
        async addDish() {
            let response = await axios.post('/dishes', {
                title: this.title,
                preparation: this.preparation,
                time: this.timeToCook,
                image: this.image
            });
            this.dishes.push(response.data);
        },
        clearInputs() {
            this.title = ``;
            this.preparation = ``;
            this.image = ``;
            this.timeToCook = 0;
        },
        clearSearch() {
            this.search = ``;
            this.requests = [];
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary search-menu">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Cook&#129385;</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить
                            рецепт</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Секции
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#dishes">Рецепты</a></li>
                            <li><a class="dropdown-item" href="#cooking">Готовится</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Название" aria-label="Search"
                        v-model="search">
                    <button class="btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#searchDish" @click="searchDish">Поиск</button>
                </form>
            </div>
        </div>
    </nav>

    <!--ADD NEW DISH-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Добавьте свой рецепт</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="clearInputs"></button>
                </div>
                <form @submit.prevent="addDish">
                    <div class="modal-body">
                        <div class="input-group mb-3">
                            <span class="input-group-text">&#129379;</span>
                            <input type="text" class="form-control" placeholder="Название" aria-label="Username"
                                v-model="title">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">&#128270;</span>
                            <input type="text" class="form-control" placeholder="Ссылка на картинку" v-model="image">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">&#9200;</span>
                            <input type="number" class="form-control" placeholder="Время готовки" v-model="timeToCook">
                        </div>
                        <div class="input-group">
                            <span class="input-group-text">&#128196;</span>
                            <textarea class="form-control" placeholder="Рецепт" aria-label="With textarea"
                                v-model="preparation"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="clearInputs">Закрыть</button>
                        <button type="submit" class="btn btn-primary">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!--SEARCH DISH-->
    <div class="modal fade" id="searchDish" tabindex="-1" aria-labelledby="searchDishLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="searchDishLabel">Результаты поиска</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="clearSearch"></button>
                </div>
                <div class="modal-body">
                    <p>По вашему запросу найдено {{ requests.length }} результатов.</p>
                    <p v-for="(dish, index) in requests">{{ index + 1 }}. Блюдо: {{ dish.title }}. Рецепт: {{ dish.preparation }}. Время готовки: {{ dish.timeToCook }} мин.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="clearSearch">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.search-menu {
    margin-bottom: 30px;
}
</style>