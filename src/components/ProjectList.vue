<script>
import AppPagination from './AppPagination.vue';
import ProjectCard from './ProjectCard.vue';
import { store } from "../assets/data/store";
export default {
    components: { ProjectCard },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class=" col-3 mt-5" v-for=" project in store.projects" :key="project.id">
                <ProjectCard class="h-100" :project="project" />
            </div>
        </div>
    </div>
</template>
<style scoped></style>