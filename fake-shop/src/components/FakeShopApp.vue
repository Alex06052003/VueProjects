<script>
import axios from "axios"
import { get } from "mongoose";
axios.defaults.baseURL = "http://localhost:3000";

export default {
  data() {
    return {
      products: [],
      product: null,
      category: ``
    };
  },
  methods: {
    async loadProducts(category) {
      if (category != `all`) {
        let response = await axios.get('/category', {
          params: {
            name: category
          }
        });
        this.products = response.data;
      } else {
        let response = await axios.get('/products');
        this.products = response.data;
      }
      this.product = null;
      this.category = category;
    },
    async loadDiscount() {
      let response = await axios.get('/discount');
      this.products = response.data;
      this.product = null;
    },
    async getProducts(id) {
      let response = await axios.get(`/product`, {
        params: {
          id: id
        }
      });
      this.product = response.data;
    },
    async loadSorted(sort) {
      let response = await axios.get(`/sort`, {
        params: {
          sort: sort,
          name: this.category
        }
      });
      this.products = response.data;
    }
  },
  mounted() {
    this.loadProducts(`all`)
  }
};
</script>

<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">FakeShop</span>
      </a>

      <nav>
        <ul class="pagination justify-content-center mb-0 me-2">

          <li class="page-item"><a class="page-link" @click="loadSorted(`down`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
              </svg>
            </a></li>
          <li class="page-item"><a class="page-link" @click="loadSorted(`up`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
              </svg>
            </a></li>

        </ul>
      </nav>

      <a class="btn btn-primary me-2" @click="loadDiscount">Супер-цена</a>

      <nav>
        <ul class="pagination justify-content-center mb-0">
          <li class="page-item"><a class="page-link" @click="loadProducts(`all`)">Все</a></li>
          <li class="page-item"><a class="page-link" @click="loadProducts(`clothes`)">Clothes</a></li>
          <li class="page-item"><a class="page-link" @click="loadProducts(`home`)">Home</a></li>
          <li class="page-item"><a class="page-link" @click="loadProducts(`food`)">Food</a></li>
        </ul>
      </nav>
    </header>
  </div>

  <main>
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" v-if="!product">

        <div class="col" v-for="product in products">
          <!-- Добавь класс по категории -->
          <div class="card" :class="product.category">
            <div class="card-body">
              <a class="card-link" @click="getProducts(product._id)">
                <h5 class="card-title">{{ product.title }}</h5>
              </a>

              <h6 class="card-subtitle mb-2 text-muted">{{ product.description }}</h6>
            </div>
            <div class="card-footer text-muted d-flex justify-content-between">
              <div>
                {{ product.price }} руб.
              </div>
              <div>
                {{ product.likes }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="card text-center" v-if="product">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <a href="#" class="btn btn-primary">Buy {{ product.price }} rub</a>
        </div>
      </div>

    </div>
  </main>
</template>

<style>
a {
  cursor: pointer;
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}

.card-body {
  height: 200px;
  overflow-y: scroll;
}

.home {
  border-color: lightskyblue;
}

.clothes {
  border-color: pink;
}

.food {
  border-color: lightgreen;
}
</style>