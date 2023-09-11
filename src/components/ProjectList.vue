<script>
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
            <div class="col-3" v-for="project in store.projects">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>
<style></style>