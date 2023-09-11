<script >
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/ProjectList.vue';
import { store } from "./assets/data/store"
const endpoint = "http://127.0.0.1:8000/api/projects";
export default {
  components: { AppHeader, ProjectList },
  data() {
    return {
      store,
    }
  },
  methods: {
    fetchProject() {
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
</template>

<style ></style>