<script>
import axios from 'axios';
import DishCard from './components/DishCard.vue';
import SearchMenu from './components/SearchMenu.vue';
import CookingCard from './components/CookingCard.vue';
axios.defaults.baseURL = 'http://localhost:3005/';
// Код компонента
export default {
	components: {
		DishCard,
		SearchMenu,
		CookingCard
	},
	data() {
		return {
			dishes: [],
			cookings: [],
			dishLen: 4,
			cookLen: 0
		};
	},

	mounted() {
		this.loadDishes();
		this.loadCooking();
		setInterval(() => {
			this.loadCooking();
		}, 1000);
	},

	methods: {
		async loadDishes() {
			let response = await axios.get('/dishes');
			this.dishes = response.data;
		},
		async loadCooking() {
			let response = await axios.get('/cooking');
			this.cookings = response.data;
		},
	},
	computed: {
		counterDish() {
			this.dishLen = this.dishes.length;
			return this.dishLen;
		},
		counterCook() {
			this.cookLen = this.cookings.length;
			return this.cookLen;
		}
	}
};
</script>

<template>
	<div class="container">
		<search-menu :dishes></search-menu>
		<h2 class="mb-3" id="dishes">Рецептов всего {{ counterDish }}</h2>
		<div class="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 justify-content-center">
			<div class="col col-lg-4 col-md-6 col-sm-12" v-for="(dishe, index) in dishes">
				<dish-card :dishe></dish-card>
			</div>
		</div>
		<h2 class="mb-3" id="cooking">Готовится всего {{ counterCook }}</h2>
		<div class="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 justify-content-center">
			<div class="col col-lg-4 col-md-6 col-sm-12" v-for="(cooking, index) in cookings">
				<cooking-card :cooking></cooking-card>
			</div>
		</div>
	</div>
</template>

<style>
* {
	padding: 0;
	margin: 0;
}
</style>
