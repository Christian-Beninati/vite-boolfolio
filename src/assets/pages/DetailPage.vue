<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';
import { router } from '../router';
const baseUri = "http://127.0.0.1:8000/api/projects/"
export default {
    components: { ProjectCard },
    data() {
        return {
            project: [],
        }
    },
    methods: {
        getProject() {
            const endpoint = baseUri + this.$route.params.id
            axios.get(endpoint).then(res => {
                this.project = res.data
            }).catch(err => {
                console.error(err);
            })
        }
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-3 pt-5">
                <ProjectCard class="h-100" :project="project" :isDetail="true" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>