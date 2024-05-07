<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
import dayjs from "dayjs";
export default {
  data() {
    return {
      grades: [],
      subject: "",
      mark: 5,
      filter_subject: "",
      filter_mark: "",
    };
  },

  methods: {
    async loadGrades() {
      let response = await axios.get('/grades', {
        params: {
          subject: this.filter_subject,
          mark: this.filter_mark
        }
      });
      this.grades = response.data;
    },

    async removeGrade(id) {
      await axios.delete('/grades', {
        params: {
          id: id
        }
      });
      this.loadGrades();
    },
    async createGrades() {
      await axios.post('/grades', {
        subject: this.subject,
        mark: this.mark
      });
      this.subject = '';
      this.mark = '';
      this.loadGrades();
    },
    async editGrade(id, mark) {
      await axios.put('/grades', {
        id: id,
        mark: mark
      });
    },
    gradesDate(data) {
      return dayjs(data).format('DD/MM/YYYY');
    }
  },
  mounted() {
    this.loadGrades();
  }
};
</script>

<template>
  <!-- Просто шапка -->
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="diary" data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg" class="icon line-color">
            <path id="primary" d="M18,18v2a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H15"
              style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;">
            </path>
            <path id="secondary"
              d="M7,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H7ZM20.71,7.69l-1.4-1.4a1,1,0,0,0-1.4,0L13,11.2V14h2.8l4.91-4.91A1,1,0,0,0,20.71,7.69Z"
              style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;">
            </path>
          </svg>
          Мой личный дневник
        </a>
      </div>
    </nav>
  </header>
  <!-- Конец шапки -->

  <!-- Блок с оценками -->
  <main class="container mt-5">
    <h2>Мои оценки</h2>
    <ul class="list-group">

      <!-- Форма создания -->
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <form class="create row g-3" @submit.prevent="createGrades">
          <div class="col">
            <input type="text" class="form-control" placeholder="Предмет" v-model="subject">
          </div>
          <div class="col">
            <select class="form-select" v-model="mark">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-success">Добавить</button>
          </div>
        </form>
      </li>
      <!-- Конец формы создания -->
      <!-- Форма фильтрации -->
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <form class="filter row row-cols-3 g-3" @submit.prevent="loadGrades">
          <div class="col">
            <div class="col">
              <input type="text" class="form-control" placeholder="Предмет" v-model="filter_subject">
            </div>
          </div>
          <div class="col">
            <select class="form-select" v-model="filter_mark">
              <option value="">Все оценки</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div class="col">
            <button @click="" type="submit" class="btn btn-primary">Найти</button>
          </div>
        </form>
      </li>
      <!-- Конец формы фильтрации -->

      <!-- Вывод оценок -->
      <li v-for="grade in grades" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button class="btn btn-danger me-4" @click="removeGrade(grade._id)">X</button>
          <b>{{ grade.subject }}</b>
          <i> - {{ gradesDate(grade.createdAt) }}</i>
        </div>
        <div>
          <input @change="editGrade(grade._id, grade.mark)" type="number" min="1" max="5" maxlength="1" :class="[{
          'text-bg-success': grade.mark > 3,
          'text-bg-warning': grade.mark == 3,
          'text-bg-danger': grade.mark == 2 || grade.mark == 1
        }, 'mark text-bg-primary rounded-pill']" value="5" v-model="grade.mark">
        </div>
      </li>

    </ul>
  </main>

</template>

<style>
.navbar {
  background-color: #ffd000;
}

main {
  flex: 1;
  overflow: hidden;
}

.mark {
  width: 60px;
  padding-left: 20px;
  text-align: center;
  border: 1px solid gray;
}

.filter,
.create {
  width: 500px
}
</style>