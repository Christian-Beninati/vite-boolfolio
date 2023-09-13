<script>
import axios from "axios";
import ProjectList from '../../components/ProjectList.vue';
const baseUri = "http://127.0.0.1:8000/api/types/"
import { store } from '../data/store';
export default {
    components: { ProjectList },
    data() {
        return {
            type: [],
            store
        }
    },
    methods: {
        fetchProject() {
            const endpoint = baseUri + this.$route.params.id + "/projects"
            axios.get(endpoint).then(res => {
                this.type = res.data.type
                store["projects"] = res.data.projects
            }).catch(err => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchProject()
    }
};
</script>

<template>
    <!-- Main -->
    <main>
        <div class="container">
            <h1 class="mt-3">{{ type.label }}</h1>
            <ProjectList />
        </div>
    </main>
</template>

<style scoped></style>