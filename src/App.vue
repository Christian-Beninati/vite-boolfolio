<script >
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
const endpoint = "http://127.0.0.1:8000/api/projects";
export default {
  components: { AppHeader },
  data() {
    return {
      projects: [],
      links: [],
    }
  },
  methods: {
    fetchProject() {
      axios.get(endpoint).then(res => {
        this.projects = res.data.data;
        this.links = res.data.links;
      })
    }
  },
  mounted() {
    this.fetchProject()
  }
}
</script>

<template>
  <AppHeader />
  <main class="container my-3">
    <ul>
      <li v-for="project in projects">{{ project.title }}</li>
    </ul>
  </main>
</template>

<style ></style>