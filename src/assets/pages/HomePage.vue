<script>
import axios from "axios";
import ProjectList from '../../components/ProjectList.vue';
import AppPagination from '../../components/AppPagination.vue';
import { store } from '../data/store';
export default {
    components: { ProjectList, AppPagination },
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
            }).catch(err => {
                console.error(err);
            })
        }
    },
    mounted() {
        this.fetchProject()
    }
};
</script>

<template>
    <!-- Main -->
    <main>
        <ProjectList />
    </main>
    <div class="container mt-5">
        <AppPagination @change-page="fetchProject" />
    </div>
</template>

<style scoped></style>