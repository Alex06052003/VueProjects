<script>
import { RouterLink, RouterView } from "vue-router";
import MainView from "./views/MainView.vue";
export default {
    components: {
        MainView,
    },
    data() {
        return {};
    },
};
</script>

<template>
  <router-view></router-view>
  <!-- <main-view></main-view> -->
</template>

<style scoped></style>
