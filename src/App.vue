<script >
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/ProjectList.vue';
import AppPagination from './components/AppPagination.vue';

import { store } from "./assets/data/store";
export default {
  components: { AppHeader, ProjectList, AppPagination },
  data() {
    return {
      store,
    }
  },
  methods: {
    fetchProject(endpoint = "http://127.0.0.1:8000/api/projects") {
      axios.get(endpoint).then(res => {
        store["projects"] = res.data.data;
        store["links"] = res.data.links;
      })
    }
  },
  mounted() {
    this.fetchProject()
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />
  <!-- Main -->
  <main class="container my-3">
    <ProjectList />
  </main>
  <div class="container mt-5">
    <AppPagination @change-page="fetchProject" />
  </div>
</template>

<style ></style>