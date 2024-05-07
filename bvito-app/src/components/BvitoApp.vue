<script>
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";
export default {
  data() {
    return {
      products: [],
      product: {},
      isMine: false,
      sort: null,
      title: '',
      titleSearch: '',
      category: '',
      categorySearch: '',
      description: '',
      price: '',
      image: '',
      asNew: false,
      error: false,
      success: false,
      isEdit: false
    };
  },
  methods: {
    async loadProducts() {
      let response = await axios.get('/products', {
        params: {
          sort: this.sort,
          title: this.titleSearch,
          category: this.categorySearch
        }
      });
      this.products = response.data;
      this.isMine = false;
      this.isEdit = false;

    },
    async loadProduct(id) {
      let response = await axios.get('/product', {
        params: {
          id: id
        }
      });
      this.product = response.data;
      this.isEdit = true;
      
    },
    async myProducts() {
      let response = await axios.get('/products/my');
      this.products = response.data;
      this.isMine = true;
      this.isEdit = false;
    },
    async removeProduct(id) {
      await axios.delete('/products', {
        params: {
          id: id
        }
      })
      this.myProducts();
    },
    async createProduct() {
      try {
        await axios.post('/products', {
          title: this.title,
          category: this.category,
          description: this.description,
          price: this.price,
          image: this.image,
          asNew: this.asNew
        });
        this.success = true;
        this.error = false;
        this.myProducts();
      } catch (err) {
        this.success = false;
        this.error = true;
      }
    },
    async editProduct(id) {
      await axios.put('/products', {
          id: id,
          title: this.product.title,
          category: this.product.category,
          description: this.product.description,
          price: this.product.price,
          image: this.product.image,
          asNew: this.product.asNew
        });
        this.isEdit = false;
        this.myProducts();
    }
  },
  mounted() {
    this.loadProducts()
  }
};
</script>

<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Bvito</span>
      </a>

      <div>
        <a class="btn btn-outline-dark" @click="myProducts" v-if="!isMine">Мои объявления</a>
        <a class="btn btn-outline-dark" @click="loadProducts" v-if="isMine">Все объявления</a>
      </div>
    </header>
  </div>

  <main>
    <div class="container products-container">
      <div class="row g-3 products-row">

        <!-- Форма поиска  -->
        <div class="col-4" v-if="!isMine && !isEdit">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Поиск
              </h5>

              <form @submit.prevent="loadProducts">
                <!-- Название  -->
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Что ищете?" v-model="titleSearch">
                </div>

                <!-- Категория  -->
                <select class="form-select" v-model="categorySearch">
                  <option value="">Без категории</option>
                  <option value="Одежда">Одежда</option>
                  <option value="Для дома">Для дома</option>
                  <option value="Техника">Техника</option>
                </select>

                <!-- Сортировка по цене  -->
                <div class="my-3 d-flex justify-content-between align-items-center">
                  <div>Цена: </div>

                  <div>
                    <!-- стрелка вверх -->
                    <input value="1" type="radio" class="btn-check" id="sort-up" autocomplete="off" v-model="sort">
                    <label class="btn btn-outline-secondary m-1" for="sort-up">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                      </svg>
                    </label>

                    <!-- стрелка вниз -->
                    <input value="-1" type="radio" class="btn-check" id="sort-down" autocomplete="off" v-model="sort">
                    <label class="btn btn-outline-secondary m-1" for="sort-down">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                      </svg>
                    </label>
                  </div>

                </div>

                <!-- Кнопка Найти -->
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary">Найти</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Форма создания -->
        <div class="col-4" v-if="isMine && !isEdit">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Новое объявление
              </h5>

              <form @submit.prevent="createProduct">
                <!-- Название-->
                <div class="mb-3">
                  <input v-model="title" type="text" class="form-control" placeholder="Название товара">
                </div>

                <!-- Категория -->
                <select v-model="category" class="form-select mb-3">
                  <option value="Одежда">Одежда</option>
                  <option value="Для дома">Для дома</option>
                  <option value="Техника">Техника</option>
                </select>

                <!-- Описание -->
                <div class="mb-3">
                  <textarea v-model="description" class="form-control" placeholder="Описание"></textarea>
                </div>


                <!-- Цена -->
                <div class="mb-3">
                  <input v-model="price" type="number" class="form-control" placeholder="Цена">
                </div>


                <!-- Изображение -->
                <div class="mb-3">
                  <input v-model="image" type="url" class="form-control" placeholder="Ссылка на изображение">
                </div>
                <!-- БУ  -->
                <div class="form-check mb-3">
                  <input v-model="asNew" class="form-check-input" type="checkbox" id="asNew">
                  <label class="form-check-label" for="asNew">
                    Как новенький
                  </label>
                </div>
                <!-- Кнопка Опубликовать -->
                <div class="d-flex justify-content-end mb-3">
                  <button class="btn btn-primary">Опубликовать</button>
                </div>


                <!-- Сообщения -->

                <div class="alert alert-danger" v-if="error">Произошла ошибка, попробуйте ещё раз</div>


                <div class="alert alert-primary" v-if="success">Объявление добавлено</div>

              </form>
            </div>
          </div>
        </div>


        <!-- Список товаров  -->
        <div class="col-8 products-list" v-if="!isEdit">
          <div class="card mb-3" v-for="product in products">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="product.image">
              </div>
              <div class="col-md-8">
                <div class="card-body">

                  <h5 class="card-title">
                    <div>{{ product.title }}</div>
                    <div v-if="isMine">
                      <a @click="loadProduct(product._id)" class="btn btn-primary m-1">Изменить</a>
                      <a @click="removeProduct(product._id)" class="btn btn-secondary m-1">Удалить</a>

                    </div>
                  </h5>

                  <div class="text-muted">
                    {{ product.category }}: {{ product.price }} руб
                    
                  </div>
                  <span class="badge rounded-pill text-bg-primary" v-if="product.asNew">Как новенький</span>
                  <h6 class="card-subtitle my-2 text-muted">{{ product.description }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Редактирование  -->
        <div class="col-12 products-list" v-if="isEdit">

          <div class="product card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <!-- ИЗОБРАЖЕНИЕ ТОВАРА -->
                <img :src="product.image">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    Редактор объявления
                  </h5>
                  <!-- ФОРМА РЕДАКТИРОВАНИЯ - НОВОЕ -->
                  <form @submit.prevent="editProduct(product._id)">
                    <!-- Название  -->
                    <div class="mb-3">
                      <input type="text" class="form-control" placeholder="Название" v-model="product.title">
                    </div>

                    <!-- Категория  -->
                    <select class="form-select mb-3" v-model="product.category">
                      <option value="Одежда">Одежда</option>
                      <option value="Для дома">Для дома</option>
                      <option value="Техника">Техника</option>
                    </select>

                    <!-- Описание  -->
                    <div class="mb-3">
                      <textarea class="form-control" placeholder="Описание" v-model="product.description"></textarea>
                    </div>


                    <!-- Цена  -->
                    <div class="mb-3">
                      <input type="number" class="form-control" placeholder="Цена" v-model="product.price">
                    </div>

                    <!-- Изображение -->
                    <div class="mb-3">
                      <input type="text" class="form-control" placeholder="Ссылка на изображение" v-model="product.image">
                    </div>

                    <!-- БУ -->
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" id="asNew" v-model="product.asNew">
                      <label class="form-check-label" for="asNew">
                        Как новенький
                      </label>
                    </div>

                    <!-- Кнопка Опубликовать -->
                    <div class="d-flex justify-content-end mb-3">
                      <button type="submit" class="btn btn-primary">Сохранить</button>
                    </div>

                    <!-- Сообщения  -->
                    <!-- <div class="alert alert-danger">Произошла ошибка, попробуйте ещё раз </div> 
                    <div class="alert alert-primary">Объявление изменено </div> -->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.card-link {
  cursor: pointer;
}

body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex: 1;
  overflow: hidden;
}

.products-container,
.products-row,
.products-list {
  height: 100%;
}

.products-list {
  overflow: auto;
}

.btn-check:checked+.btn {
  outline: 4px solid lightgreen;
  background-color: transparent;
  color: gray;
}

.card img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}


.card {
  overflow: hidden;
}

.product-header {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product-title {
  flex: 1;
}

.product-controls {
  flex-shrink: 0;
}
</style>