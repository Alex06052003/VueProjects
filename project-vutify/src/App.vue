<script>
  import ToDoListTemplate from './components/ToDoListTemplate.vue';
  export default {
    components: {
      ToDoListTemplate
    }
  }
</script>

<template>
  <v-app class="main-app">
    <v-main>
      <to-do-list-template></to-do-list-template>
    </v-main>
  </v-app>
</template>

<style scoped>
  .main-app {
    background-color: #e4e4e4;
  }

  .v-container {
    margin: auto;
  }
</style>